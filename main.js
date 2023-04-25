    let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let mountains3 = document.getElementById('mountains3');
    let mountains4 = document.getElementById('mountains4');
    let river = document.getElementById('river');
    let boot = document.getElementById('boot');
    let asea = document.querySelector('.asea');
    window.onscroll = function(){
        let value = scrollY
        stars.style.left = value +'px';
        moon.style.top = value * 5 +'px';
        mountains3.style.top = value * 2 +'px';
        mountains4.style.top = value * 1.5 +'px';
        river.style.top = value +'px';
        boot.style.top = value +'px';
        boot.style.left = value * 3 +'px';
        asea.style.fontSize = value +'px';
        if(scrollY >= 67){
            asea.style.fontSize = 67 +'px';
            asea.style.position ='fixed';
            if(scrollY >= 544){
                asea.style.display='none';

            }else{
                asea.style.display='block';
            }
            if(scrollY >= 98){
                document.querySelector('.main').style.background = 'linear-gradient(#2c7a7a, #10001f)' ;
            }else{
                document.querySelector('.main').style.background = 'linear-gradient(#370448, #10001f)';

            }
        }

    }