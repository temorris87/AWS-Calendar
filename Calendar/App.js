import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, DatePickerIOS ,KeyboardAvoidingView, Picker } from 'react-native';
import axios from 'axios';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chosenDate: new Date(),
      result: 'placeholder'
    };

    this.setDate = this.setDate.bind(this);
  };

  async componentDidMount(){
    const res = await axios.get(`http://3.17.145.167:5000/?num_events=20`)

    this.setState({
      result: res.data[0].location
    })    
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the WOS Calendar App</Text>
        <View  style={styles.container}>
          <Text style={{fontSize: 20, color: 'black'}}>Title :</Text>
          <TextInput
          style={styles.inputField}
          placeholder="Entry's Title"
          />
        </View>
        <View  style={styles.container}>
          <View style={styles.dateContainer}>
            <Text style={{fontSize: 20, color: 'black'}}>Date :</Text>
            <DatePickerIOS
                date={this.state.chosenDate}
                onDateChange={this.setDate}
            />
          </View>
        </View>
        <View  style={styles.container}>
          <Text style={{fontSize: 20, color: 'black'}}>Description :</Text>
          <TextInput
          style={styles.inputField}
          placeholder="Entry's Description"
          defaultValue={this.state.result}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    marginLeft: 25,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    textAlign: 'center'
  },
  inputField: {
    // height: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    textAlign: 'center',
  },
  dateContainer: {
    width: 280,
    justifyContent: 'center',
  }
});
