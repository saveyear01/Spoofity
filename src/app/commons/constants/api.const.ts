import { urlFormat } from '../utils/http.utils';

import { API_URL } from './config.const';



/* User endpoints
 */
export const USER_API = urlFormat(API_URL, 'me/');


/* Browse endpoints */
export const BROWSE_API     = urlFormat(API_URL, 'browse/');
export const FEATURED_API   = urlFormat(BROWSE_API, 'featured-playlists');
