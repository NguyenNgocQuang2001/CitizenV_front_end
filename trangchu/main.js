function getObj(name) {
    return document.querySelector(name);
}

function changeDisplayToNone(name) {
    getObj(name).style.display = 'none';
}

function changeDisplayToBlock(name) {
    getObj(name).style.display = 'block';
}

function showDropDown() {
    if (getObj('.userDropDownMenu').style.display == '' || getObj('.userDropDownMenu').style.display == 'none') {
        changeDisplayToBlock('.userDropDownMenu');
        changeDisplayToBlock('.cover');
        getObj('.nav-bar').style.zIndex = '2';
        getObj('.userButton').style.backgroundColor = '#00BFFF';
        hideAll('.manageDropDownMenu');
    } else {
        changeDisplayToNone('.userDropDownMenu');
        changeDisplayToNone('.cover');
        getObj('.userButton').style.backgroundColor = '#81DAF5'
    }
}

function closeDropDown() {
    getObj('.userButton').style.backgroundColor = '#81DAF5';
    changeDisplayToNone('.userDropDownMenu');
    changeDisplayToNone('.cover');
    changeDisplayToNone('.userDropDownMenuTablet');
    hideAll('.manageDropDownMenu');
    getObj('.userButtonTablet').style.backgroundColor = '#81DAF5';
}

function showDropDownTablet(tis) {
    $('.userDropDownMenuTablet').slideToggle('200');
    console.log( $('.userDropDownMenuTablet').css('display'));

}

$('.manageButtonTablet').click(function() {
    $('.manageDropDownMenuTablet').slideToggle('200');
});

function toggleMenuTablet() {
   $('.tablet-menu').slideToggle("200");
}

$(".manageButton").click(function() {
    $('.manageDropDownMenu').toggle();
    var dpl = $('.manageDropDownMenu').css('display');
    if (dpl == 'none') {
        $('.manageButton').css('background-color','#81DAF5');
    } else {
        $('.manageButton').css('background-color','#00BFFF');
        hideAll('.userDropDownMenu');
        $('.cover').show();
    }
});

function hideAll(name) {
    var parent = name.slice(0,name.length - 12);
    $(name).hide();
    $(parent + 'Button').css('background-color','#81DAF5');
    console.log(parent);
}

$('.updateInfoMain').click(function() {
    $(".update-modal").show();
})

$('.cancelUpdate').click(function() {
    $(".update-modal").hide();
})

$(".giveAccount").click(function() {
    $('.register-modal').show();
})

$(".cancelRegister").click(function() {
    $('.register-modal').hide();
})

$(".giveId").click(function() {
    $('.giveId-modal').show();
})

$(".cancelGiveId").click(function() {
    $('.giveId-modal').hide();
})

$(".givePMS").click(function() {
    $('.givePMS-modal').show();
})

$('.cancelGivePMS').click(function() {
    $('.givePMS-modal').hide();
})

function addIdToSelectId() {
    for (var i = 1; i <= 63; i++) {
        var id = i.toString();
        if (id.length == 1) {
            id = '0' + id;
        }
        var ans = document.createElement('option');
        ans.value = id;
        ans.innerHTML = id;
        $('.lowLevelID').append(ans);
    }
}

addIdToSelectId();

function addInfo(stt, name, status, population) {
    var sttDiv = $("<div></div>").text(stt);
    console.log(sttDiv);
    var nameDiv = $("<div></div>").text(name);
    var statusDiv = $("<div></div>").text(status);
    var ppltDiv = $("<div></div>").text(population);
    sttDiv.addClass("c-1 bor-right-2");
    nameDiv.addClass("c-2 bor-right-2");
    statusDiv.addClass("c-3 bor-right-2");
    ppltDiv.addClass("c-4");
    var main = $("<div></div>");
    main.addClass("dis-flex main");
    main.append(sttDiv, nameDiv, statusDiv, ppltDiv);
    if (stt % 2 == 0) {
        main.addClass('odd-line');
    }

    $('.main-web').append(main);
}

addInfo('1','Bắc Ninh', 'Đã nhập xong', '1000000');
addInfo('2','TP. Hà Nội', 'Chưa nhập xong', 'N/A');
addInfo('3','Tp. Hồ Chí Minh','Đã nhập xong', '999999');
addInfo('4','Bắc Giang','Đã nhập xong', '98889');
addInfo('5','Hưng Yên', 'Chưa nhập xong', 'N/A');
for (var i = 0; i < 99; i ++) {
    addInfo(i,'Bắc Ninh', 'Chưa nhập xong', 'N/A');
}