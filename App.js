import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f3311e',
        },
        headerTintColor: '#fff',
        sceneContainerStyle: {
          backgroundColor: '#990922',
        },
        drawerContentStyle: { backgroundColor: '#990922', },
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#f3311e',
      }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f3311e',
            },
            headerTintColor: '#fff',
            contentStyle: {
              backgroundColor: '#990922',
            }
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsScreen}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'About the Meal',
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}

