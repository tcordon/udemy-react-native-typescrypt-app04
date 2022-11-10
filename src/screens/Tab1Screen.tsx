import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TouchableIcon } from '../components/TouchableIcon'
import { globalStyles } from '../theme/appTheme'

export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets()

  useEffect(() => {
    console.log('Tab1Screen')
  }, [])

  return (
    <View style={{
      ...globalStyles.globalMargin,
      marginTop: top + 10
    }}>
      <Text style={globalStyles.title}> Iconos </Text>

      <Text>
        <TouchableIcon name='airplane-outline' size={80} color={globalStyles.primaryColor.color} />
        <TouchableIcon name='attach-outline' size={80} color={globalStyles.primaryColor.color} />
        <TouchableIcon name='bonfire-outline' size={80} color={globalStyles.primaryColor.color} />
        <TouchableIcon name='calculator-outline' size={80} color={globalStyles.primaryColor.color} />
        <TouchableIcon name='chatbubble-ellipses-outline' size={80} color={globalStyles.primaryColor.color} />
        <TouchableIcon name='images-outline' size={80} color={globalStyles.primaryColor.color} />
        <TouchableIcon name='leaf-outline' size={80} color={globalStyles.primaryColor.color} />
      </Text>
    </View>
  )
}
