const dataArray: string[][] = [
    ["איך", "כִּיף", "كيف"],
    ["איפה", "וֵין", "وِين"],
    ["מתי", "וֵינתַא / אֵימתַא", "وِينْتى / إِيمْتى"],
    ["כמה", "כַּם, אַכַּאם, אַכַּם", "كَم، أَكام، أَكَم"],
    ["למה", "לֵיש", "لِيش"],
    ["מי", "מִין", "مين"],
    ["איזה", "אַיّ", "أَيّ"],
    ["לאן", "לַוֵין", "لَوِين"],
    ["האם", "הַל", "هل"],
    ["כן", "אַיוַה", "أَيْوة"],
    ["לא", "לַא", "لا"],
    ["אין", "פִשّ, מַפִשّ", "فِشّ، مَفِشّ"],
    ["יש לי", "עִנדִי ", "عِنْدي"],
    ["יאללה", "יאללה", "يلّا"],
    ["בסדר", "מַאשִי, תַמַאם", "ماشي، تَمام"],
    ["לא אפשרי", "מִש מֻמְכֵּן", "مش ممكن"],
    ["אפשרי", "מֻמְכֵּן", "ممكن"],
    ["אני", "אַנַא", "أَنا"],
    ["את", "אִנתִ", "إنْتِ"],
    ["אתה", "אִנתִ", "إنْتِ"],
    ["אתם", "אִנתוּ", "إنْتو"],
    ["אתן", "אִנתֶן", "إنْتِن"],
    ["אנחנו", "אִחנַא", "إحْنا"],
    ["הוא", "הווא", "هُوَّ"],
    ["היא", "הייא", "هِيَّ"],
    ["הם", "הֻמֶّ", "هُمِّ"],
    ["הן", "הִנֶّי", "هِنِّ"],
    ["אבא", "אבו", "ابو"],
    ["אמא", "אִםﬞ", "إمّ"],
    ["אח", "אַח׳", "أخ"],
    ["אחות", "אֻחְ׳ת", "أخت"],
    ["בן", "אִבְּן", "إِبْن"],
    ["בת", "בִּנְת", "بِنْت"],
    ["ילדים", "וְלַאד", "ولاد"],
    ["דוד מצד האמא", "חַ׳אל", "خَال"],
    ["דוד מצד האבא", "עַםﬞ", "عَمّ"],
    ["סבא", "סִיד", "سيد"],
    ["סבתא", "סִתﬞ", "ستّ"],
    ["אישה", "מַרַה", "مَرَة"],
    ["כי", "לִאַנّוֹ", "لِأَنُّه"],
    ["ב..", "פִי", "في"],
    ["אם", "אִדַ׳א", "إِذَا"],
    ["לפני", "אִלַﬞא", "إِلَّا"],
    ["בגלל", "עַשַאן", "عَشان"],
    ["אבל", "בַּסّ", "بَسّ"],
    ["גם", "כַּמַאן", "كَمان"],
    ["או", "האוו", "أَوْ"],
    ["או (השוואה)", "וִלַﬞא", "ولّا"],
    ["אלא", "אִלַﬞא", "إِلَّا"],
    ["לדוגמא", "מַתַ׳לַן", "مثلاً"],
    ["כדי", "עַשַאן", "عَشان"],
    ["אפילו", "חַתַّא", "حَتّى"],
    ["אל\\ל..", "עַלַא", "على"],
    ["אחרי", "בַּעְד", "بعد"],
    ["שניה", "תַ׳אנְיֵה", "ثَانْيِة"],
    ["דקה", "דַקִיקַה", "دَقِيقَة"],
    ["שעה", "סַאעַה", "سَاعَة"],
    ["יום", "יוֹם", "يُوم"],
    ["שבוע", "אֻסְבּוּע", "أسبوع"],
    ["שנה", "סַנֵה", "سَنِة"],
    ["היום", "אֵלִיוֹם", "اليوم"],
    ["מחר", "בֻּכְּרַא", "بُكْرَا"],
    ["אתמול", "מבַּארֶח", "مْبارِح"]
];

const totalSkillLevel = 4;

class Word {
    id!: number;
    hebrew!: string;
    arabic!: string;
    hebrewTransliterated!: string;

    constructor(fields: Partial<Word>) {
        Object.assign(this, fields);
    }
    setPoint(points: number) {
        if (points > totalSkillLevel) {
            this.points = totalSkillLevel;
        }
        else if (points < 0) {
            this.points = 0;
        }
        else {
            this.points = points;
        }
    }
    points = 0
    lastPracticeDate = new Date()
    totalPracticeCount = 0
}



