import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CardsList from './src/components/CardsList';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <CardsList />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
