let body = document.querySelector('body');
function dark() {
    body.setAttribute('class', 'darkmode');
}
function light(){
    body.removeAttribute('class', 'darkmode');
}