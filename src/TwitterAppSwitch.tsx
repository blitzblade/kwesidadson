import React, { useState, MouseEvent } from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/stylish-portfolio.css';
import './App.css';
import TwitterApp  from './TwitterApp';
import TwitterAppUserView from './TwitterAppUserView';
import axios, { AxiosResponse } from 'axios';



const TwitterAppSwitch: React.FC = () => {
  const [userState, setUserSate] = useState({ name: "", active: true, username: "" });

  interface IResponse {
    name: string,
    username: string,
    status: boolean
  }
  const url = "http://localhost:5000/api/endsars_user/"
      console.log("ELEMENTS: ")


      const response = axios.get(url)
                      .then((data: AxiosResponse<IResponse>) => {
                        setUserSate({active: data.data.status, username: data.data.username, name: data.data.name})
                      });
     
      // If you care about a response:
      //if (response.body !== null) {
        // body is ReadableStream<Uint8Array>
        // parse as needed, e.g. reading directly, or
    

  return (
    <React.Fragment>
      {
        userState.active ? <TwitterAppUserView  name={userState.name}/> : <TwitterApp /> 
      }
    </React.Fragment>
  );
}

export default TwitterAppSwitch;
