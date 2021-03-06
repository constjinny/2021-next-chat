import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import { isNull } from "lodash";
import { friendAPI } from "../../api/api.sample";
import sortUtil from "@utils/sort";
import timeUtil from "@utils/time";
import {
  IRoomMemberAPI,
  IRoomAPI,
  IChatListAPI,
  IUserAPI,
} from "@type/chatAPI";

// NOTI:
// 기능: API 데이터 재 가공 -> roomList reducer
// 목적: 데이터 구분, 로직 분리
export const roomListParser = (authUserId: string, chatDataAPI: IRoomAPI[]) => {
  const parsedChatData = chatDataAPI?.map((data: IRoomAPI) => {
    const { room_id, room_info, room_members, chat_list, last_chat_time } =
      data;
    const { name: roomName, img: roomImg, is_friend: isFriend } = room_info;

    const authUserLastVisitTime = room_members.find(
      (member: IRoomMemberAPI) => member.id === authUserId
    )?.last_visit_time;

    const unReadChatLength = chat_list?.filter((item: IChatListAPI) => {
      if (authUserLastVisitTime) {
        return item.user.id !== authUserId && authUserLastVisitTime < item.time;
      } else {
        return item;
      }
    })?.length;

    const checkLastChat = sortUtil.sortedOderValue(chat_list, "time", false);

    const targetTime = dayjs(last_chat_time);
    const diffDay = dayjs().diff(targetTime, "day") === 0;

    const viewLastChatTime = diffDay
      ? timeUtil.changeTimeFormatTo12(targetTime)
      : targetTime.format("YYYY년 M월 D일");

    return {
      roomId: room_id,
      roomName: roomName,
      roomImg: { url: roomImg, isFriend: isFriend },
      unReadChatLength: unReadChatLength,
      lastChatData: checkLastChat[0]?.data || "",
      lastChatTime: viewLastChatTime,
      time: last_chat_time,
    };
  });

  const sortChatData = sortUtil.sortedOderValue(parsedChatData, "time", false);

  return sortChatData;
};

dayjs.extend(weekday);

// NOTI:
// 기능: API 데이터 재 가공 -> room reducer
// 목적: 데이터 구분, 로직 분리
export const roomDataParser = (
  authUserId: string,
  currentRoomDataAPI: IRoomAPI
) => {
  const { room_id, room_info, room_members, chat_list } = currentRoomDataAPI;
  const {
    name: roomName,
    img: roomImg,
    is_friend: isFriend,
    job: roomJob,
  } = room_info;

  const parsedRoomData = chat_list.map((chat: IChatListAPI, index: number) => {
    const { user, time } = chat;
    const { id, nick_name: nickName, avatar_url: avatarUrl } = user;

    const isAuth = user.id === authUserId;
    const isFriend = isAuth ? false : friendAPI.findFriendId(user.id);

    const otherMembers = room_members.filter(
      (member: IRoomMemberAPI) => member.id !== user.id
    );

    const unReadLength = otherMembers.filter(
      (member: IRoomMemberAPI) =>
        isNull(member.last_visit_time) || member.last_visit_time < time
    )?.length;

    const dateToString = dayjs(time).format("YYYY년 M월 D일");
    const timeToString = timeUtil.changeTimeFormatTo12(dayjs(time));
    const prevChatTime = chat_list[index - 1]?.time;
    const nextChatTime = chat_list[index + 1]?.time;

    const checkDateGroup =
      prevChatTime &&
      dayjs(time).format("YYYYMMDD") === dayjs(prevChatTime).format("YYYYMMDD");
    const checkMinutsGroup =
      nextChatTime &&
      dayjs(time).format("YYYYMMDDHHmm") ===
        dayjs(nextChatTime).format("YYYYMMDDHHmm");

    return {
      ...chat,
      user: { id, nickName, avatarUrl },
      isAuth,
      isFriend,
      isDateGroup: checkDateGroup || false,
      isMinuteGroup: checkMinutsGroup || false,
      time,
      timeToString,
      dateToString,
      unReadLength,
    };
  });

  const sortRoomData = sortUtil.sortedOderValue(parsedRoomData, "time", true);

  return {
    roomInfo: {
      roomId: room_id,
      roomName,
      roomImg,
      isFriend,
      roomJob: roomJob ? roomJob : "정보 없음",
    },
    chatData: sortRoomData,
  };
};

export const friendDataParser = (
  friendDataAPI: IUserAPI[],
  chatDataAPI: IRoomAPI[]
) => {
  const parsed = friendDataAPI.map((friend: IUserAPI) => {
    const { id, nick_name: nickName } = friend;

    const findRoom =
      chatDataAPI?.filter((chatData: IRoomAPI) =>
        chatData.room_members.some(
          (member: IRoomMemberAPI) => member.id.indexOf(id) > -1
        )
      )?.length > 0;

    return { id, nickName, hasRoom: findRoom };
  });

  return parsed;
};
