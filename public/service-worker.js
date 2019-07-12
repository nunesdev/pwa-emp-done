console.log("service-worker.js")
// import service worker script
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

// Network First
[
    '/$',  // Index
    '/*',  // Anything in the same host
    '.+/*' // Anything in any host
]
.forEach(mask => {
    workbox.routing.registerRoute(
        new RegExp(mask),
        new workbox.strategies.NetworkFirst( { cacheName: 'dynamic' } )
    );
});


// importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js');
// // Initialize the Firebase app in the service worker by passing in the messagingSenderId.
// firebase.initializeApp({
//   apiKey: "AIzaSyDPzfSVz6A4QfmqZHbIcS6oG0ojRF3SSTM",
//   authDomain: "hackathon-4a2dc.firebaseapp.com",
//   databaseURL: "https://hackathon-4a2dc.firebaseio.com",
//   projectId: "hackathon-4a2dc",
//   storageBucket: "",
//   messagingSenderId: "985411807339",
//   appId: "1:985411807339:web:c515d036c3e49ab6"
// });
//
// // Retrieve an instance of Firebase Messaging so that it can handle background messages.
// const messaging = firebase.messaging();
// // [END initialize_firebase_in_sw]
