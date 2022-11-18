//Sintaxe Jsx Mistura  JS com HTML

import React,{useState, useRef} from "react";
import axios from "axios";
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/trash.svg"
import { Container, H1, Imagem, ContainerItens, InputLabel, Input, Button, User } from "./styles"


function App ()  {
  // const users =  []
  const [users,setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()
  
async function addNewUser(){

  const data = await axios.post("http://localhost:3001/users",{name:inputName.current.value, age: inputAge.current.value})

  console.log(data)


  //  setUsers([...users,
  //   {id:Math.random(),
  //     name: inputName.current.value,
  //     age: inputAge.current.value,
  //   }])
  }

function deleteUser(userId){
   const newUser = users.filter(user => user.id !== userId)
   setUsers(newUser)
}

  return <Container>
    <Imagem alt="logo-image" src={People}></Imagem>
    <ContainerItens>
    <H1>Olá!</H1>

    <InputLabel>Nome:</InputLabel>
    <Input ref={inputName} placeholder="Nome:"></Input>

    <InputLabel>Idade:</InputLabel>
    <Input ref={inputAge} placeholder="Idade:"></Input>

    <Button onClick={addNewUser}>
      Cadastrar <img alt="seta" src={Arrow}></img>
    </Button>
    <ul>
      {  users.map(user => (
        <User key={user.id}>
         <p>{user.name}</p> <p>{user.age}</p> 
         <button onClick={ ()=> deleteUser(user.id)}> 
          <img src={Trash} alt="Lata de lixo"></img> </button>
        </User>  
      ))}
    </ul>
    </ContainerItens>
  </Container>
  
}

export default App