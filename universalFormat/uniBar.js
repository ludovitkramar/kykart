var xhr2= new XMLHttpRequest();
xhr2.open('GET', '/universalFormat/uniBar.html', true);
xhr2.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    document.getElementById('bar').innerHTML= this.responseText;
};
xhr2.send();