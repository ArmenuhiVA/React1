import "./car.css"
import React from "react"


class CarClass extends React.Component {
    render(){
        return (
            <div className="car">
                <h3>{this.props.name}</h3>
                 <p>{this.props.model}</p>
            </div>
        )
    }
}


export default CarClass