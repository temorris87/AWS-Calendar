
import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

class CardBody extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <Card >
        <Card.Content>
          <View style={styles.header}>
            <Title>Date</Title>
            <Title>Time</Title>
          </View>
          <Title style={styles.header}>{this.props.title}</Title>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => {this.props.navigation.navigate('View')}}>View</Button>
          <Button>Delete</Button>
        </Card.Actions>
      </Card>
    );
  }
}

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 18
  }
}
export default withNavigation(CardBody) 