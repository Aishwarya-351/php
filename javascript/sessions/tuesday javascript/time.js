function time()
{
var d=new Date();
var h=d.getHours();
var m=d.getMinutes();
var s=d.getSeconds();
document.getElementById("para1").innerHTML=""+"<tr><td>"+h+"</td><td>" +m+"</td><td>"+s+"</td></tr>";
var t = setTimeout(time, 500);

}
function clr()
{
var color=document.getElementById("picker").value;
document.body.style.background=color;
}
function dwn()
{
 var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
document.body.style.background=color;

}