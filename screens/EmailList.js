import React, {useEffect, useState} from "react";
import {View,Text, StyleSheet,Image} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from '@expo/vector-icons'



export default function EmailList({navigation}) {
    const [EmailList,setEmailList] = useState([]);

    useEffect(()=> {
        async function getData(){
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails')
            const EmailList = await response.json();
            setEmailList(EmailList);
        }
        getData();
    }, []);
    function estrela(star){
        if(star){
            return(<FontAwesome5 name='star' solid size={26} color='#FFC300'/>)
        }else{
            return(<FontAwesome5 name='star' size={26} color='#FFC300'/>)
        }
    }

    function renderItem({item}){
        return <TouchableOpacity style = {styles.list} onPress={()=> navigation.navigate('email', {id: item.id })}>
            <Image style={styles.ImgPerfil} source = {{uri: item.picture}}/>
            <View style = {styles.header}>
                <View style = {styles.txt}>
                    <Text style = {styles.emailTit}>{item.to}</Text>
                    <Text style = {styles.emailTit}>{item.tittle}</Text>
                </View>
                <View style = {styles.fav}>
                    <Text style = {styles.time}>{item.time}</Text>
                    {estrela(item.star)}
                </View>
            </View>
        </TouchableOpacity>
    }

    return (
      <View style = {styles.container}>
        <StatusBar style="auto" />
        <FlatList
        data = {EmailList}
        renderItem = {renderItem}
        keyExtractor = {item => item.id}
        showsHorizontalScrollIndicator = {false}
        />
        
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        marginTop: 30,
    },
    fav:{
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    list:{
        flexDirection: 'row',
        height: 80,
        marginBottom: 10,
        paddingBottom: 10,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },

    ImgPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 10,
    },
    txt:{
        flexDirection: 'column',
        justifyContent: 'center',

    },  
    emailTit: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    header:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '80%',
    },
})