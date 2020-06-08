import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
} from "react-native";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://jsonblob.com/api/jsonBlob/4fc2f1cd-4d80-11ea-8962-c1dcfb86c24b"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.splice(35, 1); //issue in JSON due to dupliation of a certain component, had to manually fix
        this.setState({ data: responseJson });
      })
      .catch((error) => {
        ToastAndroid.show(
          "Oops! An error occurred!" + error,
          ToastAndroid.SHORT
        );
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 16 }}>Welcome to</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Petoo!</Text>
        <TouchableOpacity
          style={{ margin: 5, backgroundColor: "purple" }}
          onPress={() => {
            this.props.navigation.navigate("List", {
              data: this.state.data,
              length: this.state.data.length,
            });
          }}
        >
          <Text style={{ fontSize: 14, padding: 10, color: "white" }}>
            Menu
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
