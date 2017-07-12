import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <a routerLink="/cssbutton">cssbutton</a>
        <a routerLink="/cssradio">radio</a>
        <div style="width:900px;margin:auto;padding-top:100px;">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
    constructor() { }
}
