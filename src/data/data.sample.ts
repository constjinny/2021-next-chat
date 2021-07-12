import dayjs from "dayjs";

import avatar1 from "../../public/images/user1-avatar.png";
import avatar2 from "../../public/images/user2-avatar.png";
import avatar3 from "../../public/images/user3-avatar.png";

const LAST_VISIT = dayjs().subtract(48, "hour").valueOf();

const membersData = [
  {
    id: "roket",
    pw: "0000",
    nick_name: "홍로켓",
    avatar_url: avatar1,
  },
];

const chatData = {
  authUser: {
    id: "roket",
    nick_name: "홍로켓",
    avatar_url: avatar1,
  },
  friend: [
    { id: "user1", nick_name: "최예슬", avatar_url: "" },
    { id: "user2", nick_name: "김펀치", avatar_url: avatar2 },
    { id: "user3", nick_name: "이윤호", avatar_url: "" },
  ],
  chat: [
    {
      room_id: "chatRoom4359309",
      room_name: "최예슬",
      room_img: "",
      room_members: [
        { id: "roket", last_visit_time: LAST_VISIT },
        {
          id: "user1",
          last_visit_time: dayjs(LAST_VISIT).add(7250, "second").valueOf(),
        },
      ],
      chat_list: [
        {
          user: {
            id: "roket",
            nick_name: "홍로켓",
            profile_url: avatar1,
          },
          data: "안녕하세요. 최예슬님./n로켓펀치 담당자 홍로켓입니다./n/n지원해주신 UX디자이너 직무 서류전형에 합격하시어,/n다음 전형인 Interview가 진행 될 예정이며, Interview 가능 일정 하기 내용 참고하시어 공유부탁드립니다./n/n1. 면접 일시/n2016.12.00 오후 00시 00분/n상기일정 불가하실경우 일정 공유 부탁드립니다:)/n/n2. 면접 장소/n대한민국 서울특별시 금천구 가산동 327-30 로켓건물 3층/n/n이외 문의사항 있으시면 편히 말씀 부탁드립니다./n/n감사합니다.",
          time: dayjs(LAST_VISIT).subtract(28, "hour").valueOf(),
        },
        {
          user: {
            id: "user1",
            nick_name: "최예슬",
            profile_url: "",
          },
          data: "안녕하세요. 서류지원 합격한 최예슬입니다./n우선 좋은 소식 감사드립니다./n제안 주신일정에 면접이 가능하므로 그때 뵙겠습니다.ㄴ",
          time: dayjs(LAST_VISIT).subtract(28, "hour").valueOf(),
        },
      ],
      last_chat_time: dayjs().subtract(50, "second").valueOf(),
    },
  ],
};

const dummyData = { membersData, chatData };

export default dummyData;
