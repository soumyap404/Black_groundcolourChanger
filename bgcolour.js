const button = document.querySelectorAll('.button')
const body = document.querySelector("body")

button.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(name){
        console.log(name);
        console.log(name.target);
        if(name.target.id==='red'){
            body.style.backgroundColor=name.target.id
        }
        if(name.target.id==='green'){
            body.style.backgroundColor=name.target.id
        }
        if(name.target.id==='blue'){
            body.style.backgroundColor=name.target.id
        }
        if(name.target.id==='yellow'){
            body.style.backgroundColor=name.target.id
        }
        

    });
    
});

