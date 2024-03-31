import React, { useEffect, useState } from 'react'
// import Usersdata from './Usersdata'
function Table() {
    const [users, setuser] = useState([])
    const fetchh = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            // console.log(response)
            const data = await response.json()
            console.log(data)
            if (data.length > 0) {
                setuser(data)
            }
        }
        catch {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchh()
    },[])

    return (
        <>
          <h1>table</h1>
            <table>
                <thead>
                  <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        </tr>
                </thead>
                <tbody>
                {
        users.map(ele=>{
            return (
                <tr key={ele.id}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                </tr>

            )
        })
      }
                </tbody>
            </table>

            </>
    )
}

export default Table
