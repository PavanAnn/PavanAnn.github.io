import React, { useState, useEffect } from 'react';
import { Container, WelcomeMessage, AuthButton, AnimeContainer, CheckboxGroup, AnimeImage, CustomCheckbox, LoadingSpinner, ResultMessage, ImgContainer, CheckGrid } from './styles';
import axios from 'axios';
import { Divider, FormControlLabel } from '@mui/material';

const Home: React.FC = () => {
  const [animeList, setAnimeList] = useState<any[]>([]);
  const [loadingList, setLoadingList] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [randomCheckboxes, setRandomCheckboxes] = useState<string[]>([]);
  const [guessResult, setGuessResult] = useState('');
  const [check, setCheck] = useState('');
  const [points, setPoints] = useState(0);

  useEffect(() => {
    getAnimeList();
  }, []);

  useEffect(() => {
    generateRandomCheckboxes();
  }, [animeList, currentItemIndex]);

  async function getAnimeList() {
    setLoadingList(true);
    const apiUrl = `https://extreme-height-419117.rj.r.appspot.com/anime/ranking?ranking_type=all&limit=200`;
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

  const generateRandomCheckboxes = () => {
    if (animeList && animeList.length > 0) {
      const uniqueNamesSet = new Set<string>();
      const uniqueNames: string[] = [];
      const totalOptions = animeList.length;
  
      while (uniqueNamesSet.size < 4) {
        const randomIndex = Math.floor(Math.random() * totalOptions);
        const animeTitle = animeList[randomIndex].node.title;
        if (animeTitle !== animeList[currentItemIndex].node.title) {
          uniqueNamesSet.add(animeTitle);
        }
      }
  
      uniqueNamesSet.forEach(name => uniqueNames.push(name));
  
      const correctAnswerIndex = Math.floor(Math.random() * 5);
      uniqueNames.splice(correctAnswerIndex, 0, animeList[currentItemIndex].node.title);
      const shuffledCheckboxes = shuffleArray(uniqueNames);
      setRandomCheckboxes(shuffledCheckboxes);
      setCheck('');
    }
  };
      
  const handleCheckboxChange = (value: string) => {
    setCheck(value);
  };

  const handleGuess = () => {
    if (animeList[currentItemIndex].node.title === check) {
      setGuessResult('Correct guess!');
      setPoints(points + 1);
    } else {
      setGuessResult('Incorrect guess! Try again.');
    }
    handleNextItem();
  };

  const handleNextItem = () => {
    setCurrentItemIndex(prevIndex => prevIndex + 1);
    setGuessResult('');
    generateRandomCheckboxes();
  };

  function uwu() {
    console.log(animeList);
  }

  return (
    <Container onClick={() => uwu()}>
      <WelcomeMessage>Correct Guesses: {points}</WelcomeMessage>
{ /* <AuthButton onClick={getAnimeList} color='secondary'>Get Anime List</AuthButton> */}
    {loadingList ? (
        <LoadingSpinner />
      ) : (animeList && currentItemIndex < animeList.length ? (
        <AnimeContainer key={animeList[currentItemIndex].node.id}>
          <ImgContainer>
          <AnimeImage src={animeList[currentItemIndex].node.main_picture.large} alt={'Cheat-proof front!'} />
          </ImgContainer>
          <CheckboxGroup>
            {randomCheckboxes.map((label, index) => (
              <CheckGrid onClick={() => handleCheckboxChange(label)}>
                <FormControlLabel
                style={{ marginLeft: '5px' }}
                  key={index}
                  control={
                      <CustomCheckbox checked={label === check} onChange={() => handleCheckboxChange(label)} value={label} />
                  }
                  label={label}
                />
              </CheckGrid>
            ))}
          </CheckboxGroup>
          <AuthButton onClick={handleGuess}>Check Guess</AuthButton>
          {guessResult && <ResultMessage>{guessResult}</ResultMessage>}
          <Divider />
        </AnimeContainer>
      ) : null
      )}
    </Container>
  );
};

export default Home;
