import { AuthService } from '../service/auth/auth.service';

export function LoginRequired(t) {
  const auth = t.injector().get(AuthService);
  const state = t.router.stateService;

  if (!auth.isAuthenticated()) { return state.target('login'); }
}

export function Disconnect(t) {
  // console.log("logout");
  const auth = t.injector().get(AuthService);
  const state = t.router.stateService;

  auth.removeToken();
  return state.target('login');
}
