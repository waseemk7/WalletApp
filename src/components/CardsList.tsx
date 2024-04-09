import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const CardsList = () => {
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
  return (
    <View>
      {cards.map((card, index) => (
        <Image key={index} source={card} style={styles.image} />
      ))}
    </View>
  );
};

export default CardsList;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 7 / 4,
    marginVertical: 5,
  },
});
