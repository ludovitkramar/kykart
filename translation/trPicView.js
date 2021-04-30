function showPic(picName) {
    document.getElementById('coverall').style.display = 'flex';
    document.getElementById('picViewerImage').style.display = 'block';
    document.getElementById('picViewerImage').src = `/translation/${picName}`;
}
