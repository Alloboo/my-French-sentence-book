const vocaForm = document.querySelector('#voca-form');
const vocaInput = document.querySelector('#voca-form input');
const vocaList = document.querySelector('#vaca-list');

const VOCAS_KEY = "vocas";

let vocas = [];

function saveVocas() {
    localStorage.setItem(VOCAS_KEY, JSON.stringify(vocas));
}

function deleteVoca(e) {
    const li = e.target.parentElement;
    li.remove();
    vocas = vocas.filter(voca => voca.id !== parseInt(li.id));
    saveVocas();
}

function paintVoca(newVoca) {
    const li = document.createElement("li");
    li.id = newVoca.id;

    const span = document.createElement("span");
    span.innerText - newVoca.text;

    const deleteBtn = document.createAttribute("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = 'x';
    deleteBtn.addEventListener('click', deleteVoca);

    li.appendChild(span);
    li.appendChild(deleteBtn);
    vocaList.appendChild(li);
}

function handleVocaSubmit(e) {
    e.preventDefault();

    const newVoca = vocaInput.value;
    vocaInput.value = "";

    const newVocaObj = {
        text: newVoca,
        id: Date.now(),
    };

    vocas.push(newVocaObj);
    paintVoca(newVocaObj);
    saveVocas();
}

vocaForm.addEventListener('submit', handleVocaSubmit);

const savedVocas = localStorage.getItem(VOCAS_KEY);

if (savedVocas) {
    const parsedVocas = JSON.parse(savedVocas);
    vocas = parsedVocas;
    parsedVocas.forEach(paintVoca);
}


