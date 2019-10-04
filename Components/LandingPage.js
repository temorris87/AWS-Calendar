import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';

export default class LandingPage extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Welcome to WOS Calendar App</Text>
                <Card>
                  <Card.Content style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Title>September 13, 2019</Title>
                    <Title>3:00 PM</Title>
                  </Card.Content>
                  <Card.Content>
                    <Title>Making This App</Title>
                  </Card.Content>
                  <Card.Actions>
                      <Button>Delete</Button>
                      <Button onPress={() => {this.props.navigation.navigate('View')}}>View</Button>
                  </Card.Actions>                
                </Card>
                <Card>
                  <Card.Content style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Title>September 13, 2019</Title>
                    <Title>3:00 PM</Title>
                  </Card.Content>
                  <Card.Content>
                    <Title>Making This App</Title>
                  </Card.Content>
                  <Card.Actions>
                      <Button>Delete</Button>
                      <Button onPress={() => {this.props.navigation.navigate('View')}}>View</Button>
                  </Card.Actions>
                </Card>
                <Card>
                  <Card.Content style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Title>September 13, 2019</Title>
                    <Title>3:00 PM</Title>
                  </Card.Content>
                  <Card.Content>
                    <Title>Making This App</Title>
                  </Card.Content>
                  <Card.Actions>
                      <Button>Delete</Button>
                      <Button onPress={() => {this.props.navigation.navigate('View')}}>View</Button>
                </Card.Actions>                
                </Card>
                <Card>
                  <Card.Content style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Title>September 13, 2019</Title>
                    <Title>3:00 PM</Title>
                  </Card.Content>
                  <Card.Content>
                    <Title>Making This App</Title>
                  </Card.Content>
                  <Card.Actions>
                      <Button>Delete</Button>
                      <Button onPress={() => {this.props.navigation.navigate('View')}}>View</Button>
                </Card.Actions>                
                </Card>
                <Card>
                  <Card.Content style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Title>September 13, 2019</Title>
                    <Title>3:00 PM</Title>
                  </Card.Content>
                  <Card.Content>
                    <Title>Making This App</Title>
                  </Card.Content>
                  <Card.Actions>
                      <Button>Delete</Button>
                      <Button onPress={() => {this.props.navigation.navigate('View')}}>View</Button>
                </Card.Actions>
                </Card>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    padding: 8
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  card: {
    textAlign: 'center',
    margin: '25px'
  }
});