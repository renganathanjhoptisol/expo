import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("select");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select" value="select" />
        <Picker.Item label="HTML" value="html" />
        <Picker.Item label="CSS" value="css" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="React-Native" value="react-native"/>
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default App;