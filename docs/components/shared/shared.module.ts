/***********common module***************/
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/***********common service***************/
//directive
import { TransferDirective } from './directives/transfer.directive';
import { MarkdownDirective } from './directives/markdown.directive';
//import { TransferDirective2 } from './directives/transfer2.directive.ts';

let modules: Array<any> = [CommonModule, FormsModule, HttpModule];
let directives: Array<any> = [TransferDirective, MarkdownDirective];

@NgModule({
    imports: [],
    declarations: [...directives],
    providers: [],
    exports: [...modules, ...directives]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
        };
    }
}