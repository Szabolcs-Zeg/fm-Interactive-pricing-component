var slide = document.getElementById("rangeslider");
slide.oninput = calc; //calculating on slider change
document.getElementById("toggle").addEventListener("click", calc);  //calculating on billing toggle change

calc(); //calulating on page load

function calc(){
    var st = slide.value;
    var pr = st;
    var tg =document.getElementById("toggle");
    var pv = 0;
   
    //coloring the range element
    var r = document.querySelector(':root');
    var coloring =0;
    coloring = (st-1)/(document.getElementById("rangeslider").max-1)*100;
    r.style.setProperty('--rangecolor', coloring+'%');

    switch (st){
        case '1':
            pr=8;
            pv ="10K";
        break; 
        case '2':
            pr =12;
            pv ="50K";
        break; 
        case '3':
            pr =16;
            pv ="100K";
        break; 
        case '4':
             pr =24;
             pv ="500K";
        break;
        case '5':
            pr =36;
            pv ="1M";
        break;     
    }

    //calculating discount
    if (tg.checked){
       pr =pr/1.25;
    }
    
    //format and write the result
    document.getElementById("price").innerHTML ="$"+ pr.toFixed(2);
    //write the pageviews
    document.getElementById("pgviews").innerHTML =pv;
}
