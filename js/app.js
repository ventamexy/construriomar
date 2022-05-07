// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCfwWEYfalbck6zdiwdfwIsPQYZ_hJdXd8",
    authDomain: "fb-api-5835a.firebaseapp.com",
    databaseURL: "https://fb-api-5835a-default-rtdb.firebaseio.com",
    projectId: "fb-api-5835a",
    storageBucket: "fb-api-5835a.appspot.com",
    messagingSenderId: "225448914734",
    appId: "1:225448914734:web:63f47088daf6f11add14bf",
    measurementId: "G-F9H1BCZMXF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Referece contactinfo collecction

let contactInfo = firebase.database().ref("infos")



document.querySelector(".contact-form").addEventListener("submit",
    submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let telefono = document.querySelector(".telefono").value;
    let message = document.querySelector(".message").value

    // console.log(name, email, message);

    saveContactInfo(name, email, telefono, message);

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, telefono, message);
}

// Save infos to Firebase

function saveContactInfo(name, email, telefono, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        telefono: telefono,
        message: message,
    })
}

// Send Email Info

function sendEmail(name, email,telefono, message) {

    Email.send({
        Host: "smtp.gmail.com",
        Username: "venta.mexy@gmail.com",
        Password: "nschbjkspphiuykd",
        To: "venta.mexy@gmail.com",
        From: "venta.mexy@gmail.com",
        Subject: `${name} sent you a message from Contabilizate`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Tel: ${telefono} <br/> Message: ${message}`,
    }).then((message) => alert("mail send successfully"));
    
}


