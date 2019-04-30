import React,{useState, useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as actions from './redux/actions.js';
import ComponentSearch from './ComponentSearch';
import ComponentList from './ComponentList';
import ComponentDetal from './ComponentDetal';



const mapStateToProps = (state)=>({
    userList: state.reducer.userList
  });
  const mapDispatchToProps = {
    toInitialAction: actions.initialActions
  };

 

const ComponentAll = ({userList, toInitialAction})=> {

    const [select, setSelect] = useState(0);
    const [searchStr, setSearchStr] = useState(" ");
    

    useEffect(()=> {
        toInitialAction();
        
    });


    return(
      <div className="content">
        <div className="contentUser">
            <ComponentSearch userList={userList}   setSearchStr={setSearchStr}/>
            
            <ComponentList  userList = {userList} setSelect={setSelect}  searchStr={searchStr}/>
            
        </div>
          <ComponentDetal select={select} userList={userList}/> 
      </div>

    )



}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentAll);