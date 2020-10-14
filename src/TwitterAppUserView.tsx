import React, { useState, MouseEvent } from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/stylish-portfolio.css';
import './App.css';
import axios from 'axios';

interface ITwitterAppUserProps {
  name: string
}
const TwitterAppUserView: React.FC<ITwitterAppUserProps> = (props: ITwitterAppUserProps) => {
  const [userState, setUserSate] = useState({ name: props.name, active: true, username: "" });

  let handleClick = () => {
    setUserSate({...userState, active: false});
    //send api request to disable account
  }

  return (
    <React.Fragment>
      <div className=".landing-info .end-sars-container">
        <div>
        <h2>Hello, {userState.name}</h2>
        </div>
        <button onClick={handleClick} className="btn btn-info">Deactivate</button>
      </div>
    </React.Fragment>
  );
}

export default TwitterAppUserView;
