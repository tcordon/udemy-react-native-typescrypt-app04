import React, { useContext } from 'react'
import { ColorValue } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

import { AuthContext } from '../context/AuthContext'
import { globalStyles } from '../theme/appTheme'

interface iProps {
  name: string,
  size?: number,
  color?: number|ColorValue|undefined,
  onPress?: (name?:string, size?:number, color?: number|ColorValue|undefined) => void
}

export function TouchableIcon(props:iProps) {
  const { name, size = 80, color = globalStyles.primaryColor.color, onPress = () => {} } = props
  const { changeFavouriteIcon } = useContext(AuthContext)
  return (
    <TouchableOpacity
      onPress={() => changeFavouriteIcon( name )}
    >
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  )
}