import { StyleSheet } from 'react-native';

export const idolGroupSelectStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100vw',
    height: '100vh'
  },
  imageCard: {
    justifyContent: 'center', /* Horizontally center */
    alignItems: 'center', /* Vertically center */
    width: '50%',
    opacity: 0.5
  }
});
