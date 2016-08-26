var pic = document.getElementById('pic');
var btn = document.getElementById('submit');

var filename = document.getElementById('filename');

pic.addEventListener("change", function(e){
   
});

btn.addEventListener('click', function(e){
    console.log('name',pic.files[0].name);
    var res = {
        name: pic.files[0].name + ".",
        size: (Math.floor(100*pic.files[0].size/1024)/100) + 'kB'
    };
    filename.innerHTML = '{\n\tname: '+res.name+'\n\tsize: '+res.size+'\n}';
});