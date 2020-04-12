import {LitElement, html, customElement, property,css} from 'lit-element';
import BilzaaSlider from './bilzaa-slider';
import BilzaaToggle from './bilzaa-toggle';

class BilzaaFoldableDiv extends LitElement {
static get properties(){    
return { 
title:{type:String}
}}    
    
static get styles() {
return css`
#outerDiv {
border:2px solid silver;
width:100%;
padding:0px;
background-color: rgb(220, 247, 238);
max-width:310px;

}  
#innerDiv {
text-align:center;   
transition: height 0.5s ease; 
}  
.hide{
  transition:visibility 1s, opacity 1s; 
  visibility:hidden; opacity:0;
  
}
icon{
 display:inline-block;
 padding:0.35em 1.2em;
 border:0.1em solid #FFFFFF;
 margin:0 0.3em 0.3em 0;
 border-radius:0.12em;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color:#FFFFFF;
 text-align:center;
 transition: all 0.2s;
}
icon:hover{
 color:#000000;
 background-color:#FFFFFF;
}
@media all and (max-width:30em){
 icon{
  display:block;
  margin:0.4em auto;
 }
}
    
#title{
padding:2px;
margin:2px;
}
#wrapper{
 border:1px solid silver;
 display:flex;
 justify-content: space-between;   
}
.thechild{
 display: inline-block;
 width:95%   
}
`;
  }

constructor(){
super();
this.title= "Your Title Here..."
}


clickHandler(e) {
let innerDiv  = this.shadowRoot.getElementById("innerDiv");  
console.log('innerDiv :', innerDiv);
innerDiv.classList.toggle("hide");

// let d = this.shadowRoot.getElementById("innerDiv");
// if (d.style.display=="none"){
//     d.style.display = "block";
// }else{
//     d.style.display = "none";
// }
}

render() {
return html`
<div id="outerDiv">

<div id="wrapper">
<div id="title">${this.title}</div>    
<button id="icon" @click="${(this.clickHandler)}">${String.fromCharCode("9812")}</button>
</div>

<div id="innerDiv"  >
 
<bilzaa-slider
class="thechild"
property="border"
  boxtype="element"
  min="20"
  max="80"
  value="22"
></bilzaa-slider>  

<hr class="thechild" />
<bilzaa-toggle  
class="thechild"
  property="showBorder"
  boxtype="element"
  title="Show / Hide Node Border"
  ></bilzaa-toggle>
</div>
<br class="thechild" />
</div>      
`
  }
}
customElements.define('bilzaa-foldablediv', BilzaaFoldableDiv);