import { useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import SignOut from './components/SignOut';
import { selectUser } from './features/userSlice';

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user ? <SignOut /> : <Login />}
    </div>
  );
}

export default App;
