import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    border: 'solid',
    padding: 8,
    borderColor: 'black',
    borderRadius: 5,
  },
  cardStyle: {
    borderColor: 'black',
    marginVertical : 5,
  }
});