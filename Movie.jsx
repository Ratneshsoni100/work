import React, { useEffect, useState } from 'react'


function Movie() {
const [users,setuser]=useState([]);

const getuser= async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/comments')
    // console.log(response)
    const data = await response.json()
    // console.log(data)
    setuser(data)
}

    useEffect(()=>{
    getuser()
        },[])
    
    return (
        <div>

            <h1>fetch</h1>
            <div className='container fluid mt-2'>
                <div className='row text-centre'>

                    {
                        users.map((ele) => {
                       return <div>
                             <div className="card ">
                               <div className="card-body">
                            <h5 className="card-title">{ele.title}</h5>
                            <h3 className="card-subtitle mb-2 text-body-secondary">{ele.name}</h3>
                            <h2>{ele.email}</h2>
                            <p className="card-text">{ele.body}</p>
                            
                        </div>
                    </div>
                        </div>
                       
                        })
                    }
                   
                </div>
            </div>

        </div>
    )
}

export default Movie
