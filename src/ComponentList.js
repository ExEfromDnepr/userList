import React from 'react';
import styled from 'styled-components';
const ComponentList = (props)=> {


   return (
        <ComponentList.userList>
            {
                 props.userList.map( (item) => { 
                   if( props.searchStr !== " " && (item.general.firstName.indexOf(props.searchStr) !== -1 || item.general.lastName.indexOf(props.searchStr) !== -1 || 
                   (item.general.firstName + " " + item.general.lastName).indexOf(props.searchStr) !== -1)){
                    return (
                            <ComponentList.listItems key={"key" + item.general.firstName + item.general.lastName}   onClick={()=>props.setSelect(item.general.firstName + " " + item.general.lastName)} >
                                <div><ComponentList.itemsImg src={item.general.avatar} alt="avatar" /></div>
                                <div >{item.general.firstName} {item.general.lastName}</div>
                            </ComponentList.listItems>)
                   }
                   if(props.searchStr === " "){
                     return (
                            <ComponentList.listItems key={"key" + item.general.firstName + item.general.lastName}   onClick={()=>props.setSelect(item.general.firstName + " " + item.general.lastName)} >
                                 <div><ComponentList.itemsImg src={item.general.avatar} alt="avatar" /></div>
                                 <div >{item.general.firstName} {item.general.lastName}</div>
                            </ComponentList.listItems>)  
                   }
                return null;   
                })
            } 
        </ComponentList.userList>

    )
        
    
};

ComponentList.userList = styled.div`
    height: 40%;
    width: 100%;
    border: 1px solid crimson;
    display: flex;
    flex-direction: column;
    overflow: auto;
    white-space: nowrap;
`;
ComponentList.listItems = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    border: chartreuse;
`;
ComponentList.itemsImg = styled.img`
    max-width: auto;
    min-width: auto;
    min-height: auto;
    height: 100%;
`;

export default ComponentList;