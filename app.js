const words = [
    {en:"State", pr:"стейт", tg:"давлат", ex:"The state has a new law."},
    {en:"Republic", pr:"рипаблик", tg:"ҷумҳурӣ", ex:"Tajikistan is a republic."},
    {en:"Law", pr:"ло", tg:"қонун", ex:"The law protects people."},
    {en:"Ministry", pr:"министри", tg:"вазорат", ex:"He works at the ministry."},
    {en:"Department", pr:"дипартмент", tg:"раёсат, шуъба", ex:"This department writes reports."},
    {en:"Office", pr:"офис", tg:"идора", ex:"My office is near the school."},
    {en:"Right", pr:"райт", tg:"ҳуқуқ, рост", ex:"Every citizen has rights."},
    {en:"Government", pr:"гавермент", tg:"ҳукумат", ex:"The government helps the city."},
    {en:"Chief", pr:"чиф", tg:"сардор", ex:"The chief reads the report."},
    {en:"Report", pr:"рипорт", tg:"гузориш", ex:"I wrote a short report."},
    {en:"Letter", pr:"леттер", tg:"мактуб", ex:"She sends a letter."},
    {en:"Application", pr:"эпликейшн", tg:"ариза", ex:"He filled in an application."},
    {en:"Father", pr:"фазер", tg:"падар", ex:"My father is kind."},
    {en:"Mother", pr:"мазер", tg:"модар", ex:"My mother cooks dinner."},
    {en:"Family", pr:"фэмили", tg:"оила", ex:"My family lives in Dushanbe."},
    {en:"Son", pr:"сан", tg:"писар", ex:"Their son studies English."},
    {en:"Daughter", pr:"дотер", tg:"духтар", ex:"Her daughter reads a book."},
    {en:"Relative", pr:"релатив", tg:"хешованд", ex:"A relative came to visit us."},
    {en:"Soldier", pr:"соулҷер", tg:"сарбоз", ex:"The soldier stands straight."},
    {en:"Colonel", pr:"кёрнел", tg:"полковник", ex:"The colonel spoke to the soldiers."},
    {en:"Rank", pr:"рэнк", tg:"рутба", ex:"His rank is high."},
    {en:"Army", pr:"арми", tg:"артиш, армия", ex:"My brother serves in the army."},
    {en:"War", pr:"вор", tg:"ҷанг", ex:"People do not want war."},
    {en:"Peace", pr:"пис", tg:"сулҳ", ex:"Peace is important for everyone."},
    {en:"Diplomacy", pr:"дипломаси", tg:"дипломатия", ex:"Diplomacy can build peace."},
    {en:"Conversation", pr:"конверсейшн", tg:"гуфтугӯ", ex:"We had a good conversation."},
    {en:"World", pr:"ворлд", tg:"ҷаҳон", ex:"The world is very big."},
    {en:"City", pr:"сити", tg:"шаҳр", ex:"This city is beautiful."},
    {en:"District", pr:"дистрикт", tg:"ноҳия", ex:"Our district has many schools."},
    {en:"Town", pr:"таун", tg:"шаҳрак", ex:"They live in a small town."},
    {en:"Avenue", pr:"эвеню", tg:"хиёбон", ex:"The avenue is clean."},
    {en:"Street", pr:"стрит", tg:"кӯча", ex:"The street is quiet today."},
    {en:"Village", pr:"вилиҷ", tg:"деҳа", ex:"My grandfather lives in a village."},
    {en:"People", pr:"пипл", tg:"одамон", ex:"People are walking in the park."},
    {en:"Citizen", pr:"ситизен", tg:"шаҳрванд", ex:"A citizen follows the law."},
    {en:"Building", pr:"билдинг", tg:"бино", ex:"That building is tall."},
    {en:"Agent", pr:"эйҷент", tg:"агент", ex:"The agent checks the document."},
    {en:"Come", pr:"кам", tg:"биё", ex:"Come here, please."},
    {en:"Go", pr:"гоу", tg:"рав", ex:"Go to the office."},
    {en:"Stand up", pr:"стэнд ап", tg:"хез, бархез", ex:"Stand up and answer."},
    {en:"Swim", pr:"суим", tg:"шино кардан", ex:"I can swim in summer."},
    {en:"Stand straight", pr:"стэнд стрейт", tg:"рост ист", ex:"Stand straight, please."},
    {en:"Do not cry", pr:"ду нот край", tg:"гиря накун", ex:"Do not cry, my friend."},
    {en:"Look", pr:"лук", tg:"нигоҳ кун", ex:"Look at the board."},
    {en:"Listen", pr:"лисн", tg:"гӯш кун", ex:"Listen to the teacher."},
    {en:"Check", pr:"чек", tg:"санҷидан", ex:"Check your answer."},
    {en:"Test", pr:"тест", tg:"имтиҳон, санҷиш", ex:"The test is easy."},
    {en:"Teacher", pr:"тичер", tg:"омӯзгор", ex:"The teacher explains the word."},
    {en:"Student", pr:"стюдент", tg:"донишҷӯ", ex:"The student writes the answer."},
    {en:"Book", pr:"бук", tg:"китоб", ex:"This book is useful."},
    {en:"Notebook", pr:"ноутбук", tg:"дафтар", ex:"Open your notebook."},
    {en:"Pen", pr:"пен", tg:"қалам", ex:"I write with a pen."},
    {en:"Read", pr:"рид", tg:"хондан", ex:"Read the sentence aloud."},
    {en:"Write", pr:"райт", tg:"навиштан", ex:"Write the English word."},
    {en:"Learn", pr:"лёрн", tg:"омӯхтан", ex:"We learn five words today."},
    {en:"Easy", pr:"изи", tg:"осон", ex:"This exercise is easy."},
    {en:"Answer", pr:"ансер", tg:"ҷавоб", ex:"Choose the correct answer."},
    {en:"Question", pr:"квесчн", tg:"савол", ex:"This question is simple."},
    {en:"Correct", pr:"корект", tg:"дуруст", ex:"Your answer is correct."},
    {en:"Mistake", pr:"мистейк", tg:"хато", ex:"Find your mistake and fix it."}
];

