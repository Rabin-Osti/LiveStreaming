import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
function Home() {
  let navigate = useNavigate();
  const [info, setInfo] = useState({ username: "", roomID: "" });

  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  console.log(info);

  function handleJoin(role) {
    console.log({
      username: info.username.trim().length,
      roomID: info.roomID.trim().length,
    });

    if (!info.username.trim().length || !info.roomID.trim().length) {
      toast.error("Missing Fields!");
      return;
    }
    navigate(`/room?id=${info.roomID}&username=${info.username}&role=${role}`);
  }

  return (
    <div className="container">
      <div className="inputWrapper">
        <label htmlFor="username">Enter Username</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Enter username"
          spellCheck="false"
          onChange={handleInput}
        />
      </div>
      <div className="inputWrapper">
        <label htmlFor="roomID">Enter RoomID</label>
        <input
          name="roomID"
          type="text"
          placeholder="Enter RoomID"
          spellCheck="false"
          onChange={handleInput}
        />
      </div>
      <div className="btns">
        <button onClick={() => handleJoin("Host")}>Create</button>
        <button onClick={() => handleJoin("audience")}>Join</button>
      </div>
    </div>
  );
}

export default Home;
