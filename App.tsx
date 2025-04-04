import React, {useEffect, useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {Platform, StyleSheet, Text, useColorScheme, View} from 'react-native';
import WeatherContainer from './src/containers/Weather';
import Loader from './src/constants/Loader';
import {setFlashMessageRef, setLoaderRef} from './src/constants/GConstant';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from 'react-native-flash-message';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const flashMessageRef = useRef(null);
  setFlashMessageRef(flashMessageRef);

  useEffect(() => {
    Platform.OS == 'android' && SplashScreen.hide();
  }, []);

  return (
    <View style={{flex: 1}}>
      <WeatherContainer />
      <FlashMessage ref={flashMessageRef} position="top" floating={true} />
      <Loader ref={ref => setLoaderRef(ref)} />
    </View>
  );
}

export default App;
