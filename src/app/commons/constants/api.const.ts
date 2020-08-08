import { urlFormat } from '../utils/http.utils';

import { API_URL } from './config.const';



/* User endpoints
 */
export const USER_API = urlFormat(API_URL, 'me/');


/* Browse endpoints */
export const BROWSE_API       = urlFormat(API_URL, 'browse/');
export const FEATURED_API     = urlFormat(BROWSE_API, 'featured-playlists');
export const NEW_RELEASE_API  = urlFormat(BROWSE_API, 'new-releases');
export const RECOMMENDED_API  = urlFormat(API_URL, 'recommendations/');
export const GENRE_API        = urlFormat(RECOMMENDED_API, 'available-genre-seeds');

/* Playlist endpoint */
export const PLAYLIST_API     = urlFormat(API_URL, 'playlists/');


