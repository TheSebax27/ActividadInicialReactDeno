import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import confetti from 'canvas-confetti';
import { useEffect, useState } from "react";
import ComponenteGrid from "./components/gridPrincipal";



function App() {

  const [count, setCount] = useState(0);
  const [listaAprendices, setListaAprendices] = useState([]);

  useEffect(() => {

    if (count == 6) {
      confetti();
      setCount(0);
    }

  }, [count])

  useEffect(() => {
    fetch('http://localhost:8000/aprendices', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((response) => {
        setListaAprendices(response);
      })
      .catch((error) =>
        console.log("error al traer datos", error)
      )
  }, [])

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Button variant="contained" onClick={() => { setCount(count + 1) }}>Aceptar</Button>
      </Box>
      <br />
      <h1>{count}</h1>

      <ComponenteGrid />

<div>
  <h3>
    {JSON.stringify(listaAprendices)}
  </h3>
</div>
    </>
  )
}

export default App