import { Tabs } from "expo-router";
import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const Tabslayout = () => {
  return (
    <SafeAreaView>
      <Tabs>
        <Tabs.Screen
          name='index'
          options={{
            headerShown:true
          }}
        />
        
      </Tabs>
  </SafeAreaView>
  )
}

export default Tabslayout;