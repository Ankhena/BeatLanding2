--include("_webpsup.js");

$(document).ready(function() {

    --include("_burger.js")
    --include("_modal.js");

    --include("scripts/highcharts.min.js");
    --include("_highchart-inits.js");

    $('.faq-container-items-item').click(function () {
        let header = $(this).children();
        let content = header.next();
        header.toggleClass("opened");

        if (!content.is(':visible')) {
            content.slideDown('normal');
        }
        else {
            content.slideUp('normal');
        }
    });

    document.querySelectorAll(".eye").forEach(item => {
        item.addEventListener("click", () => {
            let input = item.parentNode;
            input.classList.toggle("visible");

            let input_text = input.querySelector(".input_text");
            if (input.classList.contains("visible")) {
                input_text.setAttribute("type", "text");
            }
            else {
                input_text.setAttribute("type", "password");
            }
        });
    });

    function initSubscribeChanger() {
        let toggler = document.querySelector(".subscribe-changer input[type='checkbox']");

        if (toggler !== null) {
            let costsBlock = document.querySelectorAll(".costSwitcher");
            let togglerDescr = document.querySelectorAll(".checkbox-toggle__descr");

            let subscribeCosts = [["290 руб.", "690 руб.", "890 руб."], ["1290 руб.", "2690 руб.", "3290 руб."]];
            let subscribeNames = ["/ месяц", "/ год"];


            toggler.addEventListener("change", function() {
                togglerDescr.forEach((item, i) => {
                    item.classList.toggle("checkbox-toggle__descr--light");
                });

                costsBlock.forEach((item, i) => {
                    item.querySelector("p strong").innerHTML = subscribeCosts[+toggler.checked][i];
                    item.querySelector("p span").innerHTML = subscribeNames[+toggler.checked];
                    item.querySelector(".btnShowAll").classList.toggle("btnShowAll--disabled");
                });
            });
        }
    }

    initSubscribeChanger();

});


