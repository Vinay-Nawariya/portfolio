export function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export function setSessionStorage(key,value) {

    if(key && value) window.sessionStorage.setItem(key,JSON.stringify(value));
    return;
}

export function getSessionStorage(key) {
    if(key) return window.sessionStorage.getItem(key)
}