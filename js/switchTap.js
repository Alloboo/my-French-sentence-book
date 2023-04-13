function showSentenceList(e) {
    e.preventDefault();

    const mainPage = document.querySelector("#main-page");
    mainPage.classList.add(HIDDEN_CLASSNAME);
    voca.classList.add(HIDDEN_CLASSNAME);
    review.classList.remove(HIDDEN_CLASSNAME);
}

showReviewBtn.addEventListener('click', showSentenceList);

const mainBtn = document.querySelector(".mainBtn");

function combackMain(e) {
    e.preventDefault();

    mainPage.classList.remove(HIDDEN_CLASSNAME);
    voca.classList.add(HIDDEN_CLASSNAME);
    review.classList.add(HIDDEN_CLASSNAME);
}

mainBtn.addEventListener('click', combackMain);

const showVocaBtn = document.querySelector(".showVocaBtn");

function showVocaList(e) {
    e.preventDefault();

    const mainPage = document.querySelector("#main-page");

    mainPage.classList.add("hidden");
    review.classList.add("hidden");
    voca.classList.remove("hidden");
}

showVocaBtn.addEventListener('click', showVocaList);