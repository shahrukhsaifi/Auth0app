import React from 'react'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton '
import Profile from './components/Profile '
import { useAuth0 } from '@auth0/auth0-react'

const App = () => {
    const { isloading } = useAuth0()
    if(isloading) return <div>Loading Website</div>
  return (
    <>
      <LoginButton/>
      <LogoutButton/>
      <Profile/>    
    </>
  )
}

export default App
