
import React from 'react';

import {Table} from 'evergreen-ui'

import CustomButton from '../button.component/button.components'


const CustomTable = (id,name) =>(
    <div className="table">
    <Table>
<Table.Head>
    <Table.TextHeaderCell> 
        S.no
    </Table.TextHeaderCell>
    <Table.TextHeaderCell>
        Particulars
    </Table.TextHeaderCell>
    <Table.TextHeaderCell>
        HSN/SAC CODE
    </Table.TextHeaderCell>
    <Table.TextHeaderCell>
        Rate
    </Table.TextHeaderCell>
    <Table.TextHeaderCell>
       Quantity
    </Table.TextHeaderCell>
    <Table.TextHeaderCell>
        AMOUNT
    </Table.TextHeaderCell>
    <Table.TextHeaderCell>
        TAX VALUE(%)
    </Table.TextHeaderCell>
    <Table.TextHeaderCell>
        TOTAL
    </Table.TextHeaderCell>
</Table.Head>
<Table.Body height={240}>
<Table.Row>
<Table.TextCell></Table.TextCell>
<Table.TextCell>
    <CustomButton > + Add New Item</CustomButton>
</Table.TextCell>
</Table.Row>
</Table.Body>
</Table>

  </div>

);

export default CustomTable;