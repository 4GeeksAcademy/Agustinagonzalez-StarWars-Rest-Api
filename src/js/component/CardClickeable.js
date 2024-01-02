import React, {useContext}from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../store/appContext'

function CardClickeable({character}) {
  const {store, actions} = useContext(Context)
  const params = useParams()
  
  return (
    <div>
<div className="card hover" style={{width: "20rem"}}>
<img src={`https://starwars-visualguide.com/./assets/img/characters/${character.uid}.jpg`} onError={(e)=>{e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"></h5>    
  </div>
</div>



    </div>
  )
}

export default CardClickeable