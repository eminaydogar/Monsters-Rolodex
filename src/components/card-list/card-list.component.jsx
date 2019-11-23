import React from 'react'
import './card-list.styles.css';
import {Card} from '../card/card.component';



export const Cardlist = (props) => 
//props componentin name vb özelliklerini almak icin kullanılır
(

<div className='card-list' >

{ props.monster.map(
m => <Card key={m.id}  cmonster ={m}></Card> )
}
</div> 


);
