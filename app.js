let passBox=document.querySelector('.pbox');
let inputSlider=document.querySelector('.slide');
let gbtn=document.querySelector('.gbtn');
let sliderValue=document.querySelector('#slidevalue');
let lowerCase=document.querySelector('#lowercase');
let upperCase=document.querySelector('#uppercase');
let number=document.querySelector('#number');
let symbol=document.querySelector('#symbol');
let copy=document.querySelector('#copy');


//showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
});

gbtn.addEventListener('click',()=>{
    passBox.value=generate();
});

let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower="abcdefghijklmnopqrstuvwxyz";
let num="0123456789";
let sym="~!@#$%^&*";
//function to generate password
const generate=()=>{
   let str="";
   let allc="";

   allc += lowerCase.checked?lower:"";
   allc += upperCase.checked?upper:"";
   allc += number.checked?num:"";
   allc += symbol.checked?sym:"";

   for(let i=1;i<=inputSlider.value;i++)
   {
    str += allc.charAt(Math.floor(Math.random()*allc.length));
   }
   
   return str;
}

copy.addEventListener('click',()=>{
    if(passBox.value!="" || passBox.value.length>=1)
    {
        navigator.clipboard.writeText(passBox.value);
        copy.innerHTML=`<i class="fa-solid fa-check"></i>`;
        copy.title="Password Copied";
        setTimeout(() => {
            copy.innerHTML=` <i class="fa-regular fa-copy"></i>`;
        }, 3000);
    }
});
