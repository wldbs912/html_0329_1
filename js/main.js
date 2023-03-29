$(function () {
            $("#a").click(function () {
                $(".b").slideToggle();
            });

            $(window).resize(function () {
                if (window.innerWidth <= 1099) {
                    $('.b').hide();
                }
            });

            $(window).resize(function () {
                if (window.innerWidth >= 1099) {
                    $('.b').show();
                }
            });
        });


        
        $(window).resize(function () {
                if (window.innerWidth <= 1099) {
                    $('.b').show();
                }
            });

        $(window).resize(function () {
                if (window.innerWidth <= 1100) {
                    $('.b').hide();
                }
            });