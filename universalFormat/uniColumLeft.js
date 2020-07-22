var xhr3= new XMLHttpRequest();
xhr3.open('GET', '/universalFormat/uniColumLeft.html', true);
xhr3.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    document.getElementById('columLeft').innerHTML= this.responseText;
};
xhr3.send();