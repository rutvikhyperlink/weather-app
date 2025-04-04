import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {FontFamily} from '../../constants/FontFamilyConstants';
import {FontSize} from '../../constants/FontConstants';
import {getHeight, getWidth} from '../../constants/StylesConstants';
import {darkTheme, lightTheme} from '../../constants/ColorConstants';

const WeatherCard = ({
  item,
  index,
  hourlyData,
}: {
  item: any;
  index: any;
  hourlyData: any;
}) => {
  const colorScheme = useColorScheme();
  const Colors = colorScheme === 'dark' ? darkTheme : lightTheme;
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: Colors.hourlyBackground,
          marginRight: hourlyData.length - 1 == index ? getWidth(20) : 10,
          marginLeft: index == 0 ? getWidth(20) : 0,
        },
      ]}>
      <Text style={[styles.time, {color: Colors.hourlyText}]}>
        {item.datetime.substring(0, 5)}
      </Text>
      <Image
        resizeMode="contain"
        source={{
          uri: `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${item.icon}.png`,
        }}
        //https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${item.icon}.png
        style={styles.icon}
      />
      <Text style={[styles.temp, {color: Colors.hourlyText}]}>
        {item.temp}°C
      </Text>
      <Text style={[styles.condition, {color: Colors.hourlyText}]}>
        {item.conditions}
      </Text>
    </View>
  );
};

const HourlyWeather = (props: any) => {
  const flatListRef = useRef<FlatList>(null);
  // Set Current Index
  useEffect(() => {
    if (props.hourlyData?.length) {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();
      const formattedTime = `${String(currentHour).padStart(2, '0')}:${String(
        currentMinute,
      ).padStart(2, '0')}`;

      let closestIndex = props.hourlyData.findIndex((item: any) =>
        item.datetime.startsWith(formattedTime.substring(0, 2)),
      );

      if (closestIndex === -1) {
        closestIndex = props.hourlyData.findIndex(
          (item: any) => Number(item.datetime.substring(0, 2)) >= currentHour,
        );
      }

      if (closestIndex !== -1 && flatListRef.current) {
        setTimeout(() => {
          flatListRef.current?.scrollToIndex({
            index: closestIndex,
            animated: true,
            viewPosition: 0,
          });
        }, 500);
      }
    }
  }, [props.hourlyData]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={props?.hourlyData}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          marginBottom: getHeight(20),
        }}
        style={{}}
        renderItem={({item, index}) => (
          <WeatherCard
            hourlyData={props?.hourlyData}
            item={item}
            index={index}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={0} // Prevents issues if index is invalid
        getItemLayout={(data, index) => ({
          length: 100, // Width of each item
          offset: 100 * index, // Item offset
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    width: 100,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  time: {
    fontSize: FontSize.size13,
    fontFamily: FontFamily.SemiBold,
  },
  icon: {
    width: getWidth(30),
    aspectRatio: 1,
    marginVertical: 5,
  },
  temp: {
    fontSize: FontSize.size15,
    fontFamily: FontFamily.SemiBold,
  },
  condition: {
    fontSize: FontSize.size12,
    fontFamily: FontFamily.SemiBold,
    textAlign: 'center',
  },
});

export default HourlyWeather;
