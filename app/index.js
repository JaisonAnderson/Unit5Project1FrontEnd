import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { Link } from "expo-router";
import Constants from "expo-constants";

export default function MonthsList(){
    const [months, SetMonths] = useState([]);
    const [apiUrl, setApiUrl] = useState("");

    useEffect(() => {
        const hostUri = Constants.expoGoConfig.hostUri;
        ipAddress = hostUri ? hostUri.split(":")[0] : null;
        const apiPort = "8080";
        const tempURL = ipAddress ? `https://${ipAddress}:${apiPort}` : null
        setApiUrl(tempURL);
        fetch(`${tempURL}/api/calendar/Months`)
            .then((response) => response.json())
            .then((data) => SetMonths(data))
    })


    return(
        <View>
            <FlatList
            data={months}
            renderItem={({item}) => (
                 <View key={item.id}>
                    <Link href={`/month/${item.id}`}>
                        <Text>{item.title}</Text>
                    </Link>
                 </View>   
            )}
            />
        </View>
    )
}