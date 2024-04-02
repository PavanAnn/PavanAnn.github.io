// pages/index.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, Button, CheckboxField, Divider, Loader } from '@aws-amplify/ui-react';
import axios from 'axios';

const Home: React.FC = () => {
    const [animeList, setAnimeList] = useState<any>();
    const [loadingList, setLoadingList] = useState(false);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [randomCheckboxes, setRandomCheckboxes] = useState<string[]>([]);
    const [guessResult, setGuessResult] = useState('');
    const [check, setCheck] = useState('');
    const [points, setPoints] = useState(0);
  
    useEffect(() => {
      setLoadingList(true);
      axios.get('/api/get_anime_list')
        .then((response) => {
          setAnimeList(response.data.animeList);
          setLoadingList(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoadingList(false);
        });
    }, []);
    
    useEffect(() => {
      generateRandomCheckboxes();
    }, [animeList, currentItemIndex]);
  
  const generateRandomCheckboxes = () => {
    if (animeList && animeList.length > 0) {
      const randomIndexes = Array.from({ length: 5 }, (_, index) => index);
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
      setPoints(points + 1);
    } else {
      setGuessResult('Incorrect guess! Try again.');
    }
    handleNextItem();
  };

  const handleNextItem = () => {
    setCurrentItemIndex(prevIndex => prevIndex + 1);
    setCheck('')
    setGuessResult('');
    generateRandomCheckboxes();
  };

  return (
    <View textAlign="center">
      <Text fontSize="2xl">Correct Guesses {'-> '} {points}</Text>
      {loadingList ? (
        <View as="div" marginTop="2rem">
          <Loader />
        </View>
      ) : animeList && currentItemIndex < animeList.length ? (
        <View as="div" marginTop="2rem">
          <img style={{ filter: 'blur(10px)' }} src={animeList[currentItemIndex].node.main_picture.large} alt={animeList[currentItemIndex].node.title} />
          <View as='div' marginTop="1rem">
            {randomCheckboxes.map((label, index) => (
              <CheckboxField key={index} value="yes" checked={label === check} onChange={() => handleCheckboxChange(label)} label={label} name={label}/>

            ))}
          </View>
          <Button onClick={handleGuess} marginTop="1rem">Check Guess</Button>
          {guessResult && <Text marginTop="1rem">{guessResult}</Text>}
          <Divider marginTop="1rem" />
        </View>
      ) : null}
    </View>
  );
};

export default Home;
