const initSlider = () => {
    const imagelist = document.querySelector(".tabhinhanh .imagelist");
    const slideButtons = document.querySelectorAll(".tabhinhanh .nutchuyenslide");
    const maxScrollRight = imagelist.scrollWidth - imagelist.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "nutchuyenphai" ? -1 : 1;
            const scrollAmount = imagelist.clientWidth * direction;
            imagelist.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });
    });

    const  handeSlideButtons = () => {
        slideButtons[0].style.display = imagelist.scrollRight <= 0 ? "none" : "block";
        slideButtons[1].style.display = imagelist.scrollRight >= 0 ? "none" : "block"
    }
    imagelist.addEventListener("scroll", () => {
        handeSlideButtons();
    });
}
window.addEventListener("load", initSlider);