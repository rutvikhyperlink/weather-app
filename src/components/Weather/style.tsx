import {StyleSheet, Text, View} from 'react-native';
import {getHeight, getWidth} from '../../constants/StylesConstants';
import {Colors} from '../../constants/ColorConstants';
import {FontSize} from '../../constants/FontConstants';
import {FontFamily} from '../../constants/FontFamilyConstants';

export const styles = StyleSheet.create({
  vwSearch: {
    flexDirection: 'row',
    gap: getWidth(9),
    height: getHeight(40),
    alignItems: 'center',
    paddingHorizontal: getWidth(8),
    marginHorizontal: getWidth(16),
    borderRadius: getWidth(8),
    borderWidth: 2,
    justifyContent: 'center',
  },
  textInputSearch: {
    padding: 0,
    margin: 0,
    fontSize: FontSize.size16,
    fontFamily: FontFamily.Medium,
    flex: 1,
    marginTop: getHeight(2),
  },
  txtTemp: {
    fontSize: FontSize.size86,
    fontFamily: FontFamily.Regular,
  },
  txtStatus: {
    fontSize: FontSize.size15,
    fontFamily: FontFamily.SemiBold,
    marginTop: getHeight(-30),
  },
  txtFeels: {
    fontSize: FontSize.size15,
    fontFamily: FontFamily.SemiBold,
    marginTop: getHeight(30),
  },
  txtDetails: {
    fontFamily: FontFamily.Medium,
    fontSize: FontSize.size15,
    marginHorizontal: getWidth(10),
  },
  vwDetails: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: Colors.white,
    borderBottomWidth: 1,
  },
  veLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: getWidth(20),
    marginTop: getHeight(50),
    gap: 5,
  },
  vwDetail: {
    marginTop: getHeight(20),
    backgroundColor: '#90D5FF70',
    marginHorizontal: getWidth(20),
    borderRadius: 10,
    overflow: 'hidden',
  },
  txtSearched: {
    fontFamily: FontFamily.Medium,
    fontSize: FontSize.size12,
    paddingHorizontal: getWidth(15),
    marginVertical: getHeight(5),
    paddingVertical: getHeight(5),
  },

  container: {
    flex: 1,
    paddingHorizontal: getWidth(20),
    borderRadius: 10,
    marginHorizontal: getWidth(20),
    marginBottom: getHeight(80),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255,255,255,0.3)',
  },
  day: {
    fontSize: FontSize.size17,
    fontFamily: FontFamily.SemiBold,
    flex: 1,
  },
  humidityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  humidity: {
    fontSize: FontSize.size16,
    fontFamily: FontFamily.Regular,
    marginTop: getHeight(3),
  },
  icon: {width: getWidth(30), aspectRatio: 1, marginHorizontal: 10},
  temp: {
    fontSize: FontSize.size15,
    fontFamily: FontFamily.Medium,
    width: '35%',
    textAlign: 'right',
  },
});
