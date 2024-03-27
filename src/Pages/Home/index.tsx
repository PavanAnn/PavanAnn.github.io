import React, { useState } from 'react';
import { Container, WelcomeMessage, AuthButton } from './styles';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const Home: React.FC = () => {
  const corsAnywhereUrl = 'http://localhost:3000/';
  const [anime, setAnime] = useState<any>();
  const [loading, setLoading] = useState(false);

  async function getRandomAnime() {
    setLoading(true); 
    while (true) {
      let firstDigit = Math.floor(1 + Math.random() * 5);
      let randomId = firstDigit * 10000 + Math.floor(Math.random() * 10000); 
      const apiUrl = `https://api.myanimelist.net/v2/anime/${randomId}`;
      try {
        const res = await axios.get(apiUrl, {
          headers: {
            "X-MAL-CLIENT-ID": "09ca53e8e4f9cd4d40d8fafafb7285fb"
          }
        });
        console.log(res.data);
        if (res.status === 200) {
          setAnime(res.data);
          setLoading(false); 
          break;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }

  return (
    <Container>
      <WelcomeMessage>NILA's Overworked Anime Quizz</WelcomeMessage>
      <AuthButton onClick={getRandomAnime}>Get Random Anime</AuthButton>
      {loading ? (
        <CircularProgress style={{ marginTop: '30px' }}/> 
      ) : anime ? (
        <div>
          <h2>Anime Information:</h2>
          <p>Title: {anime.title}</p>
          <p>ID: {anime.id}</p>
          <img src={anime.main_picture.large} alt={anime.title} />
        </div>
      ) : null}
    </Container>
  );
};

export default Home;
