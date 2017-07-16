import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[transfer]',
    exportAs: 'transfer'
})
export class TransferDirective {
    @Input('type') type: any;
    @Input('content') content: any;
    innerHtml:any;
    constructor(
        private elementRef: ElementRef
    ) { 
    }
    render() {
        let type=this.type=='js'? 'ts':this.type;
        let html='<pre><code class="language-'+this.type+'">'+this.content.replace(/>/g,'&gt;').replace(/</g,'&lt;')+'</code></pre>';
        this.elementRef.nativeElement.innerHTML=html;
        this.reloadJs();
    }
    reloadJs(){
        if(document.getElementById('js-prism')){
            document.getElementById('js-prism').remove();
        }
        let script= document.createElement('script');   
        script.type= 'text/javascript';
        script.id = 'js-prism';   
        script.src= '//mimg.127.net/h/lib/prism.js?time='+new Date().getTime();   
        document.body.appendChild(script);
    }
    ngOnChanges(v) {
        this.type = v.type.currentValue;
        this.content = v.content.currentValue;
        this.render();
    }
    ngOnDestroy() {
        this.elementRef.nativeElement.innerHTML='';
    }

}
