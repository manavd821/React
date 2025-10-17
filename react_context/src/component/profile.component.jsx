import React, { useContext } from 'react'
import { UserContext } from '../context/user.context'

export default function Profile() {
    const { user } = useContext(UserContext)
    
return (
        !user ? 
        (
            <div>
                Please Login
                
            </div>
        ) : (
            <div>
                Welcome {user.username}
            </div>
        )
  )
}
