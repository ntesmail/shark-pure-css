//NgModules
import { NgModule } from '@angular/core';

//Examples
import { CssButtonModule } from './button/button.module';
import { CssSelectModule } from './select/select.module';

@NgModule({
    imports: [
        CssButtonModule,
        CssSelectModule
    ]
})
export class ComponentModule { }