
import { AuthState } from './AuthContext'

type AuthAction =
  | { type: 'signIn' }
  | { type: 'signOut' }
  | { type: 'changeFavIcon', payload: string }


export const authReducer = ( state:AuthState, action:AuthAction ):AuthState => {
  switch(action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'no-username-yet'
      }

    case 'signOut':
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favoriteIcon: undefined
      }

    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }

    default:
      return state
  }

}