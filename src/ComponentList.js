import React from 'react';
import  './App.css';

/*<div className="userList">
            {

                props.userList.map(item => ( 
                     
                    <div className="listItems"  onClick={()=>props.setSelect(item.general.firstName + " " + item.general.lastName)} >
                        <div><img className="img" src={item.general.avatar} alt="avatar" /></div>
                        <div >{item.general.firstName} {item.general.lastName}</div>
                    </div>
                       
                ))
            }
           
        </div>*/



        /*if(tmp === 0)
        {
         return console.log("null");
        }   
       return props.userList.map(item => ( 
                     
            <div className="listItems"  onClick={()=>props.setSelect(item.general.firstName + " " + item.general.lastName)} >
                <div><img className="img" src={item.general.avatar} alt="avatar" /></div>
                <div >{item.general.firstName} {item.general.lastName}</div>
            </div>
               
        ))*/
const ComponentList = (props)=> {


   return (
        <div className="userList">
            {
                 props.userList.map( (item) => { 
                   if( props.searchStr !== " " && (item.general.firstName.indexOf(props.searchStr) !== -1 || item.general.lastName.indexOf(props.searchStr) !== -1 || 
                   (item.general.firstName + " " + item.general.lastName).indexOf(props.searchStr) !== -1)){
                    return (<div key={"key" + item.general.firstName + item.general.lastName} className="listItems"  onClick={()=>props.setSelect(item.general.firstName + " " + item.general.lastName)} >
                                <div><img className="img" src={item.general.avatar} alt="avatar" /></div>
                                <div >{item.general.firstName} {item.general.lastName}</div>
                            </div>)
                   }
                   if(props.searchStr === " "){
                     return (<div key={"key" + item.general.firstName + item.general.lastName} className="listItems"  onClick={()=>props.setSelect(item.general.firstName + " " + item.general.lastName)} >
                                 <div><img className="img" src={item.general.avatar} alt="avatar" /></div>
                                 <div >{item.general.firstName} {item.general.lastName}</div>
                            </div>)  
                   }
                return null;   
                })
            } 
        </div>

    )
        
    
};



export default ComponentList;