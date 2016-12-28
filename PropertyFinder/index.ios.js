'use strict'

import React, { Component } from 'react';
//var ReactNative = require('react-native')
var SearchPage = require('./SearchPage');
import { View, Text, Navigator, TouchableHighlight, StyleSheet, AppRegistry } from 'react-native';
var PropertyView = require('./PropertyView');
var SearchResults = require('./SearchResults');

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  },
  navBar: {
    width: 375,
    height: 60,
    backgroundColor: '#ababab'
  },
  navBarText: {
    padding: 10,
    fontSize: 15
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
        navigationBar={<Navigator.NavigationBar
       routeMapper={{
         LeftButton: (route, navigator, index, navState) =>
          {
            if (route.index === 'propFinder') {
              return null;
            } else {
              return (
                <TouchableHighlight onPress={() => navigator.pop()}>
                  <Text style={styles.navBarText}>Back</Text>
                </TouchableHighlight>
              );
            }
          },
         RightButton: (route, navigator, index, navState) =>
           { return (<Text></Text>); },
         Title: (route, navigator, index, navState) =>
           { return (<Text style={styles.navBarText}>Awesome Nav Bar</Text>); },
       }} style={styles.navBar}/>}
       style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          key: 'propFinder'
        }}
        renderScene={(route, navigator) =>
          { console.log(route);
            if (route.key == 'propFinder'){
              return <SearchPage  navigator={navigator}/>
            }
            else if (route.key == 'searchRes'){
              return <SearchResults listings={route.listings} navigator={navigator}/>
            }
            return <PropertyView property={route.property} navigator={navigator}/>
          }
        }
      />
    );
  }
}




/*
Don't remove: AppRegistry defines the entry point to the application and provides the root component.
 */
AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
