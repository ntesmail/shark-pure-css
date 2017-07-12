import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <a routerLink="/cssbutton">cssbutton</a>
        <a routerLink="/csspagination">pagination</a>
        <a routerLink="/cssradio">select</a>
        <a routerLink="/cssimages">images</a>
        <a routerLink="/cssinput">input</a>
        <a routerLink="/csstoastr">toastr</a>
        <a routerLink="/cssalert">alert</a>
        <a routerLink="/cssmodal">modal</a>
        <a routerLink="/csstip">tip</a>

        <div style="width:900px;margin:auto;padding-top:100px;">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
    constructor() { }
}
