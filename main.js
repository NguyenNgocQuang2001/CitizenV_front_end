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
}

function hideAndShow(modal, showButton, hideButton) {
    $(showButton).click(function() {
        $(modal).show();
    })
    $(hideButton).click(function() {
        $(modal).hide();
    })
}

hideAndShow('.update-modal','.updateInfoMain','.cancelUpdate');

hideAndShow('.register-modal','.giveAccount','.cancelRegister');

hideAndShow('.giveId-modal','.giveId', '.cancelGiveId');

hideAndShow('.givePMS-modal', '.givePMS', '.cancelGivePMS');

hideAndShow('.ppSentByB2-modal', '.listPPSentByB2', '.closeListPPSentByB2');

hideAndShow('.warning-modal', '.completeButton','.cancelButton');

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

function addInfo(stt, name, status, population, href) {
    var sttDiv = $("<div></div>").text(stt);
    var nameDiv = $("<a></a>").text(name);
    var statusDiv = $("<div></div>").text(status);
    var ppltDiv = $("<div></div>").text(population);
    sttDiv.addClass("c-1 bor-right-2 stt");
    nameDiv.addClass("c-2 bor-right-2 mainLowLevelName");
    statusDiv.addClass("c-3 bor-right-2 status");
    ppltDiv.addClass("c-4 population");
    var main = $("<a></a>");
    main.attr("href", href);
    main.addClass("dis-flex main");
    main.append(sttDiv, nameDiv, statusDiv, ppltDiv);
    if (stt % 2 == 0) {
        main.addClass('odd-line');
    }

    $('.main-web').append(main);
}

function addInfoCitizen(stt, name, gender, dob, job, villageId, href) {
    var sttDiv = $("<div></div>").text(stt);
    var nameDiv = $("<div></div>").text(name);
    var genderDiv = $("<div></div>").text(gender);
    var dobDiv = $("<div></div>").text(dob);
    var jobDiv = $("<div></div>").text(job);
    var villageIdDiv = $("<div></div>").text(villageId);
    var main = $("<a></a>");
    main.attr("href", href);
    main.addClass("dis-flex main");
    sttDiv.addClass("c-1-info bor-right-2 stt");
    nameDiv.addClass("c-2-info bor-right-2 name");
    genderDiv.addClass("c-3-info bor-right-2 gender");
    dobDiv.addClass("c-4-info bor-right-2 dob");
    jobDiv.addClass("c-5-info bor-right-2 job");
    villageIdDiv.addClass("c-6-info village-id");
    if (stt % 2 == 0) {
        main.addClass('odd-line');
    }
    main.append(sttDiv, nameDiv, genderDiv, dobDiv, jobDiv, villageIdDiv);
    $('.main-web-info').append(main);
}

/*function addInfoCitizenByB2(stt, name, gender, dob, job, villageId, href) {
    var sttDiv = $("<div></div>").text(stt);
    var nameDiv = $("<div></div>").text(name);
    var genderDiv = $("<div></div>").text(gender);
    var dobDiv = $("<div></div>").text(dob);
    var jobDiv = $("<div></div>").text(job);
    var villageIdDiv = $("<div></div>").text(villageId);
    var main = $("<a></a>");
    main.attr("href", href);
    main.addClass("dis-flex main");
    sttDiv.addClass("c-1-info bor-right-2");
    nameDiv.addClass("c-2-info bor-right-2");
    genderDiv.addClass("c-3-info bor-right-2");
    dobDiv.addClass("c-4-info bor-right-2");
    jobDiv.addClass("c-5-info bor-right-2");
    villageIdDiv.addClass("c-6-info");
    if (stt % 2 == 0) {
        main.addClass('odd-line');
    }
    main.append(sttDiv, nameDiv, genderDiv, dobDiv, jobDiv, villageIdDiv);
    $('.ppSentByB2List').append(main);
}*/

for (var i = 0; i < 99; i ++) {
    addInfo(i,'Bắc Ninh', 'Chưa nhập xong', 'N/A', "https://www.google.com");
}

for(var i = 0; i < 99; i++) {
    addInfoCitizen(i, 'Lê Công Nam', 'Nam', '01/02/2001', 'IT','1','https://google.com');
    //addInfoCitizenByB2(i, 'Lê Công Nam', 'Nam', '01/02/2001', 'IT','1','https://google.com');
}

$('.submit-id-button').click((e) => {
    e.preventDefault();
    if(1) {
    var name = $('#select-id-name').val();
    var id = $('.id-input').val();
    $('.alert-text').text("Đã cấp mã thành công cho " +name + " với mã: " + id);
    } else {
        $('.invalid-text').html("Mã cấp không hợp lệ hoặc tỉnh này đã được cấp mã!");
    }
})

$('.register-button').click((e) => {
    e.preventDefault();
    if(1) {
    var name = $('.select-name-register').val();
    var username = $('.username-register').val();
    var password = $('.password-register').val();
    $('.alert-text').html("Đã cấp thành công tài khoản cho " + name + "<br/>"+ "Tài khoản: " + username +  "<br />" + "Mật khẩu: " + password)
    } else {
        $('.invalid-text').text("Tỉnh này đã được cấp tài khoản hoặc xác nhận mật khẩu không đúng!");
    }
})

$('.givePMSButton').click((e) => {
    e.preventDefault();
    if(1) {
    var name = $(".select-give-PMS").val();
    var time_start = $('.time-start').val();
    var date_start = modifyDate($('.date-start').val());
    var time_end = $('.time-end').val();
    var date_end = modifyDate($('.date-end').val());
    $('.alert-text').html("Đã cấp thành công thời gian khai báo cho " + name + "<br/> Thời gian bắt đầu: " + time_start + ", ngày "+ date_start + "<br/> Thời gian kết thúc: " + time_end +", ngày "+ date_end);
    } else {
        $('.invalid-text').html("Thời gian bạn nhập không hợp lệ!");
    }
})

hideAndShow('.alert-modal','.submit-id-button','.confirmButton');
hideAndShow('.alert-modal','.register-button','.confirmButton');
hideAndShow('.alert-modal','.givePMSButton','.confirmButton');
hideAndShow('.announce-modal','','.announce-confirm-button');

function modifyDate (date) {
    var day = date.slice(date.length - 2, date.length );
    var month = date.slice(date.length - 5, date.length -3);
    var year = date.slice(0, 4);
    var newDate = day + "/" + month + "/" + year;
    return newDate;
}
