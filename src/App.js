//Sintaxe Jsx Mistura  JS com HTML

import React,{useState} from "react";

import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/trash.svg"
import { Container, H1, Imagem, ContainerItens, InputLabel, Input, Button, User } from "./styles"


function App ()  {

  // const users =  []
  const [users,setUsers] = useState([]); //Criação de um estado 

function addNewUser(){
   setUsers([{id: Math.random(), name:"Marcelo", age: 32}])
}
  return <Container>
    <Imagem alt="logo-image" src={People}></Imagem>
    <ContainerItens>
    <H1>Olá!</H1>
    <InputLabel>Nome:</InputLabel>
    <Input placeholder="Nome:"></Input>
    <InputLabel>Idade:</InputLabel>
    <Input placeholder="Idade:"></Input>
    <Button onClick={addNewUser}>
      Cadastrar <img alt="seta" src={Arrow}></img>
    </Button>
    <ul>
      {  users.map(user => (
        <User key={user.id}>
         <p>{user.name}</p> <p>{user.age}</p> 
         <button> <img src={Trash} alt="Lata de lixo"></img> </button>
        </User>  
      ))}
    </ul>
    </ContainerItens>
  </Container>
  
}

export default App