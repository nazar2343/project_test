import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, signOut } from "../features/userSlice";
import "./SignOut.css";

const SignOut = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const handleSignOut = (e) => {
        e.preventDefault();
        dispatch(signOut());
    }

    return (
        <div>
            <div className='container_header1'>
                <div className='container_header2'>
                    <h3 className="company">Company A</h3>
                </div>

                <div className='container_header3'>
                    <h3 className="hello">Hello</h3>
                </div>
                <div className='container_header4'>
                <button className="sign_out" onClick={(e) => handleSignOut(e)}>Sign out</button>
                </div>
            </div>
            <h1>
                Welcome <span>{user.name}</span>
            </h1>{" "}
            <div className='container1'>
                <h3>Footer</h3>
            </div>
        </div>

    );
}

export default SignOut