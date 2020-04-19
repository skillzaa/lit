import {LitElement, html, customElement, property,css} from 'lit-element'
import tailwind from 'lit-tailwindcss';

export default class BilzaaSliderTwo extends LitElement {
static get properties(){
    return { 
    min: {type: Number},
     max: {type: Number},
     title:{type:String},
     value:{type:Number, reflect:true},

     property:{type:String},
     boxtype:{type:String}
    
    }
}    
static get styles() {
  return [tailwind];
}

constructor(){
super();
this.min=0;
this.max=100;
this.value= 11;
this.title= "Your Title Here..."
}


clickHandler(e) {
this.value=e.target.value;    
this.flag = (this.flag === true) ? false : true;  
let event = new CustomEvent('bilzaa-slider', {
    detail: {
      property: this.property,
      boxtype : this.boxtype,
      value:  this.value
    }
  });
this.dispatchEvent(event);
console.log('e', event);
}
  render() {
return html`

<div id="outerDiv" class="bg-gray-400 p-4 my-4 w-48 rounded border shadow">

<div id="topDiv" >
    <div id="titleDiv">${this.title}</div>    
    <div id="displayDiv"  >${this.value}</div>    
</div>
<hr/>

<input id="range"  class="border "  type="range"
@input="${(this.clickHandler)}"
min="${this.min}"
max="${this.max}"
value="${this.value}"
>    


</div>      
  
`
  }
}
customElements.define('bilzaa-slidertwo', BilzaaSliderTwo);