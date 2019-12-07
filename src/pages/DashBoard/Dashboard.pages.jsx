import React, {Component} from 'react';

import './Dashboard.styles.css';
import { Avatar, TextInput, Heading, Textarea, Table,Pane,Strong, Text, Button, Paragraph, Icon} from 'evergreen-ui';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import SidePage from '../sidePage/SidePage';
import CustomTable from '../../Components/Table.component/table.component'
import CustomButton from '../../Components/button.component/button.components';
// import dropDown from '../../Components/Drop-down/drop-down.component';
import CustomCard from '../../Components/Card/card.component';
import CustomInput from '../../Components/textInput/textInput.components'


class Invoice extends Component {
    state = { 
        val: ['%','number'],
        table_data:[
            {
                id : 1,
                name: 'S.NO'
            },
            {
                id : 2,
                name: 'PARTICULARS'
            },
            {
                id : 3,
                name: 'HSN/SAC CODE'
            },
            {
                id : 4,
                name: 'RATE'
            },
            {
                id : 5,
                name: 'QUANTITY '
            },
            {
                id : 6,
                name: 'AMOUNT'
            },
            {
                id : 7,
                name: 'TAX VALUE(%)'
            },
            {
                id : 8,
                name: 'TOTAL'
            }
        ]
     }
    render() { 
        return (
            <div className="dashboard">
                <div className="form-aside">
                    <SidePage />
                </div>
                <div className="invoice-form">
                <div class="columns">
                    <div class="column">
                        <div class="box" >
                            <br/>
                            <div>
                            <Heading size={900} > New Invoice</Heading>  
                            <br/>
                            <text classname="col-1">Invoice Recipient</text>
                            </div><br/>                            
                            <Textarea width={200} placeholder=" select customer" marginLeft={70}></Textarea>
                            <p className="margin"><a href="/" >Add New Customer</a></p>
                        </div>
                    </div>
                    <div class="column">
                    <div class="box">
                        <div class="centered">
                        <p>Invoice Number
                        <CustomInput/>
                        </p>  
                        <br/>
                        <p>Invoice Date
                        <CustomInput/>
                        </p> 
                        <br/> 
                        <p>Due Date
                        <CustomInput/>
                        </p>  
                        </div>
                    </div>
                    </div>

                <div class="column">
                    <div class="box" >
                        <p className="header">              
                        Criar Solutions
                        <Avatar marginLeft={5} name="Criar Solutions" size={40}/>    
                        <Avatar name="help" 
                        src="data:image/png;base64,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" 
                        size={25}
                        marginLeft={10}
                        marginRight={10}
                        />      
                        </p>
                        <br/>
                        <div className="third-col">
                            <p>Order Number
                            <CustomInput/>
                            </p>  
                            <br/>
                            <p>DC Number
                            <CustomInput/>
                            </p>  
                            <br/>
                            <p>Reference Number
                            <CustomInput/>
                            </p> 
                        </div>
                    </div>
                </div>
                </div>
                <div className="table">
                    <CustomTable/>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="box" >
                            <Heading size={500}>Select Payment Option</Heading>
                            <div className="cards">
                                <CustomCard>Cash </CustomCard>
                                <CustomCard>Banks </CustomCard>
                            </div>
                            <div className="cards">
                                <CustomCard>Gpay </CustomCard>
                                <CustomCard>Paytm </CustomCard>
                            </div>  
                                <CustomCard>PayPal </CustomCard>
                            <div> Select a Payment Option to get paid online 
                                <img src="../../../icons/help-circle.svg" alt="help"/>
                            </div>
                            <Text marginLeft={10} >Update your payment gateway in Profile -> Settings -> Integrations.</Text>
                            <br/><br/>
                            <Heading size={500} marginBottom={20}>Notes</Heading>
                            <Textarea width={300} height={25} marginBottom={30} marginRight={30} marginLeft={0} placeholder=" eg. Thanks for having business with us" ></Textarea>
                            <Button appearance="primary" intent="danger" iconBefore="cross">Cancel</Button>
                        </div>
                    </div>


                    <div class="column">
                    <div class="box">
                        <Paragraph marginTop={500}>
                            <a href="/" className="link">
                            <Icon icon="print"/>
                            print or preview
                            </a>
                        </Paragraph>
                    </div>
                    </div>

                <div class="column">
                    <div class="box" >
                       <p><Strong size={700}> DISCOUNT </Strong>
                        <TextInput width={200} marginLeft={20} marginBottom={10}/>
                       </p>

                       <Table>
                       <Table.Head>
                           <Table.TextHeaderCell> 
                               SUBTOTAL
                           </Table.TextHeaderCell>
                           <Table.TextHeaderCell> 

                           </Table.TextHeaderCell>
                       </Table.Head>
                       <Table.Body height={240}>
                       <Table.Row>
                       <Table.TextCell>CGST</Table.TextCell>
                       <Table.TextCell>

                       </Table.TextCell>
                       </Table.Row>
                       </Table.Body>
                       <Table.TextCell></Table.TextCell>
                       </Table>
                       <Strong size={600} marginRight={90} marginBottom={20}>Terms and Conditions</Strong>
                       <Textarea width={350} marginTop={20} marginBottom={20} height={50} placeholder=" Your Business Terms and Conditions"></Textarea>
                       <CustomButton>Save</CustomButton>
                       <Button appearance="primary" iconBefore="message" width={200}>Save and Send</Button>
                    </div>
                </div>
                </div>
                </div>
            </div>
          );
    }
}
 
export default Invoice;