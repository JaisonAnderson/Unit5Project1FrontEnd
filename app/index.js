import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList, Touchable } from "react-native";
import { Link } from "expo-router";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MonthsList(){
    const [months, SetMonths] = useState([]);
    const [apiUrl, setApiUrl] = useState("");

    useEffect(() => {
        const hostUri = Constants.expoConfig.hostUri;
        const ipAddress = hostUri ? hostUri.split(":")[0] : null;
        const apiPort = "8080";
        const tempURL = ipAddress ? `http://${ipAddress}:${apiPort}` : null
        setApiUrl(tempURL);
        console.log(tempURL)
        fetch(`${tempURL}/api/calendar/Months`)
            .then((response) => response.json())
            .then((data) => SetMonths(data))
    }, [])
    console.log(months)

    return(
        <View>
            <FlatList
            data={months}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                 <View>
                    <TouchableOpacity>
                    <Text>{item.title}</Text>
                    <Link href={"/day"}></Link>
                    </TouchableOpacity>
                    
                 </View>   
            )}
            />
        </View>
    )
}