
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC2U_5U50di1tQDU_9dLu_s_IzbsZ1zRcs",
    authDomain: "giftcot-49672.firebaseapp.com",
    projectId: "giftcot-49672",
    storageBucket: "giftcot-49672.appspot.com",
    databaseURL: "https://giftcot-49672-default-rtdb.firebaseio.com/",
    messagingSenderId: "919580301461",
    appId: "1:919580301461:web:bd5e1fbe61f890af6a639c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;