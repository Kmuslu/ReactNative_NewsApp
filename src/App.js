import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const App = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor:"#dcdcdc"}}>
      <Text style={{fontSize:30, fontWeight:"bold",marginLeft:10,fontFamily:"serif" }}>News</Text>
      <View style={styles.container}>
      <Text style={styles.topic}>Health</Text>
         <View>
        <Image style={styles.image}
        source ={require("./images/covid-2.jpg")}/>
        </View> 
        <Text style={styles.heading}>
          Coronavirus: Human trial of new vaccine begins in UK
        </Text>
        <Text style={styles.parag}>
          Volunteers have begun being immunised with a new UK coronavirus
          vaccine. About 300 people will have the vaccine over the coming weeks,
          as part of a trial led by Prof Robin Shattock and his colleagues, at
          Imperial College London. 
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.topic}>Technology</Text>
        <View>
        <Image style={styles.image}
        source ={require("./images/iphone.png")}/>
        </View>
        <Text style={styles.heading}>
          iPhone 12 launch date: Apple's virtual event for its expected 5G
          smartphone is Oct. 13
        </Text>
        <Text style={styles.parag}>
          Apple has set the date for its latest iPhone's debut. The new device,
          rumored to be called the iPhone 12, is expected to include super-fast
          5G wireless connectivity and a new, iPad-inspired design, and it will
          be unveiled on Oct. 13 at 10 a.m. PT. 
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.topic}>Local News</Text>
        <View>
        <Image style={styles.image}
        source ={require("./images/Fire.jpg")}/>
        </View>
        <Text style={styles.heading}>Wildfires burning in the West</Text>
        <Text style={styles.parag}>
          Wildfires are ravaging many areas in the West, especially in
          California. As of Thursday, October 1, at least 19 large fires were
          burning in California, where dry, windy conditions and record-breaking
          high temperatures have been fueling flames for weeks. 
        </Text>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    padding:10,
    borderWidth:1,
    margin:5,
   borderColor:"gray",
   borderRadius:5,
   backgroundColor:"#f0ffff"
  },
  topic:{
    fontSize:15,
    textDecorationLine:"underline",
    paddingBottom:2,
    fontFamily:"serif",
    color: "red"
    
  },
  image:{
    width:380,
    height:200,
    borderRadius:10,
  },
  heading:{
    fontSize:20,
    fontWeight:"700",
    marginBottom:5,
    fontFamily:"serif" 
  },
  parag:{
    fontSize:15,
    fontFamily:"serif"  }
});

export default App;
