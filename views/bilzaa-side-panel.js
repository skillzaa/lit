import {LitElement, html,css} from 'lit-element';

class BilzaaSidePanel extends LitElement {
static get styles() {
return css`
#parentDiv{
width:20px;
height:450px;
border:1px solid brown;
padding: 6px;
text-align:center;
margin: 1px;
border-radius:5px;
position:absolute;
box-sizing: border-box;
right: 1px;
top: 15px;
overflow-x: hidden;
background-color: grey;
transition: width 1.2s ease-out, opacity 0.2s ease 0.5s, border 0.2s ease-out;
}    
#childDiv{
transition: opacity 0.5s ease;
display:none;
}

`}

static get properties(){
return {
  isOpen : {type:Boolean, reflect:true},
 width : {type:Number, reflect:true},
 height : {type:Number, reflect:true},
 right : {type:Number, reflect:true},
 top : {type:Number, reflect:true},
 tabTitle : {type:String, reflect:true},
 openBtnTop: {type:Number,reflect:true} 
}
}    

constructor(){
super();
this.isOpen=false;
this.tabTitle = "Settings";
this.openBtnTop = 7;
}

firstUpdated(){
let ob=this.shadowRoot.querySelector('#openBtn');    
ob.style.top = this.openBtnTop;
console.log('firstUpdated')
}
connectedCallback() {
  super.connectedCallback()
  console.log('connected')
}
close(){
let elm=this.shadowRoot.querySelector('#parentDiv');        
let ch=this.shadowRoot.querySelector('#childDiv');        
ch.style.opacity= "0";
elm.style.width="1px";
elm.style.border = "1px solid grey";
elm.style.opacity = "0.6";
this.isOpen=false;
}

open(){
let elm=this.shadowRoot.querySelector('#parentDiv');  
let ch=this.shadowRoot.querySelector('#childDiv');        
ch.style.opacity= "1";      
ch.style.display= "block";      
elm.style.width="300px";
elm.style.border = "1px solid grey";
elm.style.opacity = "1";
this.isOpen=true;
}


render() {

return html`
<style>
#openBtn{
  position:absolute;
  border-radius:5px;
  box-sizing: border-box;
  right: 4px;
  width:35px;
  top: ${this.openBtnTop}px;
  z-index:100;
  border:none;
  background-color:#949494;
  color:white;
} 
</style>  

<button id="openBtn" @click="${this.open}" >${String.fromCharCode("9812")}</button>

<div id="parentDiv"  >
<div id="childDiv"  >

<button id="closeBtn" @click="${this.close}">${String.fromCharCode("9812")}</button>
<hr/>
<h3 id="tabTitle">${this.tabTitle}</h3>
<slot></slot>
</div>
</div>
`
  }
}
customElements.define('bilzaa-side-panel', BilzaaSidePanel);