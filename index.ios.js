import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';


var MOCKED_MOVIES_DATA = [
    {title: 'Title', year: '2015', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
];

export default class RaspberryPiRemote extends Component {
    render() {
        var movie = MOCKED_MOVIES_DATA[0];
        return (
        <View style={styles.container}>
            <Text>{movie.title}</Text>
            <Text>{movie.year}</Text>
            <Image style={styles.thumbnail} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }, thumbnail: {
        width: 50,
        height: 50,
    },
});

AppRegistry.registerComponent('RaspberryPiRemote', () => RaspberryPiRemote);
