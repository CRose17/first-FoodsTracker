import React, { Component } from "react";
import { View, Text } from "react-native";

class About extends Component {
  static navigationOptions = {
    title: "Welcome"
  };

  render() {
    return (
      <View>
        <Text>About Component</Text>
      </View>
    );
  }
}

export default About;
