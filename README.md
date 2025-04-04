This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm i -f
npm start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.
```

## Step 3: Weather app

Now that you have successfully run the app!

This Weather App provides weather details for a set of predefined cities. The app allows users to search for a city, view its weather details, and check hourly as well as weekly forecasts. It supports dark mode, light mode and a pull-to-refresh feature.

## Features:

> Splash Screen: The app displays a splash screen upon launch.

> City Search: Users can search for a city from a predefined list of 40 cities.

> Default City: The app starts with "Chicago" as the default city.

## Weather Details:

        UV Index
        Humidity
        Wind Speed
        Dew Point
        Pressure
        Visibility

## Hourly Forecast:

> Displays weather data for each hour of the current day.

        Hours
        Temperature
        Weather Condition

## 7-Day Forecast:

> Shows the average weather conditions for the next seven days, including:

        Day
        Humidity
        Minimum and Maximum Temperature

> Dark Mode Support: The app adapts to the devices system theme (light or dark mode).

> Pull-to-Refresh: Refreshes the data when pulled down.

> Offline Mode: Displays an error message when there is no internet connection.

## List of Predefined Cities:

        "Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Springfield",
        "Elgin", "Peoria", "Champaign", "Waukegan", "Cicero", "Bloomington",
        "Decatur", "Evanston", "Schaumburg", "Bolingbrook", "Palatine", "Skokie",
        "Des Plaines", "Orland Park", "Mumbai", "Delhi", "Bangalore", "Hyderabad",
        "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow",
        "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam",
        "Pimpri-Chinchwad", "Patna", "Vadodara"

## Why Static Cities?

        The app uses a static list of cities since Firebase location services are not integrated. However, all functionalities work correctly with the given static data.

## Future Enhancements:

> Integration with Firebase or other APIs for real-time location-based search.
> Additional weather parameters like precipitation chances and air quality index.
> User preferences to save favorite cities.

> **Note**: Ensure you have an active internet connection for real-time weather updates. The dark mode follows the system theme automatically.

```

```
