import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import {styles} from './Styles/Fstyle';


const Customers = [
    { 
        id : '1',
        name : "Customer1",
        salary : 240
    },
    { 
        id : '2',
        name : "Customer2",
        salary : 250
    },
    { 
        id : '3',
        name : "Customer3",
        salary : 260
    },
    { 
        id : '4',
        name : "Customer4",
        salary : 270
    },
    { 
        id : '5',
        name : "Customer5",
        salary : 280
    },
];

const DisplayItem = ({id, name, salary}) => {
    const handlePress = (id) => {
        const customer = Customers.find(cust => {
            return cust.id === id;
        });
        Alert.alert("Customer Details", `Name : ${customer.name} \n salary : ${customer.salary}`);
    };
    return (
        <TouchableOpacity onPress = {() => handlePress(id)} style = {styles.listItem}>
            <Text style = {styles.listName}>{name}</Text>
            <Text style = {styles.listSalary}>{salary}</Text>
        </TouchableOpacity>
    );
}

const renderItem = ({item}) => (
    <DisplayItem id = {item.id} name = {item.name} salary = {item.salary} />
);

class flatList extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>React Native FlatList Tutorial</Text>
            <FlatList 
                data = {Customers}
                renderItem = {renderItem}
                keyExtractor = {(item) => item.id}
            />
            </View>
        );
    }
}

export default flatList;