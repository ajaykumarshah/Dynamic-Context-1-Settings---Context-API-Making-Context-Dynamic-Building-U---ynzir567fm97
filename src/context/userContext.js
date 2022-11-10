import React, { createContext, useState } from "react";


const UserContext = createContext()

const Wrapper = (props) => {

    // const greeting = "Hello"
    const [greeting, setGreeting] = useState("Hello");

    return (
        <UserContext.Provider value={[greeting, setGreeting]}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }