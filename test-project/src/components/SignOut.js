import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, signOut } from "../features/userSlice";
import "./SignOut.css"

const SignOut = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const handleSignOut = (e) => {
        e.preventDefault();
        dispatch(signOut());
    }
    return (
        <div>
            <h1>
                Welcome <span>{user.name}</span>
            </h1>{" "}
            <button className="sign_out" onClick={(e) => handleSignOut(e)}>Sign out</button>
        </div>
    );
};

export default SignOut