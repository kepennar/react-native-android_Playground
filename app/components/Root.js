import React from 'react-native';

import Home from './Home';
import Angular2 from './Angular2';

var { Component, Navigator } = React;

export default class Root extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'home' }}
        renderScene={this._renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  }
  _renderScene(route, navigator) {
    if (route.id === 'home') {
      return <Home navigator={navigator} />
    } else if (route.id === 'angular2') {
      return <Angular2 navigator={navigator} />
    }
  }
}