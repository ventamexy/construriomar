// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCfwWEYfalbck6zdiwdfwIsPQYZ_hJdXd8",
    authDomain: "fb-api-5835a.firebaseapp.com",
    databaseURL: "https://fb-api-5835a-default-rtdb.firebaseio.com",
    projectId: "fb-api-5835a",
    storageBucket: "fb-api-5835a.appspot.com",
    messagingSenderId: "225448914734",
    appId: "1:225448914734:web:26ca8d6feda3c2d3dd14bf",
    measurementId: "G-ERD5WZ4T6H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()

db.collection('anuncio-contabilizate')
    .where("visible", "==", true)
    .get()
    .then(snapshot => {
        let data = [];
        snapshot.forEach(doc => {
            data.push(
                Object.assign(
                    {
                        id: doc.id
                    },
                    doc.data()
                )
            );
        });
        console.log(data)


        let output = ` <div class="contenedor-anuncios">`;

        data.forEach(function (anun) {
            output += `
                <div class="anuncio">
                <img src="${anun.url}" alt="">
                <div class="contenido-anuncio clearfix">
                <h3>${anun.name}</h3>
                <p>${anun.descripcion}</p>
                </div>
                </div>
                `;
        });
        document.getElementById('elem').innerHTML = output
        // console.log(element);
    })
    .catch(err => console.log(err));