import React, {useContext, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import { Context } from '../store/appContext'

function StarshipsDetails() {
  const params = useParams()
  const { store, actions } = useContext(Context)
  useEffect(() => {
    if (params.id !== store.starshipsDetails?.uid) {
      actions.getStarshipsDetails(params.id);
    }
  }, [params.id]);

  return (
    <div className='d-flex justify-content-center' >
    <div className="card mb-3" style={{border: "1px solid white"}}>
      <h2 className="card-title text-center">
        {store.starshipsDetails.properties && store.starshipsDetails.properties.name}
      </h2>
      <hr />
      <img src={`https://starwars-visualguide.com/./assets/img/starships/${params.id}.jpg`} onError={(e) => { e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg' }} className="img-fluid rounded-start img-card" alt="..."
      />
      <div className="card-body">
        <hr />
        <div className="card-body d-flex justify-content-center">
          <div className='information'>
            <p><strong>Model:</strong> </p>
          <p>{store.starshipsDetails.properties && store.starshipsDetails.properties.model}</p>
          </div>
          <div className='information'>
            <p><strong>Starship class:</strong> </p>
            <p>{store.starshipsDetails.properties && store.starshipsDetails.properties.starship_class}</p>
          </div>
          <div className='information'>
            <p><strong>Passengers:</strong> </p>
            <p>{store.starshipsDetails.properties && store.starshipsDetails.properties.passengers}</p>
          </div>
          <div className='information'>
            <p><strong>Length:</strong> </p>
            <p>{store.starshipsDetails.properties && store.starshipsDetails.properties.length}</p>
          </div>
          <div className='information'>
            <p><strong>MGLT:</strong> </p>
            <p>{store.starshipsDetails.properties && store.starshipsDetails.properties.MGLT}</p>
          </div>
          <div className='information'>
            <p><strong>Max atmosphering speed:</strong> </p>
            <p>{store.starshipsDetails.properties && store.starshipsDetails.properties.max_atmosphering_speed}</p>
          </div>
          <div className='information'>
            <p><strong>Cargo_capacity:</strong> </p>
            <p>{store.starshipsDetails.properties && store.starshipsDetails.properties.cargo_capacity}</p>
          </div>
        </div>
      </div>
</div>
</div>
  )
}

export default StarshipsDetails