import React, { Component } from 'react';

import { Button,TextInput, Pane } from "evergreen-ui";

import { Link } from 'react-router-dom'
 
import './SignIn.styles.css';

class SignIn extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="mainForm">
                <div className="formAside"> </div>
                <div className="appForm">
                    <div className="formDetails">
                        <div className="text-primary">    
                            <p className="h1"> Welcome Back</p>
                            <Pane>
                            <TextInput type="email" height={40} marginLeft={175}  placeholder="Email" /><br/>
                            <TextInput type="password" height={40} marginLeft={175}  placeholder="password" />
                            <div className="emptySpace" ></div>
                            </Pane>                        
                            <Button  appearance="primary" marginRight = {25} marginLeft={175} width = {275}>Log In</Button><br/>
                            <p className="line">Are you New to factura?</p>

                            <p className="line"><a 
                            //  className= "link" 
                             href="/signup">Sign Up Here</a></p>                        
                            <p className="line"><Link 
                            // className= "link" 
                            to="/">Forgot Your Password?</Link></p> 
                        </div> 
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SignIn;