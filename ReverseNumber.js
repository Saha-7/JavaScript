function Reverse(number){
    if (number === 0) {
        return 0;
    }

    var reversed =0
    
    while(number!==0){
    var lastdigit = number%10
    reversed = (reversed * 10) + lastdigit
    number=Math.floor(number/10)
    }
return reversed
}

var number = 2345
var s = Reverse(number) 
console.log(s)