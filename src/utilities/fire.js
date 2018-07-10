/**
 * Created by nikes on 9/14/2017.
 */
import firebase from 'firebase'
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
const fire = firebase.initializeApp(config);

export function writeUserData(data) {
    let reference = fire.database().ref("mothers");
    let promise = reference.push(data);
    return promise;
}

export function readData(node) {
    let ref =  fire.database().ref(node);
    return ref.once('value');
}

export function readListData(node, limit) {
    let ref =  fire.database().ref(node).limitToFirst(limit);
    return ref.once('value');
}
