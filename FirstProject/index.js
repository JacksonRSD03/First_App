import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Provider as PaperProvider } from 'react-native-paper'
import Home from './App'

const Navigator = createStackNavigator({
  Home
})

const App = createAppContainer(Navigator)

AppRegistry.registerComponent(appName, () => App)
export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent('main', () => Main);