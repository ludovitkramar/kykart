//VARIABLES
var sidebarVisible = true;
var mainText = '#000000';
var accentText = '#ffffff';

  function toggleSideBar() {
    if (sidebarVisible) {
      document.getElementById('body').style.gridTemplateAreas="'header header'\
      'main main'\
      'footer footer'";
      document.getElementById('sidebar').style.display = 'none';
      document.getElementById('mainBody').style.display = 'block';
      sidebarVisible = false;
    } else {
      document.getElementById('body').style.gridTemplateAreas="'header header'\
      'sidebar sidebar'\
      'footer footer'";
      document.getElementById('sidebar').style.display = 'flex';
      document.getElementById('mainBody').style.display = 'none';
      sidebarVisible = true;
    }
  }
  function rdmMainColor() {
    var r = document.querySelector(':root');
    r.style.setProperty('--mainColor', genRandomColor());
  }
  function rdmAccentColor() {
    var r = document.querySelector(':root');
    r.style.setProperty('--accentColor', genRandomColor());
  }
  function rdmHighlightColor() {
    var r = document.querySelector(':root');
    r.style.setProperty('--highlight', genRandomColor());
  }
  function invertMainText() {
    var r = document.querySelector(':root');
    if (mainText=='#000000') {
      r.style.setProperty('--mainText', '#ffffff');
      mainText='#ffffff';
    } else {
      r.style.setProperty('--mainText', '#000000');
      mainText='#000000';
    }
  }
  function invertAccentText() {
    var r = document.querySelector(':root');
    if (accentText=='#ffffff') {
      r.style.setProperty('--accentText', '#000000');
      accentText='#000000';
    } else {
      r.style.setProperty('--accentText', '#ffffff');
      accentText='#ffffff';
    }
  }
  function genRandomColor() {
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;
    console.log("rgb("+r+","+g+","+b+")");
    return("rgb("+r+","+g+","+b+")");
  }
  function goto(href) {
    t = href.slice(0,1);
    h = getComputedStyle(document.getElementById('header'))
    e=document.getElementsByClassName('fadeAway');
    if (h.display != "none") {
      for (var i = 0; i < e.length; i++) {
        e[i].style.animationPlayState="running";
      };
      setTimeout(()=> {
        if (t=="#") {
          toggleSideBar();
        }
        for (var i = 0; i < e.length; i++) {
          e[i].style.animationPlayState="paused";
        };
        location.href=href;
        setTimeout(()=> {
          location.href=href;
        }, 200)
      }, 300)
    } else {
      location.href=href;
    };
  }
