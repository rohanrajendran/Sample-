


import React from 'react';

import {Pane, Text, Heading} from 'evergreen-ui'
import CustomCard from '../../Components/Card/card.component';
import CustomButton from '../../Components/button.component/button.components';


const table = (id,name) =>(
    <div>
    <Heading size={500}>Select Payment Option</Heading>
    <CustomCard>Cash </CustomCard>
    <div className="cards">
    <Pane
    height={50}
    width={150}
    display="flex"
    alignItems="center"
    justifyContent="center"
    border="default"
    elevation={4}
    marginLeft={10}
    >
        <Text>Paytm</Text>
    </Pane>
    <Pane
    height={50}
    width={150}
    display="flex"
    alignItems="center"
    justifyContent="center"
    border="default"
    elevation={4}
    marginLeft={10}
    marginBottom={10}
    >
        <Text>Gpay</Text>
    </Pane>
    </div>
    <Pane
    height={50}
    width={150}
    display="flex"
    alignItems="center"
    justifyContent="center"
    border="default"
    elevation={4}
    marginLeft={10}
    marginBottom={20}
    >
        <Text>PayPal</Text>
    </Pane>
    </div>
);

export default table;