function Star(el, count, cb) {
    let currentElemId = 0;
    const elem = document.querySelector(el);

    function createStar(id) {
        const el = document.createElement("span");
        el.classList.add("fa", "fa-star-o");
        el.dataset.id = id;
        el.addEventListener("mouseover", onMouseOver);
        el.addEventListener("click", onClick);
        el.addEventListener("mouseleave", onMouseLeave);
        return el;
    }

    for (let i = 1; i <= count; i++) {
        elem.appendChild(createStar(i));
    }

    function onMouseOver(e) {
        const { id } = e.target.dataset;
        fill(id);
    }
    function onClick(e) {
        const { id } = e.target.dataset;
        currentElemId = id;
        fill(currentElemId);
        getStar(currentElemId);
    }
    function onMouseLeave() {
        fill(currentElemId);
    }

    function fill(id) {
        for (let i = 1; i <= count; i++) {
            if (i <= id) {
                elem.children[i - 1].classList.replace("fa-star-o", "fa-star");
            } else {
                elem.children[i - 1].classList.replace("fa-star", "fa-star-o");
            }
        }
    }
}

function getStar(value) {
    document.getElementById("display-star").innerHTML = value;
}
new Star("#star", 5, getStar);