const readingTexts = [
    "Tajikistan is a republic with its own law. Every citizen has rights, and the government protects the people. My father works at the ministry, and our family lives in Dushanbe.",
    "People live in cities, towns, and villages. A citizen follows the law and respects the peace. The agent checks the building while soldiers stand straight.",
    "The teacher explains a new lesson to the student. Open your notebook and write with a pen. Read the question carefully and give the correct answer."
];

const pageSize = 20;
const pages = Array.from({ length: Math.ceil(words.length / pageSize) }, (_, index) => ({
    title: `Саҳифаи ${index + 1}`,
    subtitle: index === 0 ? "Давлат, оила ва идора" : index === 1 ? "Ҷомеа, шаҳр ва амрҳо" : "Дарс, дафтар ва омӯзиш",
    items: words.slice(index * pageSize, (index + 1) * pageSize)
}));

const sentenceTasks = [
    [
        {tg:"Сардор гузоришро мехонад.", en:["The", "chief", "reads", "the", "report"]},
        {tg:"Оилаи ман мактуб менависад.", en:["My", "family", "writes", "a", "letter"]},
        {tg:"Ҳукумат қонунро ҳимоя мекунад.", en:["The", "government", "protects", "the", "law"]}
    ],
    [
        {tg:"Шаҳрванд дар шаҳр зиндагӣ мекунад.", en:["The", "citizen", "lives", "in", "the", "city"]},
        {tg:"Одамон ба деҳа меоянд.", en:["People", "come", "to", "the", "village"]},
        {tg:"Агент биноро месанҷад.", en:["The", "agent", "checks", "the", "building"]}
    ],
    [
        {tg:"Донишҷӯ ҷавоби дурустро менависад.", en:["The", "student", "writes", "the", "correct", "answer"]},
        {tg:"Омӯзгор саволи осон медиҳад.", en:["The", "teacher", "asks", "an", "easy", "question"]},
        {tg:"Дафтарро кушо ва калимаро навис.", en:["Open", "the", "notebook", "and", "write", "the", "word"]}
    ]
];

