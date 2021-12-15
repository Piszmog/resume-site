import {collection, doc, DocumentData, Firestore, getDoc, getDocs, getFirestore} from 'firebase/firestore/lite';
import type {App} from "./app";

export class DB {
    private readonly db: Firestore;

    constructor(app: App) {
        this.db = getFirestore(app.app);
    }

    get(path: string): Promise<DocumentData[]> {
        const col = collection(this.db, path);
        return getDocs(col)
            .then(docs => docs.docs)
            .then(docs => docs.map(d => d.data()));
    }

    getById(path: string, id: string): Promise<DocumentData> {
        const docRef = doc(this.db, path, id);
        return getDoc(docRef)
            .then(doc => doc.data());
    }
}
