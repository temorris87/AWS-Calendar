import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, DatePickerIOS , Button } from 'react-native';


export default class ViewScreenPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      EventId: '',
      EventDate: '',
      EventTime: '',
      EventLocation:'',
      description: ''
    };

    this.setDate = this.setDate.bind(this);
  };

  async componentDidMount(){
      try {
        const EventId = this.props.navigation.getParam('id', 'No Id found')
        const EventDate = this.props.navigation.getParam('date', 'No Date found')
        const EventTime = this.props.navigation.getParam('time', 'No Time found')
        const EventTitle = this.props.navigation.getParam('title', 'No title found')
        const EventLocation = this.props.navigation.getParam('location', 'No location found')
        const description = this.props.navigation.getParam('description', 'No description found')
        
        this.setState({
          EventId: EventId,
          EventDate: EventDate,
          EventTime: EventTime,
          title: EventTitle,
          EventLocation: EventLocation,
          description
        })    
      } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
         throw error;
      }

  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  static navigationOptions = {
    title: 'View Entry'
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>WOS Calendar App</Text>
        </View>
        <View style={styles.bodyContainer}>
            <View  style={styles.entryTitleContainer}>
                <Text style={styles.entryTitle}>Title :</Text>
                <TextInput
                style={styles.inputField}
                value={this.state.title}
                />
            </View>
            <View  style={styles.entryDateContainer}>
                <Text style={styles.entryDate}>Date :</Text>
                <TextInput
                style={styles.inputField}
                value={this.state.EventDate}
                />
            </View>
            <View  style={styles.entryDateContainer}>
                <Text style={styles.entryDate}>Time :</Text>
                <TextInput
                style={styles.inputField}
                value={this.state.EventTime}
                />
            </View>
            <View  style={styles.entryDescriptionContainer}>
                <Text style={styles.entryDescription}>Description :</Text>
                <TextInput
                style={styles.inputField}
                value={this.state.description}
                />
            </View>
            <View  style={styles.entryDescriptionContainer}>
                <Text style={styles.entryDescription}>Location :</Text>
                <TextInput
                style={styles.inputField}
                value={this.state.EventLocation}
                />
            </View>
        </View>
        <View  style={styles.buttonsContainer}>
                <View  style={styles.buttonContainer}>
                    <Button
                    style={styles.button}
                    onPress={()=>{this.props.navigation.navigate('Landing')}}
                    title="Back"
                    color="#4169e1"
                    containerStyle={{padding:10, margin:10, height:45, width: 150, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                    />
                </View>
                <View  style={styles.buttonContainer}>
                    <Button
                    style={styles.button}
                    onPress={()=>{this.props.navigation.navigate('Edit')}}
                    title="Edit"
                    color="red"
                    fontSize={24}
                    />
                </View>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: '#f0f8ff',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25,
    // backgroundColor: 'green',
  },
  title: {
    // backgroundColor: 'red',
    fontSize: 28,
  },
  bodyContainer: {
      flex: 5,
      paddingLeft: 25,

  },
  entryTitleContainer: {
    flex: 1,
    // backgroundColor: 'purple'
  },
  entryTitle: {
    fontSize: 24,
    color: 'black',
  },
  inputField :{
    fontSize: 22,
    color: 'black',
    paddingLeft: 25
  },
  entryDateContainer: {
    flex: 1,
    // backgroundColor: 'pink'
  },
  entryDate: {
    fontSize: 24,
    color: 'black',
  },
  entryDescriptionContainer: {
    flex: 2,
    // backgroundColor: 'red'
  },
  entryDescription: {
    fontSize: 24,
    color: 'black',
  },
  buttonsContainer: {
    flex: 0.5,
    flexDirection: 'row',
    // backgroundColor: 'purple',
    alignContent: 'stretch',
    justifyContent: 'space-around',
    fontSize: 22,

  },
  button: {
    // borderColor: 'black',
    // width: 100,
    // fontSize: 20,
    // color: 'black'
    margin: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius:20,
    backgroundColor: 'red',
    width: 200
  },
  buttonContainer: {
    // marginBottom: 15,
    margin: 10,
    // flex:1,
    // borderWidth: 2,
    // fontSize: 24,
    // color: 'black',
    // borderColor: 'black',
    // flexDirection: 'row',
    // height: 45,
    // width: 175,
    // justifyContent: 'space-between',
    // borderRadius: 20,
    // backgroundColor: 'gray'
  },
});
