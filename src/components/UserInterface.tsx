import React, { useEffect, useState } from "react";
import axios from 'axios'
import CardCompoent from "./CardComponent";
import { create } from "domain";

interface User {
     id: number
     name: string
     email: string
}

interface UserInterfaceProps {
     backendName: string
}

const UserInterface: React.FC<UserInterfaceProps> = ({backendName}) => {

     const apiUrl = process. env.NEXT_PUBLIC_API_URL || 'http://media-server.local:6963';
     const [users, setUsers] = useState<User []>([]);
     const [newUser, setNewUser] = useState({name: '', email: ''})
     const [updateUser, setUpdateUser] = useState({id:'', name: '', email: ''})

     const backgroundColors: {[key: string]: string} = {
          go: 'bg-cyan-500',
     }
     const buttonColors: {[key: string]: string} = {
          go: 'bg-cyan-700 hover:bg-blue-600',
     }
     const bgColor = backgroundColors[backendName as keyof typeof backgroundColors] || 'bg-grey-200'
     const btnColor = backgroundColors[backendName as keyof typeof backgroundColors] || 'bg-grey-500'


     // Create user

     const createUser = async (e: React.FormEvent<HTMLFormElement>) =>{
          e.preventDefault()
          try{
               const response = await axios.post(`${apiUrl}/api/${backendName}/users`, newUser)
               setUsers([response.data, ...users])
               setNewUser({name: '', email:''})
          }
          catch(error){
               console.error("Error creating user: ", newUser.name, error)
          }

     }

     //  Delete User

     const deleteUser = async (userId: number) => {
          try{
              await axios.delete(`${apiUrl}/api/${backendName}/users/${userId}`)
              setUsers(users.filter((user) => user.id != userId))
          } catch (error) {
               console.error("Cold not delete User: ", error)
          }
     }

     // Update a User
     const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          try{
               await axios.put(`${apiUrl}/api/${backendName}/users/${updateUser.id}`,{ name: updateUser.name, email: updateUser.email})
               setUpdateUser({id: '', name: '', email: ''})
               setUsers(
                    users.map((user) => {
                         if(user.id === parseInt(updateUser.id)){
                              return {...user, name: updateUser.name, email: updateUser.email }
                         }
                         return user
                    })
               )
          } catch (error){
               console.error("Cold not update user: ", error)
          }
     }

     // Fetch All Users

     useEffect(() =>{
          const fetchData = async () =>{
               try {
                    const response = await axios.get(`${apiUrl}/api/${backendName}/users`)
                    setUsers(response.data.reverse())
               }
               catch (error){
                    console.error("Could not fetch all users")
               }
          }
          fetchData()
     },[backendName, apiUrl])

     return(
          <div className={`user-interface ${bgColor} ${backendName} w-full max-w-md p-4 my-4 rounded-lg`}>
               <h2 className="text-2xl font-bold text-cyan-100">Users</h2>
               {/* Create User */}
               <div className="my-4 rounded-lg py-4 px-6 border-4 border-blue-100">
                    <h3 className="font-semibold text-xl text-blue-100"> Create New User</h3>
                    <form onSubmit={createUser} className="my-2 mb-6 p-4 bg-blue-100 rounded-lg shadow">
                         <input 
                              placeholder="Name"
                              value={newUser.name}
                              onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                              className="mb-2 w-full p-2 border border-gray-300 rounded"
                         />
                         <input 
                              placeholder="email"
                              value={newUser.email}
                              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                              className="mb-2 w-full p-2 border border-gray-300 rounded"
                         />
                         <button type="submit" className="w-full mb-2 p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                              Add User 
                         </button>
                    </form>
               </div>

                {/* Update User */}
               <div className="my-4 rounded-lg py-4 px-6 border-4 border-blue-100">
                    <h3 className="font-semibold text-xl text-blue-100"> Update User</h3>
                    <form onSubmit={handleUpdateUser} className="my-2 mb-6 p-4 bg-blue-100 rounded-lg shadow">
                         <input 
                              placeholder="User ID"
                              value={updateUser.id}
                              onChange={(e) => setUpdateUser({...updateUser, id: e.target.value})}
                              className="mb-2 w-full p-2 border border-gray-300 rounded"
                         />
                         <input 
                              placeholder="New Name"
                              value={updateUser.name}
                              onChange={(e) => setUpdateUser({...updateUser, name: e.target.value})}
                              className="mb-2 w-full p-2 border border-gray-300 rounded"
                         />
                         <input 
                              placeholder="New Email"
                              value={updateUser.email}
                              onChange={(e) => setUpdateUser({...updateUser, email: e.target.value})}
                              className="mb-2 w-full p-2 border border-gray-300 rounded"
                         />
                         <button type="submit" className="w-full mb-2 p-2 text-white bg-green-500 rounded hover:bg-green-600">
                              Update User 
                         </button>
                    </form>
               </div>

               {/* List Users */}
               <div className="space-y-4">
                    {users.map((user) =>(
                         <div key={user.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                              <CardCompoent card={user}/>
                              <button onClick={() => deleteUser(user.id)} className={`${btnColor} text-white py-2 px-4 rounded`}>
                                   Delete User
                              </button>
                                   
                         </div>
                    )

                    )}
               </div>
          </div>
     )
}
export default UserInterface