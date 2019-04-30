import React from 'react';
import './App.css';
import ComponentImage from './ComponentImg.js'


const ComponentDetal = (props)=> {


     

     return(
          <div className="contentDetal">
               
               <div className="detalImg">
                    <ComponentImage userList={props.userList} select={props.select} />
               </div>
               <div className="detalInfo">
                    {
                         props.userList.map(item =>{
                              
                              if(item.general.firstName + " " + item.general.lastName ===  props.select){
                                 return(<div key={"key" + item.general.firstName + item.general.lastName}>
                                        <div>  {item.general.lastName + " " + item.general.firstName}</div>
                                        <div>{item.job.title}</div>
                                        <div>{item.job.company}</div>
                                        <div>{item.contact.email} {item.contact.phone}</div>
                                        <div>
                                             <ul>
                                                  <li>{item.address.street}</li>
                                                  <li>{item.address.city}</li>
                                                  <li>{item.address.zipCode}</li>
                                                  <li>{item.address.country}</li>
                                             </ul>
                                        </div>
                                   </div>)
                              }
                            return null;  
                         })
                    }
               </div>
          </div>
     )

 };

export default ComponentDetal;


