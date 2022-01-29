function ask(q, yes, no) {
    if (confirm(q)) yes()
    else no();
}

function ok() {
    alert('ok');
}

function noOk() {
    alert('no no no!')
}
 
// ask('are you ok?', ok, noOk);