import {
    Component,
} from '@angular/core';

@Component({
    templateUrl: './progress.component.html',
})

export class CssProgressComponent {
    progressFinished:boolean = false;
    progressError:boolean = false;
    constructor() {

    }
    toggle(valName) {
        this[valName] = !this[valName];
    }
 };