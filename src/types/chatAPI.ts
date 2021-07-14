export interface IUserAPI {
  id: string;
  nick_name: string;
  avatar_url: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  job?: string;
}

export interface IRoomInfoAPI {
  name: string;
  img: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  job: string;
  is_friend: boolean;
}

export interface IRoomMemberAPI {
  id: string;
  last_visit_time: number | null;
}

export interface IChatListAPI {
  user: IUserAPI;
  data: string;
  time: number;
}

export interface IRoomAPI {
  room_id: string;
  room_info: IRoomInfoAPI;
  room_members: IRoomMemberAPI[] | [];
  chat_list: IChatListAPI[] | [];
  last_chat_time: number;
}
