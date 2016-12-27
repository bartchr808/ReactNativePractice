'use strict';

// Imports
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

// StyleSheet
var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,

    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonGo: {
    flex: 1
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
  width: 217,
  height: 138
  }
});

// <View>
//   <Text>hello</Text>
// </View>


class SearchPage extends Component {

  constructor(props) {
    super(props);
    // This sets the TextInput value property — that is, the text displayed to the user — to the current value of the searchString state variable.
    this.state = {
      searchString: 'london'
    };
  }

  // This takes the value from the native browser event’s text property and uses it to update the component’s state.
  onSearchTextChanged(event) {
  console.log('onSearchTextChanged');
  this.setState({ searchString: event.nativeEvent.text });
  console.log(this.state.searchString);
  }
  render() {
    console.log('SearchPage.render');
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name, postcode or search near your location.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via name or postcode'/>
          <TouchableHighlight style={StyleSheet.flatten([styles.button, styles.buttonGo])}
            underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableHighlight>
        <Image source={require('./Resources/house.png')} style={styles.image}/>
      </View>
    );

    // return (
    //   <View style={{flex:1}}>
    //     <View style={{flex:2, backgroundColor:'red'}}/>
    //     <View style={{flex:1,flexDirection:'row'}}>
    //       <View style={{flex:2, backgroundColor:'green'}}/>
    //       <View style={{flex:1, backgroundColor:'purple'}}/>
    //     </View>
    //   </View>
    //);
  }
}


// This exports the SearchPage class, which permits its use in other files.
module.exports = SearchPage;
