import {Alert, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Weather from '../../components/Weather';
import {lightTheme} from '../../constants/ColorConstants';
import {darkTheme} from '../../constants/darkTheme';
import debounce from 'lodash.debounce';
import axios from 'axios';
import {
  asyncStorageKey,
  getData,
  setData,
  showError,
  toggleLoader,
} from '../../constants/GConstant';
import NetInfo from '@react-native-community/netinfo';

const WEATHER_API_KEY = '5ZFLPA8HEAQX84FFVBJ5ATUEW';

const WeatherContainer = () => {
  const colorScheme = useColorScheme();
  const Colors = colorScheme === 'dark' ? darkTheme : lightTheme;

  const isNetworkAvailable = async () => {
    const response = await NetInfo.fetch();
    return response.isConnected;
  };

  const [searchHistory, setSeachHistory] = useState<any>('');
  const [selectedCity, setSelectedCity] = useState<any>('');
  const [weatherData, setWeatherData] = useState(null);
  // console.log('weather_Data:', weatherData);
  const [isClickCity, setIsClickCity] = useState<any>(false);
  const [refreshing, setRefreshing] = useState(false);
  const [arrCity, setArrCity] = useState<any>([]);
  const [initial, setInitial] = useState<any>([
    {id: 1, name: 'Chicago'},
    {id: 2, name: 'Aurora'},
    {id: 3, name: 'Naperville'},
    {id: 4, name: 'Joliet'},
    {id: 5, name: 'Rockford'},
    {id: 6, name: 'Springfield'},
    {id: 7, name: 'Elgin'},
    {id: 8, name: 'Peoria'},
    {id: 9, name: 'Champaign'},
    {id: 10, name: 'Waukegan'},
    {id: 11, name: 'Cicero'},
    {id: 12, name: 'Bloomington'},
    {id: 13, name: 'Decatur'},
    {id: 14, name: 'Evanston'},
    {id: 15, name: 'Schaumburg'},
    {id: 16, name: 'Bolingbrook'},
    {id: 17, name: 'Palatine'},
    {id: 18, name: 'Skokie'},
    {id: 19, name: 'Des Plaines'},
    {id: 20, name: 'Orland Park'},
    {id: 21, name: 'Mumbai'},
    {id: 22, name: 'Delhi'},
    {id: 23, name: 'Bangalore'},
    {id: 24, name: 'Hyderabad'},
    {id: 25, name: 'Ahmedabad'},
    {id: 26, name: 'Chennai'},
    {id: 27, name: 'Kolkata'},
    {id: 28, name: 'Surat'},
    {id: 29, name: 'Pune'},
    {id: 30, name: 'Jaipur'},
    {id: 31, name: 'Lucknow'},
    {id: 32, name: 'Kanpur'},
    {id: 33, name: 'Nagpur'},
    {id: 34, name: 'Indore'},
    {id: 35, name: 'Thane'},
    {id: 36, name: 'Bhopal'},
    {id: 37, name: 'Visakhapatnam'},
    {id: 38, name: 'Pimpri-Chinchwad'},
    {id: 39, name: 'Patna'},
    {id: 40, name: 'Vadodara'},
  ]);

  useEffect(() => {
    getData(asyncStorageKey.setLocation, (data: any) => {
      console.log('set_async_data:', data);
      if (data == null) {
        _fetchWeather('Chicago');
      } else {
        setWeatherData(data);
      }
    });
  }, []);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchText: string) => {
      _searchText(searchText);
    }, 300),
    [],
  );

  // Handle search input change
  const handleOnChangeSearch = (text: string): void => {
    setSeachHistory(text);
    debouncedSearch(text);
  };

  //Select City
  const onClickCity = (text: string) => {
    _fetchWeather(text);
  };

  // Search Text
  const _searchText = (e: any) => {
    let text = e.toLowerCase();
    let temp = initial;
    let filteredName = temp?.filter((item: any) => {
      return item.name.toLowerCase().match(text);
    });
    if (!text || text === '') {
      setArrCity(initial);
    } else if (!Array.isArray(filteredName) && !filteredName?.length) {
      setArrCity([]);
    } else if (Array.isArray(filteredName)) {
      setArrCity(filteredName);
    }
  };

  // Fetch Weather API
  const _fetchWeather = async (city: any) => {
    const isConnected = await isNetworkAvailable();
    if (isConnected == true) {
      if (!city) return;
      toggleLoader(true);
      setArrCity([]);
      try {
        const response = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${WEATHER_API_KEY}&contentType=json`,
        );
        console.log('set_weather_data::', response.data);
        console.log('todays_hours_data::', response.data?.days[0]?.hours);
        setWeatherData(response.data);
        setData(asyncStorageKey.setLocation, JSON.stringify(response.data));
        setTimeout(() => {
          toggleLoader(false);
        }, 1000);
        setRefreshing(false);
      } catch (error) {
        console.error('Error fetching weather:', error);
        setWeatherData(null);
      }
    } else {
      showError('No Internet Connection');
    }
  };

  // Pull to Refresh
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(async () => {
      console.log('called_func_selectedCity:', selectedCity);
      await _fetchWeather(selectedCity);
      setRefreshing(false);
    }, 400);
  };

  return (
    <Weather
      Colors={Colors}
      searchHistory={searchHistory}
      setSeachHistory={setSeachHistory}
      isClickCity={isClickCity}
      setIsClickCity={setIsClickCity}
      handleOnChangeSearch={handleOnChangeSearch}
      arrCity={arrCity}
      onClickCity={onClickCity}
      weatherData={weatherData}
      refreshing={refreshing}
      onRefresh={onRefresh}
      setSelectedCity={setSelectedCity}
    />
  );
};

export default WeatherContainer;

const styles = StyleSheet.create({});
