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
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class RaspberryPiRemote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies:null,
        };
    }

    render() {
        var movie = MOCKED_MOVIES_DATA[0];
        return (
        <View style={styles.container}>
            <Image style={styles.thumbnail} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.year}>{movie.year}</Text>
            </View>
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
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
});

AppRegistry.registerComponent('RaspberryPiRemote', () => RaspberryPiRemote);
