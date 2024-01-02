import React, {useContext} from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

function CardCharacters({character}) {
    const {store, actions} = useContext(Context)
    const getFavorites = ()=> {
        const name = character.name
        actions.getFavorites(name)
      
    }

        return (
        <div>
            <div className="card " style={{ width: "20rem", height: "500px"}}>
                <img src={`https://starwars-visualguide.com/./assets/img/characters/${character.uid}.jpg`} onError={(e)=>{e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'}} className="card-img-top" alt="..." style={{ width: '100%', height: '400px' }}/>
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                   <div className='d-flex justify-content-center'>
                    <Link to={`/characters/${character.uid}/details`}>
                        <button className='btn btn-primary me-2'>Learn more!</button>
                    </Link>
                    <button className='btn btn-success ms-2' onClick={getFavorites}>
                    <i className="fa-regular fa-heart fa-lg"/>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCharacters