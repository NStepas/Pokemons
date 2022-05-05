import react, { useState } from 'react';
import './Card.scss'

const Card = (props) => {
    const {name, url} = props;
    const [pokInfo, setPokInfo] = useState([]);
    const PokInfo = () => {
        setPokInfo(props.url)
        console.log(props.url)
    }
    // console.log(pokInfo.map((pok) => pok))

    return (
    <div className='card'>
        <div className="pokemon-card">
            <div className="pokemon-name-container"> {props.name}</div>
                <div className="pokemon-img" ></div>
            <button>Get info</button>
            </div>
    </div>
    )
}


export default Card;