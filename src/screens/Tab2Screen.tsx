import React, { useEffect } from 'react'
import { Text } from 'react-native'

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('Tab2Screen')
  }, [])

  return (
    <Text>Tab2Screen</Text>
  )
}
