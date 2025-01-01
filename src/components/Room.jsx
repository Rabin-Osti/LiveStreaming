import React from "react";
import { useSearchParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

const Room = () => {
  let [searchParams] = useSearchParams();
  const userName = searchParams.get("username");
  const roomID = searchParams.get("id");

  const role =
    searchParams.get("role") === "Host"
      ? ZegoUIKitPrebuilt.Host
      : ZegoUIKitPrebuilt.Audience;
  const userID = randomID(5);
  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host) {
    sharedLinks.push({
      name: "Join as audience",
      url:
        window.location.origin +
        window.location.pathname +
        `/?id=${roomID}&username=enter_name&role=Audience`,
    });
  }

  let myMeeting = async (element) => {
    console.log({
      appID: parseInt(import.meta.env.VITE_appID),
      server: import.meta.env.VITE_serverSecret,
      roomID,
      userID,
      userName,
    });

    const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
      parseInt(import.meta.env.VITE_appID),
      import.meta.env.VITE_serverSecret,
      roomID,
      userID,
      userName
    );

    // create instance object from token
    const zp = ZegoUIKitPrebuilt.create(token);
    zp.joinRoom({
      container: element,
      branding: {
        logoURL:
          "https://utfs.io/f/JmUkOAdNNIuSEC7XMqayARXwD76NiI40OK2tTuPclWZrkpUJ",
      },
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role,
        },
      },
      sharedLinks,
    
    });
  };

  return (
    <div ref={myMeeting} style={{ width: "100vw", height: "100vh" }}></div>
  );
};

export default Room;
