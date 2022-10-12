import { FlatList } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import { TextInput } from "react-native";
import { Switch } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled6 = () => {
  return <View style={_styles.IBcOdZyj}>
      <Switch style={_styles.fvdqmvoa}></Switch><TextInput style={_styles.CqXiszKw}></TextInput><TextInput style={_styles.WziegdeC}></TextInput><RadioGroup style={_styles.xQWLOLlB} radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="column"></RadioGroup><TextInput style={_styles.IYDcNyJk}></TextInput><FlatList style={_styles.dTTfdROx} renderItem={() => <View style={_styles.RxHzDzgN}></View>} ItemSeparatorComponent={() => <View style={_styles.fqYsghel} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList></View>;
};

export default Untitled6;

const _styles = StyleSheet.create({
  IBcOdZyj: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  fvdqmvoa: {
    left: 131,
    top: 174,
    position: "absolute",
    width: 50,
    height: 25
  },
  CqXiszKw: {
    left: 156,
    top: 367,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  WziegdeC: {
    left: 193,
    top: 500,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  xQWLOLlB: {
    left: 17,
    top: 244,
    position: "absolute",
    width: 277,
    height: 201
  },
  IYDcNyJk: {
    left: 194,
    top: 61,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  dTTfdROx: {
    left: 286,
    top: 174,
    position: "absolute",
    width: 100,
    height: 150
  },
  RxHzDzgN: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  fqYsghel: {
    backgroundColor: "#000000",
    height: 1
  }
});