import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   
       <View style={styles.container}>
      <View style={{
        height: 100,
        width: 100,
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#fe2944'
      }} >
        <Text style={styles.textStyle}>1</Text>
        <Text style={styles.textStyle}>2</Text>
      </View>
      
      <View style={{
        height: 100,
        width: 100,
        backgroundColor:'blue'
      }}>
         <Text style={styles.textStyle}>2</Text>
      </View>
       <View style={{
        height: 100,
        width: 100,
        backgroundColor:'#09df83'
      }}>
         <Text style={styles.textStyle}>3</Text>
      </View>
   
      <StatusBar style="auto" />
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    margin:8,
    flex: 1,
    borderWidth: 1,
    flexDirection:'row',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontSize:24,
  }
});
