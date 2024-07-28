function timer(){
    setInterval(run,1000);

    let second = 0;
    let minute = 0;
    let hour = 0;

    function run(){
        if(second<=60){
            document.querySelector('#seconds').innerHTML = second;
            second++;
        }
        else if(second>60){
            minute++;
            document.querySelector('#minutes').innerHTML = minute;
            second = 0;
        }    
        else if(minute>60){
            hour++;
            document.querySelector('#hours').innerHTML = hour;
            minute = 0  ;  
        }
    }
}
