const functions = require('firebase-functions');

const admin=require('firebase-admin');
const { user } = require('firebase-functions/lib/providers/auth');
admin.initializeApp(functions.config().firebase)
 exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Eldhose!");
 });

 const createNotification=(notification=>{
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc=>console.log('notification added',doc));
 })
 exports.projectCreated =functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc=>{

        const project=doc.data();
        const notification={
            content:'Added a new project',
            user:`${project.authorFirstName} ${project.authorLastName}`, 
            time:admin.firestore.FieldValue.serverTimestamp()
        }
        
        return createNotification(notification);
})

exports.userJoined=functions.firestore
    .document('users/{userId}')
    .onCreate(doc=>{
        const newUser=doc.data();
            const notification={
                content:'Joined the party',
                user:`${newUser.firstName} ${newUser.lastName}`,
                time:admin.firestore.FieldValue.serverTimestamp()
    
            }
            return createNotification(notification);
        })

