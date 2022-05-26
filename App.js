import { createContext, useState, } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/scenes/Home";
import Details from "./src/scenes/Details";

const Stack = createNativeStackNavigator();

export const SingleRestContext = createContext(null);

export default function App() {
  const [currentRest, setCurrentRest] = useState();

  return (
    <SingleRestContext.Provider value={{ currentRest, setCurrentRest }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"  options={{ title: "Local Restaurant" }} component={Home}/>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    </SingleRestContext.Provider>
  );
}
