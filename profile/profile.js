function checkinput() {

    var inp = document.getElementsByTagName('input');
    for (let i = 0; i < inp.length; ++i) {
        if (inp[i].value == '') {
            return false;
        }
    }
    return true;
}

function changeinput(x) {

    var inp = document.getElementsByTagName('input');
    for (let i = 0; i < inp.length; ++i) {
        inp[i].disabled = x;
    }

    var sel = document.getElementsByTagName('select');
    for (let i = 0; i < sel.length; ++i) {
        sel[i].disabled = x;
    }
}


var oke = false;
function chinhsua(x) {

    var notify = document.getElementById('notify');
    if (oke == true) {
        return;
    }
    if (x.innerText == 'Chỉnh sửa') {
        changeinput(false);
        x.innerText = 'Lưu';
        oke = false;
    } else {
        notify.style.display = 'block';
        var notitext = document.getElementById('textnotify');
        if (checkinput() == false) {
            notitext.innerText = 'Bạn chưa điền đầy đủ thông tin';
        } else {
            notitext.innerText = 'Chỉnh sửa thành công';
        }
        x.innerText = 'Chỉnh sửa';
        changeinput(true);
        oke = true;
    }
}

function nop() {

    if (oke == true) {
        return;
    }
    oke = true;
    changeinput(true);
    var save = document.getElementById('save');
    save.innerText = 'Chỉnh sửa';
    var notify = document.getElementById('notify');
    notify.style.display = 'block';
    var notitext = document.getElementById('textnotify');
    notitext.innerText = 'Nộp thành công';
}

function okefunc() {

    var notify = document.getElementById('notify');
    notify.style.display = 'none';
    oke = false;
}