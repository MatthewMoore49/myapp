import React, { Component } from 'react';
import './People.css';
    const People = ({people, deletePerson}) => {
      

     /*const peopleList = people.map(person => {  
           if(person.age>20){
        return(
            <div className="person" key = {person.id}>
                <div>Name: { person.name }</div>
                <div>Age: { person.age }</div>
                <div>favColor: { person.favColor }</div>
            </div>
            
        )
         }else{
             return null
         }
       } );*/ 

       const peopleList = people.map(person => {
           return person.age > 21 ? (

             <div className="person" key = {person.id}>

                <div>Name: { person.name }</div>
                <div>Age: { person.age }</div>
                <div>favColor: { person.favColor }</div>
                <button onClick={ () => {deletePerson(person.id)}}>Delete person</button>

            </div>
                    
                   

           ) : null 
       })


       return (
           <div className="people-list">
            { peopleList }
           </div>         
       );
     
}
export default People;