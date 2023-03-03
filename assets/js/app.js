let btn = document.querySelectorAll("i");
btn.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (item.classList.contains("fa-chevron-down")) {
            item.classList.remove("fa-chevron-down");
            item.classList.add("fa-circle-xmark");
            // console.log(2);
        } else {
            if (item.classList.contains("fa-circle-xmark")) {
                item.classList.add("fa-chevron-down");
                item.classList.remove("fa-circle-xmark");
            }
        }
        e.target.parentElement.classList.toggle("active");
    });
});
