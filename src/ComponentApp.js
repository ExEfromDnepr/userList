import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from './redux/actions.js';
import ComponentSearch from './ComponentSearch';
import ComponentList from './ComponentList';
import ComponentDetal from './ComponentDetal';
import styled from 'styled-components';



const ComponentApp = ({userList, toInitialAction})=> {

    const [select, setSelect] = useState(0);
    const [searchStr, setSearchStr] = useState(" ");
    

    useEffect(()=> {
        toInitialAction();
        
    });


    return(
      <ComponentApp.Сontent>
        <ComponentApp.contentUser>
            <ComponentSearch userList={userList}   setSearchStr={setSearchStr}/>
            <ComponentList  userList = {userList} setSelect={setSelect}  searchStr={searchStr}/>   
        </ComponentApp.contentUser>
          <ComponentDetal select={select} userList={userList}/> 
      </ComponentApp.Сontent>

    )
}

 ComponentApp.Сontent = styled.div`
    height: 100vw;
    width: 100vw;
    border: 1px solid #61dafb;
    display: flex;
    flex-direction: row;
    
 `;
 ComponentApp.contentUser = styled.div`
    height: 100%;
    width:  20%;
    border: 1px solid #282c34;
    display: flex;
    flex-direction: column;
 `;

 const mapStateToProps = (state)=>({
  userList: state.reducer.userList
});
const mapDispatchToProps = {
  toInitialAction: actions.initialActions
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentApp);