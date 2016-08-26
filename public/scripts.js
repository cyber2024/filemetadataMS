var pic = document.getElementById('pic');
var btn = document.getElementById('submit');

var filename = document.getElementById('filename');
var size = document.getElementById('size');
filename.innerHTML = "fuck";

pic.addEventListener("change", function(e){
   
});

btn.addEventListener('click', function(e){
    console.log('name',pic.files[0].name);
    filename.innerHTML = pic.files[0].name + ".";
    size.innerHTML = (Math.floor(100*pic.files[0].size/1024)/100) + 'kB';
});