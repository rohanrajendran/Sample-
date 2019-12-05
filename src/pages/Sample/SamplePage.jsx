import React, {Component} from 'react';
import { Avatar, TextInput, Heading, Textarea } from 'evergreen-ui';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import SidePage from '../sidePage/SidePage';


class Invoice extends Component {
    state = { 

     }
    render() { 
        return (
            <div className="dashboard">
                <div className="form-aside">
                    <SidePage />
                </div>
                <div className="invoice-form">
                <div class="columns">
                    <div class="column is-full">
                        <div class="box" >
                            <br/>
                            <Heading size={900} > New Invoice</Heading>  
                            <br/>
                            <text classname="col-1">Invoice Recipient</text>  
                            <Textarea width="10%" placeholder=" select customer" marginLeft={50}></Textarea>

                    <p>invoice Number
                    <TextInput/>
                    </p>  
                        <p className="header">              
                        Criar Solutions
                        <Avatar name="Criar Solutions" size={40}/>    
                        <Avatar name="help" 
                        src="data:image/png;base64,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" 
                        size={25}
                            />     
                        </p> 
                    </div>
                    </div>
                    </div>
                </div>
                </div>
          );
    }
}
 
export default Invoice;