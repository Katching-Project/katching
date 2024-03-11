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
});
