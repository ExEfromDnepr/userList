import React from 'react';
import './App.css'

const ComponentSearch = (props)=> {


    function onChangeSearch(e){ 
        if(e.target.value !== "")
         props.setSearchStr(e.target.value);
        else
         props.setSearchStr(" ");

         return true;

    }
    

    return (
        <div className="userSeach">
            <input onChange={onChangeSearch}   type="text"  placeholder="Search"/>
        </div>
    )
};

export default ComponentSearch;