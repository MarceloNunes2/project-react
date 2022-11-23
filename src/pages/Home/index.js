//Sintaxe Jsx Mistura  JS com HTML

import React,{useState, useRef} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"
import Avatar from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"
import H1  from "../../components/Title";
import Button  from "../../components/Buttom";
import ContainerItens  from "../../components/ContainerItens";
import { Container, Imagem,  InputLabel, Input, } from "./styles"


function Users ()  {
  // const users =  []
  const [users,setUsers] = useState([]);
  const inputName = useRef()
  const history = useHistory()
  const inputAge = useRef()
  
async function addNewUser(){

  const {data:newUser} = await axios.post("http://localhost:3001/users",{name:inputName.current.value, age: inputAge.current.value})

  console.log(newUser)
   setUsers([...users,newUser])

   history.push("/usuarios")
  }

  return <Container>
    <Imagem alt="logo-image" src={Avatar}></Imagem>
    <ContainerItens>
    <H1>Olá!</H1>

    <InputLabel>Nome:</InputLabel>
    <Input ref={inputName} placeholder="Nome:"></Input>

    <InputLabel>Idade:</InputLabel>
    <Input ref={inputAge} placeholder="Idade:"></Input>

    <Button onClick={addNewUser}>
      Cadastrar <img alt="seta" src={Arrow}></img>
    </Button>
    
   
    </ContainerItens>
  </Container>
  
}

export default Users