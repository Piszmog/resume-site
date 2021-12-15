import type {FirebaseApp} from "firebase/app";
import {initializeApp} from "firebase/app";

export interface Config {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

export class App {
    public readonly app: FirebaseApp

    constructor(config: Config) {
        this.app = initializeApp(config)
    }
}
