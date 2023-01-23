import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Button, TouchableWithoutFeedback } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const AddingCarOnParkingAreaModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [plate, setPlate] = useState(null);
  const [carSize, setCarSize] = useState("1");

  const handleChange = (value) => {
    setPlate(value);
  }

  const handleSubmit = () => {
    setModalVisible(false);
    props.updateEntry(plate,carSize)
  }

  return (
    <View>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
       
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Plate Number:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => handleChange(text)}
                value={plate}
              />
              <Text>Car Size:</Text>
              <Picker
                selectedValue={carSize}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setCarSize(itemValue)}
            >
                <Picker.Item label="Small" value="1" />
                <Picker.Item label="Medium" value="2" />
                <Picker.Item label="Large" value="3" />
            </Picker>
              <Button title="Submit" onPress={handleSubmit} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
      </Modal>
    </View>
  );
};

export default AddingCarOnParkingAreaModal;
