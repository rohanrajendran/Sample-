import React from 'react';

import './sidePage.styles.css';
import CustomButton from '../../Components/button.component/button.components';
import {Strong} from 'evergreen-ui';


class sidePage extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            isShown:'',
         }
    }

    render() { 
        return ( 
            <div className="sideBar">
                <Strong size={500} className="strong" marginLeft={100}>Factura</Strong><br/>
                <CustomButton type="new" >Create New</CustomButton>
            </div>
            
         );
    }
}
 
export default sidePage;