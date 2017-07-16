import {
    Component,
} from '@angular/core';

@Component({
    templateUrl: './progress.component.html',
})

export class CssProgressComponent {
    progressStatusFinish:boolean = false;
    progressStatusError:boolean = false;
    constructor() {

    }
    toggle(valName) {
        this[valName] = !this[valName];
    }
 };