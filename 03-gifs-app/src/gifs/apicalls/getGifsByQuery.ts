import axios from 'axios';
import type { GiphyResponse } from '.././interfaces/giphy.response';
import type { Gif } from '.././interfaces/gif.interface';

export const getGifsByQuery = async (query: string): Promise<Gif []> => {
    const response = await axios.get<GiphyResponse>('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: query,
            limit: 10,
            lang: 'en',
            api_key: 'dF7VEWycFckZGM31iEjybeWtZRbVSjEE'
        }
    });
    return response.data.data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }));
// fetch(`https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${query}&limit=10`)
}