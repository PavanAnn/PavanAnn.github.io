// Import axios module
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiUrl = 'https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=100';
  let animeList = null;
  let loadingList = true;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'X-MAL-CLIENT-ID': '09ca53e8e4f9cd4d40d8fafafb7285fb',
      },
    });

    if (response.status === 200) {
      animeList = shuffleArray(response.data.data);
      loadingList = false;
    }

    res.status(response.status).json({ animeList, loadingList });
  } catch (error: any) {
    console.error('Error fetching data:', error);
    loadingList = false;
    res.status(error.response?.status || 500).json({ error: 'Failed to fetch data' });
  }
}
