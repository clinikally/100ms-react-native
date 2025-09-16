import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import SafeView from './SafeView';

import { COLORS } from '../utils/theme';

export const HMSMeetingEnded = () => {
  return (
    <SafeView style={styles.container}>
      <Text style={styles.title}>Meeting Ended</Text>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND.DIM,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.SURFACE.ON_SURFACE.HIGH,
    fontSize: 24,
    fontFamily: 'Inter-SemiBold',
    lineHeight: 32,
  },
});
