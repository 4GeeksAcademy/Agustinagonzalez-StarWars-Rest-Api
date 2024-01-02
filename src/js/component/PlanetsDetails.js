import React, {useContext, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import { Context } from '../store/appContext'

function PlanetsDetails() {
  const params = useParams()
  const {store, actions} = useContext(Context)

  useEffect(() => {
    if (params.id !== store.planetsDetails?.uid) {
      actions.getPlanetsDetails(params.id);
    }
  }, [params.id]);
  return (
  <div className='d-flex justify-content-center'>
    <div className="card mb-3" style={{ border: "1px solid white" }}>
      <h2 className="card-title text-center">
      {store.planetsDetails.properties && store.planetsDetails.properties.name}
      </h2>
      <hr />
      <img src={`https://starwars-visualguide.com/./assets/img/planets/${params.id}.jpg`} onError={(e) => { e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg' }} className="img-fluid rounded-start img-card" alt="..." />
      <div className="card-body">
        <hr />
        <div className="card-body d-flex justify-content-center">
          <div className='information'>
            <p><strong>Diameter:</strong> </p>
            <p> {store.planetsDetails.properties && store.planetsDetails.properties.diameter}</p>
          </div>
          <div className='information'>
            <p><strong>Climate:</strong> </p>
            <p> {store.planetsDetails.properties && store.planetsDetails.properties.climate}</p>
          </div>
          <div className='information'>
            <p><strong>Population:</strong> </p>
            <p> {store.planetsDetails.properties && store.planetsDetails.properties.population}</p>
          </div>
          <div className='information'>
            <p><strong>Gravity:</strong> </p>
            <p> {store.planetsDetails.properties && store.planetsDetails.properties.gravity}</p>
          </div>
          <div className='information'>
            <p><strong>Orbital period:</strong> </p>
            <p> {store.planetsDetails.properties && store.planetsDetails.properties.orbital_period}</p>
          </div>
          <div className='information'>
            <p><strong>Terrain:</strong> </p>
            <p> {store.planetsDetails.properties && store.planetsDetails.properties.terrain}</p>
          </div>
          <div className='information'>
            <p><strong>Gender:</strong> </p>
            <p> {store.planetsDetails.properties && store.planetsDetails.properties.rotation_period}</p>

          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PlanetsDetails