import "./Card.css"

function Card({name,color}) {
  return (
    <div className="card">
      <h2>Hola {name}!</h2>
      <p>Sabemos que tu color favorito es:</p>
      <span className="colorBtn" style={{background:`${color}`,color:color.toLowerCase()> "#b"?"black":"white"}}>{color.toUpperCase()}</span>
    </div>
  );
}

export default Card;
