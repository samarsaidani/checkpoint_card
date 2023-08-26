
var plus = document.getElementsByClassName('btnplus') ;
var moin = document.getElementsByClassName('btnMoin');
var Blike = document.getElementsByClassName('like');
var Bsupp = document.getElementsByClassName('supp');
var total = document.getElementById('Price') ;
var uni_price = document.getElementsByClassName('prix_unitaire') ;
var quntite = document.getElementsByClassName('QN');
 console.log(total);

 // fonction incrémentation la quantite  
for (let i of plus ) {
    i.addEventListener('click',function(){
        i.previousElementSibling.innerText++
        total_p();}
     )
       
    
}
//fonction decrementation la quantite 
for (let i of moin ) {
    i.addEventListener('click',function(){
        if(i.nextElementSibling.innerText > 0){i.nextElementSibling.innerText--}
        total_p();})
       
    
}
// fonction like 
for (let i = 0; i < Blike.length; i++) {

    Blike[i].addEventListener('click',function(event){
        buttonCliked = event.target ;
        buttonCliked.classList.toggle('active')
    });
    
}
// fonction suppression la card 
for (let i = 0; i < Bsupp.length; i++) {
    let btn =Bsupp[i];
    btn.addEventListener('click',function(event){
        let bottonclicked = event.target ;
        bottonclicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
     })}

     console.log(uni_price) ;
 // fonction calcul de totale 
function total_p() {

    var sum = 0 ;
    for ( i = 0; i < uni_price.length; i++) {
        sum = sum + (uni_price[i].innerText * quntite[i].innerText)  
        
        total.innerText = sum ;
    }

}
