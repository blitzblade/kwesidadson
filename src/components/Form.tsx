import { stringify } from "querystring";
import React, { useState } from "react";
import axios from 'axios';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

interface IFormProps {
  /* The http path that the form will be posted to */
  action: string;
}

interface IFormState {
    username: string;
    loader: boolean;
  }

export class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {username: "", loader: false};
  }
  
  
  /**
   * Handles form submission
   * @param {React.FormEvent<HTMLFormElement>} e - The form event
   */
  private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({username: e.currentTarget.value});
  }
  
  private handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    this.setState({loader: true});

    if (this.validateForm()) {
      //const submitSuccess: boolean = await this.submitForm();
      //send request to flask api
      //const host = "http://localhost:5000"
      const host = "https://kwesidadson.com"
      const url = `${host}/api/authorize_endsars_twitter/`
      //const home = "http://localhost:3000"
      const home = "https://kwesidadson.com"

      console.log("URL: ",url)
      console.log("ELEMENTS: ")
      
      let body = {
          return_url: `${home}/endsars`,
          callback_url: `${host}/endsars/callback`
      }

      const response = await axios.post(url+this.state.username, body);
     
      // If you care about a response:
      //if (response.body !== null) {
        // body is ReadableStream<Uint8Array>
        // parse as needed, e.g. reading directly, or
        let j = response.data
        if (j["redirect_url"] === null){
          window.location.href = "/endsars/failure"
        }else{
          window.location.href = j["redirect_url"]
        }
        
        // and further:
        //const asJSON = JSON.parse(asString);  // implicitly 'any', make sure to verify type on runtime.
      //}
    //   this.setState({ submitSuccess: true });
    }
  };

  /**
   * Executes the validation rules for all the fields on the form and sets the error state
   * @returns {boolean} - Whether the form is valid or not
   */
  private validateForm(): boolean {
    // TODO - validate form
    return true;
  }

  /**
   * Submits the form to the http api
   * @returns {boolean} - Whether the form submission was successful or not
   */
  private async submitForm(): Promise<boolean> {
    // TODO - submit the form
    return true;
  }

  
  public render() {

  
    return (
      <React.Fragment>
        <div className="alert alert-info">
             Hi there fighter! This will quote retweet random tweets with hashtags #ENDSWAT, #ENDSARS, #SARSMUSTGO, #SARSMUSTEND, #SARSMUSTENDNOW while you are away. This will be done once every hour so your account is safe! enter your username to activate it!
           </div>
           <BlockUi tag="div" blocking={this.state.loader}>
        <div className="end-sars-container">
           
        <div className="landing-info">
      <form onSubmit={this.handleSubmit} noValidate={true}>
        <div className="container">
          <input name="username" placeholder="@username" onChange={this.handleChange}/>

          <div className="form-group">
            <br/>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Activate
            </button>
          </div>
          
        </div>
      </form>
      </div>
      </div>
      </BlockUi>
      </React.Fragment>
    );
  }
}
