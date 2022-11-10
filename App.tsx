import React, { Children } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { LateralMenuStackNavigation } from './src/navigation/LateralMenuStackNavigation'
import { AuthProvider } from './src/context/AuthContext'

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        { /* <MainStackNavigation /> */ }
        <LateralMenuStackNavigation />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}:any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App
