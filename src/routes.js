import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import colors from "./styles/colors";

import Following from "./pages/Following";
import ComingSoon from "./pages/ComingSoon";

const { Navigator, Screen } = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            height: 60,
            backgroundColor: colors.primary,
            borderTopWidth: 0,
          },
          tabStyle: {
            alignItems: "center",
            justContent: "center",
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {
            fontFamily: "roboto_400",
            fontSize: 11,
            marginTop: 10,
          },
          inactiveTintColor: colors.black,
          activeTintColor: colors.purple,
        }}
      >
        <Screen
          name="Following"
          component={Following}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Ionicons
                  name="md-heart"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
        <Screen
          name="Discover"
          component={ComingSoon}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <FontAwesome5
                  name="compass"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
        <Screen
          name="Browse"
          component={ComingSoon}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <MaterialIcons
                  name="content-copy"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
        <Screen
          name="Esports"
          component={ComingSoon}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Ionicons
                  name="ios-trophy"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
