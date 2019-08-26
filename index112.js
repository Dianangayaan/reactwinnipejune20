function showNumbers (start , end){
    if (typeof start === 'number' && typeof end === 'number'){
        if (start === end){
            console.log('Both parameters are equals');
        }else if (start > end){            
            for (let x = start; x >= end; x--){
                console.log(x);                
            }
        }else{
            for (let x = start; x <= end; x++){
                console.log(x);                
         }
        }
    }else{
        console.log('Enter a parameters number');
    }
}
showNumbers(0, 1000);
showNumbers(1000, 0);
showNumbers(100,100);
showNumbers("100",300);