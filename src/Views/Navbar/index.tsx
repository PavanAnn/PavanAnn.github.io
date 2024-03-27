import React from 'react'
import { Header, WebsiteName } from './styles'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

const navigate = useNavigate()
    
    const redirectHome = () => {
        navigate('/')
      };
    
  return (
            <Header>
                <WebsiteName onClick={() => redirectHome()}>NILA's Overworked Anime Quizz</WebsiteName>
            </Header>
  )
}

