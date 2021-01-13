// var check = "https://google.com.html"

// console.log(check.startsWith("https")); 
// console.log(check.endsWith(".html"))

// function check(){
//     var check1 = "https://google.com.html"
//     if ((check1.startsWith ("https://")) && (check1.endsWith (".html"))){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(check())


var a = "aajlkjjskdjfAlsj;gkejflksajfjskda";
var b = {};
for (let i = 0; i < a.length; i++){
    if((a.match(new RegExp(a[i], "g"))).length > 1){
        b[a[i]]=(a.match(new RegExp(a[i], "g"))).length;
    }
}
console.log(b);




<!DOCTYPE html>
<html>
<body>

<p>Click the button to return the number of characters in the string "Hello World!".</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var str = "Hello";
  var n = str.length;
  document.getElementById("demo").innerHTML = n;
}
</script>

</body>
</html>

