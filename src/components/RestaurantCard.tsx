import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import {color, spacing} from '../constants/theme';

interface RestaurantCardProps {
  title: string;
  onPress: () => void;
  rating: number;
}
const RestaurantCard: React.FC<RestaurantCardProps> = ({
  title,
  onPress,
  rating,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          source={require('../assets/images/img.png')}
          style={styles.imageStyle}
          borderRadius={4}
        />
      </View>
      <View style={styles.center} pointerEvents={'none'}>
        <Text style={styles.textStyle}>{title}</Text>
        <StarRating
          rating={rating}
          onChange={() => {}}
          starSize={22}
          starStyle={styles.starStyle}
          maxStars={Math.ceil(rating)}
          enableHalfStar
        />
      </View>
      <View style={styles.right}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
          <Image
            source={require('../assets/images/map.png')}
            style={styles.mapImageStyle}
            resizeMode={'center'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.white,
    borderRadius: spacing.s,
    marginTop: spacing.m,
    marginHorizontal: spacing.l,
    padding: spacing.m,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  left: {flex: 1},
  imageStyle: {
    height: 60,
    width: 60,
  },
  center: {
    flex: 2,
    justifyContent: 'center',
  },
  textStyle: {
    color: color.black,
    fontSize: spacing.m - 2,
    marginLeft: spacing.s - 4,
    marginBottom: spacing.s - 4,
  },
  starStyle: {marginLeft: 0, marginRight: 0},
  right: {flex: 1, alignItems: 'flex-end', justifyContent: 'center'},
  buttonStyle: {
    backgroundColor: color.primaryColor,
    borderRadius: spacing.s,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
  mapImageStyle: {},
});
export default RestaurantCard;
