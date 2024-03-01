import "./car.css"

function CarFunction(props){
   return (
    <div className="car">
       <h3>{props.name}</h3>
       <p>{props.model}</p>
    </div>
   )
}

export default CarFunction