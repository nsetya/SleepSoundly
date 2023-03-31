import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const styles = StyleSheet.create({
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

const RadioButtonGroup = ({ radioButtons, onValueChange }) => {
  const [checked, setChecked] = React.useState();

  return (
    <RadioButton.Group value={checked} onValueChange={(v) => {
      onValueChange(v)
      setChecked(v);
    }}>
      {
        radioButtons?.map((v) => (
          <View key={v?.id} style={styles.radioGroup}>
            <RadioButton value={v?.value} status={v?.status || checked === v?.value || 'unchecked'} color="#00C6AB" />
            <Text>{v?.label}</Text>
          </View>
        ))
      }
    </RadioButton.Group>
  );
};

export default React.memo(RadioButtonGroup, () => true);

