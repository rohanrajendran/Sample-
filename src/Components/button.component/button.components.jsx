import React from 'react';

// import {Link} from 'react-router-dom';
import {Button } from "evergreen-ui";

const CustomButton = ({children, ...otherProps}) => (
    <Button  
    appearance="primary" marginLeft={60} marginTop={20} width = {100} onClick= "#">
    {children}
    </Button>
)


export default CustomButton;