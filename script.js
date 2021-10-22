const togg= document.querySelector('.outer_container');
const values=document.querySelectorAll('.plan_amt');
// function nextPlan(){
//       togg.classList.toggle("active");
// }
const monthlyCost=['$19.99','$24.99','$39.99'];
const annualCost=['$199.99','$249.99','$399.99']
 
togg.addEventListener('click',(e)=>{
    togg.classList.toggle("active");

     for(let i=0;i < values.length;i++){
         if(togg.classList.contains('active')){
            values[i].innerHTML=monthlyCost[i];
         }else{
            values[i].innerHTML=annualCost[i];
         }
     }
    
});