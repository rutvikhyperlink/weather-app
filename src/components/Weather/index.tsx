import {
  FlatList,
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {FontFamily} from '../../constants/FontFamilyConstants';
import {styles} from './style';
import {Images} from '../../constants/ImageConstants';
import {getHeight, getWidth, screenSize} from '../../constants/StylesConstants';
import HourlyWeather from '../global/HourlyData';
import {Colors} from '../../constants/ColorConstants';
import {getDayName} from '../../constants/GConstant';

const Weather = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={{flex: 1, backgroundColor: props.Colors.background}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <ImageBackground
        style={{
          width: screenSize.width,
          flex: 1,
        }}
        source={
          isDarkMode ? Images.homeDarkBackground : Images.homeLightBackground
        }>
        <Image style={{position: 'absolute', bottom: 0}} source={Images.wave} />
        <ScrollView
          refreshControl={
            <RefreshControl
              style={{}}
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
              tintColor={'#00C4B4'} // Loader color
              colors={['#00C4B4', '#FF5733']} // Android loader colors
            />
          }
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          {/* Search Container */}
          <View style={{marginTop: getHeight(65)}}>
            <View
              style={[
                styles.vwSearch,
                {
                  backgroundColor: isDarkMode ? '#00000050' : '#FFFFFF',
                  borderColor: !isDarkMode ? '#00000050' : '#FFFFFF50',
                },
              ]}>
              <Image
                style={{tintColor: isDarkMode && Colors.white}}
                source={Images.search}></Image>
              <TextInput
                style={[styles.textInputSearch, {color: props.Colors.text}]}
                value={props.searchHistory}
                placeholder="Search your city"
                placeholderTextColor={`${props.Colors.text}90`}
                onPress={() => {
                  props.setIsClickCity(false);
                }}
                onChangeText={(text: any) => {
                  props.setIsClickCity(false);
                  props.handleOnChangeSearch(text);
                }}
              />
            </View>

            {/* Data */}
            <View>
              {props.searchHistory != '' && !props.isClickCity && (
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={props.arrCity}
                  style={{maxHeight: getHeight(200), marginTop: getHeight(5)}}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          props.onClickCity(item.name);
                          props.setSeachHistory('');
                          props.setSelectedCity(item.name);
                          props.setIsClickCity(true);
                        }}
                        style={{
                          backgroundColor: '#90D5FF70',
                          marginHorizontal: getWidth(40),
                        }}>
                        <View style={{}}>
                          <Text
                            style={[
                              styles.txtSearched,
                              {color: props.Colors.text},
                            ]}>
                            {item.name}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              )}
            </View>
          </View>

          {/* Location */}
          <View style={styles.veLocation}>
            <Image
              style={{width: getWidth(20), aspectRatio: 1}}
              source={Images.location}
            />

            <Text
              style={[
                styles.txtFeels,
                {color: props.Colors.text, marginTop: getHeight(0)},
              ]}>
              {props.weatherData?.address}
            </Text>
          </View>

          {/* Temp */}
          <View style={{marginHorizontal: getWidth(20)}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.txtTemp, {color: props.Colors.text}]}>
                {props.weatherData?.currentConditions?.temp}
                {'°'}
              </Text>
              <Image
                style={{width: getWidth(150), aspectRatio: 1}}
                source={Images.cloud}
              />
            </View>
            <Text style={[styles.txtStatus, {color: props.Colors.text}]}>
              {props.weatherData?.currentConditions?.conditions}
            </Text>

            <Text style={[styles.txtFeels, {color: props.Colors.text}]}>
              {props.weatherData?.currentConditions?.temp}
              {'°'} {'Feels like'}{' '}
              {props.weatherData?.currentConditions?.feelslike}
              {'°'}
            </Text>
          </View>

          {/* Details */}
          <View style={[styles.vwDetail, {}]}>
            {/* UV */}
            <View style={[styles.vwDetails]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{
                    width: getWidth(25),
                    aspectRatio: 1,
                  }}
                  source={Images.uvIndex}
                />
                <Text style={[styles.txtDetails, {color: props.Colors.text}]}>
                  UV index
                </Text>
              </View>
              <Text style={[styles.txtDetails, {color: props.Colors.text}]}>
                {props.weatherData?.currentConditions?.uvindex}
              </Text>
            </View>

            {/* Humidity */}
            <View style={[styles.vwDetails]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{
                    width: getWidth(25),
                    aspectRatio: 1,
                  }}
                  source={Images.humidity}
                />
                <Text style={[styles.txtDetails, {color: props.Colors.text}]}>
                  Humidity
                </Text>
              </View>
              <Text style={[styles.txtDetails, {color: props.Colors.text}]}>
                {props.weatherData?.currentConditions?.humidity}%
              </Text>
            </View>

            {/* Wind */}
            <View style={[styles.vwDetails]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{
                    width: getWidth(25),
                    aspectRatio: 1,
                  }}
                  source={Images.wind}
                />
                <Text style={[styles.txtDetails, {color: props.Colors.text}]}>
                  Wind
                </Text>
              </View>
              <Text style={[styles.txtDetails, {color: props.Colors.text}]}>
                {props.weatherData?.currentConditions?.windspeed} km/h
              </Text>
            </View>

            {/* Dew point */}
            <View style={[styles.vwDetails]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{
                    width: getWidth(25),
                    aspectRatio: 1,
                  }}
                  source={Images.dewPoint}
                />
                <Text style={[styles.txtDetails, {color: props.Colors.text}]}>
                  Dew point
                </Text>
              </View>
              <Text style={[styles.txtDetails, {color: props.Colors.text}]}>
                {props.weatherData?.currentConditions?.dew}°
              </Text>
            </View>

            {/* Pressure */}
            <View style={[styles.vwDetails]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{
                    width: getWidth(25),
                    aspectRatio: 1,
                  }}
                  source={Images.pressure}
                />
                <Text style={[styles.txtDetails, {color: props.Colors.text}]}>
                  Pressure
                </Text>
              </View>
              <Text style={[styles.txtDetails, {color: props.Colors.text}]}>
                {props.weatherData?.currentConditions?.pressure} mb
              </Text>
            </View>

            {/* Visibility */}
            <View style={[styles.vwDetails, {borderBottomWidth: 0}]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{
                    width: getWidth(25),
                    aspectRatio: 1,
                  }}
                  source={Images.visibility}
                />
                <Text style={[styles.txtDetails, {color: props.Colors.text}]}>
                  Visibility
                </Text>
              </View>
              <Text style={[styles.txtDetails, {color: props.Colors.text}]}>
                {props.weatherData?.currentConditions?.visibility} km
              </Text>
            </View>
          </View>

          {/* Hourlt Weather */}
          <HourlyWeather hourlyData={props.weatherData?.days[0]?.hours} />

          {/* Day Wise Data */}
          <View
            style={[
              styles.container,
              {backgroundColor: `${props.Colors.hourlyBackground}40`},
            ]}>
            <FlatList
              data={props.weatherData?.days?.slice(0, 8)}
              keyExtractor={(item, index) => index.toString()}
              style={{}}
              renderItem={({item, index}) => (
                <View style={styles.row}>
                  <Text style={[styles.day, {color: props.Colors.text}]}>
                    {getDayName(item.datetime, index)}
                  </Text>
                  <View style={styles.humidityContainer}>
                    <Image
                      style={{width: getWidth(15), aspectRatio: 1}}
                      source={Images.humidity}
                    />
                    <Text style={[styles.humidity, {color: props.Colors.text}]}>
                      {item.humidity}%
                    </Text>
                  </View>
                  <Image
                    resizeMode="contain"
                    source={{
                      uri: `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${item.icon}.png`,
                    }}
                    style={styles.icon}
                  />
                  <Text style={[styles.temp, {color: props.Colors.text}]}>
                    {item.tempmax}° / {item.tempmin}°
                  </Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Weather;
