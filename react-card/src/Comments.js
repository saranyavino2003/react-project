import Navigation from "./Navigation";
import { useEffect, useState } from "react"

const Commands = () => {
    const [userResponse, setUserRespose] = useState([])

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(a =>a.json())
        .then(b => {
            // console.log(b)
            setUserRespose(b)    
        })
    },)
    return(
        <>
        <Navigation/>
        <h1 className="navc">commands</h1>
        <div className="header">
            {userResponse.map((item) => (
                <>
                    <div className="items">
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.username}</p>
                        <p>{item.email}</p>
                        <p>{item.body}</p>
                    </div>
                </>
            ))}
        </div >
        </>
    )
}
// }
export default Commands