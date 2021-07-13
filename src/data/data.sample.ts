import dayjs from "dayjs";

import avatar1 from "../../public/images/user1-avatar.png";
import avatar2 from "../../public/images/user2-avatar.png";
import avatar3 from "../../public/images/user3-avatar.png";

const LAST_VISIT = dayjs().subtract(48, "hour").valueOf();

const authUser = {
  id: "roket",
  nick_name: "홍로켓",
  avatar_url: avatar1,
};

const friends = [
  { id: "user1", nick_name: "최예슬", avatar_url: avatar2 },
  { id: "user2", nick_name: "김펀치", avatar_url: "" },
  { id: "user3", nick_name: "이윤호", avatar_url: "" },
];

const chat = [
  {
    room_id: "chatRoom4359309",
    room_info: {
      name: "최예슬",
      img: avatar2,
      job: "웹앱 UX 디자이너",
      is_friend: true,
    },
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
          avatar_url: avatar1,
        },
        data: "안녕하세요. 최예슬님.\n로켓펀치 담당자 홍로켓입니다.\n\n지원해주신 UX디자이너 직무 서류전형에 합격하시어,\n다음 전형인 Interview가 진행 될 예정이며, Interview 가능 일정 하기 내용 참고하시어 공유부탁드립니다.\n\n1. 면접 일시\n2016.12.00 오후 00시 00분\n상기일정 불가하실경우 일정 공유 부탁드립니다:)\n\n2. 면접 장소\n대한민국 서울특별시 금천구 가산동 327-30 로켓건물 3층\n\n이외 문의사항 있으시면 편히 말씀 부탁드립니다.\n\n감사합니다.",
        time: dayjs(LAST_VISIT).subtract(28, "hour").valueOf(),
      },
      {
        user: {
          id: "user1",
          nick_name: "최예슬",
          avatar_url: avatar2,
        },
        data: "안녕하세요. 서류지원 합격한 최예슬입니다.\n우선 좋은 소식 감사드립니다.\n제안 주신일정에 면접이 가능하므로 그때 뵙겠습니다.",
        time: dayjs(LAST_VISIT).subtract(1, "hour").valueOf(),
      },
    ],
    last_chat_time: dayjs().subtract(50, "second").valueOf(),
  },
  {
    room_id: "chatRoom4233",
    room_info: {
      name: "Shin Ye-Ji",
      img: avatar3,
      job: "웹앱 UX 디자이너",
      is_friend: false,
    },
    room_members: [
      { id: "roket", last_visit_time: null },
      {
        id: "user4",
        last_visit_time: dayjs(LAST_VISIT).add(7250, "second").valueOf(),
      },
    ],
    chat_list: [
      {
        user: {
          id: "user5",
          nick_name: "Shin Ye-Ji",
          avatar_url: avatar3,
        },
        data: "안녕하세요 서류지원 합격한 신예지입니다.",
        time: dayjs(LAST_VISIT).subtract(20, "hour").valueOf(),
      },
    ],
    last_chat_time: dayjs(LAST_VISIT).subtract(20, "hour").valueOf(),
  },
  {
    room_id: "chatRoom43",
    room_info: {
      name: "김펀치",
      img: "",
      job: "웹앱 UX 디자이너",
      is_friend: false,
    },
    room_members: [
      {
        id: "roket",
        last_visit_time: dayjs(LAST_VISIT).subtract(80, "hour").valueOf(),
      },
      {
        id: "user4",
        last_visit_time: null,
      },
    ],
    chat_list: [
      {
        user: {
          id: "roket",
          nick_name: "홍로켓",
          avatar_url: avatar1,
        },
        data: "안녕하세요. 펀치님.",
        time: dayjs(LAST_VISIT).subtract(81, "hour").valueOf(),
      },
      {
        user: {
          id: "roket",
          nick_name: "홍로켓",
          avatar_url: avatar1,
        },
        data: "디자이너 최예슬님을 소개 좀 부탁드리고 싶습니다.",
        time: dayjs(LAST_VISIT).subtract(80, "hour").valueOf(),
      },
    ],
    last_chat_time: dayjs(LAST_VISIT).subtract(80, "hour").valueOf(),
  },
  {
    room_id: "chatRoom4343545222",
    room_info: {
      name: "이윤호",
      img: "",
      job: "웹앱 UX 디자이너",
      is_friend: true,
    },
    room_members: [
      {
        id: "roket",
        last_visit_time: dayjs(LAST_VISIT).subtract(200, "hour").valueOf(),
      },
      {
        id: "user3",
        last_visit_time: dayjs(LAST_VISIT).add(7250, "second").valueOf(),
      },
    ],
    chat_list: [
      {
        user: {
          id: "roket",
          nick_name: "홍로켓",
          avatar_url: avatar1,
        },
        data: "잘 지내?",
        time: dayjs(LAST_VISIT).subtract(200, "hour").valueOf(),
      },
      {
        user: {
          id: "user3",
          nick_name: "이윤호",
          avatar_url: avatar2,
        },
        data: "요즘 뭐하고 지내.",
        time: dayjs(LAST_VISIT).subtract(121, "hour").valueOf(),
      },
      {
        user: {
          id: "user3",
          nick_name: "이윤호",
          avatar_url: avatar2,
        },
        data: "나도 이제 곧 포폴 준비해야 하는데 나중에 완성되면 한번 봐줘",
        time: dayjs(LAST_VISIT).subtract(120, "hour").valueOf(),
      },
    ],
    last_chat_time: dayjs(LAST_VISIT).subtract(120, "hour").valueOf(),
  },
];

const dummyData = { authUser, friends, chat };

export default dummyData;
