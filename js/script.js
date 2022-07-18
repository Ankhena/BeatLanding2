// Проверка на поддержку WebP от браузера

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp-support');
    }
});;

$(document).ready(function() {

    function initBurgerMenu() {
    let button_burger = $("[data-burger='button']");
    let menu_burger = $("[data-burger='menu']");
    let body = document.body;
    
    $(button_burger).click(() => {
        menu_burger.toggleClass("active")
        button_burger.toggleClass("opened");
        body.classList.toggle("hideScroll");
    });
}

initBurgerMenu();
    function initModal() {
    let overlay = document.querySelector(".overlay_modal");
    let body = document.body;
    let scrollBarWidth = getScrollBarWidth(); // чтобы не прыгала ширина сайта при скрытии скролла 

    //console.log(scrollBarWidth);
    
    function showModal(id) {
        overlay.classList.add("visible");
        body.classList.add("hideScroll");
        body.style.paddingRight = `${scrollBarWidth}px`;
        document.querySelector(`#${id}`).classList.add("visible");
    }

    function changeModal(id) { // закрыть текущее модальное окно, и открыть новое через 700 мс
        closeModal();
        setTimeout(() => showModal(id), 700);
    }
    
    function closeModal() {
        document.querySelector(".modal.visible").classList.remove("visible");
        setTimeout(() => {
            overlay.classList.remove("visible");
            body.classList.remove("hideScroll");
            body.style.paddingRight = "";
        }, 150); // так как 0.3s ease-in-out, это нужно чтобы окно модальное не прыгало резко влево во время закрытия
    }

    function getScrollBarWidth() {
        const scrollBlock = document.createElement("div");
        scrollBlock.classList.add("scroll_block_dummy");
        document.body.appendChild(scrollBlock);

        const scrollBarWidth = scrollBlock.offsetWidth - scrollBlock.clientWidth;
        document.body.removeChild(scrollBlock);
        return scrollBarWidth;
    }
    
    document.querySelectorAll("[data-modal]").forEach(item => {
        item.addEventListener("click", () => {
            showModal(item.dataset.modal)
        });
    });

    document.querySelectorAll("[data-changeModal]").forEach(item => {
        item.addEventListener("click", () => changeModal(item.dataset.changemodal));
    });
    
    document.querySelectorAll("[data-closeModal]").forEach(item => {
        item.addEventListener("click", () => closeModal());
    });
}

initModal();;

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