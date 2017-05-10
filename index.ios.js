import React, {
    Component,
} from 'react';
import {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

var REQUEST_URL = 'http://localhost:3000/test';

class RaspberryPiRemote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: 'loading',
        };
    }

    componentDidMount() {
        this.fetchPiStatus();
    }

    fetchPiStatus() {
        console.log('WHREER DOES THIS LOG???')
        fetch(REQUEST_URL)
        // .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            this.setState({
                isActive: responseData._bodyText,
            });
        }).done();
    }

    render() {
        return (
            <View>
                <Text style={styles.title}> Raspberry Pi Status: </Text>
                <Text> {this.state.isActive} </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    title: {
        marginTop: 30,
    },
});

AppRegistry.registerComponent('RaspberryPiRemote', () => RaspberryPiRemote);
