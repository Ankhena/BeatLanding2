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