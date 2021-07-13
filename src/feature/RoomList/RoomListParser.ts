import dayjs from "dayjs";
import { timeUtil, sortUtil } from "../../utils";
import { IMemberAPI, IChatListAPI, IChatAPI } from "../../types";

// NOTI:
// 기능: API 데이터 재 가공 -> reducer
// 목적: 데이터 구분, 로직 분리
export const roomListParser = (authUserId: string, chatData: IChatAPI[]) => {
  return chatData?.map((data: IChatAPI) => {
    const {
      room_id,
      room_name,
      room_img,
      room_members,
      chat_list,
      last_chat_time,
    } = data;

    const authUserLastVisitTime = room_members.find(
      (member: IMemberAPI) => member.id === authUserId
    )?.last_visit_time;

    const unReadChatLength = chat_list?.filter((item: IChatListAPI) => {
      if (authUserLastVisitTime) {
        return item.user.id !== authUserId && authUserLastVisitTime < item.time;
      }
      return false;
    })?.length;

    const checkLastChat = sortUtil.sortedOderValue(chat_list, "time", false);

    const targetTime = dayjs(last_chat_time);
    const diffDay = dayjs().diff(targetTime, "day") === 0;

    const viewLastChatTime = diffDay
      ? timeUtil.changeTimeFormatTo12(targetTime)
      : targetTime.format("YYYY년 M월 D일");

    return {
      roomId: room_id,
      roomName: room_name,
      roomImg: { url: room_img.avatar_url, isFriend: room_img.is_friend },
      unReadChatLength: unReadChatLength,
      lastChatData: checkLastChat[0]?.data || "",
      lastChatTime: viewLastChatTime,
    };
  });
};
