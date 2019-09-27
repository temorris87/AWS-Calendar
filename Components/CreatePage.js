import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import axios from "axios";

class CreatePage extends Component {
    state = {
        title: '',
        date: '' ,
        description: ''
    }
    handletitle = (text) => {
        this.setState({ title: text })
    }
    handledate = (text) => {
        this.setState({ date: text })
    }
    handledescription = (text) => {
        this.setState({ description: text })
    }
    async handleSubmit(event){
        event.preventDefault();
        await axios.post("http://wosalexacalendar-env.f9c7xd9apm.us-east-2.elasticbeanstalk.com/create", {
            title: this.state.title,
            date: this.state.date,
            description: this.state.description
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
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handletitle}/>

                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "  Date"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handledate}/>

                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "  Description"
                           placeholderTextColor = "#9a73ef"
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
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
})
