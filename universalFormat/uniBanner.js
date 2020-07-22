var xhr1= new XMLHttpRequest();
xhr1.open('GET', '/universalFormat/uniBanner.html', true);
xhr1.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    document.getElementById('banner').innerHTML= this.responseText;
};
xhr1.send();