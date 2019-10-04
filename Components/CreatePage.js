import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,DatePickerIOS } from 'react-native'
import axios from "axios";

class EditPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            date: new Date() ,
            description: '',
            start_time:'9:00:00',
            end_time:'13:00:00',
            time_zone:'America/New_York',
            location:''
        }
        this.handletitle=this.handletitle.bind(this);
        this.handledescription=this.handledescription.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleLocation=this.handleLocation.bind(this);

    }
    handletitle = (text) => {
        this.setState({ title: text })
    }
    handleLocation = (text) => {
        this.setState({ Location: text })
    }

    handledescription = (text) => {
        this.setState({ description: text })
    }
    async handleSubmit(event){
        let year = this.state.date.getFullYear();
        let month = this.state.date.getMonth() + 1;
        let day = this.state.date.getDate();
        let fullDate = year + "-" + month + "-" + day;
        console.log(fullDate);
        event.preventDefault();
        console.log(this.state);
        await axios.post( `http://wosAlexaCalendar-env-1.f9c7xd9apm.us-east-2.elasticbeanstalk.com/create?date=${fullDate}&start_time=${this.state.start_time}&end_time=${this.state.end_time}&time_zone=${this.state.time_zone}&title=${this.state.title}&location=${this.state.location}&description=${this.state.description}`)
       /* await axios.post("http://wosAlexaCalendar-env-1.f9c7xd9apm.us-east-2.elasticbeanstalk.com/create/", {
            title: this.state.title,
            date: fullDate,
            description: this.state.description,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            time_zone: this.state.time_zone,
           location: this.state.location


        })

        */
            .then(response => {
                //console.log(this.state)
            })
            .catch(error => {
                //console.log(error.response)
            });

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

                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "  Location"
                           placeholderTextColor = "#000000"
                           autoCapitalize = "none"
                           onChangeText = {this.handleLocation}/>

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


                <TouchableOpacity style = {styles.submitButton} onPress ={this.handleSubmit}>
                    <Text style = {styles.submitButtonText}> Create A New Event </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default EditPage

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