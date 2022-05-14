const insert=document.getElementById('insert');


window.addEventListener('keydown',(e)=>{
    
    insert.innerHTML=`
    <div class="Key">${e.key===' '?'Space':e.key}

    
    <small>event.KeyCode

    </small></div>

    <div class="Key">
     ${e.keyCode}
    
    
    <small>event.code</small></div>
     
    <div class="Key">
        press any key to get the keyCode
    </div>
    
    
    `


})