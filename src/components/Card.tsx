/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Animated, {
  Easing,
  clamp,
  useAnimatedReaction,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {useWindowDimensions} from 'react-native';

const Card = ({card, index, scrollY, activeCardIndex}) => {
  const {height: screenHeight} = useWindowDimensions();

  const [cardHeight, setCardHeight] = useState(0);

  const translateY = useSharedValue(0);

  useAnimatedReaction(
    () => scrollY.value,
    current => {
      translateY.value = clamp(-current, -index * cardHeight, 0);
    },
  );

  useAnimatedReaction(
    () => activeCardIndex.value,
    (current, previous) => {
      if (current === previous) {
        return;
      }
      if (activeCardIndex.value === null) {
        // No card selected move to list view
        translateY.value = withTiming(clamp(-current, -index * cardHeight, 0));
      } else if (activeCardIndex.value === index) {
        //This card becomes active
        translateY.value = withTiming(-index * cardHeight, {
          easing: Easing.out(Easing.quad),
          duration: 500,
        });
      } else {
        //Another card is active move to bottom
        translateY.value = withTiming(
          -index * cardHeight * 0.9 + screenHeight * 0.7,
          {
            easing: Easing.out(Easing.quad),
            duration: 500,
          },
        );
      }
    },
  );

  const tap = Gesture.Tap().onEnd(() => {
    if (activeCardIndex.value === null) {
      activeCardIndex.value = index;
    } else {
      activeCardIndex.value = null;
    }
  });

  return (
    <GestureDetector gesture={tap}>
      <Animated.Image
        source={card}
        onLayout={event => setCardHeight(event.nativeEvent.layout.height + 10)}
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 7 / 4,
          marginVertical: 5,
          transform: [{translateY: translateY}],
        }}
      />
    </GestureDetector>
  );
};

export default Card;
