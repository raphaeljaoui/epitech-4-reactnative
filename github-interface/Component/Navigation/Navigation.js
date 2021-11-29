import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from '../Search/Search';
import User from '../User/User';
import Favorite from '../Favorite/Favorite';
import Repository from '../Repository/Repository';
import Details from '../Search/Details';
import AllFile from '../Search/AllFile';
import Repositories from '../Repositories/Repositories';
import Home from '../Home/Home';

const Stack = createNativeStackNavigator();

const UserScreen = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    )
}
const SearchScreen = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="AllFile" component={AllFile} />
      </Stack.Navigator>
    )
}
const FavorisScreen = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen name="Favoris" component={Favorite} />
      </Stack.Navigator>
    )
}
const RepositoryScreen = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Repositories" component={Repositories} />
        <Stack.Screen name="Repository" component={Repository} />
    </Stack.Navigator>
    )
}


const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let color;

            if (route.name === 'RepositoryScreen') {
              iconName = require('../../Image/repositories.png')
              color= focused ?"tomato" :"black"
            } 
            else if (route.name === 'SearchScreen') {
              iconName = require('../../Image/search.png')
              color= focused ?"tomato" :"black"
            }
            else if (route.name === 'FavorisScreen') {
              iconName = require('../../Image/favoris.png')
              color= focused ?"tomato" :"black"
            }
            else if (route.name === 'UserScreen') {
              iconName = require('../../Image/user.png')
              color= focused ?"tomato" :"black"
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{width:30, height:30, tintColor:color}} />;
          },tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="RepositoryScreen" component={RepositoryScreen} options={{headerShown:false, title:"Repository"}}/>
        <Tab.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false, title:"Search"}}/>
        <Tab.Screen name="FavorisScreen" component={FavorisScreen} options={{headerShown:false, title:"Favoris"}}/>
        <Tab.Screen name="UserScreen" component={UserScreen} options={{headerShown:false, title:"Profil"}}/>
      </Tab.Navigator>
    </NavigationContainer>
    )
}

export default Navigation