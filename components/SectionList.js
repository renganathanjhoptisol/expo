import React, {Component} from 'react';
import { View, Text, SectionList, TouchableOpacity } from 'react-native';
import {styles1} from './Styles/Secstyle';


const EmpData = [
    {
        title : "PC Games",
        data : ["Far Cry 3", "GTA San Andres", "God Of War"]
    },
    {
        title : "Mobiles Games",
        data : ["Free Fire", "Scocer", "Mini Miltery"]
    },
    {
        title : "Real Games",
        data : ["Football", "Swimming", "Running"]
    }
]; 

const DisplayItem = ({title}) => {
    return (
        <TouchableOpacity style={styles1.displayItem}>
            <Text style={styles1.textName}>{title}</Text>
        </TouchableOpacity>
    );
}

const renderItem = ({item}) => (
    <DisplayItem title = {item} />
);


class secList extends Component {
    render () {
        return (
            <View>
                <Text style={styles1.headerText}>React Native SectionList Tutorial!</Text>
                <SectionList 
                    sections = {EmpData}
                    keyExtractor = {(item, index) => item + index}
                    renderItem = {renderItem}
                    renderSectionHeader = {({section : {title} }) => (
                        <Text style={styles1.header}>{title}</Text>
                    )}
                />
            </View>
        );
    }
}


export default secList;