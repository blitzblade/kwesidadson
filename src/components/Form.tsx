import { stringify } from "querystring";
import React, { useState } from "react";
import axios from 'axios';

interface IFormProps {
  /* The http path that the form will be posted to */
  action: string;
}

interface IFormState {
    username: string;
  }

export class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {username: ""};
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

    if (this.validateForm()) {
      //const submitSuccess: boolean = await this.submitForm();
      //send request to flask api
      const host = "http://cryptopriceadvisor.com/"
      const url = `${host}/api/authorize_endsars_twitter/`
      console.log("ELEMENTS: ")
      
      let body = {
          return_url: `${host}/endsars`,
          callback_url: `${host}/endsars/callback`
      }

      const response = await axios.post(url+this.state.username, body);
     
      // If you care about a response:
      //if (response.body !== null) {
        // body is ReadableStream<Uint8Array>
        // parse as needed, e.g. reading directly, or
        let j = response.data
        window.location.href = j["redirect_url"]
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
    );
  }
}