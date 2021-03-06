import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSanpshot) => {
//             expenses.push({
//                 id: childSanpshot.key,
//                 ...childSanpshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSanpshot) => {
//             expenses.push({
//                 id: childSanpshot.key,
//                 ...childSanpshot.val()
//             });
//         });

//         console.log(expenses);
//     });
// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 9785412134546
// });

// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 9785412134546
// });

// database.ref('expenses').push({
//     description: 'Water bill',
//     note: '',
//     amount: 1200,
//     createdAt: 9785412134546
// });
