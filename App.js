import React, { useContext } from 'react';
import { useFonts } from 'expo-font';
import Apploading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import Mainpage from './src/pages/Mainpage';
import Spinner from './src/Spinner';
import { ListProvider, ProgressProvider, ProgressContext } from './src/context';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs(true);
  const [fontsLoaded] = useFonts({
    Thin: require('./assets/fonts/SCDream1.otf'),
    ExtraLight: require('./assets/fonts/SCDream2.otf'),
    Light: require('./assets/fonts/SCDream3.otf'),
    Regular: require('./assets/fonts/SCDream4.otf'),
    Medium: require('./assets/fonts/SCDream5.otf'),
    Bold: require('./assets/fonts/SCDream6.otf'),
    ExtraBold: require('./assets/fonts/SCDream7.otf'),
    Heavy: require('./assets/fonts/SCDream8.otf'),
  });
  if (!fontsLoaded) {
    return <Apploading />;
  }
  const { inProgress } = useContext(ProgressContext);

  return (
    <ProgressProvider>
      <ListProvider>
        <NavigationContainer>
          <Mainpage />
          {inProgress && <Spinner />}
        </NavigationContainer>
      </ListProvider>
    </ProgressProvider>
  );
};

export default App;
