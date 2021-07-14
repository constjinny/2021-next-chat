import { IRoom } from "./room";

export interface IRoomImg {
  url: { src: string; height: number; width: number; blurDataURL?: string };
  isFriend: boolean;
}

export interface IFriend {
  id: string;
  nickName: string;
  hasRoom?: boolean;
}

export interface IRoomList {
  roomId: string;
  roomImg: IRoomImg;
  roomName: string;
  lastChatTime: string;
  lastChatData: string;
  unReadChatLength: number;
}

export interface IRoomState {
  hasRoom: boolean;
  unReadRoom: number;
  roomList: IRoomList[] | [];
  onSearch: boolean;
  currentRoom: IRoom;
  friendList: IFriend[] | [];
}
