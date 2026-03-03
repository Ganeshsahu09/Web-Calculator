const input=document.getElementById("input-box");
const buttons=document.querySelectorAll('button');
console.log(buttons);

let str="";
for(let i=0; i<buttons.length; i++){
    let buttonsElements=buttons?.[i];
    buttonsElements.addEventListener("click", (e) => {
        let innerValue=e.target.innerHTML;
        if(innerValue==="AC"){
            str="";
        }
        else if(innerValue==="DEL"){
            str=str.substring(0, str.length-1);
        }
        else if(innerValue==="="){
            str=eval(str);
        }
        else{
            //console.log(e.target.innerHTML);
            str+=e.target.innerHTML;
        }
        input.value=str;
        
    })
}