const state = {
    page: 0,
    round: 1,
    unlocked: 1,
    selected: {},
    completed: {},
    quiz: [],
    write: [],
    sentenceTask: null,
    sentenceBank: [],
    sentenceAnswer: []
};

const pageTabs = document.getElementById("pageTabs");
const wordRows = document.getElementById("wordRows");
const searchInput = document.getElementById("searchInput");
const resultBox = document.getElementById("resultBox");
const celebration = document.getElementById("celebration");

function shuffle(list) {
    return [...list].sort(() => Math.random() - 0.5);
}

function compactEnglish(text) {
    return text.trim().replace(/\s+/g, " ");
}

function getPageItems() {
    return pages[state.page].items;
}

function renderTabs() {
    pageTabs.innerHTML = pages.map((page, index) => `
        <button class="page-tab" aria-current="${index === state.page}" onclick="changePage(${index})">
            ${page.title}
        </button>
    `).join("");
}

function renderPage() {
    const page = pages[state.page];
    document.getElementById("pageTitle").textContent = page.title;
    document.getElementById("pageSubtitle").textContent = page.subtitle;
    document.getElementById("wordCount").textContent = `${page.items.length} калима`;
    document.getElementById("pageScore").textContent = page.title;
    document.getElementById("tipNote").innerHTML = `<strong>Ёдгирӣ:</strong> аввал калимаро хонед, баъд талафуз ва мисолро бо овоз такрор кунед.`;
    
    const readingBox = document.getElementById("readingTextContent");
    if (readingBox) {
        readingBox.textContent = readingTexts[state.page] || readingTexts[0];
    }

    searchInput.value = "";
    renderRows(page.items);
    resetExercises();
    renderTabs();
    updateProgress();
}

function renderRows(items) {
    wordRows.innerHTML = items.map((item, index) => `
        <tr>
            <td class="num">${index + 1}</td>
            <td class="eng">${item.en}<button class="speak" onclick="speak('${item.en.replace(/'/g, "\\'")}')" title="Шунидани талафуз">▶</button></td>
            <td class="pron">${item.pr}</td>
            <td>${item.tg}</td>
            <td class="example">${item.ex}</td>
        </tr>
    `).join("");
}

function resetExercises() {
    state.round = 1;
    state.unlocked = 1;
    state.selected = {};
    state.quiz = buildQuiz();
    state.write = shuffle(getPageItems()).slice(0, 5);
    state.sentenceTask = shuffle(sentenceTasks[state.page] || sentenceTasks[0])[0];
    state.sentenceBank = shuffle(state.sentenceTask.en.map((text, index) => ({ id: `word_${state.page}_${index}`, text })));
    state.sentenceAnswer = [];
    resultBox.className = "result";
    resultBox.textContent = "";
    celebration.className = "celebration";
    renderRounds();
    renderQuiz();
    renderWrite();
    renderSentence();
    showRound(1);
}

function buildQuiz() {
    return shuffle(getPageItems()).slice(0, 5).map((item) => {
        const wrong = shuffle(getPageItems().filter((word) => word.en !== item.en)).slice(0, 3).map((word) => word.en);
        return { item, choices: shuffle([item.en, ...wrong]) };
    });
}

function renderRounds() {
    document.getElementById("rounds").innerHTML = [1, 2, 3].map((round) => {
        const cls = round === state.round ? "active" : round <= state.unlocked ? "open" : "";
        return `<span class="round-pill ${cls}">Даври ${round}</span>`;
    }).join("");
}

