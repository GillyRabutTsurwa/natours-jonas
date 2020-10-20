$("a[href*='#']").on("click", function(e) {
    if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;

        //apply the animation effect to the whole document.
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 2000)
    }
}) 