var btn = document.getElementById('btn'),
    test=document.getElementById('test'),
    ipu=document.getElementById('inp'),
    non = document.querySelector('.hi'),
    dele = document.getElementById('dele'),
    under = document.querySelectorAll('.under');

    btn.addEventListener('click',function(){
        if(ipu.value == ''){
            alert('You shoude Enter Name')
           }else{
        for(var i =0 ;i<under.length ;i++){
            non.style.display = 'block';   
            test.innerHTML = ipu.value;
            }
            ipu.value = ''; 
     } })
     dele.addEventListener('click',function(){
     non.style.display = 'none';
})

