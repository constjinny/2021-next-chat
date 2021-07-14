import { ReactElement, Fragment, useState } from "react";
import * as Redux from "react-redux";
import { chatAPI } from "@api/api.sample";
import dummyData from "@data/data.sample"; // TODO: 제거

import { roomAction, roomSelector, roomDataParser } from "@features/roomList";
import { Textarea } from "@components/input";

export function ChatTextarea(): ReactElement {
  const dispatch = Redux.useDispatch();
  const roomId = Redux.useSelector(roomSelector.selectCurrentRoomId);
  const [textValue, setTextValue] = useState("");

  // NOTI: 새 대화 전송
  const handleSubmitNewChat = async () => {
    if (roomId && textValue) {
      const roomDataAPI = await chatAPI.addRoomNewChat(roomId, textValue);
      if (roomDataAPI) {
        const pasedRoomData = roomDataParser(
          dummyData.authUser.id,
          roomDataAPI
        );

        dispatch(roomAction.updateCurrentRoomData({ room: pasedRoomData }));
        setTextValue("");
      }
    }
    return false;
  };

  return (
    <Fragment>
      <Textarea
        value={textValue}
        onChange={setTextValue}
        onSubmit={handleSubmitNewChat}
      />
    </Fragment>
  );
}
