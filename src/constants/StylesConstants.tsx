import {Dimensions, Platform, StyleSheet} from 'react-native';

export const StylesConstants = StyleSheet.create({});

export const opacity = 0.8;

export function getWidth(size: any) {
  return (size / 375) * screenSize.width;
}
export function getHeight(size: any) {
  return (size / 812) * screenSize.height;
}

export function getResponsiveLineHeight(size: any) {
  if (Platform.OS === 'android') {
    return getHeight(size);
  } else {
    return getHeight(size) * 1.4;
  }
}

export const screenSize = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

export const height = {
  size2: getHeight(2),
  size3: getHeight(3),
  size4: getHeight(4),
  size5: getHeight(5),
  size6: getHeight(6),
  size7: getHeight(7),
  size8: getHeight(8),
  size9: getHeight(9),
  size10: getHeight(10),
  size11: getHeight(11),
  size12: getHeight(12),
  size13: getHeight(13),
  size14: getHeight(14),
  size15: getHeight(15),
  size16: getHeight(16),
  size17: getHeight(17),
  size18: getHeight(18),
  size19: getHeight(19),
  size20: getHeight(20),
  size21: getHeight(21),
  size22: getHeight(22),
  size23: getHeight(23),
  size24: getHeight(24),
  size25: getHeight(25),
  size26: getHeight(26),
  size27: getHeight(27),
  size28: getHeight(28),
  size30: getHeight(30),
  size31: getHeight(31),
  size32: getHeight(32),
  size33: getHeight(33),
  size34: getHeight(34),
  size35: getHeight(35),
  size36: getHeight(36),
  size38: getHeight(38),
  size40: getHeight(40),
  size43: getHeight(43),
  size44: getHeight(44),
  size48: getHeight(48),
  size49: getHeight(49),
  size50: getHeight(50),
  size52: getHeight(52),
  size54: getHeight(54),
  size55: getHeight(55),
  size56: getHeight(56),
  size58: getHeight(58),
  size60: getHeight(60),
  size70: getHeight(70),
  size63: getHeight(63),
  size66: getHeight(66),
  size65: getHeight(65),
  size68: getHeight(68),
  size69: getHeight(69),
  size75: getHeight(75),
  size77: getHeight(77),
  size79: getHeight(79),
  size80: getHeight(80),
  size82: getHeight(82),
  size86: getHeight(86),
  size96: getHeight(96),
  size100: getHeight(100),
  size109: getHeight(109),
  size114: getHeight(114),
  size117: getHeight(117),
  size119: getHeight(119),
  size123: getHeight(123),
  size134: getHeight(134),
  size145: getHeight(145),
  size158: getHeight(158),
  size165: getHeight(165),
  size176: getHeight(176),
  size189: getHeight(189),
  size293: getHeight(293),
  size269: getHeight(269),
  size275: getHeight(275),
  size313: getHeight(313),
  size482: getHeight(482),
};

export const LineHeightConstants = {
  lineHeight12: getResponsiveLineHeight(12),
  lineHeight14: getResponsiveLineHeight(14),
  lineHeight16: getResponsiveLineHeight(16),
  lineHeight18: getResponsiveLineHeight(18),
  lineHeight20: getResponsiveLineHeight(20),
  lineHeight22: getResponsiveLineHeight(22),
  lineHeight24: getResponsiveLineHeight(24),
  lineHeight26: getResponsiveLineHeight(26),
  lineHeight28: getResponsiveLineHeight(28),
  lineHeight30: getResponsiveLineHeight(30),
  lineHeight32: getResponsiveLineHeight(32),
  lineHeight34: getResponsiveLineHeight(34),
  lineHeight36: getResponsiveLineHeight(36),
  lineHeight38: getResponsiveLineHeight(38),
  lineHeight40: getResponsiveLineHeight(40),
};
