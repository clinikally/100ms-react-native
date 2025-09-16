import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface SafeViewProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  edges?: string[];
}

/**
 * Custom SafeView component to replace SafeAreaView for React Native 0.79 compatibility
 * This component uses useSafeAreaInsets hook which is more reliable and doesn't cause crashes
 */
const SafeView: React.FC<SafeViewProps> = ({ children, style, edges }) => {
  const insets = useSafeAreaInsets();
  
  const safeAreaStyle: ViewStyle = {
    paddingTop: edges?.includes('top') !== false ? insets.top : 0,
    paddingBottom: edges?.includes('bottom') !== false ? insets.bottom : 0,
    paddingLeft: edges?.includes('left') !== false ? insets.left : 0,
    paddingRight: edges?.includes('right') !== false ? insets.right : 0,
  };

  return (
    <View style={[safeAreaStyle, style]}>
      {children}
    </View>
  );
};

export default SafeView;