function convertDataToObjects(data: string[][]) {
    return data.map((row, id) => {
        const [hebrew, hebrewTransliterated, arabic] = row;
        return new Word({ id, hebrew, hebrewTransliterated, arabic });
    });
}

const range = (n: number) => Array.from(Array(n).keys())

function pickRandomWords(numberOfWords: number) {

    const randomIndexes = new Set<number>();
    while (randomIndexes.size < numberOfWords) {
        randomIndexes.add(Math.floor(Math.random() * words.length));
    }
    return [...randomIndexes].map(i => words[i]);
}

function renderCard(word: Word) {

    const answers = getAnswers(word);
    const randomLanguage = Math.floor(Math.random() * 2);
    const mainLang = randomLanguage === 0 ? 'hebrew' : 'arabic';
    const answersLang = randomLanguage === 0 ? 'arabic' : 'hebrew';

    return `
    <div class="card-container center">
        <div class="flip-card center">
            <div class="flip-card-inner center">
                <div class="flip-card-front center">
                    <h1>${word[mainLang]}</h1>
                    <div class="skill">
                    ${range(word.points).map(() => `<span class="star">*</span>`).join('')}
                    ${range(totalSkillLevel - word.points).map(() => `<span class="empty-star">*</span>`).join('')}
                    </div>
                </div>
                <div class="flip-card-back center">
                    <h1>${word[answersLang]}</h1>
                    <h1>${word[mainLang]}</h1>
                    <p>${word.hebrewTransliterated}</p>
                </div>
            </div>
        </div>
        <div class="word-area">

        ${answers.map((answerWord) => `<button id=ans-${answerWord.id} class="answer-btn" onclick="onAnswer(${answerWord.id})">${answerWord[answersLang]}</button>`).join('')}
        </div>
    </div>
    `;
}

function onAnswer(id: number) {
    if (!lastWord || isCorectClicked) return;
    if (lastWord.id === id) {
        document.getElementById(`ans-${id}`)?.classList.add('correct');
        lastWord.totalPracticeCount++;
        lastWord.lastPracticeDate = new Date();
        const cardElement = document.getElementsByClassName('flip-card')[0];
        if (!cardElement) throw new Error('card element not found');
        cardElement.classList.add("to-flip");
        isCorectClicked = true;

    }
    else {
        document.getElementById(`ans-${id}`)?.classList.add('wrong');
        lastWord.totalPracticeCount--;
    }

}

let lastWord: Word | undefined = undefined;
let isCorectClicked = false;

function getAnswers(word: Word) {
    const answers = [...pickRandomWords(3), word];
    // mix the answers
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
}

function play() {
    isCorectClicked = false;
    const container = document.getElementById("container");
    if (!container) return;
    if (lastWord) {
        lastWord.totalPracticeCount++;
        lastWord.lastPracticeDate = new Date();
        words.push(lastWord);
        syncWords(words)
    }
    lastWord = words.shift();
    if (!lastWord) return;
    container.innerHTML = renderCard(lastWord);
}

function syncWords(data: Word[]) {
    data.forEach(word => word.setPoint(calculatePoints(word)));
    words = data.sort((a, b) => a.points - b.points);
    localStorage.setItem('words', JSON.stringify(words));
}

let words: Word[] = [];

function getWords() {
    const wordsString = localStorage.getItem("words");
    if (wordsString) {
        const data = JSON.parse(wordsString);
        return data.map((word: Word) => {
            return new Word(word);
        });
    } else {
        return convertDataToObjects(dataArray);
    }
}

function calculatePoints(word: Word) {
    const getPrecentage = (num: number, total: number) => Math.floor((num / total) * 100);
    const calculateFirstTwoStartsByMintuesSinceLastPractice = (date: Date) => {
        const maxNumnerOfMinutes = 10;
        const minutesSinceLastPractice = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60));

        if (minutesSinceLastPractice > maxNumnerOfMinutes) {
            return 0;
        }
        else {
            const precentage = getPrecentage(minutesSinceLastPractice, maxNumnerOfMinutes);
            if (precentage > 50) {
                return 1;
            }
            else {
                return 2;
            }
        }
    }

    const calculateLastTwoStartsByAmountOfPractice = () => {
        return Math.min(Math.round(word.totalPracticeCount / 2), 2);
    }


    return calculateFirstTwoStartsByMintuesSinceLastPractice(new Date(word.lastPracticeDate)) + calculateLastTwoStartsByAmountOfPractice();

}

function setupApp() {
    words = getWords();
    syncWords(words);
}

window.onload = setupApp;