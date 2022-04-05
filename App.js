import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './src/navigation';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { light, mapping } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={light}>
      <IconRegistry icons={EvaIconsPack} />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
}
