/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {
  useSharedValue,
  withDecay,
  clamp,
  withClamp,
} from 'react-native-reanimated';
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

  const {height: screenHeight} = useWindowDimensions();

  const [listHeight, setListHeight] = useState(0);

  const maxScrollY = listHeight - screenHeight + 100;

  const activeCardIndex = useSharedValue(null);

  const pan = Gesture.Pan()
    .onBegin(() => {})
    .onStart(() => {
      console.log('Panning started');
    })
    .onChange(event => {
      scrollY.value = clamp(scrollY.value - event.changeY, 0, maxScrollY);
    })
    .onEnd(event => {
      scrollY.value = withClamp(
        {min: 0, max: maxScrollY},
        withDecay({velocity: -event.velocityY}),
      );
    });

  return (
    <GestureDetector gesture={pan}>
      <View
        style={styles.padding10}
        onLayout={event => setListHeight(event.nativeEvent.layout.height)}>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            scrollY={scrollY}
            activeCardIndex={activeCardIndex}
          />
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
});
