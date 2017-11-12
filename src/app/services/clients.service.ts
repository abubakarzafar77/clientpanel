import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AngularFirestore, } from 'angularfire2/firestore';
// import {  FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Client } from '../models/client.model'

@Injectable()
export class ClientsService {

    itemsRef: AngularFireList<any>;
    clients: Observable<any[]>;
    constructor(private db: AngularFireDatabase) {
        this.itemsRef = db.list('clients');
        this.clients = this.itemsRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, data:c.payload.val() }));
        });
        // this.clients = db.list('clients').valueChanges();

    }
    getClients() {
        return this.clients;
    }
    addclient() {
    }

}
