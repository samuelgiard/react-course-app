import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyByoold8UpyKhaJIzh4K5wfAaIpZg9kE1I",
  authDomain: "expensify-165f0.firebaseapp.com",
  databaseURL: "https://expensify-165f0.firebaseio.com",
  projectId: "expensify-165f0",
  storageBucket: "expensify-165f0.appspot.com",
  messagingSenderId: "428073326504"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref()
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('Error fetching data', e)
  });

// database.ref()
// set({
//   name: 'Samuel Giard',
//   age: 51,
//   stressLevel: 6,
//   job: {
//     title: 'Software developper',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// })
// .then(() => {
//   console.log('Data is saved,');
// })
// .catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref()
// .update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// // set(null) permet de supprimer
// database.ref('isSingle').set(null);

// database.ref()
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded.");
//   })
//   .catch((e) => {
//     console.log("Remove failed: ", e);
//   });