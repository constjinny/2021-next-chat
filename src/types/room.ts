export interface IRoomInfo {
  roomId: string;
  roomName: string;
  roomImg: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  isFriend: boolean;
  roomJob: string;
}

export interface IRoomChatUser {
  id: string;
  nickName: string;
  avatarUrl: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
}

export interface IRoomChatItem {
  user: IRoomChatUser;
  isAuth: boolean;
  isFriend: boolean;
  isDateGroup: boolean;
  isMinuteGroup: boolean;
  time: number;
  timeToString: string;
  dateToString: string;
  unReadLength: number;
  data: string;
}

export interface IRoom {
  roomInfo: IRoomInfo | null;
  chatData: IRoomChatItem[] | [];
}
