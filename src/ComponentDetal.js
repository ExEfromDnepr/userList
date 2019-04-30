import React from 'react';
import ComponentImage from './ComponentImg.js'
import styled from 'styled-components';


const ComponentDetal = (props)=> {


     

     return(
          <ComponentDetal.contentDetal>
               
               <ComponentDetal.detalImg>
                    <ComponentImage userList={props.userList} select={props.select} />
               </ComponentDetal.detalImg>
               <ComponentDetal.detalInfo>
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
               </ComponentDetal.detalInfo>
          </ComponentDetal.contentDetal>
     )

 };

 ComponentDetal.detalImg = styled.div`
     height: 9%;
     width: 14%;
     border: 1px solid crimson;
     justify-content: center;
     align-items: center;
     position: relative;
 `;
ComponentDetal.detalInfo = styled.div`
     height: 100%;
     width: 86%;
     border: 1px solid crimson;
`;
ComponentDetal.contentDetal = styled.div`
     height: 100%;
     width:  70%;
     border: 1px solid #282c34;
     display: flex;
     flex-direction: row;
`;

export default ComponentDetal;


