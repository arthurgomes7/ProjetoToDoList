let body = document.querySelector('body');
let light_button = document.getElementById('lightButton')

function dark() {
    body.setAttribute('class', 'darkmode');
    light_button.setAttribute('id', 'lightButton')
}
function light(){
    body.removeAttribute('class', 'darkmode');
}
