import React from 'react';
import styled from 'styled-components';

const ComponentImage = (props)=> (
    
    props.userList.map(item =>(
                              
        (item.general.firstName + " " + item.general.lastName ===  props.select && <ComponentImage.itemsImg key="item.general.firstName"  src={item.general.avatar} alt="avatar" />)

   ))

);

ComponentImage.itemsImg = styled.img`
    max-width: auto;
    min-width: auto;
    min-height: auto;
    height: 100%;
`;
export default ComponentImage;