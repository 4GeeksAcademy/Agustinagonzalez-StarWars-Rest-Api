import React, {useContext} from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

function CardCharacters({character}) {
    const {store, actions} = useContext(Context)
    return (
        <div>
            <div className="card " style={{ width: "18rem" }}>
                <img src="https://th.bing.com/th/id/R.c553b1c8798cc589b7a5f5a8d781842f?rik=b0n%2bw0seBGAlCQ&riu=http%3a%2f%2fdummyimage.com%2f400x200&ehk=KNnZI7pT7BOVa%2b7xL3eQCzD93mOywvOg0aq39kUGAlg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <div className='d-flex justify-content-around'>
                    <Link to={"/characters/details"}>
                        <button className='btn btn-primary'>Learn more!</button>
                    </Link>
                    <button className='btn btn-success'>Like</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCharacters