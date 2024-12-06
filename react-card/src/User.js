import { useEffect, useState } from "react"
import Navigation from "./Navigation"
const User = () => {
    const [userResponse, setUserRespose] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(a => a.json())
            .then(b => {
                setUserRespose(b)
            })
    }, [])

    return (
        <>
            <Navigation />
            <h1 className="nav">user</h1>
            <div className="head">
            {userResponse.map((item) => (
                <>                     
                    <div className="item">
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.username}</p>
                        <p>{item.email}</p>
                        <p>{item.address.street}</p>
                        <p>{item.address.suite}</p>
                        <p>{item.address.city}</p>
                        <p>{item.address.zipcode}</p>
                        <p>{item.address.geo.lat}</p>
                        <p>{item.address.geo.lng}</p>
                        <p>{item.phone}</p>
                        <p>{item.website}</p>
                        <p>{item.company.name}</p>
                        <p>{item.company.catchPhrase}</p>
                        <p>{item.company.bs}</p>



                    </div>
                </>

            ))}
        </div >
        </>  
    )
}
export default User