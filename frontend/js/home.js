'use strict';

console.log('Location', window.location);
console.log('LocalStorage', window.localStorage);

const roomId = filterXSS(new URLSearchParams(window.location.search).get('room') || '');

// const roomIdIn = document.getElementById('roomIdInput');
const userNameIn = document.getElementById('userNameInput');
const joinBtn = document.getElementById('joinBtn');
const supportBtn = document.getElementById('supportBtn');

function initHome() {
    // roomIdIn.value = roomId ? roomId : filterXSS(window.localStorage.room) || '';
    userNameIn.value = filterXSS(window.localStorage.name) || '';

    joinBtn.onclick = () => {
        // if (userNameIn.value) {
            const joinURL = window.location.origin + '/join';//?room=' + roomIdIn.value + '&name=' + userNameIn.value;
            window.history.pushState({ }, '', joinURL);
            // window.location.href = joinURL
            // window.localStorage.room = roomIdIn.value;
            window.localStorage.name = userNameIn.value;
        // }
    };
    supportBtn.onclick = () => {
        window.open('https://codecanyon.net/user/miroslavpejic85', '_blank');
    };
}