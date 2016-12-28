'use strict'

//var React = require('react')
//var ReactNative = require('react-native')
var SearchPage = require('./SearchPage');
import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight, StyleSheet, AppRegistry } from 'react-native';

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

/*
class HelloWorld extends React.Component {
  render() {
    return <ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>;
  }
}
*/

/*
This constructs a navigation controller, applies a style and sets the initial route to the HelloWorld component.
 */
class PropertyFinderApp extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}
        renderScene={(route, navigator) =>
          <SearchPage/>
        }/>
    );
  }
}





/*
Don't remove: AppRegistry defines the entry point to the application and provides the root component.
 */
AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
