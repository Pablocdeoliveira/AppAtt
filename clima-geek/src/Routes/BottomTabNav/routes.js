// src/Routes/BottomTabNav/routes.js

import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Pages/Home/home";
import Previsao from "../../Pages/Details/Previsao/previsao";
import Localizacao from "../../Pages/Details/Localizacao";
import Config from "../../Pages/Config";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from 'styled-components/native';

const Tab = createBottomTabNavigator();

const Routes = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.tabBarActiveTintColor,
        tabBarInactiveTintColor: theme.colors.tabBarInactiveTintColor,
        tabBarStyle: {
          backgroundColor: theme.colors.tabBarBackground,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            return (
              <Ionicons
                size={size}
                color={focused ? theme.colors.tabBarActiveTintColor : theme.colors.tabBarInactiveTintColor}
                name={focused ? "home" : "home-outline"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Previsao"
        component={Previsao}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            return (
              <Ionicons
                size={size}
                color={focused ? theme.colors.tabBarActiveTintColor : theme.colors.tabBarInactiveTintColor}
                name={focused ? "menu" : "menu-outline"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Config"
        component={Config}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            return (
              <Ionicons
                size={size}
                color={focused ? theme.colors.tabBarActiveTintColor : theme.colors.tabBarInactiveTintColor}
                name={focused ? "settings" : "settings-outline"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
