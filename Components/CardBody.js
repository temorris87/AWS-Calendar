
import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import axios from 'axios';

class CardBody extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    async handleDelete() {
        await axios.delete(`http://wosalexacalendar-env-1.f9c7xd9apm.us-east-2.elasticbeanstalk.com/delete/${this.props.id}`);
        this.props.getPayload();
    }
    render() {
        const entryDate = new Date(this.props.date);
        const cardDate = entryDate.toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"});
        const cardTime = entryDate.toLocaleTimeString("en-US", {hour: "numeric", minute: "numeric"});
    return (
      <Card >
        <Card.Content>
          <View style={styles.header}>
            <Title>{cardDate}</Title>
            <Title>{cardTime}</Title>
          </View>
          <Title style={styles.header}>Title: {this.props.title}</Title>
        </Card.Content>
        <Card.Actions>
            {/* {console.log(this.props.id)} */}
          <Button onPress={() => {
              this.props.navigation.navigate('View', 
                {
                    id: this.props.id,
                    date: cardDate, 
                    time: cardTime,
                    title: this.props.title,
                    description: this.props.description
                })
                }}>View</Button>
          <Button onPress={() => {this.handleDelete()}}>Delete</Button>
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