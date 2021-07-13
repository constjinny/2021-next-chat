export interface IChatItemStyle {
  isAuth: boolean;
  duration: number;
}

export interface IRoomInfo {
  roomId: string;
  roomName: string;
  isFriend: boolean;
  job: string;
}

export interface IChatUser {
  id: string;
  nickName: string;
  avatarUrl: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
}

export interface IChatItem {
  user: IChatUser;
  isAuth: boolean;
  isDateGroup: boolean;
  isMinuteGroup: boolean;
  time: number;
  timeToString: string;
  dateToString: string;
  unReadLength: number;
  data: string;
}

export interface IChatRoomState {
  roomInfo: IRoomInfo | null;
  chatData: IChatItem[] | [];
}
