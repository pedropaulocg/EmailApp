
import {View,Text, StyleSheet, ScrollView, Image } from 'react-native';

import React, {useEffect, useState} from "react";

import { FontAwesome5 } from '@expo/vector-icons'




export default function email({ route }){
    const { id } = route.params;

    const [email, setEmail] = useState({});

    useEffect(()=> {
        async function getData(){
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/'+ id)
            const email = await response.json();
            setEmail(email);
        }
        getData();
    },[]);

    return (
        <ScrollView style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.tittle}>{email.tittle}</Text>
                {email.star ? <FontAwesome5 name='star' solid size={26} color='#FFC300'/> : <FontAwesome5 name='star'  size={26} color='#FFC300'/>}
            </View>
            <View style = {styles.info}>
                <Image style = {styles.img} source = {{uri: email.picture}}/>
                <View style = {styles.profiles}>
                    <Text style = {styles.from}>{email.from}</Text>
                    <View style = {styles.ToContainer}>
                        <Text>To </Text>
                        <Text style = {styles.to}>{email.to} </Text>
                        <FontAwesome5 name = 'angle-down' size = {14} color = 'black'/>
                    </View>
                </View>
                <Text style = {styles.date}>{email.time}</Text>
            </View>
            <View style = {styles.email}>
                <Text style = {styles.body}>{email.body}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 15,
    },
    tittle: {
        fontSize: 40,
    },
    info:{
        height: 90,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingTop: 10,
    },
    img:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginLeft: 5,
    },
    ToContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    from:{
        fontSize: 28,
    },
    profiles: {
        marginLeft: 10,
    },
    date: {
        marginTop: 10,
        marginLeft: 10,
    },
    email: {
        marginTop: 15,
        justifyContent: 'center',
    },
    body: {
        fontSize: 18,
        padding: 5,
        marginLeft: 8,
    }
})