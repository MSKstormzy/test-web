var num = 7;
var str = 'hello'

document.getElementById('text').innerHTML = num;
document.getElementById('text').addEventListener('click', function(){
    document.getElementById('text').innerHTML = str;
});

