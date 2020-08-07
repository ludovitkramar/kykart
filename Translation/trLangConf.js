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
  //Checks for saved LANG key and run some code, redirect or something, not yet implemented.
    var language = localStorage.getItem('LANG');
    switch(language) {
      case 'en':
        console.log('Language is set to English');
        break;
      case 'es':
        console.log('La lengua configurada es español');
        alert('Aún no está finalizada la traducción de la página.');
        break;
      case 'zh':
        console.log('設定的語言是中文');
        alert('頁面尚在翻譯中');
        break;
      default:
        console.log('No language is set, english is the default language.')
        break;
    }
  }

  applyLang()