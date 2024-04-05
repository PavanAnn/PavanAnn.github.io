import React, { useState, useEffect } from 'react';
import { Container, WelcomeMessage, AuthButton, AnimeContainer } from './styles';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { Divider, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const Home: React.FC = () => {
  const [animeList, setAnimeList] = useState<any>();
  const [loadingList, setLoadingList] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [randomCheckboxes, setRandomCheckboxes] = useState<string[]>([]);
  const [guessResult, setGuessResult] = useState('');
  const [check, setCheck] = useState('')
  const [points, setPoints] = useState(0)

  useEffect(() => {
    getAnimeList();
  }, []);
 
  useEffect(() => {
    generateRandomCheckboxes();
  }, [animeList, currentItemIndex]);

  async function getAnimeList() {
    setLoadingList(true);
    const apiUrl = `https://extreme-height-419117.rj.r.appspot.com/anime/ranking?ranking_type=all&limit=5`;
    try {
      const res = await axios.get(apiUrl, {
        headers: {
          'X-MAL-CLIENT-ID': process.env.MAL_CLIENT_ID
        }
      });
      if (res.status === 200) {
        const shuffledAnimeList = shuffleArray(res.data.data);
        setAnimeList(shuffledAnimeList);
        setLoadingList(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoadingList(false);
    }
  }

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  function mapList() {
    animeList.map((item: any) => {
      console.log(item.node.title)
    }) 
    console.log(currentItemIndex)
  }

  const generateRandomCheckboxes = () => {
    if (animeList && animeList.length > 0) {

      // length = 5
      const randomNames: string[] = [];
      const usedIndexes: number[] = [];
      while (randomNames.length < 4) {
        const randomIndex = Math.floor(Math.random() * animeList.length);
        if (!usedIndexes.includes(randomIndex)) {
          randomNames.push(animeList[randomIndex].node.title);
          usedIndexes.push(randomIndex);
        }
      }
      const correctAnswerIndex = Math.floor(Math.random() * 5);
      randomNames.splice(correctAnswerIndex, 0, animeList[currentItemIndex].node.title);
      setRandomCheckboxes(randomNames);
    }
  };
  
  const handleCheckboxChange = (value: string) => {
    setCheck(value);
  };

  const handleGuess = () => {
    if (animeList[currentItemIndex].node.title === check) {
      setGuessResult('Correct guess!');
      setPoints(points+1)
    } else {
      setGuessResult('Incorrect guess! Try again.');
    }
    handleNextItem()
  };

  const handleNextItem = () => {
    setCurrentItemIndex(prevIndex => prevIndex + 1);
    setGuessResult('');
    generateRandomCheckboxes();
  };

  return (
    <Container>
      <WelcomeMessage onClick={() => mapList()}>Correct Guesses {'-> '} {points}</WelcomeMessage>
      <AuthButton onClick={getAnimeList}>Get Anime List</AuthButton>
      {loadingList ? (
        <CircularProgress style={{ marginTop: '60px' }} />
      ) : animeList && currentItemIndex < animeList.length ? (
        <AnimeContainer key={animeList[currentItemIndex].node.id}>
          <img style={{ filter: 'blur(10px)' }} src={animeList[currentItemIndex].node.main_picture.large} alt={animeList[currentItemIndex].node.title} />
          <FormGroup>
            {randomCheckboxes.map((label, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }}
                    checked={label === check}
                    onChange={() => handleCheckboxChange(label)}
                    value={label}
                  />
                }
                label={label}
              />
            ))}
          </FormGroup>
          <AuthButton onClick={handleGuess}>Check Guess</AuthButton>
          {guessResult && <Typography>{guessResult}</Typography>}
          <Divider />
        </AnimeContainer>
      ) : null}
    </Container>
  );
};

export default Home;
