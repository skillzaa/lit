import {LitElement, html, customElement, property} from 'lit-element'

@customElement('bilzaa-counter')
class BilzaaCounter extends LitElement {

static get properties(){
    return {
      abc: {type: String},
      xyz: {type: Number},  
      data: {type: Array},
      count:{type: Number}  
    }
}    
constructor(){
super();
this.abc = "";    
this.xyz = null;    
this.data = [];    
this.count=0;
}


clickHandler() {
this.count++
}
showLog() {
console.log('object :');
}
keyup(e) {
this.abc = e.target.value;
}

  render() {
//we can also use @change      
    return html`
      <p>This Counter is made By Bilzaa: ${this.count}</p>
      <input type="text"
      @keyup="${(this.keyup)}"
      />
      <button @click="${(this.clickHandler)}">Click</button>
      <button @click="${(this.showLog)}">Console</button>
      <textarea>${this.abc}</textarea>
    `
  }
}