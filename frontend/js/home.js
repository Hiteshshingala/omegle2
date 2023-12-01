'use strict';

console.log('Location', window.location);
console.log('LocalStorage', window.localStorage);



const userNameIn = document.getElementById('userNameInput');
const joinBtn = document.getElementById('joinBtn');

function initHome() {
    userNameIn.value = filterXSS(window.localStorage.name) || '';

    joinBtn.onclick = () => {
            const joinURL = window.location.origin + '/join';//?room=' + roomIdIn.value + '&name=' + userNameIn.value;
            //window.history.pushState('', '', joinURL);
            window.location.href = joinURL;
            window.localStorage.name = userNameIn.value;
    };
}
