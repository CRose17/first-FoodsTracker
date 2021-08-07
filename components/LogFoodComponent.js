import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
  Modal,
  Button
} from "react-native";
import { Card, Text, Input } from "react-native-elements";

class LogFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  enterFood() {
    this.toggleModal();
  }
  resetModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.background}>
          <Card title="Baby First Foods Tracker">
            <Button
              title="Let's get started"
              onPress={() => this.enterFood()}
            />
          </Card>
        </View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.showModal}
          onRequestClose={() => this.toggleModal()}
        >
          <View>
            <Text style={styles.cardText}>Enter Food Here</Text>
            <Input placeholder="Food" />
            <View style={{ margin: 10 }}>
              <Button
                onPress={() => {
                  this.toggleModal();
                  this.resetModal();
                }}
                title="Submit"
                color="green"
              />
            </View>
            <View style={{ margin: 10 }}>
              <Button
                onPress={() => {
                  this.toggleModal();
                  this.resetModal();
                }}
                title="Close"
                color="#5637DD"
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  background: {
    backgroundColor: "blue",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  cardText: {
    color: "red",
    fontSize: 32,
    fontWeight: "100",
    justifyContent: "flex-start",
    margin: 10
  },
  modal: {
    justifyContent: "center",
    margin: 20
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#5637DD",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20
  },
  modalText: {
    fontSize: 18,
    margin: 10
  }
});

export default LogFood;
