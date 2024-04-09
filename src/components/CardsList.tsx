/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {useSharedValue} from 'react-native-reanimated';
import Card from './Card';

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
  const scrollY = useSharedValue(0);

  const pan = Gesture.Pan()
    .onStart(() => {
      console.log('Panning started');
    })
    .onChange(event => {
      scrollY.value = scrollY.value - event.changeY;
      console.log('ScrollY value', scrollY.value);
    })
    .onEnd(() => {
      console.log('Panning ended');
    });

  return (
    <GestureDetector gesture={pan}>
      <View style={styles.padding10}>
        {cards.map((card, index) => (
          <Card card={card} index={index} scrollY={scrollY} />
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
