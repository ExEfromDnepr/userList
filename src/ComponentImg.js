import React from 'react';

const ComponentImage = (props)=> (
    
    props.userList.map(item =>(
                              
        (item.general.firstName + " " + item.general.lastName ===  props.select && <img key="item.general.firstName" className="img" src={item.general.avatar} alt="avatar" />)

   ))


    
    

);

export default ComponentImage;