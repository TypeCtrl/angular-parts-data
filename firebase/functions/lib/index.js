"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
admin.initializeApp(functions.config().firebase);
const corsHandler = cors({ origin: true });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.submitPackage = functions.https.onRequest((req, res) => {
    corsHandler(req, res, () => {
        if (req.method !== 'POST') {
            res.status(404).send('Not Found');
            return;
        }
        const ip = req.headers['x-forwarded-for'];
        const pack = {
            name: req.body.name,
            catagories: req.body.catagories || [],
            ip,
        };
        if (!pack.name || typeof pack.name !== 'string') {
            res.status(404).send('Invalid package');
        }
        pack.name = pack.name.trim();
        if (!Array.isArray(pack.catagories)) {
            res.status(404).send('Invalid package');
        }
        admin
            .firestore()
            .collection('pending')
            .add(pack)
            .then(() => {
            delete pack.ip;
            res.status(200).send(pack);
        });
    });
});
//# sourceMappingURL=index.js.map