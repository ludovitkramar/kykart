function hideCoverAll() {
    //Hides the overllay and the different elements it contains.
    console.log('hideCoverAll says Hi!');
    document.getElementById('coverall').style.display = 'none';
    document.getElementById('langSelect').style.display = 'none';
    document.getElementById('picViewerImage').style.display = 'none';
  }

  function showLangSelect() {
    //Open the overlay with the language selection tool.
    document.getElementById('coverall').style.display = 'flex';
    document.getElementById('langSelect').style.display = 'block';
  }

  function setLang(LANG) {
    //stores the selected language to local storage and call applyLang()
    localStorage.setItem('LANG', LANG);
    console.log(localStorage.getItem('LANG'));
    applyLang();
  }

  function applyLang() {  
    var url = location.href;
    
  //Checks for saved LANG key and redirects.
    var language = localStorage.getItem('LANG');
    switch(language) {
      case 'en':
        console.log('Language is set to English');
        if(url.indexOf('es') != -1 || url.indexOf('zh') != -1) {
        window.location.replace('/Translation/');
        }
        break;
      case 'es':
        console.log('La lengua configurada es español');
        if(url.indexOf('es') != -1) {
        window.location.replace('/Translation/es/');
        }
        break;
      case 'zh':
        console.log('設定的語言是中文');
        if(url.indexOf('zh') != -1) {
        window.location.replace('/Translation/zh/');
        }
        break;
      default:
        console.log('No language is set, english is the default language.');
        showLangSelect();
        break;
    }
  }

  applyLang()