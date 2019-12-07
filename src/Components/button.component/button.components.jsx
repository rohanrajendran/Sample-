import React from 'react';

// import {Link} from 'react-router-dom';
import {Button } from "evergreen-ui";

const CustomButton = ({children, ...otherCustomProps}) => (
    <Button  
    appearance="primary" marginRight={20} onClick= "#" >
    {children}
    </Button>
)


export default CustomButton;