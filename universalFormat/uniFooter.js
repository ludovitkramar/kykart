var xhr4= new XMLHttpRequest();
xhr4.open('GET', '/universalFormat/uniFooter.html', true);
xhr4.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    document.getElementById('footer').innerHTML= this.responseText;
};
xhr4.send();