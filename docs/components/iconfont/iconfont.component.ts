import {
    Component,
} from '@angular/core';

@Component({
    styles: [`
        .icon_lists {
            width: 800px;
            text-align: center;
        }
        .icon_lists li {
            display: inline-block;
            padding: 20px;
            float: left;
            cursor: pointer;
            border-radius: 2px;
        }
        .icon_lists li:hover {
            background-color: #f4f4f4;
        }
    `],
    templateUrl: './iconfont.component.html'
})
export class CssIconfontComponent {};