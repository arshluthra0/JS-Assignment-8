$(document).ready(function () {
    let dl, initialCountOne = 0, initalCountTwo = 0, countOne = 0, countTwo = 0;


    $.ajax({
        type: "Get",
        url: "fiction.json",
        dataType: "json",
        contentType: "application/json",
        main_info: {},
        success: function (main_info) {
            dl = main_info;
            for (i = 0; i < dl.length; i++) {
                $('#main_Table').append(
                    '<tr><td>' + dl[i].id +
                    '</td><td class="main_character">'
                    + dl[i].main_chracter +
                    '</td><td>' + dl[i].duration
                    + '</td><td>' + dl[i].genre +
                    '</td><td>' + dl[i].email + '</td></tr>');
            }
            initialBtn1Filter();
            initialBtn2Filter();
        },
        error: function () {
            alert("data inconsistent");
        }


    });

    $("#search").keyup(function () {

        var main_info = this.value.toLowerCase().split(" ");
        $('#main_Table tr').each(function (index) {
            ;
            var fiction = $(this).find('.main_character').html();
            if (fiction.toLowerCase().indexOf(main_info[0] !== "" && main_info[0]) != -1) {
                $(this).addClass('yellow_highlighter');
            } else {
                $(this).removeClass('yellow_highlighter');
            }
        });
    })

    function initialBtn1Filter() {
        console.log("btn1");
        $('#main_Table tr').each(function (index) {
            var fiction = $(this).find('.main_character').html();
            if (fiction.charCodeAt(0) <= 77) {
                initialCountOne++;
            }
            $('.btn1').html(`A-M (${initialCountOne})`);

        });

    }

    function btn1Filter() {
        console.log("btn1");
        $('#main_Table tr').each(function (index) {
            var fiction = $(this).find('.main_character').html();
            if (fiction.charCodeAt(0) <= 77) {
                countOne++;
            } else {
                $(this).addClass('hiddenInfo');
            }
            $('.btn1').html(`A-M (${countOne})`);
            $('.btn1').attr('disabled', true);
            countTwo = 0;
            $('.btn2').attr('disabled', false);
        });
        console.log("count one", countOne);
    }

    $(".btn1").on('click', function () {
        $('#main_Table tr').each(function (index) {
            $(this).removeClass('hiddenInfo');
        });
        btn1Filter();
    })

    function initialBtn2Filter() {
        console.log("btn2");
        $('#main_Table tr').each(function (index) {
            var fiction = $(this).find('.main_character').html();
            if (fiction.charCodeAt(0) >= 78) {
                initalCountTwo++;
            }
            $('.btn2').html(`N-Z (${initalCountTwo})`);

        });
    }

    function btn2Filter() {
        console.log("btn2");
        $('#main_Table tr').each(function (index) {
            var fiction = $(this).find('.main_character').html();
            if (fiction.charCodeAt(0) >= 78) {
                countTwo++;
            } else {
                $(this).addClass('hiddenInfo');
            }
            $('.btn2').html(`N-Z (${countTwo})`);
            $('.btn2').attr('disabled', true);
            countOne = 0;
            $('.btn1').attr('disabled', false);
        });
    }

    $(".btn2").on('click', function () {
        $('#main_Table tr').each(function (index) {
            $(this).removeClass('hiddenInfo');
        });
        btn2Filter();
    })



});