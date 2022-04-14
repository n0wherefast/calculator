const continer =document.querySelector('.container')
const display = document.querySelector(".display");
const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const keyboard = document.querySelector(".keyboard");
const buttons =Array.from( document.getElementsByClassName('button'))
let currentNumber='';
let firstNumber='';
let displayValue='';

document.addEventListener('keydown',(e)=>{
if(e.key=="Delete"){
   clear()
}else if(e.key=="Backspace"){
    
     sec1.textContent = sec1.textContent.slice(0,-1);
}

else if(e.key==1){
   firstNumber= Number( sec1.textContent+=e.key);
}else if(e.key==2){
    firstNumber= Number( sec1.textContent+=e.key);
}else if(e.key==3){
    firstNumber=  Number( sec1.textContent+=e.key);
}else if(e.key==4){
    firstNumber= Number( sec1.textContent+=e.key);
}else if(e.key==5){
    firstNumber= Number( sec1.textContent+=e.key);
}else if(e.key==6){
    firstNumber= Number( sec1.textContent+=e.key);
}else if(e.key==7){
    firstNumber= Number( sec1.textContent+=e.key);
}else if(e.key==8){
    firstNumber= Number( sec1.textContent+=e.key);
}else if(e.key==9){
    firstNumber= Number( sec1.textContent+=e.key);
}else if(e.key==0){
    firstNumber= Number( sec1.textContent+=e.key);
}else if(e.key=="."){
    firstNumber= Number( sec1.textContent+=e.key);
}
    
    else if(e.key=='+'){
        sec1.textContent = '';
        currentNumber = Number( sec2.textContent=`${firstNumber}`);
        sec2.textContent = `${currentNumber}+`;
    }else if(e.key=='-'){
        sec1.textContent = '';
        currentNumber = Number( sec2.textContent=`${firstNumber}`);
        sec2.textContent = `${currentNumber}-`;
    }else if(e.key=='*'){
        sec1.textContent = '';
        currentNumber = Number( sec2.textContent=`${firstNumber}`);
        sec2.textContent = `${currentNumber}*`;
    }else if(e.key=='/'){
        sec1.textContent = '';
        currentNumber = Number( sec2.textContent=`${firstNumber}`);
        sec2.textContent = `${currentNumber}/1`;
    }


    else if (e.key=="Enter"){

            if(sec2.textContent ==`${currentNumber}+`){
                
            sec1.textContent=add(firstNumber,currentNumber)
            sec2.textContent= `${currentNumber}+${firstNumber}`
            firstNumber =sec1.textContent

             }else if(sec2.textContent ==`${currentNumber}-`){
                  
                sec1.textContent=subtract(currentNumber,firstNumber)
                sec2.textContent= `${currentNumber}-${firstNumber}`
                firstNumber =sec1.textContent

                }else if(sec2.textContent ==`${currentNumber}*`){
                
                sec1.textContent=multiply(currentNumber,firstNumber)
                sec2.textContent= `${currentNumber}*${firstNumber}`
                firstNumber =sec1.textContent

                }else if(sec2.textContent ==`${currentNumber}/`){
                
                    sec1.textContent=divide(currentNumber,firstNumber)
                    sec2.textContent= `${currentNumber}/${firstNumber}`
                    firstNumber =sec1.textContent
                    }

    }




console.log(e)
})


buttons.map(button => {

    button.addEventListener('click',(e)=>{

     
        switch(e.target.textContent){


            case '.':
           
            dot=  e.target.textContent
           
            sec1.textContent= isDot = firstNumber 
            
              console.log(isDot)
                break
          
            
            case'DE' :
             clear()
             break
             
             case '←':
                 if(sec1.textContent){
                 sec1.textContent = sec1.textContent.slice(0,-1);
                
                }
                break
            case '+':
                sec1.textContent = '';
                currentNumber = Number( sec2.textContent=`${firstNumber}`);
                sec2.textContent = `${currentNumber}+`;
                

                break

            case '-':
                sec1.textContent = '';
                currentNumber = Number( sec2.textContent=`${firstNumber}`);
                sec2.textContent = `${currentNumber}-`;
                
                break
           
            case '*':
                   sec1.textContent = '';
                   currentNumber = Number( sec2.textContent=`${firstNumber}`);
                   sec2.textContent = `${currentNumber}*`;
                   
                   break

           case '/':
                   sec1.textContent = '';
                   currentNumber = Number( sec2.textContent=`${firstNumber}`);
                   sec2.textContent = `${currentNumber}/`;
                   
                   break

           case '=':
               console.log(firstNumber,currentNumber)

           if(sec2.textContent ==`${currentNumber}+`){
               
             sec1.textContent=add(firstNumber,currentNumber)
             sec2.textContent= `${currentNumber}+${firstNumber}`
             firstNumber =sec1.textContent
             


           }else if(sec2.textContent== `${currentNumber}-`){

               sec1.textContent=subtract(currentNumber,firstNumber)
               sec2.textContent= `${currentNumber}-${firstNumber}`
               firstNumber =sec1.textContent
               

           }else if(sec2.textContent== `${currentNumber}*`){

                   sec1.textContent=multiply(firstNumber,currentNumber)
                   sec2.textContent= `${currentNumber}*${firstNumber}`
                   firstNumber =sec1.textContent
                   
               
           }else if(sec2.textContent== `${currentNumber}/`){
                       

                    sec1.textContent=divide(currentNumber,firstNumber)
                    sec2.textContent= `${currentNumber}/${firstNumber}`
                    firstNumber =sec1.textContent
                       
           }
               
               
           break

            default:
               firstNumber =Number(sec1.textContent += e.target.innerText )
           }  
    })
})


function add(a,b){
    let sum = a+b 
   
    return sum 
}
function subtract(a,b){
    let sum = a-b 
  
    return sum
}
function multiply(a,b){
    let sum = a*b 
   
    return sum
}
function divide(a,b){
    if(a=== 0 || b===0) return 'ERR'
    let sum = a/b 
   
    return sum 

}


function clear(){
    currentNumber='';
    firstNumber='';
    sec1.textContent='';
    sec2.textContent='';
    
}