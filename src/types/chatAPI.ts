export interface IUserAPI {
  id: string;
  nick_name: string;
  avatar_url: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
}

export interface IMemberAPI {
  id: string;
  last_visit_time: number | null;
}

export interface IChatListAPI {
  user: IUserAPI;
  data: string;
  time: number;
}

export interface IRoomImgAPI {
  avatar_url: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  is_friend: boolean;
}

export interface IChatAPI {
  room_id: string;
  room_name: string;
  room_img: IRoomImgAPI;
  room_members: IMemberAPI[] | [];
  chat_list: IChatListAPI[] | [];
  last_chat_time: number;
}
