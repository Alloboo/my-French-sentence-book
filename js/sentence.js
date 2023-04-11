//아직 하루 한 문장 구현 안 함. 지금은 페이지 로드할 때마다 출력.

const sentences = [
    {
        sentence: `On trouve facilement plein de choses à faire dans les environs de chez moi.`,
        mean: `집 근처에서 할 만한 많은 것들을 쉽게 찾을 수 있어요.`,
    },
    {
        sentence: `J'ai du mal  à  vous entendre. Il y a trop de bruit d'ici.`,
        mean: `당신 말이 잘 안 들려요. 여기 너무 시끄러워요.`,
    },
    {
        sentence: `N'importe quel jour ferait l'affaire pour moi`,
        mean: `어떤 날이든 괜찮아요.`,
    },
    {
        sentence: `Ça n'a aucun sens`,
        mean: `말도 안 돼요.`,
    },
    {
        sentence: `ça ira`,
        mean: `그렇게 하면 되겠네요.`,
    },
    {
        sentence: `Peu m'importe`,
        mean: `어떤 쪽이든 괜찮아요.`,
    },
    {
        sentence: `Le moment est-il mal choisi?`,
        mean: `지금 바쁘신가요?`,
    },
    {
        sentence: `Quelles nouvelles?`,
        mean: `요즘 어떻게 지내요?`,
    },
    {
        sentence: `À quelle heure allons-nous nous rencontrer?`,
        mean: `몇시에 만날까요?`,
    },
    {
        sentence: `Où nous retrouvons-nous ?`,
        mean: `어디서 만날까요?`,
    }, {
        sentence: `Quel est le tarif?`,
        mean: `요금이 얼마에요?`,
    }
    , {
        sentence: `Où va ce train?`,
        mean: `이 기차는 어디로 가나요?`,
    },
    {
        sentence: `Est-ce que je peux avoir l'addition s'il vous plaît?`,
        mean: `계산서 주세요.`,
    },
    {
        sentence: `Y a-t-il des places dehors ?`,
        mean: `바깥에 자리 있나요?`,
    },
    {
        sentence: `Qu'avez-vous comme dessert ?`,
        mean: `디저트는 뭐가 있나요?`,
    },
    {
        sentence: `J'aimerais une salade.`,
        mean: `샐러드 주세요.`,
    },
    {
        sentence: `J'aimerais mon steak à point.`,
        mean: `스테이크는 미디엄 레어로 해 주세요.`,
    },
    {
        sentence: `Combien ça coûte?`,
        mean: `이거 얼마에요?`,
    },
    {
        sentence: `Puis-je l'essayer?`,
        mean: `이거 입어 봐도 되요?`,
    },
    {
        sentence: `Je regarde juste, merci.`,
        mean: `그냥 둘러보는 중이에요. 감사합니다.`,
    },
    {
        sentence: `Restez sur la voie de droite.`,
        mean: `오른쪽 차선에 계세요.`,
    },
    {
        sentence: `Ton travail semble intéressant.`,
        mean: `하시는 일이 흥미롭게 들리네요.`,
    },
    {
        sentence: `Vous venez ici souvent?`,
        mean: `여기 자주 오세요?`,
    },
    {
        sentence: `Est-ce que je peux te revoir?`,
        mean: `다시 만날 수 있을까요?`,
    },
    {
        sentence: `Ravi de te rencontrer.
        `,
        mean: `만나서 반가워요.`,
    },
]

const sentence = document.querySelector('#sentence span:first-child');
const mean = document.querySelector('#sentence span:last-child');
const meanBtn = document.querySelector('#mean-btn');

function getTodaySentence() {
    const todaySentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentence.innerText = todaySentence.sentence;
    mean.innerText = todaySentence.mean;
};

getTodaySentence();

function showMean(e) {
    e.preventDefault();

    mean.classList.remove(HIDDEN_CLASSNAME);
}

meanBtn.addEventListener('click', showMean);

