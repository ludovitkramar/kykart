function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    if(localStorage.getItem('theme') === 'lightTheme') {
      document.getElementById('trLogo').src = "/Translation/kykvitTranslationLight.png";
    } else {
      document.getElementById('trLogo').src = "/Translation/kykvitTranslation.png";
    }
  }

function toggleTheme() {
  if(localStorage.getItem('theme') === 'darkTheme'){
    setTheme('lightTheme');
  } else {
    setTheme('darkTheme');
  }
}

(function () {
  if(localStorage.getItem('theme') === 'lightTheme'){
    setTheme('lightTheme');
  } else {
    setTheme('darkTheme');
  }
})()