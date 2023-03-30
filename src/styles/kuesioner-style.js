import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 15,
    backgroundColor: "#F9FAFC",
    borderRadius: 10,
  },
  pertanyaan: {
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: 28
  },
  radioButton: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 15
  }
});

export default Style;
