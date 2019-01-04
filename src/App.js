import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomButton from './components/customButton/customButton';

class App extends Component {
  constructor(){
    super();
    this.state =  {
      text : "",
      myText : '',
      list:[],
      btnVal: 'Add',
      alad: ''
    }
    //this.name = "Hassaan";
    // this.state = {
    //   todoText: '',
    //   list: [],
    // }
  }
  // getName(e){
  //   this.setState({
  //     name : e.target.value
  //   })
  // }
  // getAbuName(e){
  //   this.setState({
  //     abuName : e.target.value
  //   })
  // }
  // getAge(e){
  //   this.setState({
  //     age : e.target.value
  //   })
  // }
  // changeText(){
  //   // console.log('From function change text');
  //   // this.setState({
  //   //   text: 'Qibla',
  //   // })
  // }
  // displayText(e){
  //   this.setState({
  //     text : e.target.value
  //   })
  // }
  // storeText(e){
  //   this.setState({
  //     todoText: e.target.value,
  //   });
  // }
  // add(){
  //   const { todoText, list } = this.state;
  //   const newList = list;

  //   newList.push(todoText);
  //   this.setState({list: newList, todoText: ''});
  // }

  // delete(index){
  //   const { todoText, list } = this.state;
  //   const newList = list;

  //   newList.splice(index,1);
  //   this.setState({list: newList});
  // }
  setText(e){
    this.setState({
      myText : e.target.value,
    })
  }
  add(){
    const {myText, list, alad, btnVal} = this.state;
    const newList = list;
    //console.log(alad);
    if(alad == ''){
      newList.push(myText);
    }
    else{
      newList.splice(alad,1,myText);
      this.setState({
        btnVal:'Add',
        alad:''
      })
    }
      
    this.setState({
      myText:"",
      list:newList
    })
  }
  
  delete(index){
    const {myText, list} = this.state;
    const newList = list;
    
    newList.splice(index,1);
    this.setState({
      list:newList,
      myText:""
    })
  }
  
  
  edit(index, elem){
    this.setState({
      myText : elem,
      btnVal : 'Update',
      alad:index
    })
  }

  render() {
    const {myText,list,btnVal,alad} = this.state;
    //const { list } = this.state;
    //const {name, abuName, age} = this.state;
    return (
      <div className="">
        
        {/* <input onKeyUp={(e) => this.getName(e)} placeholder="Mera naam..."></input>
        <br/>
        <input onKeyUp={(e) => this.getAbuName(e)} placeholder="Meray abbu ka naam..."></input>
        <br/>
        <input onKeyUp={(e) => this.getAge(e)} placeholder="Meri umar..."></input>
        <br/>
        {name && abuName && age && <CustomButton></CustomButton>} */}
        {/* <input onKeyUp={(e)=> this.displayText(e)}></input>
        <p>{text}</p> */}
        {/* <p>{this.name}</p> */}
        {/* <p>{this.state.text}</p>
        <button onClick={() => this.changeText()}>Update text</button> */}
        {/* <input placeholder="Add any item here.." onChange={(e) => this.storeText(e)}/>
        <button onClick={() => this.add()}>Add</button>
        <ul>{
          list.map((elem, index) => {
            return <li>{elem} <button onClick={()=>this.delete(index)}> Delete</button></li>;
          })
        }</ul> */}
        <input onChange={(e)=>this.setText(e)} placeholder="Add item.." value={myText}/>
        {myText && <button onClick={()=>this.add()} cstm_attr={alad}>{btnVal}</button>}
        
        
          <ul>{
          list.map((item, index)=>{
            return <li key={Math.random() * index}>{item} - <button onClick={()=>this.edit(index, item)}>Edit</button> - <button onClick={()=>this.delete(index)}>Delete</button></li>
          })}
          </ul>
        
        {/* <p>{text}</p> */}
      </div>
    );
  }
}

export default App;
