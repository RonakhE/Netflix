import React,{useState,useEffect} from 'react'
import instance from './instance'
import './Row.css'

function Row({title,fetchUrl}) {
    const [movie,setmovie] = useState([]) 

    const base_url="https://image.tmdb.org/t/p/original"

    useEffect(()=>{
        async function fetchData(){
            const request = await instance.get(fetchUrl)
            setmovie(request.data.results)
        }
        fetchData()
    },[])
    console.log(movie)

  return (
    <div>
        <h2>{title}</h2>
        <div className='row_posters'>
            {movie.map((m)=>(
                <img src={`${base_url}${m.poster_path}`} className='row_image' alt={m.name}/>
            ))}
            
        </div>    
    </div>
    
  )
}

export default Row