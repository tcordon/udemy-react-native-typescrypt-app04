import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { LateralMenuStackNavigation } from './src/navigation/LateralMenuStackNavigation'

export const App = () => {
  return (
    <NavigationContainer>
      { /* <MainStackNavigation /> */ }
      <LateralMenuStackNavigation />
    </NavigationContainer>
  )
}

export default App
