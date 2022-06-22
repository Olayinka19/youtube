import React, {useState} from "react";
const ty = {
    width: "120px",
    height: "40px",
    backgroundColor: "green",
    color: "white",
    borderRadius: "10px",
    fontSize: "20px",
    marginLeft: "-820px",
    marginBottom: "800px",
}
export default function Time() {
    const [Time , setTeam] = useState("");
    var today = new Date().toLocaleTimeString();
    function handleTime () {
        setTeam(today)
    }
  return (

    <div className="ojy" >
      <h1>{Time}</h1>
      <button onClick={handleTime} style={ty}>Time</button>
    </div>
  )
}