function renderQuiz() {
    document.getElementById("quizBox").innerHTML = state.quiz.map((q, index) => `
        <div class="question">
            <strong>${index + 1}. Тарҷумаи “${q.item.tg}” кадом аст?</strong>
            <div class="choices">
                ${q.choices.map((choice) => `
                    <button class="choice-btn" data-question="${index}" data-choice="${choice}" onclick="selectChoice(${index}, '${choice.replace(/'/g, "\\'")}')">${choice}</button>
                `).join("")}
            </div>
        </div>
    `).join("");
}

function renderWrite() {
    document.getElementById("writeBox").innerHTML = state.write.map((item, index) => `
        <div class="question">
            <strong>${index + 1}. “${item.tg}” ба англисӣ чӣ мешавад?</strong>
            <input class="write-input" id="write${index}" type="text" placeholder="English word">
            <div class="correction" id="correction${index}"></div>
        </div>
    `).join("");
}

function renderSentence() {
    const usedIds = state.sentenceAnswer.map((item) => item.id);
    document.getElementById("sentenceTaskBox").innerHTML = `
        <p class="sentence-target"><strong>Ҷумлаи тоҷикӣ:</strong> ${state.sentenceTask.tg}</p>
        <div class="word-bank">
            ${state.sentenceBank.map((item) => `
                <button class="word-chip ${usedIds.includes(item.id) ? "used" : ""}" onclick="placeWord('${item.id}')" ${usedIds.includes(item.id) ? "disabled" : ""}>${item.text}</button>
            `).join("")}
        </div>
        <div class="answer-line ${state.sentenceAnswer.length ? "" : "empty"}">
            ${state.sentenceAnswer.map((item) => `
                <button class="word-chip placed-chip" onclick="removeWord('${item.id}')" title="Баргардондан">${item.text}</button>
            `).join("")}
        </div>
    `;
}

function selectChoice(index, choice) {
    state.selected[index] = choice;
    document.querySelectorAll(`[data-question="${index}"]`).forEach((btn) => {
        btn.classList.toggle("selected", btn.dataset.choice === choice);
    });
}

function placeWord(id) {
    const item = state.sentenceBank.find((word) => word.id === id);
    const alreadyUsed = state.sentenceAnswer.some((word) => word.id === id);
    if (!item || alreadyUsed) return;
    state.sentenceAnswer.push(item);
    renderSentence();
}

function removeWord(id) {
    state.sentenceAnswer = state.sentenceAnswer.filter((word) => word.id !== id);
    renderSentence();
}

function showRound(round) {
    if (round > state.unlocked) return;
    state.round = round;
    document.querySelectorAll(".challenge").forEach((node) => node.classList.remove("active"));
    document.getElementById(`round${round}`).classList.add("active");
    renderRounds();
}

function checkCurrentRound() {
    if (state.round === 1) checkQuiz();
    if (state.round === 2) checkWrite();
    if (state.round === 3) checkSentence();
    updateProgress();
}

function checkStudentName() {
    const input = document.getElementById("studentNameInput");
    const name = input ? input.value.trim() : "";
    if (!name) {
        alert("⚠️ Лутфан аввал дар боло ном ва насаби худро нависед!");
        if (input) input.focus();
        return null;
    }
    return name;
}

function passRound(percent, nextRound, successText) {
    const needed = state.round === 2 ? 70 : state.round === 3 ? 100 : 80;
    const good = percent >= needed;
    resultBox.className = `result ${good ? "good" : "try"}`;
    resultBox.innerHTML = good
        ? `${successText}<br>Натиҷа: ${percent}%`
        : `Ҳоло каме такрор лозим аст. Натиҷа: ${percent}%. Барои гузаштан ҳадди лозима ${needed}% аст.`;

    if (good && nextRound) {
        state.unlocked = Math.max(state.unlocked, nextRound);
        setTimeout(() => showRound(nextRound), 650);
    }

    if (state.round === 3 && good) {
        state.completed[state.page] = true;
        celebration.className = "celebration show";
        celebration.innerHTML = "Офарин! Ин саҳифа хуб аз худ шуд.";

        const studentName = checkStudentName() || "Аноним / Номаълум";
        sendTestScoreOnly(studentName, `${percent}%`, pages[state.page].title);
    }
}

