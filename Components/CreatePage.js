import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,DatePickerIOS } from 'react-native'
import axios from "axios";

class CreatePage extends Component {
    state = {
        title: '',
        date: new Date() ,
        description: '',
        start_time:'09:00:00',
        end_time:'13:00:00',
        time_zone:'America/New_York',
        location:'NJPac'

    }
    handletitle = (text) => {
        this.setState({ title: text })
    }
    handledescription = (text) => {
        this.setState({ description: text })
    }
    async handleSubmit(event){
        event.preventDefault();
        await axios.post("WosAlexaCalendar-env-1.f9c7xd9apm.us-east-2.elasticbeanstalk.com/create", {
            title: this.state.title,
            date: this.state.date,
            description: this.state.description,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            time_zone: this.state.time_zone,
            location: this.state.location
        })
        this.setState({
            redirect: true
        })
    }

    render() {
        return (
            <View style = {styles.container}>

                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "  Title"
                           placeholderTextColor = "#000000"
                           autoCapitalize = "none"
                           onChangeText = {this.handletitle}/>

                <DatePickerIOS
                    date={this.state.date}
                    onDateChange={date => this.setState({ date: date })}
                />


                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "  Description"
                           placeholderTextColor = "#000000"
                           autoCapitalize = "none"
                           onChangeText = {this.handledescription}/>

                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {this.handleSubmit}>
                    <Text style = {styles.submitButtonText}> Create A New Event </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default CreatePage

const styles = StyleSheet.create({
    container: {
        paddingTop: 150
    },
    input: {
        margin: 20,
        height: 30,
        borderColor: '#000000',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#000000',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white',
        textAlign:'center'
    }
})