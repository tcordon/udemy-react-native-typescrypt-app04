import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  primaryColor: {
    color: 'blue'
  },
  globalMargin: {
    marginHorizontal: 20
  },
  title: {
    fontSize: 30
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 10
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  menuBoton: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuTexto: {
    fontSize: 30,
    paddingLeft: 10
  }
})