function checkQuiz() {
    let score = 0;
    state.quiz.forEach((q, index) => {
        if (state.selected[index] === q.item.en) score++;
    });
    passRound(Math.round(score / state.quiz.length * 100), 2, "Даври 2 кушода шуд: акнун худатон калимаро нависед.");
}

function checkWrite() {
    let score = 0;
    let hasWrong = false;
    state.write.forEach((item, index) => {
        const input = document.getElementById(`write${index}`);
        const correction = document.getElementById(`correction${index}`);
        
        const ok = compactEnglish(input.value).toLowerCase() === item.en.toLowerCase();
        
        input.style.borderColor = ok ? "#20a464" : "#ef4444";
        correction.classList.toggle("show", !ok);
        correction.textContent = ok ? "" : `Ҷавоби дуруст: ${item.en}`;
        if (ok) score++; else hasWrong = true;
    });
    const percent = Math.round(score / state.write.length * 100);

    if (hasWrong) {
        document.querySelectorAll("#writeBox .write-input").forEach((input) => input.disabled = true);
    }

    passRound(percent, 3, "Даври 3 кушода шуд: акнун калимаҳоро бо тартиби дуруст гузоред.");

    if (hasWrong && percent < 70) {
        resultBox.innerHTML += "<br>Ҷавобҳои дуруст нишон дода шуданд. Барои супоридани дубора “Саволҳои нав”-ро зер кунед.";
    }
}

function checkSentence() {
    const expected = state.sentenceTask.en;
    const answer = state.sentenceAnswer.map((item) => item.text);
    const rightPlaces = expected.filter((word, index) => answer[index] === word).length;
    const percent = answer.length === expected.length && rightPlaces === expected.length
        ? 100
        : Math.round(rightPlaces / expected.length * 100);
    passRound(percent, null, "Офарин! Ҷумла пурра дуруст сохта шуд.");
}

function updateProgress() {
    const current = state.completed[state.page] ? 100 : Math.round((state.unlocked - 1) / 3 * 100);
    document.getElementById("progressLabel").textContent = `Пешрафт: ${current}%`;
    document.getElementById("progressMeter").style.width = `${current}%`;
}

function changePage(index) {
    state.page = index;
    renderPage();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function speak(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = .88;
    window.speechSynthesis.speak(utterance);
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = getPageItems().filter((item) =>
        item.en.toLowerCase().includes(query) ||
        item.tg.toLowerCase().includes(query) ||
        item.pr.toLowerCase().includes(query)
    );
    renderRows(filtered);
});

document.getElementById("checkBtn").addEventListener("click", checkCurrentRound);
document.getElementById("newBtn").addEventListener("click", resetExercises);
document.getElementById("exerciseJump").addEventListener("click", () => {
    document.getElementById("exerciseSection").scrollIntoView({ behavior: "smooth" });
});

// ИСТИНОДИ НАВИ СКРИПТИ ГУГЛ
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzEK-3rDjlFnSONbDBX-WR2p5JYR0uV3VZr0iLjsyFidk8JWe_GQdP0MrTe_plQTTyU/exec';

// 1. ФИРИСТОДАНИ ТЕСТ
function sendTestScoreOnly(studentName, scoreText, pageTitle) {
    const payload = {
        action: "send_score",
        name: studentName,
        score: scoreText,
        readingTitle: pageTitle
    };

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
    })
    .then(() => console.log("Тест фиристода шуд!"))
    .catch(err => console.error("Хатогӣ:", err));
}

