
import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import axios from 'axios';
import CardBody from './CardBody';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: []
    }

    this.getPayload = this.getPayload.bind(this)
  }

  async getPayload() {
    const res = await axios.get(`http://wosalexacalendar-env-1.f9c7xd9apm.us-east-2.elasticbeanstalk.com/`)        
    this.setState({
        entries: res.data
    })
  }

  async componentDidMount() {
    this.getPayload();
  }

  render() {
      return (
          <ScrollView style={styles.container}>
              <Text style={styles.title}>Welcome to WOS Calendar App</Text>
              {this.state.entries.map((entry, index) => {
                  return (
                      <CardBody
                        key={index}
                        id={entry.id}
                        date={entry.start.dateTime}
                        title={entry.summary}
                        description={entry.description}
                        location={entry.location}
                        getPayload={this.getPayload}
                      />
                  )
              })}
              <Button
              style={styles.floatingMenuButtonStyle}
              onPress={() => {this.props.navigation.navigate('Create')}}
              >Create</Button>
          </ScrollView>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-around',
    backgroundColor: '#CCCCCC',
    padding: 8
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  floatingMenuButtonStyle: {
      alignSelf: 'flex-end'
  }
});