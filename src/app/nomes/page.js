'use client'

import { Button } from "react-bootstrap";
import Pagina from "../components/Pagina";
import { useState } from "react";

export default function Page() {

    const [nome,setNome] = useState('David')

    function alterarNome(){
        const novoNome = nome == 'David' ? 'David Santiago Barboza' : 'David'
        
    }   
    
    return (
      <Pagina titulo="nomes">
        <Button> Primeiro Nome</Button>
        <h1>{nome}</h1>
        <Button> Nome Completo</Button>
        </Pagina>
    );
  }
  