import React, { Component } from "react";
import { View, Text } from "react-native";

class Directory extends Component {
  static navigationOptions = {
    title: "Directory"
  };

  render() {
    return (
      <View>
        <Text>Directory Component</Text>
      </View>
    );
  }
}

export default Directory;