// 2. САБТИ ОВОЗ ВА ФИРИСТОДАН
let mediaRecorder = null;
let audioChunks = [];
let latestBase64Audio = null;

const startRecBtn = document.getElementById("startRecBtn");
const stopRecBtn = document.getElementById("stopRecBtn");
const recStatus = document.getElementById("recStatus");
const audioPreview = document.getElementById("audioPreview");
const sendVoiceBtn = document.getElementById("sendVoiceBtn");

if (startRecBtn) {
    startRecBtn.addEventListener("click", async () => {
        if (!checkStudentName()) return;
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : '';
            mediaRecorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
            audioChunks = [];

            mediaRecorder.ondataavailable = e => {
                if (e.data.size > 0) audioChunks.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const blobMime = mediaRecorder.mimeType || 'audio/webm';
                const audioBlob = new Blob(audioChunks, { type: blobMime });
                
                audioPreview.src = URL.createObjectURL(audioBlob);
                audioPreview.style.display = "block";

                if (recStatus) {
                    recStatus.textContent = "⏳ Овоз омода шуда истодааст...";
                    recStatus.style.color = "#d97706";
                }
                if (sendVoiceBtn) sendVoiceBtn.style.display = "none";

                const reader = new FileReader();
                reader.readAsDataURL(audioBlob);
                reader.onloadend = function () {
                    latestBase64Audio = reader.result.split(',')[1];
                    if (recStatus) {
                        recStatus.textContent = "✅ Овоз сабт шуд! Метавонед гӯш кунед ва фиристед.";
                        recStatus.style.color = "#166534";
                    }
                    if (sendVoiceBtn) {
                        sendVoiceBtn.style.display = "block";
                        sendVoiceBtn.disabled = false;
                    }
                };
            };

            mediaRecorder.start();
            startRecBtn.disabled = true;
            stopRecBtn.disabled = false;
            if (sendVoiceBtn) sendVoiceBtn.style.display = "none";
            if (recStatus) {
                recStatus.textContent = "🔴 Сабти овоз рафта истодааст...";
                recStatus.style.color = "#ef4444";
            }
        } catch (err) {
            alert("Лутфан ба микрофон иҷозат диҳед!");
        }
    });

    stopRecBtn.addEventListener("click", () => {
        if (mediaRecorder && mediaRecorder.state !== "inactive") {
            mediaRecorder.stop();
            mediaRecorder.stream.getTracks().forEach(t => t.stop());
            startRecBtn.disabled = false;
            stopRecBtn.disabled = true;
        }
    });
}

if (sendVoiceBtn) {
    sendVoiceBtn.addEventListener("click", () => {
        const studentName = checkStudentName();
        if (!studentName || !latestBase64Audio) {
            alert("⚠️ Лутфан аввал овозро сабт кунед!");
            return;
        }

        if (recStatus) {
            recStatus.textContent = "⏳ Овоз ва маълумот фиристода шуда истодааст...";
            recStatus.style.color = "#d97706";
        }
        sendVoiceBtn.disabled = true;

        const payload = {
            action: "send_voice",
            name: studentName,
            readingTitle: pages[state.page].title,
            audioBase64: latestBase64Audio
        };

        fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
        })
        .then(() => {
            if (recStatus) {
                recStatus.textContent = "🎉 Овоз фиристода шуд ва ба Google Sheets рафт!";
                recStatus.style.color = "#15803d";
            }
            sendVoiceBtn.style.display = "none";
            latestBase64Audio = null;
        })
        .catch(err => {
            console.error("Хатогӣ:", err);
            if (recStatus) {
                recStatus.textContent = "❌ Хатогӣ ҳангоми фиристодани овоз!";
                recStatus.style.color = "#dc2626";
            }
            sendVoiceBtn.disabled = false;
        });
    });
}

renderPage();
