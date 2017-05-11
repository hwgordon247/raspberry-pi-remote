import React, {
    Component,
} from 'react';
import {
    AppRegistry,
    Image,
    NetInfo,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ApiUtils from './src/ApiUtils'

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
        fetch(REQUEST_URL, {
            method: 'GET',
            headers: {
                auth: 'yoyoyoyo',
            },
        })
        // .then(ApiUtils.checkStatus)
        .then((responseData) => {
            console.log(responseData);
            this.setState({
                isActive: 'Online',
            });
        })
        .catch((error) => {
            if (error.toString().includes('Network request failed')) {
                this.setState({
                    isActive: 'Offline',
                });
            } else {
                this.setState({
                    isActive: 'error',
                });
            }
        });
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
