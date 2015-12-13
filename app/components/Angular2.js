import React from 'react-native';
import NavButton from './NavButton';

import Conf from '../config';
var { Component, Text, View, StyleSheet } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class Angular2 extends Component { 
  constructor(props) {
    super(props);
  }

  render() {
    // const milestones = this.props.milestones;
    return (
      <View style={styles.container}>
       <Text>
        Is angular2 ready?? Please?
       </Text>
        <NavButton
          onPress={() => {
            this.props.navigator.pop();
          }}
          text="Back"
        />
      </View>
    );
  }
}
