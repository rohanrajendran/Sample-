import React, { Component } from 'react';
import './SignUp.styles.css';

// import {Link} from 'react-router-dom';

import {Button , TextInput} from "evergreen-ui";

class SignUp extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="mainForm">
                <div className="formAside"> </div>
                <div className="appForm">
                    <div className="formDetails">
                    
                        <div className="text-prim">  
                            <p className="h1">Lets Get Started</p>
                            <p className="h2">Try the free trial for 15 days</p>
                            <TextInput type="name" height={40} marginLeft={200} placeholder="Organisation Name" />
                            <TextInput type="email" height ={40} marginLeft={200} placeholder="Email" />
                            <TextInput type="password" height={40} marginLeft={200} placeholder="password" />
                            <TextInput type="number" height={40} marginLeft={200} placeholder="Phone Number" />
                            <div className="emptySpace" ></div>
                            <p className="line">By signing up you agree to our <a href="/">Terms of Service and Privacy Policy.</a></p>
                            <Button  appearance="primary" marginLeft= {200} width = {275}>Create Your account Now</Button><br/>
                            <p className="h1">Already have an account?
                            <a className= "link" href="/signin">Login Here</a>    
                            </p>             
                        </div> 
                      
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SignUp;