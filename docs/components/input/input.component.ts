import {
    Component,
} from '@angular/core';

@Component({
    templateUrl: './input.component.html',
})
export class CssInputComponent {
    pager1html:string = '';
    mdheight = '';
    smheight = '';
    mdwidth = '';
    smwidth = '';
    constructor() {
        this.pager1html = `<input type="text" class="input"/>`;
        this.smheight = `<input type="text" class="input input-sm"/>`;
        this.mdwidth = `<input type="text" class="input input-w-md"/>`;
        this.smwidth = `<input type="text" class="input input-w-sm"/>`;
    }
};