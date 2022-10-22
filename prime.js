 let str="naman";
 status=true;
 for(let i=0; i<=str.length/2; i++){
    if(str[i]!==str[str.length-1-i]){
        status=false;
    }
 }
 if(status==false){
    console.log("No");
 }else{
    console.log("Yes");
 }


let num=13;
let count=0;
for(let i=1;i<=num;i++){
    if(num%i==0){
        count++;
    }
}
if(count==2){
    console.log("Yes");
}else{
    console.log("No");
}

