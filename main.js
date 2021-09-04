list_array=[];
function submit(){
    var fr1=document.getElementById("sn1").value;
    list_array.push(fr1);
    document.getElementById("display").innerHTML=list_array.toString();
}
function Show(){
    var store=list_array.join("<br>");
    document.getElementById("demo").innerHTML=store.toString();
}
function se(){
    word= document.getElementById("s").value;
    found=0;
    var j;
    for(j=0;j<list_array.length;j++){
        if(word==list_array[j]){
            found=found+1;
        }
    } 
    document.getElementById("demo1").innerHTML="name found "+found+" times ";
}