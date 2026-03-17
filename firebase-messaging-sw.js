importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAfjTWeL71syzo7SNpym7ATcbrq6i7JfXQ",
  authDomain: "game-server-df061.firebaseapp.com",
  databaseURL: "https://game-server-df061-default-rtdb.firebaseio.com",
  projectId: "game-server-df061",
  storageBucket: "game-server-df061.firebasestorage.app",
  messagingSenderId: "475396427934",
  appId: "1:475396427934:web:5106a6210aa51e3b8f6b8f"
});

const messaging = firebase.messaging();

// アプリを閉じていても通知が出るようにする設定
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png' // LINE風アイコン
  });
});
