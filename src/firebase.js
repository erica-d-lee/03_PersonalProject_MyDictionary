import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuzfqE1tVnM6oVtWGn-nFsDHi6e9-3gNA",
    authDomain: "react-my-dictionary.firebaseapp.com",
    projectId: "react-my-dictionary",
    storageBucket: "react-my-dictionary.appspot.com",
    messagingSenderId: "522651810947",
    appId: "1:522651810947:web:af08c6b5e6571cc687afb6",
    measurementId: "G-P68Z6NVDKW"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };