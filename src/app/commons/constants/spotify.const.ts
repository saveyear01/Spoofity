export const REQUEST_AUTH_URL = 'https://accounts.spotify.com/authorize';

export const CLIENT_ID = 'acf5bb5f6f2146ddaf236993295e7fa1';

export const SCOPES = [
  'user-read-email',
];

export const AUTH_CONFIG = {
  client_id: CLIENT_ID,
  response_type: "token",
  redirect_uri: "http://localhost:4200/login",
  state: "",
  show_dialog: true,
  scope: SCOPES
};
