import dayjs from "dayjs";
import dummyData from "../data/data.sample";
import { IChatAPI, IChatListAPI } from "../types";

enum keyType {
  auth = "AUTH",
  chat = "CHAT",
  friend = "FRIENDS",
}

const getLoadData = () => {
  sessionStorage.setItem(keyType.auth, JSON.stringify(dummyData.authUser));
  sessionStorage.setItem(keyType.chat, JSON.stringify(dummyData.chat));
  sessionStorage.setItem(keyType.friend, JSON.stringify(dummyData.friends));
};

const getAuthData = () => {
  const getData = sessionStorage.getItem(keyType.auth);
  if (getData) {
    const parsed = JSON.parse(getData);

    return parsed;
  }
  return null;
};

const getChatData = (searchValue?: string) => {
  const getData = sessionStorage.getItem(keyType.chat);
  if (getData) {
    const parsed = JSON.parse(getData);
    if (searchValue) {
      const findChat = parsed.filter((chatData: IChatAPI) =>
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
  const getData = sessionStorage.getItem(keyType.chat);
  if (getData) {
    const parsed = JSON.parse(getData);
    const findRoom = parsed.filter(
      (roomData: IChatAPI) => roomData.room_id === roomId
    );

    if (findRoom) {
      return findRoom[0];
    }
  }
  return null;
};

const addRoomNewChat = (roomId: string, newChat: string) => {
  const getChatData = sessionStorage.getItem(keyType.chat);
  const getAuth = sessionStorage.getItem(keyType.auth);

  if (getChatData && getAuth) {
    const timeStamp = dayjs().valueOf();
    const parsedChat = JSON.parse(getChatData);
    const parsedAuth = JSON.parse(getAuth);

    const newChatData = {
      user: parsedAuth,
      data: newChat,
      time: timeStamp,
    };

    const updateData = parsedChat.map((roomData: IChatAPI) => {
      if (roomData.room_id === roomId) {
        const updateChatList = [...roomData.chat_list, newChatData];
        return { ...roomData, chat_list: updateChatList };
      } else {
        return roomData;
      }
    });

    const resultData = updateData.filter(
      (roomData: IChatAPI) => roomData.room_id === roomId
    );

    sessionStorage.setItem(keyType.chat, JSON.stringify(updateData));
    return resultData[0];
  }
  return null;
};

const commAPI = { getLoadData };
const authAPI = { getAuthData };
const chatAPI = { getChatData, getRoomData, addRoomNewChat };

export { commAPI, authAPI, chatAPI };
