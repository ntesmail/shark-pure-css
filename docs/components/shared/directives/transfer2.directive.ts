import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-bash';

@Directive({
    selector: '[transfer2]',
    exportAs: 'transfer2'
})
export class TransferDirective2 {
    @Input('type') type: any;
    @Input('content') content: any;
    innerHtml:any;
    constructor(
        private elementRef: ElementRef
    ) { 
    }
    render() {
        const nativeEle = this.elementRef.nativeElement;
        const  type = this.type == 'js'? 'ts':this.type;
        const html = Prism.highlight(this.content, this.getLanguage());
        const htmlrst = `<pre class="language-html"><code class="language-${this.type}">${html.trim()}</code></pre>`;
        const doc = document.createElement('div');
        doc.innerHTML = htmlrst;
        nativeEle.parentElement.repalceChild(doc, nativeEle);
    }
    getLanguage() {
        if (this.type === 'js') {
            return Prism.languages.javascript;
        } else {
            return Prism.languages.markup;
        }
    }
    ngOnInit(v) {
        this.type = v.type.currentValue;
        this.content = v.content.currentValue;
        this.render();
    }
    ngOnDestroy() {
        this.elementRef.nativeElement.innerHTML='';
    }

}
