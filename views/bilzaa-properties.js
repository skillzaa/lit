import {LitElement, html, customElement, property} from 'lit-element'

@customElement('bilzaa-properties')
class BilzaaProperties extends LitElement {

static get properties(){
    return {
      abc: {type: String,reflect: true},
      xyz: {type: Number},  
      data: {type: Array},
      count:{type: Number}  
    }
}    
constructor(){
super();
this.abc = "the initial abc";    
this.data = [];    
this.count=0;
}


clickHandler() {
this.count++
}
showLog() {
  let event = new CustomEvent('my-event', {
    detail: {
      message: 'Something important happened'
    }
  });
this.dispatchEvent(event);
}

render() {
return html`
<div class="">This proeprty is string:: ${this.abc}</div>
<div class="">This proeprty is Array:: 
${this.data.map( e =>{e.name})

}</div>
<div class="">This proeprty is Number::${this.count}</div>
<div class="">This proeprty is Boolean::${this.flag}</div>
    `
  }
}
