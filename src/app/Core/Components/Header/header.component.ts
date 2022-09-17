import { Component, Input, OnInit } from "@angular/core";



@Component({
    selector: 'fb-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

    showMenu: boolean = false;  

    constructor() { }

    ngOnInit(): void {
        
    }

    ShowMenu() {
        this.showMenu = !this.showMenu;
    }


}