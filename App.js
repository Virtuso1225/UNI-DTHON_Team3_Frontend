import React from 'react';
import { useFonts } from 'expo-font';
import Apploading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import Mainpage from './src/pages/Mainpage';

const App = () => {
  const [fontsLoaded] = useFonts({
    Thin: require('./assets/fonts/SCDream1.otf'),
    ExtraLight: require('./assets/fonts/SCDream2.otf'),
    Light: require('./assets/fonts/SCDream3.otf'),
    Regular: require('./assets/fonts/SCDream4.otf'),
    Medium: require('./assets/fonts/SCDream5.otf'),
    Bold6: require('./assets/fonts/SCDream6.otf'),
    ExtraBold: require('./assets/fonts/SCDream7.otf'),
    Heavy: require('./assets/fonts/SCDream8.otf'),
  });

  if (!fontsLoaded) {
    return <Apploading />;
  }
  return (
    <NavigationContainer>
      <Mainpage />
    </NavigationContainer>
  );
};

export default App;
