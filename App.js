// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import { useEffect, useState } from 'react';

function App() {


//local storage er jonno kor6i eta
let initTodo;
if(localStorage.getItem("todos")===null){
  initTodo=[];
}
else{
  initTodo=JSON.parse(localStorage.getItem("todos"));
}

  // let a = 8585;

  // onDelete function defined here 
  // ekhane on delete er todo ta as6e TodoItem er on delete er function theke
  const onDelete=(todo)=>{
    console.log("I am on Delete of todo ",todo)
    // todos er vetorer setTodos defiune kore66i
    SetTodos(todos.filter((e)=>{
      return e!==todo;
    }));

      // refrash korar por o jeno valu store thake tar jonno local storage use kor6i
      localStorage.setItem("todos",JSON.stringify(todos));
  }

//AddTodo.js er addTodo function eti
const addTodo=(title,desc)=>{
  console.log("I am adding this todo", title,desc);

//eta serial number 0 hoye jayar porer case
  let sno;
  if(todos.length===0)
    sno=0;
  else
    sno=todos[todos.length-1].sno+1;

  const myTodo={
    sno:sno,
    title:title,
    desc:desc
  }
  SetTodos([...todos,myTodo]);  // tinte ... deyar jonnoi thik thak vabe add hoch6e todo gulo
  console.log(myTodo);

 

}




  // let todos=[ Delete korar por update rakhar jonno ei vabe define korbo na
  // const [todos,SetTodos]=useState([
  //   {
  //     sno:1,
  //     title:"Go to the Market",
  //     desc:"job number 1 done"
  //   },
  //   {
  //     sno:2,
  //     title:"Go to the Mall",
  //     desc:"job number 2 done"
  //   },
  //   {
  //     sno:3,
  //     title:"Go to the Math",
  //     desc:"job number 3 done"
  //   },
  //   {
  //     sno:4,
  //     title:"Go to the Ground",
  //     desc:"job number 4 done"
  //   },
  //   {
  //     sno:5,
  //     title:"Go to the Dokan",
  //     desc:"job number 5 done"
  //   }
  // ])


    // ei vabe korbo
    const [todos,SetTodos]=useState(initTodo)
  // ekhane todo define kor6i na blank rakh6i


   // refrash korar por o jeno valu store thake tar jonno local storage use kor6i
   useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <>
    <Header title="My To Dos List" searchBar={true}/>
    <AddTodo addTodo={addTodo} key={todos.sno}/>
    <Todos toDos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
      );
}

export default App;
