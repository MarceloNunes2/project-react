//Sintaxe Jsx Mistura  JS com HTML

import React,{useState,useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"
import Avatar from "../../assets/avatar.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"
import H1 from "../../components/Title"
import Button from "../../components/Buttom"

import ContainerItens from "../../components/ContainerItens"
import { Container, Imagem, User } from "./styles"


function Users ()  {
  // const users =  []
  const [users,setUsers] = useState([]);
  const history =useHistory()

  //Inicia Assim que a aplicação iniciar
  //E toda vez que tiver uma alteração
  useEffect(()=> {
    async function fetUsers(){
      const {data: newUsers} = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }
    fetUsers()
  },[])



async function deleteUser(userId){
   await axios.delete(`http://localhost:3001/users/${userId}`)
   const newUser = users.filter(user => user.id !== userId)
   setUsers(newUser)
}

function goBackPage(){
  history.push("/")
}

  return <Container>
    <Imagem alt="logo-image" src={Avatar}></Imagem>
    <ContainerItens isBlur={true}>
    <H1>Usuários</H1>
    <ul>
      {  users.map(user => (
        <User key={user.id}>
         <p>{user.name}</p> <p>{user.age}</p> 
         <button onClick={ ()=> deleteUser(user.id)}> 
          <img src={Trash} alt="Lata de lixo"></img> </button>
        </User>  
      ))}
    </ul>
    <Button isBack={true} onClick={goBackPage}>
    <img  alt="seta" src={Arrow}></img> Voltar 
    </Button>
    </ContainerItens>
  </Container>
  
}

export default Users