import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SpaceCraftScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#00001b"
                }}>
                <Text style={{
                    color: "white"
                }}>SpaceCraft Screen!</Text>
            </View>
        )
    }
}