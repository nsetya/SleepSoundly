import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 15,
    backgroundColor: "#F9FAFC",
  },
  blurredContainer: {
    backgroundColor: "#F9FAFC",
    opacity: 0.1,
  },
  pertanyaan: {
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: 28,
  },
  radioButton: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 15,
  },
  buttonSubmit: {
    padding: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    borderRadius: 4,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  modalInner: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 256,
    borderRadius: 6,
    backgroundColor: "#82B8AD",
  },
  buttonArtikel: {
    backgroundColor: "#00C6AB",
    width: 120,
    height: 34,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  rentangNilai: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9EEEE",
    borderRadius: 6,
    padding: 15,
    marginTop: 30,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Style;
