import {LitElement, html,css} from 'lit-element'

class BilzaaTitleBox extends LitElement {
static get styles() {
return css`
  #theElement{
  padding:8px;
  border-radius:25px;
  height:1.35rem;
  caret-color: red;
  position:absolute;
  color: "black";
  box-sizing: border-box;
  }    
 #theElement:focus {outline:0;} 
`}

static get properties(){
  return {
    value : {type:String,reflect: true},
    width : {type:Number, reflect:true},
    height : {type:Number, reflect:true},
    left : {type:Number, reflect:true},
    top : {type:Number, reflect:true},
    maxchar : {type:Number, reflect:true},
    open : {type:Number,attribute: true , reflect:true}
  }
}    

constructor(){
super();
this.value="";
this.width=250;
this.height=25;
this.top=250;
this.left=250;
this.maxchar=15;
this.open = 1;
this.blinkOn = false;
setInterval(this.blink, 1500);
}
attributeChangedCallback(name, oldval, newval) {
let elm = this.shadowRoot.querySelector('#theElement');       

if(elm !== null){
if(this.open==1){
  elm.style.width = `${this.width}px`;
  elm.style.height = `${this.height}px`;
  elm.style.left = `${this.left}px`;
  elm.style.top =  `${this.top}px`;
  elm.value =  `${this.value}`;
  elm.style.display="inline-block";  
          if(name==="open"){
            elm.focus(); 
          }       
  }else{
    elm.style.display="none";
  }  
}
super.attributeChangedCallback(name, oldval, newval);
}

blink=()=>{
if(this.open== 0){return;}  
let elm = this.shadowRoot.querySelector('#theElement');    
if(this.blinkOn===true){
    this.blinkOn = false;
    elm.style.border = "2px solid #fcc4c4";
}else{
    this.blinkOn = true;
    elm.style.border = "2px solid #ff0000"; 
}
}
firstUpdated() {
 // this.blink();
}
keyUpHandler(e) {  
//--------maxchar----
if(this.value.length > this.maxchar){
alert(`You Exceeded Maximum Characters Allowed (${this.maxchar}) in the Title`);
  //if(e.keyCode !== 8){return;}--not working
}
//----------------------------  
this.value = e.target.value;
let event = new CustomEvent('node-title-changed', {
  bubbles: true,
    detail: {      
      value: this.value
    }
  });
this.dispatchEvent(event);
console.log('event :', event);
}
focusHandler(e) {  
let event = new CustomEvent('bilazaa-titlebox-focus', {
  bubbles: true,
    
  });
this.dispatchEvent(event);
console.log('event :', event);
}
focusOutHandler(e) {  
let event = new CustomEvent('bilazaa-titlebox-focusout', {
  bubbles: true,
    
  });
this.dispatchEvent(event);
console.log('event :', event);
}

render() {
  return html`
  <input 
  id="theElement"  
  type="text"
  @keyup="${this.keyUpHandler}"
  @focus="${this.focusHandler}"
  @focusout="${this.focusOutHandler}"
  value="${this.value}"
/>  
 `
  
  
}//render
}
customElements.define('bilzaa-titlebox', BilzaaTitleBox);