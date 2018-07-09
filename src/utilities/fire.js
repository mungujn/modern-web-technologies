/**
 * Created by nikes on 9/14/2017.
 */
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyDAsG9Ki8P1Q8PDC3Xl0P42ngFGV07BHGA",
    authDomain: "celestini-muk-2017.firebaseapp.com",
    databaseURL: "https://celestini-muk-2017.firebaseio.com",
    projectId: "celestini-muk-2017",
    storageBucket: "celestini-muk-2017.appspot.com",
    messagingSenderId: "374890776245"
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
