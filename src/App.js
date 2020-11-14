import React  from 'react'
import './App.css';
import Todo from './components/Todo'
import {  useStoreState ,  useStoreActions } from 'easy-peasy'
import styled from 'styled-components'






function App() {

  const todolist = useStoreState((state) => state.todos);
  const toggle = useStoreActions((actions) => actions.toggle);

  const Main = styled.div`
margin:100px 0px 0px 0px;
width:100%;
height:auto;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`


  return (
   
    <div className="App " >
      <Main>
      {todolist.map((item , index) =>
    
      <Todo  key={item.id} id={item.id} tog={toggle} dis={item.completed}>{item.title}</Todo>
      
  )}
     
      </Main>
     
    </div>
   
  );
}

export default App;
