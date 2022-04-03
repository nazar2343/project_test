import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../service/getterUsers";
import { selectUser, userSelect, signOut, getUsers } from "../features/userSlice";
import "./SignOut.css";
import axios from 'axios'

const SignOut = () => {
    const user = useSelector(selectUser)
    const users = useSelector(userSelect)
    const dispatch = useDispatch();
    const handleSignOut = (e) => {
        e.preventDefault();
        dispatch(signOut());
    }


    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                dispatch(getUsers({
                    users: res.data
                }))
            })
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
                <span>{user.name}</span>
            </h1>
            <button className='btn' onClick={() => {
                getData()
            }}> Add from JSON</button>
            <div>{
                users?.users?.map(e=><div className="title">Title:{e.title} <div className="body">Body:{e.body}</div></div>)
            }</div>

            <div className='container1'>
                <h3>Footer</h3>
            </div>
        </div>

    );
}

export default SignOut