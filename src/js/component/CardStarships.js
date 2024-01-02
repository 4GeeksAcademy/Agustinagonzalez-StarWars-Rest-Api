import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

function CardStarships({starships}) {
  const { store, actions } = useContext(Context)
  const getFavorites = ()=>{
    const name = starships.name
    actions.getFavorites(name)
  }
  return (
    <div>
      <div className="card " style={{ width: "18rem" }}>
        <img src={`https://starwars-visualguide.com/./assets/img/starships/${starships.uid}.jpg`} onError={(e)=>{e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'}}  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{starships.name}</h5>
          <div className='d-flex justify-content-around'>
            <Link to={`/starships/${starships.uid}/details`}>
              <button className='btn btn-primary'>Learn more!</button>
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

export default CardStarships