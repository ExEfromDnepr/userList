import React from 'react';
import styled from 'styled-components'

const ComponentSearch = (props)=> {


    function onChangeSearch(e){ 
        if(e.target.value !== "")
         props.setSearchStr(e.target.value);
        else
         props.setSearchStr(" ");

         return true;

    }
    

    return (
        <ComponentSearch.userSearch>
            <input onChange={onChangeSearch}   type="text"  placeholder="Search"/>
        </ComponentSearch.userSearch>
    )
};

ComponentSearch.userSearch = styled.div`
  height: 2%;
  width:  100%;
  border: 1px solid crimson;      
`;

export default ComponentSearch;