import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Avatar, Button } from '@material-ui/core';
import { auth } from './util/firebase';
import { AvatarGenerator } from 'random-avatar-generator';
import Login from './components/Login';
import Signup from './components/Signup';
import MainPage from './components/MainPage';



function App() {
  const generator = new AvatarGenerator();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(null);

  useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// user is logged in...

				setUser(authUser);

				if (authUser.displayName) {
					// dont update username
				} else {
					return authUser.updateProfile({
						displayName: username,
					});
				}
			} else {
				setUser(null);
			}
		});

		return () => {
			unsubscribe();
		};
	}, [user, username]);

  const handleLogin = (e) => {
    console.log('login object');
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) =>
      alert(error.message)
    );
  };
  const handleRegister = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).catch((error) =>
      alert(error.message)
    );
  };
  

function Navbar({ User }) {
  
  return (
    <div className='app__header'>
      <h1 className='company_logo'>Trendd</h1>
      {User && User.displayName ? (
        <div className='app__headerRight'>
          <Button
            variant='contained'
            size='small'
            onClick={() => auth.signOut()}
            className='control_btn'
          >
            Logout
          </Button>
          <Avatar
            className='post__avatar'
            alt={User.displayName[0]}
            size='small'
            src={generator.generateRandomAvatar(
              User.displayName
            )}
          />
          <Button
            variant='contained'
            color='secondary'
            className='user_chip'
            size='small'
            style={{ textTransform: 'none' }}
          >
            {User.displayName}
          </Button>
        </div>
      ) : (
        <form className='app__loginHome'>
          <Link className='link_option' to='login'>
            <Button
              variant='contained'
              size='small'
              className='control_btn'
            >
              Login
            </Button>
          </Link>
          <Link className='link_option' to='register'>
            <Button
              variant='contained'
              size='small'
              className='control_btn'
            >
              Sign Up
            </Button>
          </Link>
        </form>
      )}
    </div>
  );
}
  return (
    <div className="App">
      <HashRouter>
      <Route exact path='/'>
        <Navbar User={user} />
				<MainPage />
				</Route>

    
				<Route exact path='/login'>
					<Login
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
						handleLogin={handleLogin}
						user={user}
            setUser={setUser}
					/>
				</Route>
				<Route exact path='/register'>
					<Signup
						username={username}
						setUsername={setUsername}
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
						handleRegister={handleRegister}
						user={user}
            setUser={setUser}
					/>
				</Route>
			</HashRouter>
		
    </div>
  );
}

export default App;
