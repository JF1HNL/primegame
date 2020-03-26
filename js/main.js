'use script';

{
    function clickBtn(){
        const headNum = document.form1.num.value;
        const pop = document.querySelector('#pop')
    
        for(let i = 0 ; i < 10 ; i++ ){
            const parent = document.createElement('div');
            parent.className = 'parent';
            parent.id = "parent";
            
            for(let j = 0; j < 4; j++){
                const child = document.createElement("div");
                child.className = "child";
                child.id = "child";
                child.classList.add('box');
                let kazu = headNum*100+i*10;
                switch(j){
                    case 0:
                        kazu += 1;
                        break;
                    case 1:
                        kazu += 3;
                        break;
                    case 2:
                        kazu += 7;
                        break;
                    case 3:
                        kazu += 9;
                        break;
                }
                child.textContent = kazu;
                
                child.addEventListener('click',()=>{
                    if (primeNumber(kazu)){
                        child.textContent = 'Prime!';
                        child.classList.add('win');
                    }else{
                        child.textContent = 'No!';
                        child.classList.add('lose');
                    }
                    const chip = document.createElement("span");
                    chip.classList.add("baloon")
                    child.classList.add("tooltip1");
                    chip.textContent = kazu;
                    child.appendChild(chip);
                })
                
                parent.appendChild(child);
            }
        pop.appendChild(parent);
        }
    }
    
    function clearBtn(){
        var element = document.getElementById("pop");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    
    function primeNumber (num) {
        if(num === 2) {
            return true;
        } else {
            for(i = 2; i < num; i++) {
                if(num % i === 0) {
                    return false;
                    break;
                }
                if(i + 1 === num) {
                    return true;
                }
            }
        }
    }
}
