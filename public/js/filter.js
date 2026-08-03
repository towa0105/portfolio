const filterBtns = document.querySelectorAll(".filter__button")
console.log(filterBtns);

filterBtns.forEach(filterButton => {
    filterButton.addEventListener("click", () => {
        filterBtns.forEach(btn => {
            btn.classList.remove("filter__button--active");
        })
        console.log(filterButton);
        filterButton.classList.add("filter__button--active");
    })

    const filterName = filterBtn.dateset.filter;
    console.log("フィルターボタンは", filterName);

    postItem.forEach(item => {
        console.log(item.dateset.category);
        if (item.dateset.category. != filterName) {
            item.classList.add("is-hidden")
        }
    })

});
