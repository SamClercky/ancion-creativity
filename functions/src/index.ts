import * as functions from 'firebase-functions';
import * as admin from "firebase-admin"

admin.initializeApp()

export const showcasedata = functions.https.onRequest((request, response) => {
    try {
        // ask data
        const ref = admin.database().ref("showcaseData/")

        // retrieve data
        ref.on("value", (snapshot) => {
            // prepare data
            const showcaseData = JSON.stringify(snapshot.val())
            const answer = `window.SHOWCASE_DATA = ${showcaseData}`
            
            // send data
            response.type("text/javascript")
            response.status(200).send(answer)
        })
    } catch (err) {
        console.error("Failed to get data from ancion-creativity/showcaseData/, error: ", err)
        response.sendStatus(500)
    }
});
