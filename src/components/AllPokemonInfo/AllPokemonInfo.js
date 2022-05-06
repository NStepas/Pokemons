import './AllPokemonInfo.scss'
const AllPokemonInfo = (props) => {
const {type} = props;

    return (
    <div>
        <div className="type-of-pokemon">{type}
        </div>
    </div>
            
    )
}

export default AllPokemonInfo;