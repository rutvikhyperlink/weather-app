import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator, Image, Text} from 'react-native';
import {getHeight} from '../constants/StylesConstants';
import {Colors} from './ColorConstants';

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return this.state.loading ? (
      <View style={styles.vwMain}>
        <View style={styles.vwWhite}>
          <ActivityIndicator size="large" color={Colors.darkblue} />
        </View>
      </View>
    ) : null;
  }

  toggleLoader(shouldShow) {
    this.setState({loading: shouldShow});
  }
}

const styles = StyleSheet.create({
  // View Style
  vwMain: {
    backgroundColor: 'rgba(149, 187, 211, 0.2)',

    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vwWhite: {
    backgroundColor: Colors.white,
    borderRadius: getHeight(10),
    // height: getHeight(80),
    // width: getHeight(80),
    padding: getHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
