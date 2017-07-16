import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as showdown from 'showdown';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-bash';

@Directive({
    selector: '[markdown]',
    exportAs: 'markdown'
})
export class MarkdownDirective {
    constructor(
        private elementRef: ElementRef
    ) { 
    }
    render() {
        // const nativeEle = this.elementRef.nativeElement;
        // const html = Prism.highlight(nativeEle.innerHTML, this.getLanguage(nativeEle));
        // const htmlrst = `<pre class="language-html">
        //                     <code class="language-html">
        //                         <span class="token tag">
        //                             ${html}
        //                         </span>
        //                     </code>
        //                 </pre>`;
        // nativeEle.innerHTML = htmlrst;

        const nativeEle = this.elementRef.nativeElement;
        const md = nativeEle.innerHTML;
        const converter = new showdown.Converter();
        const html = converter.makeHtml(md);
        const mdEle = document.createElement('div');
        mdEle.className = 'language-markdown';
        mdEle.innerHTML = html;
        const codes = Array.prototype.slice.call(mdEle.querySelectorAll('code'), 0);
        codes.forEach((c) => {
            c.innerHTML = Prism.highlight(c.innerHTML, this.getLanguage(c))
        });
        const tables = Array.prototype.slice.call(mdEle.querySelectorAll('table'), 0);
        tables.forEach((t) => {
            t.className += ' table';
        });
        nativeEle.innerHTML = mdEle.outerHTML;
    }
    getLanguage(ele) {
        if (ele.className.indexOf('bash') > -1) {
            return Prism.languages.bash;
        } else if (ele.className.indexOf('css') > -1) {
            return Prism.languages.css;
        } else if (ele.className.indexOf('js') > -1) {
            return Prism.languages.javascript;
        } else {
            return Prism.languages.markup;
        }
    }
    ngOnInit() {
        this.render();
    }
    ngOnChanges(v) {
        
    }
    ngOnDestroy() {
        
    }

}
