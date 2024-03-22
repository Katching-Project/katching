import { StyleSheet } from 'react-native';

export const basicStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    color: 'black',
  },
  swipeArea: {
    position: 'absolute',
    bottom: 0, // Position at the bottom of the screen
    left: 0,
    right: 0,
    height: '30%',
    justifyContent: 'flex-end', // Set swiping area to the end of the screen
    alignItems: 'center',
    paddingVertical: '10%'
  },
  swipeText: {
    fontSize: 20,
    fontFamily: 'Arial'
  },
});
