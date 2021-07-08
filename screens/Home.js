import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, FlatList, Image, Button, Dimensions, SafeAreaView, StyleSheet } from 'react-native'

import {data} from "../data"

const WIDTH = Dimensions.get('window').width

const Home = ({navigation}) => {

    const renderItem = ({item}) => {
        return (
          <View style = {{marginVertical : 10, marginHorizontal : 15}}>
          <Image source={{uri:'https://picsum.photos/200'}} style ={{height :200, width :WIDTH / 2 - 40, borderRadius:20}}/>
          <Text style = {{textAlign :"center" ,marginTop :10}}>{item.title}</Text>
        </View>
        )
    }
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns ={2}
          //horizontal
          />
          <Button title ="setting" onPress={ () => navigation.navigate("Setting")}/>
          
        </SafeAreaView>
        
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home

