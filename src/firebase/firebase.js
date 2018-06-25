import * as firebase from 'firebase';

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

export { firebase, database as default };

// //child_removed event - fire when an expense gets deleted
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('child changed:', snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('child added:', snapshot.key, snapshot.val());
// });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });


//   database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);  
//   });

// database.ref('expenses').push({
//   description: 'Lunch',
//   note: 'Lunch money',
//   amount: 48202742,
//   createdAt: 38438473
// });


// database.ref()
//   .on('value', (snapshot) => {
//     const value = snapshot.val();
//     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}.`);
//   });

//   database.ref()
//     .once('value')
//     .then((snapshot) => {
//       const value = snapshot.val();
//       console.log(`${value.name} is a ${value.job.title} at ${value.job.company}.`);
//     });

//   setTimeout(() => {
//     database.ref('name').set('Lebron');
//   }, 3000);

//   setTimeout(() => {
//     database.ref('job/company').set('Cleveland');
//   }, 6000);

//   setTimeout(() => {
//     database.ref('job/title').set('the GOAT');
//   }, 9000);


//Must use function as second argument instead of promise
//Because promise can only run once
// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (error) => {
//     console.log('Error with data fetching', e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(40);
//   }, 3000);

//   setTimeout(() => {
//     database.ref().off(onValueChange);
//   }, 6000);

//   setTimeout(() => {
//     database.ref('age').set(60);
//   }, 9000);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Error fetching data:', error);
//   });

// database.ref().set({
//   name: 'Shaq',
//   age: 26,
//   isSingle: false,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Los Angeles',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('Error:', e);
// });

// database.ref('attributes').set({
//   height: 73,
//   weight: 150
// }).then(() => {
//   console.log('attributes updated');
// }).catch((error) => {
//   console.log('There was an error:', error);
// });

// console.log('Making a request to change data...');

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('User data updated');
// })

// database.ref().remove().then(() => {
//   console.log('isSingle removed!');
// }).catch((error) => {
//   console.log('Error:', error);
// })