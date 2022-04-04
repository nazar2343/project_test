import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import SignOut from './components/SignOut';
import { login, selectUser } from './features/userSlice';

const App = () => {
  const user = useSelector(selectUser);
  const [isAuntentificated, setIsAuntentificated] = useState(false);

  const dispatch = useDispatch();

  const onAuthCheck = async() => {
    const isAuth = await JSON.parse(localStorage.getItem('Auth'));

      console.log(isAuth, 'isAuthisAuthisAuth');

    if(!!isAuth){
      setIsAuntentificated(true)
      dispatch(login(isAuth))
    }else{
      setIsAuntentificated(false)
    }
  }

  useEffect(() => {
    if(!user){
      onAuthCheck();
    }else{
      setIsAuntentificated(true)
    }
  }, [user]);

  return (
    <div className="App">
      {isAuntentificated ? <SignOut /> : <Login />}
    </div>
  );
}

export default App;
