import React from 'react-native';

import NavButton from './NavButton';
import Conf from '../config';
var { Component, Navigator, StyleSheet, Text, View } = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Home extends Component { 
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome Home!
        </Text>
        <Text style={styles.instructions}>
          This is the first React native Kepennar app
        </Text>
        <Text style={styles.instructions}>
          How do this like ??
        </Text>
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              id: 'angular2'
            });
          }}
          text="Angular2"
        />
      </View>
    );
  }
  loadMilestones() {
    return fetch(Conf.URLS.MILESTONES)
        .then(this._status)
        .then(this._json)
        .then(d => {
            this.data.milestones = d;
            // this._updateSlimMilestones();
        }).catch(error => console.log('Request failed', error));
    }

    _status(response) {
      if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
      } else {
          return Promise.reject(new Error(response.statusText));
      }
    }

  _json(response) {
      return response.json();
    }

}