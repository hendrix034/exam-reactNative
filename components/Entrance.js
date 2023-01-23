import React from 'react';
import {View,Text, Button, FlatList, TouchableOpacity} from 'react-native';

const Entrance = (props) => {
  const styles = {
    tableContainer: {
      margin: 4,
      borderWidth: 1,
      borderColor: 'black',
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: '#ddd',
    },
    tableHeaderText: {
      padding: 8,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    tableCell: {
      padding: 8,
      textAlign: 'center',
    },
  };

  
    const listOfEntry = props.item.parkingArea.map((entrySlot) =>
                            <TouchableOpacity key={entrySlot.id} style={styles.tableRow} onPress={() => alert('test')}>
                              <View style={styles.tableCell}>
                                <Text style={styles.tableCell}>{entrySlot.name}</Text>
                              </View>
                              <View style={styles.tableCell}>
                                <Text style={styles.tableCell}>{ entrySlot.carSize ? entrySlot.carSize : 'Open'}</Text>
                              </View>
                              <View style={styles.tableCell}>
                                <Text style={styles.tableCell}>{entrySlot.carPlate}</Text>
                              </View>
                              
                            </TouchableOpacity>
                          );

  return  <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>{props.item.parkingName}</Text>
              <Text style={styles.tableHeaderText}>Car Size</Text>
              <Text style={styles.tableHeaderText}>Car Plate</Text>
            </View>
            {listOfEntry}
          </View>;
 
};

export default Entrance;