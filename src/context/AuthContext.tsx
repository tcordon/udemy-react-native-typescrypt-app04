import { createContext, useReducer } from "react"
import { authReducer } from "./authReducer"

// Definir la información que tendremos aquí
export interface AuthState {
  isLoggedIn: boolean
  userName?: string
  favoriteIcon?: string
}

// Estado inicial
export const authInitialState:AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined
}

// Lo usaremos para que React sepa lo que se expone en el contexto
export interface AuthContextProps {
  authState: AuthState,
  signIn: () => void,
  signOut: () => void,
  changeFavouriteIcon: (iconName: string) => void
}

// Creamos el Contexto
export const AuthContext = createContext({} as AuthContextProps)

// Componente proveedor del estado
export const AuthProvider = ({children}:any) => {
  const [ authState, dispatch ] = useReducer(authReducer, authInitialState)

  // Función para el SignIn
  const signIn = () => {
    dispatch({type: 'signIn'})
  }

  // Función para el SignOut
  const signOut = () => {
    dispatch({type: "signOut"})
  }

  // Función para el cambio de icono
  const changeFavouriteIcon = (iconName: string) => {
    dispatch({ type: "changeFavIcon", payload: iconName})
  }

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      signOut,
      changeFavouriteIcon
    }}>
      {children}
    </AuthContext.Provider>
  )
}