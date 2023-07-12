function SimpleInterest(Principal,rate,time){
    var ans = (Principal*rate*time)/100
    return ans
}

//var Principal=1000
//var rate=3.5
//var time=10
var countSimpleInterest = SimpleInterest(1000,3.5,10)
console.log(countSimpleInterest)