import {LitElement, html,css} from 'lit-element'

export default class BilzaaToolTip extends LitElement {
static get styles() {
return css`
#outer{
    position:absolute;
    width:300px;
}
#toolTipBtn {
    background-color: #FFEDCC;
    border-color: #eba21c;
    border-radius:50%;
    width:3px;
    height:15px;
    }
#theTip{
    border:3px solid #c27f04;
    padding:6px;
    margin:2px;
    box-shadow:3px 3px #f5f3ee ;
    max-width:400px;
    position:absolute;
    background-color:#eba21c;
    opacity:0;
    border-radius:10px;
    transition: opacity 1.5s;
}    
`
}    
static get properties(){
    return { 
    tip:{type:String,reflect:true},
    maxchar:{type:Number,reflect:true},
    left : {type:Number, reflect:true},
    top : {type:Number, reflect:true},
    open : {type:Number,attribute: true , reflect:true}
    }
}    

constructor(){
super();
this.tip = "Your Tip Here...";
this.maxchar= 200;
this.left=400;
this.top=400;
this.open=0;
}
firstUpdated(changedProperties){
let elm = this.shadowRoot.querySelector('#outer');       
if(elm !== null){
if(this.open==1){
  elm.style.left = `${this.left}px`;
  elm.style.top =  `${this.top}px`;
  elm.style.display="inline-block";            
  }else if (this.open==0){
    elm.style.display="none";
  }  
}
}
attributeChangedCallback(name, oldval, newval) {
let elm = this.shadowRoot.querySelector('#outer');       
if(elm !== null){
if(this.open==1){
  elm.style.left = `${this.left}px`;
  elm.style.top =  `${this.top}px`;
  elm.style.display="inline-block";            
  }else if (this.open==0){
    elm.style.display="none";
  }  
}
super.attributeChangedCallback(name, oldval, newval);
}
    
enter(){
let tip=this.shadowRoot.querySelector('#theTip');    
tip.style.opacity = 0.9;
}
leave(){
let tip=this.shadowRoot.querySelector('#theTip');    
tip.style.opacity = 0;
}

render() {
let t = this.tip.substring(0,this.maxchar);
t += (this.tip.length > this.maxchar) ? "....":"";     
return html`
<div id="outer">
<button id="toolTipBtn"
@mouseenter ="${(this.enter)}" 
@mouseleave ="${(this.leave)}" 
></button>
<span id="theTip">${t}</span>
</div>
`
  }
}
customElements.define('bilzaa-tooltip', BilzaaToolTip);