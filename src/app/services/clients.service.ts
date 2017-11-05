import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore, } from 'angularfire2/firestore';
// import {  FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase } from "angularfire2/database";
// import {  FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Client } from '../models/client.model'

@Injectable()
export class ClientsService {
    // clients: FirebaseListObservable<any[]>;
    // client: FirebaseObjectObservable<any>
    // constructor(
    //     public db: AngularFireDatabase
    // ) {
    //     this.clients = db.list('clients') as FirebaseListObservable<Client[]>;
    // };

    clients: Observable<any[]>;
    constructor(db: AngularFireDatabase) {
        this.clients = db.list('clients').valueChanges();
    }
    getClients() {
        return this.clients;
    }
    addclient() {
        // const clients = this.db.object('clients');
        // clients.set({
        //     firstName: 'Abubakar',
        //     lastName: 'Zafar',
        //     email: 'this is email',
        //     phone: '4444-44---4',
        //     balance: '5555'
        // });
    }

}
