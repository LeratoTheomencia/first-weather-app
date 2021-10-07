import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import moment from 'moment';



 const DateTime = () => {
   const [currentDate, setcurrentDate] = useState('')
    const [currentDateWithMoment, setcurrentDateWithMoment] = useState('')
   useState(() => {
    var date = new Date().getDate() // current Date
    var month = new Date().getMonth() + 1 // current Month
    var year = new Date().getFullYear() // current Year
    var hours = new Date().getHours() // current Hours
    var min = new Date().getMinutes() // current Minutes
    var sec = new Date().getSeconds() // current Seconds
    setcurrentDate(
      date + '/' + month + '/' + year + '/' + hours + ':' + min + ':' + sec
    )

   }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textStyle1}>
          {currentDate}
        </Text>
        <Text style={styles.textStyle2}>
          {currentDateWithMoment}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 25,  
  },

});

export default DateTime;