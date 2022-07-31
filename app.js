const dataArray = [
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
    constructor(id, hebrew, hebrewTransliterated, arabic) {
        this.id = id;
        this.hebrew = hebrew;
        this.arabic = arabic;
        this.hebrewTransliterated = hebrewTransliterated;
    }
    setPoint(points) {
        if (points > totalSkillLevel) {
            this.points = totalSkillLevel;
        }
        else {
            this.points = points;
        }
    }
    points = 0
    lastPracticeDate = new Date()
    totalPracticeCount = 0
}



function convertDataToObjects(data) {
    return data.map((row, id) => {
        const [hebrew, hebrewTransliterated, arabic] = row;
        return new Word(id, hebrew, hebrewTransliterated, arabic);
    });
}

const range = n => Array.from(Array(n).keys())



function renderCard(card) {
    const { hebrew, hebrewTransliterated, arabic } = card;
    return `
    <div class="flip-card center">
        <div class="flip-card-inner center">
            <div class="flip-card-front center">
                <h1>${hebrew}</h1>
                <div class="skill">
                ${range(card.points).map(() => `<span class="star">*</span>`).join('')}
                ${range(totalSkillLevel - card.points).map(() => `<span class="empty-star">*</span>`).join('')}
                </div>
            </div>
            <div class="flip-card-back center">
                <h1>${arabic}</h1>
                <p>${hebrewTransliterated}</p>
            </div>
        </div>
    </div>
    `;
}

let lastWord = undefined;

function play() {
    const container = document.getElementById("container");
    if (lastWord) {
        lastWord.totalPracticeCount++;
        lastWord.lastPracticeDate = new Date();
        words.push(lastWord);
        syncWords(words)
    }
    lastWord = words.shift();
    container.innerHTML = renderCard(lastWord);
}

function syncWords(data) {
    data.forEach(word => word.setPoint(calculatePoints(word)));
    words = data.sort((a, b) => a.points - b.points);
    localStorage.setItem('words', JSON.stringify(words));
}

let words = [];

function getWords() {
    const wordsString = localStorage.getItem("words");
    if (wordsString) {
        const data = JSON.parse(wordsString);
        return data.map(word => {
            return new Word(word.id, word.hebrew, word.hebrewTransliterated, word.arabic);
        });
    } else {
        return convertDataToObjects(dataArray);
    }
}

function calculatePoints(word) {
    return Math.min(word.totalPracticeCount, totalSkillLevel);
    // const daysSinceLastPractice = (new Date() - word.lastPracticeDate) / (1000 * 60 * 60 * 24);
    // const minutesSinceLastPractice = daysSinceLastPractice * 24 * 60;
    // let calc = (totalSkillLevel - minutesSinceLastPractice) % 0.8 + (totalSkillLevel * word.totalPracticeCount) * 0.2;
    // const points = Math.round(totalSkillLevel / calc);
    // return points > 0 ? points : 0;
}

function setupApp() {
    words = getWords();
    syncWords(words);
}

window.onload = setupApp;