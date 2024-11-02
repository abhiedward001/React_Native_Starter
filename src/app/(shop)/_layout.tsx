import React from 'react'
import { Tabs } from "expo-router";
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";


interface iconProviderProps{
  color: string;
  name: React.ComponentProps<typeof FontAwesome>['name'];
}
const IconProvider = (props:iconProviderProps) => {
  return <FontAwesome size={24} {...props} color='#1472ba'></FontAwesome>
}
const Tabslayout = () => {
  return (
    <SafeAreaView
      edges={['top']}
      style={{
      flex: 1,
    }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#1472ba',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            paddingTop:8
          },
          headerShown:false
      }}
      >
        <Tabs.Screen
          name='index'
          options={{
            tabBarIcon(props) {
              return <IconProvider {...props} name='shopping-cart'></IconProvider>
          }
          }}
        />
         <Tabs.Screen
          name='orders'
          options={{
            tabBarIcon(props) {
              return <IconProvider {...props} name='book'></IconProvider>
          }
          }}
        />
        
      </Tabs>
  </SafeAreaView>
  )
}

export default Tabslayout;