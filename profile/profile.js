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
/// ************Lấy giá trị Input************** ///

var hovaten = "";
var ngaysinh = "";
var gioitinh = "";
var cmnd = "";
var quequan = "";
var diachithuongtru = "";
var diachitamchu = "";
var tongiao = "";
var trinhdovanhoa = "";
var nghenghiep = "";

function gangiatri() {

    var inp = document.getElementsByTagName('input');
    for (let i = 0; i < inp.length; ++i) {
        
        if (i == 0) {
            hovaten = inp[i].value;
        } else if (i == 1) {
            ngaysinh = inp[i].value;
        } else if (i == 2) {
            cmnd = inp[i].value;
        } else if (i == 3) {
            quequan = inp[i].value;
        } else if (i == 4) {
            diachithuongtru = inp[i].value;
        } else if (i == 5) {
            diachitamchu = inp[i].value;
        } else if (i == 6) {
            tongiao = inp[i].value;
        } else if (i == 7) {
            trinhdovanhoa = inp[i].value;
        } else {
            nghenghiep = inp[i].value;
        }
    }

    var sel = document.getElementsByTagName('select');
    gioitinh = sel[0].value;
    console.log(gioitinh);
}



















/// ************Lấy giá trị Input************** ///

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
    gangiatri();
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

function chinhTextThongBao(text) {
    var notitext = document.getElementById('textnotify');
    notitext.innerText = text;
}