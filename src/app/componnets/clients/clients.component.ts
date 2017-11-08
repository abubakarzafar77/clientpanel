import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/client.model';



@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
    clients: Client[];
    constructor(
        private clientsService: ClientsService
    ) { }

    ngOnInit() {
        this.clientsService.getClients().subscribe(clients => {
            this.clients = clients;
            console.log(this.clients);
        });
        // this.clientsService.addclient();
    }

}
