import React, { useEffect } from "react";
import useSocketIo from "../components/hook/useSocketIo";
// import SocketIOClient from "socket.io-client";

export default function test() {
  //   const socket = SocketIOClient.connect(process.env.BASE_URL, {
  //     path: "/api/socketio",
  //   });
  const socket = useSocketIo("https://api.randomuser.me/");

  console.log("useSocketIo", socket);

  useEffect(() => {
    function handleEvent(payload) {
      console.log(payload);
      // HelloWorld
    }
    if (socket) {
      socket.on("SOME_EVENT", handleEvent);
    }
  }, [socket]);

  return <div className="my-5 py-5 text-center size-3">test</div>;
}
