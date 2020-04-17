import {LitElement, html,css} from 'lit-element';
import anime from '../src/anime/anime.js';
class BilzaaSidePanel extends LitElement {
static get styles() {
return css`
#parentDiv{
width:300px;
height:450px;
border:1px solid brown;
padding:'8px';
border-radius:5px;
position:absolute;
box-sizing: border-box;
right: 1px;
top: 15px;
overflow-x: hidden;
background-color: grey;
transition: width 1.2s ease-out, opacity 0.2s ease 0.5s, border 0.2s ease-out;
}    


#openBtn{
  position:absolute;
  box-sizing: border-box;
  right: 8px;
  top: 15px;
} 
`}

static get properties(){
return {
 isOpen : {type:Boolean,reflect: true},
  // width : {type:Number, reflect:true},
  // height : {type:Number, reflect:true},
  // left : {type:Number, reflect:true},
  // top : {type:Number, reflect:true},
  // maxchar : {type:Number, reflect:true}
}
}    

constructor(){
super();
this.isOpen=true;
}
firstUpdated(){
// let openBtn=this.shadowRoot.querySelector('#openBtn'); 
// openBtn.style.display="none"; 
}

close(){
let elm=this.shadowRoot.querySelector('#parentDiv');        
elm.style.width="1px";
elm.style.border = "4px solid brown";
elm.style.opacity = "0.6";
this.isOpen=false;
}

open(){
let elm=this.shadowRoot.querySelector('#parentDiv');          
elm.style.width="300px";
elm.style.border = "1px solid brown";
elm.style.opacity = "1";
this.isOpen=true;
}

firstUpdated() {
console.log('now :');  
}

render() {
return html`

${(this.isOpen===false)?
html`<button id="openBtn" @click="${this.open}" >${String.fromCharCode("9812")}</button>`
: ""}


<div id="parentDiv"  >
${(this.isOpen===true)?
html`<button @click="${this.close}">${String.fromCharCode("9813")}</button>`
:""}

okok

</div>
`
  }
}
customElements.define('bilzaa-side-panel', BilzaaSidePanel);