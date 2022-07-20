var num = 'click me';
var str = 'hello';

document.getElementById('text').innerHTML = num;
document.getElementById('text').addEventListener('click', function(){
    document.getElementById('text').innerHTML = str;
});

