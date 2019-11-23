import React from 'react';
import './card.styles.css';

export const Card =(props) => (

<div className ="card-container" >

<img alt="monster" src={`https://robohash.org/${props.cmonster.id}?set=set2&size=180x180`} /> 

<h2>  {props.cmonster.name }  </h2>
<h2>{props.cmonster.email}</h2>



</div>






)