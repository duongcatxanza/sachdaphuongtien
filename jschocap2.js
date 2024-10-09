//js click kiểu chữ thì hiện màu//
    var maukieu1 = document.getElementById('kieu1');
    function changecolor8(){
        if (maukieu1.style.color =="red") {
            maukieu1.style.color = "rgb(0, 0, 0)"
            
        }else{
            maukieu1.style.color = "red"
            maukieu2.style.color = "rgb(0, 0, 0)"
            maukieu3.style.color = "rgb(0, 0, 0)"
            maukieu4.style.color = "rgb(0, 0, 0)"
            maukieu5.style.color = "rgb(0, 0, 0)"
        }
        }
    var maukieu2 = document.getElementById('kieu2');
    function changecolor9(){
        if (maukieu2.style.color =="red") {
            maukieu2.style.color = "rgb(0, 0, 0)"

        }else{
            maukieu2.style.color = "red"
            maukieu1.style.color = "rgb(0, 0, 0)"
            maukieu3.style.color = "rgb(0, 0, 0)"
            maukieu4.style.color = "rgb(0, 0, 0)"
            maukieu5.style.color = "rgb(0, 0, 0)"
        }
        }
    var maukieu3 = document.getElementById('kieu3');
    function changecolor10(){
        if (maukieu3.style.color =="red") {
            maukieu3.style.color = "rgb(0, 0, 0)"
        }else{
            maukieu3.style.color = "red"
            maukieu1.style.color = "rgb(0, 0, 0)"
            maukieu2.style.color = "rgb(0, 0, 0)"
            maukieu4.style.color = "rgb(0, 0, 0)"
            maukieu5.style.color = "rgb(0, 0, 0)"
        }
        }
    var maukieu4 = document.getElementById('kieu4');
    function changecolor11(){
        if (maukieu4.style.color =="red") {
            maukieu4.style.color = "rgb(0, 0, 0)"
        }else{
            maukieu4.style.color = "red"
            maukieu1.style.color = "rgb(0, 0, 0)"
            maukieu2.style.color = "rgb(0, 0, 0)"
            maukieu3.style.color = "rgb(0, 0, 0)"
            maukieu5.style.color = "rgb(0, 0, 0)"
        }
        }
    var maukieu5 = document.getElementById('kieu5');
    function changecolor12(){
        if (maukieu5.style.color =="red") {
            maukieu5.style.color = "rgb(0, 0, 0)"
        }else{
            maukieu5.style.color = "red"
            maukieu1.style.color = "rgb(0, 0, 0)"
            maukieu2.style.color = "rgb(0, 0, 0)"
            maukieu3.style.color = "rgb(0, 0, 0)"
            maukieu4.style.color = "rgb(0, 0, 0)"
        }
        }
//js click cỡ chữ thì hiện màu//
    var cokieu1 = document.getElementById('co1');
    function changecolor4(){
        if (cokieu1.style.color =="red") {
            cokieu1.style.color = "rgb(0, 0, 0)"
            
        }else{
            cokieu1.style.color = "red"
            cokieu2.style.color = "rgb(0, 0, 0)"
            cokieu3.style.color = "rgb(0, 0, 0)"
            cokieu4.style.color = "rgb(0, 0, 0)"
            cokieu5.style.color = "rgb(0, 0, 0)"
        }
        }
    var cokieu2 = document.getElementById('co2');
    function changecolor5(){
            if (cokieu2.style.color =="red") {
                cokieu2.style.color = "rgb(0, 0, 0)"
                
            }else{
                cokieu2.style.color = "red"
                cokieu1.style.color = "rgb(0, 0, 0)"
                cokieu3.style.color = "rgb(0, 0, 0)"
                cokieu4.style.color = "rgb(0, 0, 0)"
                cokieu5.style.color = "rgb(0, 0, 0)"
            }
            }
    var cokieu3 = document.getElementById('co3');
    function changecolor6(){
                if (cokieu3.style.color =="red") {
                    cokieu3.style.color = "rgb(0, 0, 0)"
                }else{
                    cokieu3.style.color = "red"
                    cokieu1.style.color = "rgb(0, 0, 0)"
                    cokieu2.style.color = "rgb(0, 0, 0)"
                    cokieu4.style.color = "rgb(0, 0, 0)"
                    cokieu5.style.color = "rgb(0, 0, 0)"
                }
                }
    var cokieu4 = document.getElementById('co4');
    function changecolor7(){
                    if (cokieu4.style.color =="red") {
                        cokieu4.style.color = "rgb(0, 0, 0)"
                    }else{
                        cokieu4.style.color = "red"
                        cokieu1.style.color = "rgb(0, 0, 0)"
                        cokieu2.style.color = "rgb(0, 0, 0)"
                        cokieu3.style.color = "rgb(0, 0, 0)"
                        cokieu5.style.color = "rgb(0, 0, 0)"
                    }
                    }
//js cho dropdown mục lục//
function show(anything){
    document.querySelector('.textbox1').value =  anything;
    
}
let hopmucluc1 = document.querySelector('.hopmucluc1');
    hopmucluc1.onclick = function(){
        hopmucluc1.classList.toggle('activemucluc1');
    }
function show1(anything){
    document.querySelector('.textbox2').value =  anything;
    
}
let hopmucluc2 = document.querySelector('.hopmucluc2');
    hopmucluc2.onclick = function(){
        hopmucluc2.classList.toggle('activemucluc2');
    }
function show2(anything){
    document.querySelector('.textbox3').value =  anything;
    
}
let hopmucluc3 = document.querySelector('.hopmucluc3');
    hopmucluc3.onclick = function(){
        hopmucluc3.classList.toggle('activemucluc3');
    }




