import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userSelect, signOut, getUsers, postSelect, getPosts } from "../features/userSlice";
import "./SignOut.css";
import axios from 'axios'
import { getUser1 ,getPostOfUser} from "../srvice/axios";

const SignOut = () => {
    const user = useSelector(selectUser)
    const users = useSelector(userSelect)
    const posts = useSelector(postSelect)
    const dispatch = useDispatch();
    const handleSignOut = (e) => {
        e.preventDefault();
        dispatch(signOut());
        localStorage.removeItem('Auth')
    }

    useEffect(()=>{
        getUser1().then(({data}) => dispatch(getUsers({
            users: data
        })))
    },[])


    const postsOfUser = (id) => getPostOfUser(id).then(({data}) => dispatch(getPosts({
        posts:data
    })));

    return (
        <>
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

            <div className="action">
                <div className="head">{
                    users?.users?.map(e => <div key={e.id} className="title">{e.name}
                        <div className="body">{e.username}</div>
                        <button onClick={ () => postsOfUser(e.id)}>add</button>
                        </div>)
                }</div>
            </div>
            <div>
            </div>
            <div className="outsidePosts">
                {
                    posts?.posts?.map(e=> <div key={e.id}>{e.title}</div>)
                }
                </div>
            <div className='container1'>
                <h3>Footer</h3>
            </div>
        </>

    );
}

export default SignOut