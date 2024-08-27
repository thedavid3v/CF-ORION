'use client'

import { Button } from "react-bootstrap";
import Pagina from "../components/Pagina";
import { useState } from "react";

export default function Page() {

    const [valor, setValor] = useState(0);

    function incrementar() {
        setValor(valor + 1);
    }

    function decrementar() {
        setValor(valor - 1);
    }

    return (
      <Pagina titulo="nomes">
        <Button onClick={decrementar}>-</Button>
        <h1>{valor}</h1>
        <Button onClick={incrementar}>+</Button>
      </Pagina>
    );
}

  
  