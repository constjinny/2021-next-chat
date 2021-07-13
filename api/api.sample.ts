import dummyData from "../data/data.sample";

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

const getChatData = () => {
  const getData = sessionStorage.getItem(keyType.chat);
  if (getData) {
    const parsed = JSON.parse(getData);
    return parsed;
  }
  return null;
};

const commAPI = { getLoadData };
const chatAPI = { getChatData };

export { commAPI, chatAPI };
