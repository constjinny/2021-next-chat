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
  sessionStorage.setItem(keyType.friend, JSON.stringify(dummyData.fruends));
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

const getChatDataId = (roomId: string) => {
  const getData = sessionStorage.getItem(keyType.chat);
  if (getData) {
    // const parsed = JSON.parse(getData);
    console.log("getData", getData);

    // return parsed;
  }
  return null;
};

const commAPI = { getLoadData };
const authAPI = { getLoadData };
const chatAPI = { getChatData, getChatDataId };

export { commAPI, authAPI, chatAPI };
