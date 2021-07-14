import dayjs from "dayjs";
import dummyData from "../data/data.sample";
import {
  IRoomAPI,
  IChatListAPI,
  IRoomMemberAPI,
  IUserAPI,
} from "@type/chatAPI";

enum keyType {
  AUTH = "AUTH",
  CHAT = "CHAT",
  FRIENDS = "FRIENDS",
}

const getLoadData = () => {
  sessionStorage.setItem(keyType.AUTH, JSON.stringify(dummyData.authUser));
  sessionStorage.setItem(keyType.CHAT, JSON.stringify(dummyData.chat));
  sessionStorage.setItem(keyType.FRIENDS, JSON.stringify(dummyData.friends));
};

const getAuthData = () => {
  const getData = sessionStorage.getItem(keyType.AUTH);
  if (getData) {
    const parsed = JSON.parse(getData);

    return parsed;
  }
  return null;
};

const getFriendData = () => {
  const getData = sessionStorage.getItem(keyType.FRIENDS);
  if (getData) {
    const parsed = JSON.parse(getData);

    return parsed;
  }
  return null;
};

const findFriendId = (id: string) => {
  const getData = sessionStorage.getItem(keyType.FRIENDS);
  if (getData) {
    const parsed = JSON.parse(getData);
    const findId = parsed.find((friend: any) => friend.id === id);

    return findId ? true : false;
  }
  return null;
};

const getChatData = (searchValue?: string) => {
  const getData = sessionStorage.getItem(keyType.CHAT);
  if (getData) {
    const parsed = JSON.parse(getData);
    if (searchValue) {
      const findChat = parsed.filter((chatData: IRoomAPI) =>
        chatData.chat_list.some(
          (chatListData: IChatListAPI) =>
            chatListData.data.indexOf(searchValue) > -1
        )
      );

      return findChat;
    } else {
      return parsed;
    }
  }
  return null;
};

const getRoomData = (roomId: string) => {
  const getData = sessionStorage.getItem(keyType.CHAT);
  if (getData) {
    const parsed = JSON.parse(getData);
    const findRoom = parsed.filter(
      (roomData: IRoomAPI) => roomData.room_id === roomId
    );

    if (findRoom) {
      return findRoom[0];
    }
  }
  return null;
};

const updateRoomVisitTime = (roomId: string) => {
  const getChatData = sessionStorage.getItem(keyType.CHAT);
  const getAuth = sessionStorage.getItem(keyType.AUTH);
  if (getChatData && getAuth) {
    const timeStamp = dayjs().valueOf();
    const parsedChat = JSON.parse(getChatData);
    const parsedAuth = JSON.parse(getAuth);

    const updateData = parsedChat.map((roomData: IRoomAPI) => {
      if (roomData.room_id === roomId) {
        const { room_members } = roomData;
        const updateRoomMembers = room_members.map((member: IRoomMemberAPI) => {
          if (member.id === parsedAuth.id) {
            return { ...member, last_visit_time: timeStamp };
          } else {
            return member;
          }
        });
        return { ...roomData, room_members: updateRoomMembers };
      } else {
        return roomData;
      }
    });

    const resultData = updateData.filter(
      (roomData: IRoomAPI) => roomData.room_id === roomId
    );

    sessionStorage.setItem(keyType.CHAT, JSON.stringify(updateData));
    return resultData[0];
  }
  return null;
};

const addNewRoom = (friendId: string) => {
  const getChatData = sessionStorage.getItem(keyType.CHAT);
  const getAuth = sessionStorage.getItem(keyType.AUTH);
  const getFriend = sessionStorage.getItem(keyType.FRIENDS);
  if (getChatData && getAuth && getFriend) {
    const timeStamp = dayjs().valueOf();
    const parsedChat = JSON.parse(getChatData);
    const parsedAuth = JSON.parse(getAuth);
    const parsedFriend = JSON.parse(getFriend);
    const findFriendData = parsedFriend.filter(
      (parsedFriend: IUserAPI) => parsedFriend.id === friendId
    );

    if (findFriendData) {
      const newRoom = {
        room_id: `chatRoom${timeStamp}`,
        room_info: {
          name: findFriendData[0]?.nick_name,
          img: findFriendData[0]?.avatar_url,
          job: findFriendData[0]?.job || "",
          is_friend: true,
        },
        room_members: [
          {
            id: parsedAuth.id,
            last_visit_time: timeStamp,
          },
          {
            id: findFriendData[0]?.id,
            last_visit_time: null,
          },
        ],
        chat_list: [],
        last_chat_time: timeStamp,
      };

      const updateChatData = [...parsedChat, newRoom];

      sessionStorage.setItem(keyType.CHAT, JSON.stringify(updateChatData));

      return newRoom.room_id;
    }
  }
};

const addRoomNewChat = (roomId: string, newChat: string) => {
  const getChatData = sessionStorage.getItem(keyType.CHAT);
  const getAuth = sessionStorage.getItem(keyType.AUTH);

  if (getChatData && getAuth) {
    const timeStamp = dayjs().valueOf();
    const parsedChat = JSON.parse(getChatData);
    const parsedAuth = JSON.parse(getAuth);

    const newChatData = {
      user: parsedAuth,
      data: newChat,
      time: timeStamp,
    };

    const updateData = parsedChat.map((roomData: IRoomAPI) => {
      if (roomData.room_id === roomId) {
        const updateChatList = [...roomData.chat_list, newChatData];
        return {
          ...roomData,
          chat_list: updateChatList,
          last_chat_time: timeStamp,
        };
      } else {
        return roomData;
      }
    });

    const resultData = updateData.filter(
      (roomData: IRoomAPI) => roomData.room_id === roomId
    );

    sessionStorage.setItem(keyType.CHAT, JSON.stringify(updateData));
    return resultData[0];
  }
  return null;
};

const commAPI = { getLoadData };
const authAPI = { getAuthData };
const friendAPI = { getFriendData, findFriendId };
const chatAPI = {
  getChatData,
  getRoomData,
  updateRoomVisitTime,
  addNewRoom,
  addRoomNewChat,
};

export { commAPI, authAPI, friendAPI, chatAPI };
