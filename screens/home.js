import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const [ModalShow, setModalShow] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={ModalShow} animationType='slide'>
        <View style={globalStyles.modalContent}>
          <MaterialIcons name='close' size={24} style={{...globalStyles.modalToggle, ...globalStyles.modalClose }} onPress={() => setModalShow(false)}/>
          <Text>Hello from the model :)</Text>
        </View>
      </Modal>
      <MaterialIcons name='add' size={24} style={globalStyles.modalToggle} onPress={() => {setModalShow(true)}}></MaterialIcons>
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => { navigation.navigate('ReviewDetails', item) }}>
              <Card>
                <Text style={globalStyles.titleText}> {item.title} </Text>
              </Card>
            </TouchableOpacity>
          )
        }
        }>
      </FlatList>
    </View>
  );
}