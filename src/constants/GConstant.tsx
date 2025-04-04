import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';
import {getHeight} from './StylesConstants';
import {Platform} from 'react-native';
import {Colors} from './ColorConstants';
import {FontFamily} from './FontFamilyConstants';
import {FontSize} from './FontConstants';

let loaderRef: any;
let flashMessageRef: any;

export async function setData(key: any, value: any) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('[Async Storage] Error in set data : ', error);
  }
}

export async function getData(key: any, callback: any) {
  try {
    var value: any = await AsyncStorage.getItem(key);
    var parse = JSON.parse(value);
    callback(parse);
  } catch (error) {
    console.log('[Async Storage] Error in get data : ', error);
  }
}

export const asyncStorageKey = {
  setLocation: 'setLocation',
};

export const setLoaderRef = (ref: any) => {
  loaderRef = ref;
};

export const toggleLoader = (showLoader: boolean) => {
  if (loaderRef) {
    loaderRef.toggleLoader(showLoader);
  }
};

export const getDayName = (dateStr: any, index: any) => {
  const date = new Date(dateStr);
  if (index === 0) return 'Today';
  return date.toLocaleDateString('en-US', {weekday: 'short'});
};

export function showError(message: string) {
  showMessage({
    message: message,
    type: 'danger',
    duration: 3000,
    icon: 'warning',
    titleStyle: {
      color: Colors.white,
      fontSize: FontSize.size16,
      fontFamily: FontFamily.Medium,
      marginTop: 3,
    },
    style: {
      // paddingTop: Platform.OS == 'ios'?10:40,
      // opacity:1,
      marginTop: Platform.OS == 'ios' ? getHeight(20) : getHeight(30),
    },
  });
}

export function showSuccess(message: string) {
  showMessage({
    message: message,
    type: 'success',
    duration: 3000,
    icon: 'success',
    titleStyle: {
      color: Colors.white,
      fontSize: FontSize.size16,
      fontFamily: FontFamily.Medium,
      marginTop: 3,
    },
    style: {
      // paddingTop: Platform.OS == 'ios'?10:40,
      // opacity:1,
      marginTop: Platform.OS == 'ios' ? getHeight(20) : getHeight(30),
    },
  });
}

export function setFlashMessageRef(ref: any) {
  flashMessageRef = ref;
}
