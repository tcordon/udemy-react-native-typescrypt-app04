import React, { useEffect } from 'react'
import { Text } from 'react-native'

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen')
  }, [])

  return (
    <Text>Tab1Screen</Text>
  )
}
