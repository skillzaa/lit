import {LitElement, html, customElement, property,css} from 'lit-element'

export default class BilzaaSliderThree extends LitElement {
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
    return css`

input[type=range] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  background: transparent; /* Otherwise white in Chrome */
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

/*Styling the thumb in Chrome*/
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;

  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: #ffffff;
  cursor: pointer;
  margin-top: -6px; 
  box-shadow: inset 0px 1px 3px rgba(0,0,0,0.9);
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 11px;
  cursor: pointer;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: inset 0px 1px 3px rgba(0,0,0,0.9);
}


#outerDiv {
border:2px solid silver;
width:100%;
padding:0px;
margin:0px;
background-color: rgb(220, 247, 238);
max-width:300px;
}  
#topDiv {
padding:2px;
display:flex;
}  

#displayDiv{
padding:10px;
margin:2px 8px;
background-color: rgb(17, 245, 169);
box-shadow:1px 1px rgb(6, 218, 147);
}  
#titleDiv{
font-weight: bold;
padding:4px;
margin:auto;
text-align: center;
font-family: Roboto,Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.custom-range{
width: 95%;
height: 1.4rem;
margin:1px;
padding: 2px;
background-color: transparent;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
}

.custom-range:focus {
outline: none;
}

.custom-range:focus::-webkit-slider-thumb {
box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range:focus::-moz-range-thumb {
box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range:focus::-ms-thumb {
box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range::-moz-focus-outer {
border: 0;
}

.custom-range::-webkit-slider-thumb {
width: 1rem;
height: 1rem;
margin-top: -0.25rem;
background-color: #007bff;
border: 0;
border-radius: 1rem;
-webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
-webkit-appearance: none;
appearance: none;
}
@media (prefers-reduced-motion: reduce) {
.custom-range::-webkit-slider-thumb {
  -webkit-transition: none;
  transition: none;
}
}

.custom-range::-webkit-slider-thumb:active {
background-color: #b3d7ff;
}

.custom-range::-webkit-slider-runnable-track {
width: 100%;
height: 0.5rem;
color: transparent;
cursor: pointer;
background-color: #dee2e6;
border-color: transparent;
border-radius: 1rem;
}

.custom-range::-moz-range-thumb {
width: 1rem;
height: 1rem;
background-color: #007bff;
border: 0;
border-radius: 1rem;
-moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
-moz-appearance: none;
appearance: none;
}


`;
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
<div id="outerDiv">

<div id="topDiv" >
    <div id="titleDiv">${this.title}</div>    
    <div id="displayDiv"  >${this.value}</div>    
</div>
<hr/>
<input id="range"  class="custom-range"  type="range"
@input="${(this.clickHandler)}"
min="${this.min}"
max="${this.max}"
value="${this.value}"
>    


</div>      
  
`
  }
}
customElements.define('bilzaa-sliderthree', BilzaaSliderThree);