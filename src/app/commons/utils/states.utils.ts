import { AUTH_STATE } from 'src/app/components/auth/auth.states'
import { HOME_STATES } from 'src/app/components/home/home.states'

export const APP_STATES =  {
  otherwide: '/',
  states: [].concat(
    AUTH_STATE,
    HOME_STATES
  )
}
