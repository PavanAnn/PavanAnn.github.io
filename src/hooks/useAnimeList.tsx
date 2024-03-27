import create from 'zustand';
import axios, { AxiosRequestConfig } from 'axios';

// Define the type for your anime object
interface Anime {
  id: number;
  title: string;
  episodes: number;
  imageUrl: string;
}

// Define the type for your Zustand store state
interface AnimeState {
  animeList: Anime[];
  isAuthenticated: boolean;
  authenticate: () => void;
  fetchAnime: () => Promise<void>;
}

const useAnimeStore = create<AnimeState>((set) => ({
  animeList: [],
  isAuthenticated: false,
  authenticate: () => {
    // Redirect the user to the authorization URL for OAuth2 implicit flow
    window.location.href = 'https://myanimelist.net/v1/oauth2/authorize';
  },
  fetchAnime: async () => {
    try {
      // Set your API client ID obtained from MyAnimeList
      const clientId = 'YOUR_CLIENT_ID';

      // Define the Axios request configuration including the API key header
      const config: AxiosRequestConfig = {
        headers: {
          'X-MAL-CLIENT-ID': clientId,
        },
      };

      // Make the authenticated API call to fetch anime data
      const response = await axios.get('https://api.myanimelist.net/v2/anime', config);

      // Extract relevant data from the response
      const animeList = response.data.data.map((anime: any) => ({
        id: anime.node.id,
        title: anime.node.title,
        episodes: anime.node.num_episodes,
        imageUrl: anime.node.main_picture.medium,
      }));

      // Update the state with the fetched animeList
      set({ animeList });
    } catch (error) {
      console.error('Error fetching anime:', error);
    }
  },
}));

export default useAnimeStore;
