// import { useEffect, useState } from "react"
// import Navigation from "./Navigation"
// const User = () => {
//     const [userResponse, setUserRespose] = useState([])

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(a => a.json())
//             .then(b => {
//                 setUserRespose(b)
//             })
//     }, [])

//     return (
//         <>import { useEffect, useState } from "react"
//         import Navigation from "./Navigation"
//         const User = () => {import Navigation from './Navigation';
// import React, {useEffect, useState, useContext} from 'react';
// import {UserInfoContext} from './Context'
// import Command from './command';

// const User=()=>{
//     const userInfo = useContext(UserInfoContext)
//     const [user,setUser]=useState([]);
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(a=> a.json())
//         .then(data=>{
//             setUser(data);
//             userInfo.setUserData(data)
//         })
//     },[])
  
//     console.log("@tm comments data in users", userInfo.commentsData )
//     return(
//         <>
        
//         <Navigation/>
//         <h1>users</h1>
//         <ul>
//             <div className='a2'>
//                 {user.map(user => (
//                     <div className='a3'>
//                     <div key={user.id} className='a1'>
                        
//                         <h3>{user.name}</h3>
//                         <p> {user.email}</p>
//                         <p> {user.username}</p>
//                         <p> {user.phone}</p>
//                         <p> {user.website}</p>
//                         </div>
//                     </div>
                
//                 ))}
//                 </div>
//             </ul>
        
//         </>
//     )
// }
// export default User

//             const [userResponse, setUserRespose] = useState([])
        
//             useEffect(() => {
//                 fetch("https://jsonplaceholder.typicode.com/users")
//                     .then(a => a.json())
//                     .then(b => {import Navigation from './Navigation';
//                         import React, {useEffect, useState, useContext} from 'react';
//                         import {UserInfoContext} from './Context'
//                         import Command from './command';
                        
//                         const User=()=>{
//                             const userInfo = useContext(UserInfoContext)
//                             const [user,setUser]=useState([]);
//                             useEffect(()=>{
//                                 fetch("https://jsonplaceholder.typicode.com/users")
//                                 .then(a=> a.json())
//                                 .then(data=>{
//                                     setUser(data);
//                                     userInfo.setUserData(data)
//                                 })
//                             },[])
                          
//                             console.log("@tm comments data in users", userInfo.commentsData )
//                             return(
//                                 <>
                                
//                                 <Navigation/>
//                                 <h1>users</h1>
//                                 <ul>
//                                     <div className='a2'>
//                                         {user.map(user => (
//                                             <div className='a3'>
//                                             <div key={user.id} className='a1'>
                                                
//                                                 <h3>{user.name}</h3>
//                                                 <p> {user.email}</p>
//                                                 <p> {user.username}</p>
//                                                 <p> {user.phone}</p>
//                                                 <p> {user.website}</p>
//                                                 </div>
//                                             </div>
                                                

//                                         ))}
//                                         </div>
//                                     </ul>
                                
//                                 </>
//                             )
//                         }
//                         export default User        

//                         setUserRespose(b)
//                     })
//             }, [])
        
//             return (
//                 <>        

//                     <Navigation />
//                     <h1 className="nav">user</h1>
//                     <div className="head">
//                     {userResponse.map((item) => (
//                         <>                     
//                             <div className="item">
//                                 <p>{item.id}</p>        

//                                 <p>{item.name}</p>
//                                 <p>{item.username}</p>
//                                 <p>{item.email}</p>
//                                 <p>{item.address.street}</p>
//                                 <p>{item.address.suite}</p>
//                                 <p>{item.address.city}</p>        

//                                 <p>{item.address.zipcode}</p>
//                                 <p>{item.address.geo.lat}</p>
//                                 <p>{item.address.geo.lng}</p>        

//                                 <p>{item.phone}</p>
//                                 <p>{item.website}</p>
//                                 <p>{item.company.name}</p>// import Navigation from "./Navigation";
// import { useEffect, useState } from "react"

// const Commands = () => {
//     const [userResponse, setUserRespose] = useState([])

// useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/comments")        

//     .then(a =>a.json())
//         .then(b => {
//             // console.log(b)        

//             setUserRespose(b)    
//         })
//     },)        

//     return(
//         <>
//         <Navigation/>        

//         <h1 className="navc">commands</h1>
//         <div className="header">
//             {userResponse.map((item) => (                


//                 <>
//                     <div className="items">
//                         <p>{item.id}</p>
//                         <p>{item.name}</p>
//                         <p>{item.username}</p>
//                         <p>{item.email}</p>
//                         <p>{item.body}</p>
//                     </div>
//                 </>
//             ))}
//         </div >
//         </>        

//     )
// }
// // }
// export default Commands

                


//                                 <p>{item.company.catchPhrase}</p>
//                                 <p>{item.company.bs}</p>
        
        
        
//  </div>        








import Navigation from './Navigation';
import React, {useEffect, useState, useContext} from 'react';
import {UserInfoContext} from './Context'


const User=()=>{
    const userInfo = useContext(UserInfoContext)
    const [user,setUser]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(a=> a.json())
        .then(data=>{
            setUser(data);
            userInfo.setUserData(data)
        })
    },[])
  
    console.log("@tm comments data in users", userInfo.commentsData )
    return(
        <>
        
        <Navigation/>
        <h1>users</h1>
        <ul>
            <div className='a2'>
                {user.map(user => (
                    <div className='a3'>
                    <div key={user.id} className='a1'>
                        
                        <h3>{user.name}</h3>
                        <p> {user.email}</p>
                        <p> {user.username}</p>
                        <p> {user.phone}</p>
                        <p> {user.website}</p>
                        </div>
                    </div>
                
                ))}
                </div>
            </ul>
        
        </>
    )
}
export default User