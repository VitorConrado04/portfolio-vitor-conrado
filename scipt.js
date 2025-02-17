document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"], button[data-target]').forEach(element => {
        element.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href") || this.getAttribute("data-target");
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});

