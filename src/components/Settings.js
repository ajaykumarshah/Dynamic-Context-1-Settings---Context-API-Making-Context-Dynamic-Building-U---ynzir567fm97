import React, { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const Settings = () => {
    const [val, setVal] = useState("");
    const [greeting, setGreeting] = useContext(UserContext);
    console.log(greeting);
    const handlechange = (event) => {
        setVal(event.target.value);
        setGreeting(val);


    }

    return (
        <div style={{ border: '5px solid red', padding: '8px' }} id="settings">
            <h4>Settings</h4>
            <input type={'text'} value={val} onChange={handlechange} />
        </div>
    )
}