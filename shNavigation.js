var status = 0;
function shWebsiteNav() {
  var navbox = document.getElementById('colum-left');
  var shWebNavBut = document.getElementById('shWebNav');
  if (status == 0) {
    status = 1;
    navbox.style.display = 'block';
    shWebNavBut.innerHTML = 'Hide website navigation<i class="fas fa-caret-up" style="margin-left:10px;"></i>';
  } else {
    status = 0;
    navbox.style.display = 'none';
    shWebNavBut.innerHTML = 'Show website navigation<i class="fas fa-caret-down" style="margin-left:10px;"></i>';
  }
}