var arr = [[1,2,3], [4,5,6], [7,8,9]]
var newarr=[]

for(var i=0;i<arr.length;i++){
    var temp = []
    for(var j=0;j<arr[i].length;j++){
        temp.push(arr[j][i])
    }
    newarr.push(temp)
}
console.log(newarr)