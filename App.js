import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Button, View, Alert,Text, ScrollView } from 'react-native';
import Entrance from './components/Entrance.js';
import AddingCarOnParkingAreaModal from './components/AddingCarOnParkingAreaModal.js';
export default function App() {
  const [records, setRecords] = useState([]);
  const [entry, setEntry] = useState([
    {   
      id:1,
      parkingName: 'park 1',
      parkingArea: [
        {
          id:1,
          name:'SP',
          carSize: null,
          validCarSize: 1,
          CarPlate: null
        },
        {
          id:2,
          name:'MP',
          carSize: null,
          validCarSize: 2,
          CarPlate: null
        },
        {
          id:3,
          name:'LP',
          carSize: null,
          validCarSize: 3,
          CarPlate: null
        }
      ]
      
    },
    {   
      id:2,
      parkingName: 'park 2',
      parkingArea: [
        {
          id:1,
          name:'SP',
          carSize: null,
          validCarSize: 1,
          CarPlate: null
        },
        {
          id:2,
          name:'MP',
          carSize: null,
          validCarSize: 2,
          CarPlate: null
        },
        {
          id:3,
          name:'LP',
          carSize: null,
          validCarSize: 3,
          CarPlate: null
        }
      ]
    },
    {   
      id:3,
      parkingName: 'park 3',
      parkingArea: [
        {
          id:1,
          name:'SP',
          carSize: null,
          validCarSize: 1,
          CarPlate: null
        },
        {
          id:2,
          name:'MP',
          carSize: null,
          validCarSize: 2,
          CarPlate: null
        },
        {
          id:3,
          name:'LP',
          carSize: null,
          validCarSize: 3,
          CarPlate: null
        }
      ]
    },
]);


const AddEntrance = () => {
  setEntry(entry.concat({   
    id:entry.length + 1,
    parkingName: 'park ',
    parkingArea: [
      {
        id:1,
        name:'SP',
        carSize: null,
        validCarSize: 1,
        CarPlate: null
      },
      {
        id:2,
        name:'MP',
        carSize: null,
        validCarSize: 2,
        CarPlate: null
      },
      {
        id:3,
        name:'LP',
        carSize: null,
        validCarSize: 3,
        CarPlate: null
      }
    ]
  }))
}
const updateEntry = (plateNumber,carSizeInput) => {
  setEntry(currentItem => {
    const newItems = [...currentItem];
    let index = -1;
    let arrayIndex = -1;
    for(let i = 0; i< currentItem.length; i++){
      for(let j = 0; j < currentItem[i].parkingArea.length; j++){
        if(currentItem[i].parkingArea[j].validCarSize >= carSizeInput && currentItem[i].parkingArea[j].carSize == null){
          index = j;
          arrayIndex = i;
          newItems[arrayIndex].parkingArea[index].carSize = carSizeInput;
          newItems[arrayIndex].parkingArea[index].carPlate = plateNumber;
          return newItems;
        }
      }
    }
    alert('No Available Parking Area')
    return currentItem;
    
   
  })
  // console.log('hello')
}

  return (
    <ScrollView>
    <View style={styles.container}>
      <AddingCarOnParkingAreaModal updateEntry={updateEntry}/>
      <Button
        style={styles.btn}
        title='add entrance'
        onPress={AddEntrance}
      />
      {entry.map(item => (
        <Entrance item={item} key={item.id}/>
      ))}
     
    </View>
    </ScrollView>
  );
}

// sample data
// [
//   {
//     entryId:1,
//     parkingAreaId:1,
//     carPlate:'123',
//     carSize:'S',
//     startTime:'',
//     endTime:'',
//     amount:''
//   }
// ]

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    
  },
  btn:{
    backgroundColor: '#fff',
    margin: 5,
  }
});
