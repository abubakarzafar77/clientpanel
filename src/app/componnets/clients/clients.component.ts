import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/client.model';



@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
    clients: any[];
    totalOwed: number;
    constructor(
        private clientsService: ClientsService
    ) { }

    ngOnInit() {
        this.clientsService.getClients().subscribe(clients => {
            this.clients = clients;
            this.getTotalOwed();
        });
    }
    getTotalOwed() {
        let total = 0;
        for (let i = 0; i < this.clients.length; i++){
            total += parseFloat(this.clients[i].data.balance); 
        }
        this.totalOwed = total;
    }

}
