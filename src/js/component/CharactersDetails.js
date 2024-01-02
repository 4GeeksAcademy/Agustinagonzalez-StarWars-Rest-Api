import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../store/appContext'


function CharactersDetails() {
  const params = useParams()
  const { store, actions } = useContext(Context)
  // const [showCharacters, setShowCharacters] = useState(false)

  // const scroll = () => {
  //   if (window.scrollY > 15) {
  //     setShowCharacters(true)
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', scroll)
  //   return () => {
  //     window.removeEventListener('scroll', scroll)
  //   }
  // }, [])


  useEffect(() => {
    if (params.id !== store.charactersDetails?.uid) {
      actions.getDetailsCharacters(params.id);
    }
  }, [params.id]);
  return (
    <div className='d-flex justify-content-center' >
      <div className="card mb-3" style={{border: "1px solid white"}}>
        <h2 className="card-title text-center">
          {store.charactersDetails.properties && store.charactersDetails.properties.name}
        </h2>
        <hr />
        <img src={`https://starwars-visualguide.com/./assets/img/characters/${params.id}.jpg`} onError={(e) => { e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg' }} className="img-fluid rounded-start img-card" alt="..."
        />
        <div className="card-body">
          <hr />
          <div className="card-body d-flex justify-content-center">
            <div className='information'>
              <p><strong>Height:</strong> </p>
              <p>{store.charactersDetails.properties && store.charactersDetails.properties.height}</p>
            </div>
            <div className='information'>
              <p><strong>Mass:</strong> </p>
              <p>{store.charactersDetails.properties && store.charactersDetails.properties.mass}</p>
            </div>
            <div className='information'>
              <p><strong>Hair color:</strong> </p>
              <p>{store.charactersDetails.properties && store.charactersDetails.properties.hair_color}</p>
            </div>
            <div className='information'>
              <p><strong>Skin color:</strong> </p>
              <p>{store.charactersDetails.properties && store.charactersDetails.properties.skin_color}</p>
            </div>
            <div className='information'>
              <p><strong>Eye color:</strong> </p>
              <p>{store.charactersDetails.properties && store.charactersDetails.properties.eye_color}</p>
            </div>
            <div className='information'>
              <p><strong>Birth year:</strong> </p>
              <p>{store.charactersDetails.properties && store.charactersDetails.properties.birth_year}</p>
            </div>
            <div className='information'>
              <p><strong>Gender:</strong> </p>
              <p>{store.charactersDetails.properties && store.charactersDetails.properties.gender}</p>
            </div>
          </div>
        </div>


        {/* < i className="fa-solid fa-angle-down fa-xl mt-4 mb-3 d-flex justify-content-center animacion" style={{ color: "#ffffff" }
      }></i >
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p> */}

        {/* { flecha con cards de otros personajes
        showCharacters && (

          <div className="d-flex flex-wrap justify-content-between lista mt-4">
            {store.characters.length == 0 ? <h3 className="text-light">Cargando..</h3> : (
              store.characters && store.characters.map((character, index) => {
                return <Link to={`/characters/${character.uid}/details`}>
                  <CardClickeable key={character.uid} character={character} style={{ ':hover': "border:1px solid blue" }} />
                </Link>


              }))
            }
          </div>
        )} */}
      </div>
    </div>
  )
}

export default CharactersDetails