import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CameraPage from "./Screen/CameraPage";
import MainPage from "./Screen/MainPage";
import ResultPage from "./Screen/ResultPage";
import SearchPage from "./Screen/SearchPage";
import ProductPage from "./Screen/ProductPage";
import ProductModal from "./Screen/ProductModal";
import InputModal from "./Screen/InputModal";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import MyPage from "./Screen/MyPage";
import WritePage from "./Screen/WritePage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "MainPage") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "SearchPage") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "WritePage") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "MyPage") {
            iconName = focused ? "search" : "search-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="SearchPage" component={SearchPage} />
      <Tab.Screen name="MyPage" component={MyPage} />
      <Tab.Screen name="WritePage" component={WritePage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainTab"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MainTab" component={MainTabScreen} />
        <Stack.Screen name="CameraPage" component={CameraPage} />
        <Stack.Screen name="ResultPage" component={ResultPage} />
        <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="ProductModal" component={ProductModal} />
        <Stack.Screen name="WritePage" component={WritePage} />
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="InputModal" component={InputModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
