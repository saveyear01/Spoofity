import { urlFormat } from '../utils/http.utils';

import { API_URL } from './config.const';

/* User endpoints
 */
export const USER_API = urlFormat(API_URL, 'v1', 'me/');
