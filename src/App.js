import React from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component {

  constructor(){ // setstate gibi propertyler var
    super(); // component classdaki yapıcı fonk cagırır
    this.state = {
      monsters: [ ],
      searchField:''
    }
   // this.handleChange=this.handleChange.bind(this); arrow func kullanmadıgımız durumlarda , yazılan fonk constructorda this keywordu kullanılarak bind metodu ile bildirilmeli.
  }
    componentDidMount(){

      fetch('https://jsonplaceholder.typicode.com/users') // json formatlı veriye erişim
      .then(response => response.json()) // js nin anlayabilecegi dönüsüm json2js
      .then(users => this.setState({monsters: users})); // users nesnesi yaratıldı setState fonk ile monsters dizisine nesne atıldı

    }

handleChange = (e)=> {
  this.setState({searchField:e.target.value});
}

  render(){

   const {monsters,searchField} =this.state;
    // const monsters = this.state.monsters ve const searchField = this.state.searchField
const filteredMonsters= monsters.filter(

  m=>m.name.toLowerCase().includes(searchField.toLocaleLowerCase()) // monster adı searchfield'da iceriyorsa içeriği döndür

)




  return (

    <div className="App">

<h1>MONSTERS ROLODEX</h1>     

     <SearchBox
       placeholder='search monsters'
       handleChange= {this.handleChange}
        //arama alanına onchange eventının target fonk. value propu ile textboxa yazılan metni atıyoruz.
       />
       <Cardlist monster ={filteredMonsters} />
      

    </div>
  );
}
  }

  


export default App;