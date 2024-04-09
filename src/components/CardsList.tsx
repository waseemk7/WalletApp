import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const cards = [
  require('../../assets/cards/Card_1.jpg'),
  require('../../assets/cards/Card_2.jpg'),
  require('../../assets/cards/Card_3.jpg'),
  require('../../assets/cards/Card_4.jpg'),
  require('../../assets/cards/Card_5.jpg'),
  require('../../assets/cards/Card_6.jpg'),
  require('../../assets/cards/Card_7.jpg'),
  require('../../assets/cards/Card_8.jpg'),
  require('../../assets/cards/Card_9.jpg'),
];

const CardsList = () => {
  const pan = Gesture.Pan()
    .onStart(() => {
      console.log('Panning started');
    })
    .onChange(() => {
      console.log('Panning');
    })
    .onEnd(() => {
      console.log('Panning ended');
    });

  return (
    <GestureDetector gesture={pan}>
      <View style={styles.padding10}>
        {cards.map((card, index) => (
          <Image key={index} source={card} style={styles.image} />
        ))}
      </View>
    </GestureDetector>
  );
};

export default CardsList;

const styles = StyleSheet.create({
  padding10: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 7 / 4,
    marginVertical: 5,
  },
});
