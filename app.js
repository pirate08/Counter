let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')){
            count --;
        }
        
        else if(styles.contains('increase')){
            count ++;
        }

        else{
            count = 0;
        }

        if(count > 0){
            value.style.color = "#026b06";
        }else if(count < 0){
            value.style.color = "#cc4b06"
        }else{
            value.style.color = "#000"
        }

        value.textContent = count;
    })
})
