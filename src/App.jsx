import { useState } from "react"
import Card from "./Card"

import "./styles.css"

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [name, setName] = useState("");
  const [color, setColor] = useState("")

  const [errors, setErrors] = useState(false);

  const [renderCard, setRenderCard] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3 || name.startsWith(" ") || color.length<6 || !color.includes("#")) {
      setErrors(true);
      setRenderCard(false);
    } else{
      setErrors(false);
      setRenderCard(true);
    }
  }

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Ingresa tu nombre" />
        <input type="text" value={color} onChange={(e) => { setColor(e.target.value)}} placeholder="Ingresa tu color favorito (formato HEX)" />
        <input type="submit" value="ENVIAR" />
      </form>
      {errors ? <span className="error">Por favor chequea que la informacion sea correcta</span> : ""}
      {renderCard? <Card name={name} color={color}/>:""}

    </div>
  );
}

export default App;
