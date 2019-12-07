import React from 'react';

// import {Link} from 'react-router-dom';
import {Pane, Text } from "evergreen-ui";

const CustomCard = ({children}) => (
    <Pane
    height={50}
    width={150}
    display="flex"
    alignItems="center"
    justifyContent="center"
    border="default"
    elevation={4}
    marginLeft={10}
    marginTop={10}
    marginRight={10}
    marginBottom={10}
    >
        <Text>{children}</Text>
    </Pane>
    
)


export default CustomCard;