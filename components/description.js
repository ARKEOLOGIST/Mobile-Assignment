import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Description(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        {props.navigation.getParam("data").family_name}
      </Text>
      <Text style={{ fontSize: 22 }}>
        {props.navigation.getParam("data").category_name}
      </Text>
      <Text style={{ fontSize: 20 }}>
        {props.navigation.getParam("data").description}
      </Text>
      <Text style={{ fontSize: 23 }}>
        {props.navigation.getParam("data").price}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Description;
