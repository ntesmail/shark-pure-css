import {
    Component,
} from '@angular/core';

@Component({
    templateUrl: './input.component.html',
})
export class CssInputComponent {
    pager1html:string = '';
    constructor() {
        this.pager1html = `<input type="text" class="input"/>`;
    }
};