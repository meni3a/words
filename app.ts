const dataArray: string[][] = [
    ["איך", "כִּיף", "كيف", "f1492943198336x339902958134189250/U1_Milon_2.mp3"],
    ["איפה", "וֵין", "وِين", "f1492943187830x667188051389530200/U1_Milon_3.mp3"],
    ["מתי", "וֵינתַא / אֵימתַא", "وِينْتى / إِيمْتى", "f1493012160286x932953111827373600/U3_Milon_120.mp3"],
    ["כמה (how much)", "כַּם, אַכַּאם, אַכַּם", "كَم، أَكام، أَكَم", "f1493396340189x754757807822898000/U9_milon_397.mp3"],
    ["למה", "לֵיש", "لِيش", "f1493011790867x885510609950870200/U3_Milon_115.mp3"],
    ["מי", "מִין", "مين", "f1492942875283x936175890965387300/U1_Milon_25.mp3"],
    ["איזה", "אַיّ", "أَيّ", "f1492943210926x643055182183161300/U1_Milon_1.mp3"],
    ["לאן", "לַוֵין", "لَوِين", "f1493011757557x427498920587822800/U3_Milon_113.mp3"],
    ["האם", "הַל", "هل"],
    ["כן", "אַיוַה", "أَيْوة", "f1492942913270x742871407652273800/U1_Milon_23.mp3"],
    ["לא", "לַא", "لا", "f1492942898714x460073119029402700/U1_Milon_24.mp3"],
    ["אין", "פִשّ, מַפִשّ", "فِشّ، مَفِشّ", "f1492979409938x449410450877621760/U2_Milon_47.mp3"],
    ["יש לי", "עִנדִי ", "عِنْدي", "f1492979786266x992548565380275200/U2_Milon_68.mp3"],
    ["יאללה", "יאללה", "يلّا"],
    ["בסדר", "מַאשִי, תַמַאם", "ماشي، تَمام", "f1492979535915x350626934552565250/U2_Milon_55.mp3"],
    ["לא אפשרי", "מִש מֻמְכֵּן", "مش ممكن"],
    ["אפשרי", "מֻמְכֵּן", "ممكن", "f1493409663723x335150961065664900/U10_milon_420.mp3"],
    ["אני", "אַנַא", "أَنا", "f1492943163168x813440178288146800/U1_Milon_5.mp3"],
    ["את", "אִנתִ", "إنْتِ", "f1492943152334x153234329074621220/U1_Milon_6.mp3"],
    ["אתה", "אִנתִ", "إنْتِ"],
    ["אתם", "אִנתוּ", "إنْتو", "f1492943119886x422576670767739400/U1_Milon_8.mp3"],
    ["אתן", "אִנתֶן", "إنْتِن", "f1492943107248x810886760242283400/U1_Milon_9.mp3"],
    ["אנחנו", "אִחנַא", "إحْنا", "f1492943174774x572442400269210400/U1_Milon_4.mp3"],
    ["הוא", "הווא", "هُوَّ", "f1492943014051x625990973785519600/U1_Milon_16.mp3"],
    ["היא", "הייא", "هِيَّ", "f1492943001899x999446003930643200/U1_Milon_17.mp3"],
    ["הם", "הֻמֶّ", "هُمِّ", "f1492942990108x852508905343711400/U1_Milon_18.mp3"],
    ["הן", "הִנֶّי", "هِنِّ", "f1492942977542x769368473440408700/U1_Milon_19.mp3"],
    ["אבא", "אבו", "ابو", "f1492979229436x960712481057271400/U2_Milon_42.mp3"],
    ["אמא", "אִםﬞ", "إمّ", "f1492979423862x572760109789669500/U2_Milon_48.mp3"],
    ["אח", "אַח'וּ", "أَخو", "f1493140888664x519615309778600960/U5_Milon_170.mp3"],
    ["אחות", "אֻחְ׳ת", "أخت", "f1493140888664x519615309778600960/U5_Milon_170.mp3"],
    ["בן", "אִבְּן", "إِبْن", "f1492979522368x841792689403519000/U2_Milon_54.mp3"],
    ["בת", "בִּנְת", "بِنْت", "f1492979577513x790522691560909200/U2_Milon_57.mp3"],
    ["ילדים", "וְלַאד", "ولاد", "f1492979706031x799107669619843300/U2_Milon_64.mp3"],
    ["דוד מצד האמא", "חַ׳אל", "خَال"],
    ["דוד מצד האבא", "עַםﬞ", "عَمّ"],
    ["סבא", "סִיד", "سيد", "f1493141300127x309150260174647000/U5_Milon_200.mp3"],
    ["סבתא", "סִתﬞ", "ستّ", "f1493141318078x629026885377243100/U5_Milon_201.mp3"],
    ["אשה (אשת איש)", "מַרַה", "مَرَة"],
    ["כי", "לִאַנّוֹ", "لِأَنُّه"],
    ["ב..", "פִי", "في"],
    ["אם", "אִדַ׳א", "إِذَا"],
    ["לפני", "אִלַﬞא", "إِلَّا"],
    ["בגלל", "עַשַאן", "عَشان", "f1498307093512x901914935791865000/Uex1_Milon_981.mp3"],
    ["אבל/רק", "בַּסّ", "بَسّ", "f1493140295019x959545366931706700/U4_Milon_132.mp3"],
    ["גם", "כַּמַאן", "كَمان", "f1492943051919x805305170128122000/U1_Milon_13.mp3"],
    ["או", "האוו", "أَوْ", "f1493396772762x996301860548555900/U10_milon_415.mp3"],
    ["או (השוואה)", "וִלַﬞא", "ولّا"],
    ["אלא", "אִלַﬞא", "إِلَّا"],
    ["לדוגמא", "מַתַ׳לַן", "مثلاً"],
    ["כדי", "עַשַאן", "عَشان", "f1498423986834x841086538275703800/Uex1_Milon_1188.mp3"],
    ["אפילו", "חַתַّא", "حَتّى", "f1498306699562x382187491515651300/Uex1_Milon_963.mp3"],
    ["אל\\ל..", "עַלַא", "على"],
    ["אחרי", "בַּעֶד-מַא", "بَعِد-ما", "f1493409633880x621898252051323600/U10_milon_418.mp3"],
    ["שניה", "תַ׳אנְיֵה", "ثَانْيِة"],
    ["דקה", "דַקִיקַה", "دَقِيقَة", "f1493394699766x623942659702152100/U8_milon_321.mp3"],
    ["שעה", "סַאעַה", "سَاعَة", "f1493382560409x530039839912205950/U10_milon_454.mp3"],
    ["יום", "יוֹם", "يُوم"],
    ["שבוע", "אֻסְבּוּע", "أسبوع", "f1493146214003x928177577909082100/U6_Milon_266.mp3"],
    ["שנה", "סַנֵה", "سَنِة", "f1492980085755x258619767380878340/U2_Milon_86.mp3"],
    ["היום", "אֵלִיוֹם", "اليوم"],
    ["מחר", "בֻּכְּרַא", "بُكْرَا", "f1493012146354x780433672713115800/U3_Milon_119.mp3"],
    ["אתמול", "מבַּארֶח", "مْبارِح", "f1493140314507x384373147971928100/U4_Milon_133.mp3"],
    ["שם","הֻנַאכּ","هُنَاك"  ],
    ["פה","הוֹן","هُون"  ],
    ["מעל","פוֹק","فُوق"  ],
    ["מתחת","תַחְת","تَحْت"  ],
    ["חזק","קַוִי","قَوِي"  ],
    ["חלש","צְ׳עִיף","ضعيف"  ],
    ["מהר","בְּסֻרְעַה","بْسُرْعَة"  ],
    ["לאט","שְׁוַיﬞ שְׁוַיﬞ","شوي شوي"  ],
    ["קרוב","קַרִיבּ","قريب"  ],
    ["רחוק","בְּעִיד","بعيد"  ],
    ["נמוך (דומם)","וַאטִי","واطي"  ],
    ["גבוה (דומם)","עַאלִי","عالي"  ],
    ["הרבה / מאוד","כְּתִיר","كْثِير"  ],
    ["קצת","שְוַיﬞ","شويّ"  ],
    ["גדול","כְּבִּיר","كْبِير"  ],
    ["קטן","זְרעִ׳יר","صْغِير"  ],
    ["קודם כל / דבר ראשון","אַוַﬞל אִשִי","أوّل إشي"  ],
    ["אחר כך","בַּעְדֵין","بعدين"  ],
    ["מאחורי, אחרי","וַרַא","ورا"  ],
    ["קדימה","קֻדַﬞאם","قدّام"  ],
    ["כחול","אַזרַק","أَزْرَق"  ],
    ["אדום","אַחמַר","أَحْمَر"  ],
    ["צהוב","אַסֿפַר","أَصْفَر"  ],
    ["ירוק","אַח'דַֿר","أَخْضَر"  ],
    ["חום","חַרַארַה","حَرَارة"  ],
    ["זהב","דַ'הַבּ","ذَهَب"  ],
    ["לבן","אַבּיַדֿ","أَبْيَض"  ],
    ["שחור","אַסוַד","أَسْوَد"  ],
    ["עט","קַלַם","قَلَم"  ],
    ["דף","וַרַקַה","وَرَقة"  ],
    ["מחשב","חַאסוּבּ","حاسوب"  ],
    ["טלוויזיה","תִלפִזיוֹן","تِلْفِزيُون"  ],
    ["מים","מַיֶّה","مَيِّة"  ],
    ["בקבוק","קִנִّיֶה","قِنِّيِة"  ],
    ["כוס","כֻּבַּّאיֶה","كُبّايِة"  ],
    ["אוכל","אַכֶּל","أَكِل"  ],
    ["כיסא","כֻּרסִי","كُرْسي"  ],
    ["שולחן","טַאולֶה","طاوْلِة"  ],
    ["מיטה","תַחֶ'ת","تَخِت"  ],
    ["מגבת","מַנשַפֶה","مَنْشَفِة"  ],
    ["משקפיים","נַזַֿّארַאת","نَظّارات"  ],
    ["חולצה","בּלוּזֶה","بْلوزِة"  ],
    ["מכנסיים","בַּנטַלוֹן","بَنْطَلُون"  ],
    ["נעליים","כֻּנְדַרַה","كُنْدَرة"  ],
    ["שעון","סַאעַה","ساعة"  ],
    ["ארנק","גֻ'זְדַאן","جُزْدان"  ],
    ["סכין","סִכִּﬞינֵה","سِكِّينِة"  ],
    ["מזלג","שׁוֹכֵּה","شوكة"  ],
    ["כפית","זַלַפֵה","زَلَفِة"  ],
    ["צלחת","צַחְן","صَحْن"  ],
    ["בית","בֵּית","بِيت"  ],
    ["רחוב","שַארֵע","شارع"  ],
    ["שכונה","חַארַה","حَارَة"  ],
    ["עיר","מַדִינֵה","مَدِينِة"  ],
    ["מדינה","דוֹלֵה","دُولِة"  ],
    ["אזור","נַחוּ","نَحُو"  ],
    ["יבשת","קַארַّה","قَارَّة"  ],
    ["עולם","עַאלַם","عَالَم"  ],
    ["בית קפה","קַהְוֵה","قَهْوِة"  ],
    ["מסעדה","מַטְעַם","مَطْعَم"  ],
    ["שוק","סוּק","سُوق"  ],
    ["בית מלון","פֻנְדֻק","فُنْدُق"  ],
    ["שירותים/מקלחת","חַמַّאם","حَمَّام"  ],
    ["סופרמרקט","סוּבֵּרְמַרְכֵּת","سوبرمركت"  ],
    ["בית חולים","מֻסְתַשְפַא","مستشفى"  ],
    ["תחנת משטרה","מַחְ׳פַר","مخفر"  ]
].sort(() => Math.random() - 0.5);

const config = {
    totalSkillLevel: 4,
    maxNumnerOfMinutes: 1440
}


class Word {
    id!: number;
    hebrew!: string;
    arabic!: string;
    hebrewTransliterated!: string;
    audio!: string;
    points = 0
    lastPracticeDate = new Date()
    totalPracticeCount = 0

    constructor(fields: Partial<Word>) {
        Object.assign(this, fields);
    }
    setPoint(points: number) {
        if (points > config.totalSkillLevel) {
            this.points = config.totalSkillLevel;
        }
        else if (points < 0) {
            this.points = 0;
        }
        else {
            this.points = points;
        }
    }

}

type Elements = {
    homeBtn: HTMLElement,
    playBtn: HTMLElement,
    appHeader: HTMLElement,
    container: HTMLElement,
    totalRank: HTMLElement,
    speaker: HTMLElement,
    progress: HTMLElement
}

class App {

    constructor() { }

    totalSkillLevel = 4;
    lastWord: Word | undefined = undefined;
    isCorectClicked = false;
    words: Word[] = [];
    isSoundMuted = false;
    backgroundMusic: HTMLAudioElement | undefined = undefined;
    audioPath = 'https://s3.amazonaws.com/appforest_uf/';
    elements: Elements = this.getAllHtmlElements();

    answersCounter: number = 0;
    totalWords: number = 0;


    range = (n: number) => Array.from(Array(n).keys());


    calculateTotalRank() {
        return this.words.reduce((acc: number, word: Word) => acc + word.points, 0);
    }

    convertDataToObjects(data: string[][]) {
        return data.map((row, id) => {
            const [hebrew, hebrewTransliterated, arabic, audio] = row;
            return new Word({ id, hebrew, hebrewTransliterated, arabic, audio });
        });
    }



    pickRandomWords(numberOfWords: number) {

        const randomIndexes = new Set<number>();
        while (randomIndexes.size < numberOfWords) {
            const randomIndex = Math.floor(Math.random() * this.words.length);
            if(!randomIndexes.has(randomIndex)){
                randomIndexes.add(randomIndex);
            }
        }
        return [...randomIndexes].map(i => this.words[i]);
    }

    renderCard(word: Word) {

        const answers = this.getAnswers(word);
        const randomLanguage = Math.floor(Math.random() * 2);
        const mainLang = randomLanguage === 0 ? 'hebrew' : 'arabic';
        const answersLang = randomLanguage === 0 ? 'arabic' : 'hebrew';

        return `
    <div class="card-container center">
        <div id="flip-card" class="center">
            <div class="flip-card-inner center">
                <div class="flip-card-front center">
                    <h1>${word[mainLang]}</h1>
                    <div class="skill">
                    ${this.range(word.points).map(() => `<span class="star">*</span>`).join('')}
                    ${this.range(config.totalSkillLevel - word.points).map(() => `<span class="empty-star">*</span>`).join('')}
                    </div>
                </div>
                <div class="flip-card-back center">
                    <h1>${word[answersLang]}</h1>
                    <h1>${word[mainLang]}</h1>
                    <p>${word.hebrewTransliterated}</p>
                    ${word.audio ? '<audio controls width="100" height="100"><source src='
                + this.audioPath + word.audio + ' type="audio/mp3"></audio>' : ''}
                </div>
            </div>
        </div>
        <div class="word-area">

        ${answers.map((answerWord) => `<button id=ans-${answerWord.id} class="answer-btn" onclick="app.onAnswer(${answerWord.id})">${answerWord[answersLang]}</button>`).join('')}
        </div>
    </div>
    `;
    }

    onAnswer(id: number) {

        if (!this.lastWord || this.isCorectClicked) return;
        if (this.lastWord.id === id) {
            new Audio('./assets/sounds/correct.mp3').play()
            document.getElementById(`ans-${id}`)?.classList.add('correct');
            this.lastWord.totalPracticeCount++;
            this.lastWord.lastPracticeDate = new Date();

            document.getElementById('flip-card')?.classList.add("to-flip");
            this.isCorectClicked = true;

        }
        else {
            new Audio('./assets/sounds/incorrect.mp3').play()
            document.getElementById(`ans-${id}`)?.classList.add('wrong');
            this.lastWord.totalPracticeCount--;
        }

    }



    getAnswers(word: Word) {
        const answers = [...this.pickRandomWords(3), word];
        // mix the answers
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }
        return answers;
    }

    play() {

        this.switchToGameMode();

        this.isCorectClicked = false;

        this.answersCounter++;

        if(this.answersCounter > this.totalWords){
            this.answersCounter = 1;
        }

        this.elements.progress.innerText = `${this.answersCounter}/${this.totalWords}`;

        if (this.lastWord) {
            this.lastWord.totalPracticeCount++;
            this.words.push(this.lastWord);
            this.syncWords(this.words)
        }
        this.lastWord = this.words.shift();
        if (!this.lastWord) return;
        this.elements.container.innerHTML = this.renderCard(this.lastWord);
    }

    switchToGameMode() {

        if (this.backgroundMusic?.paused && !this.isSoundMuted) {
            this.backgroundMusic?.play();
            this.isSoundMuted = false; 
       }

       this.elements.progress.style.display = 'flex';

        this.elements.homeBtn.style.display = 'block';

        this.elements.playBtn.innerText = 'Next';

        this.elements.appHeader.style.display = 'none';
    }

    syncWords(data: Word[]) {
        data.forEach(word => word.setPoint(this.calculatePoints(word)));
        this.words = data.sort((a, b) => a.points - b.points);
        // group words by points
        const groupedWords: Record<string, Word[]> = this.words.reduce((acc: any, word: Word) => {
            if (!acc[word.points.toString()]) {
                acc[word.points] = [];
            }
            acc[word.points.toString()].push(word);
            return acc;
        }, {});

        // mixed each group by random order
        Object.keys(groupedWords).forEach((key: string) => {
            groupedWords[key] = groupedWords[key].sort(() => Math.random() - 0.5);
        });

        // convert the record to an array
        this.words = Object.keys(groupedWords).reduce((acc: Word[], key: string) => {
            return acc.concat(groupedWords[key]);
        }, []);

        localStorage.setItem('words', JSON.stringify(this.words));
    }



    getWords() {
        let words = this.convertDataToObjects(dataArray);
        const wordsString = localStorage.getItem("words");

        if (wordsString) {
            const data = JSON.parse(wordsString);
            const wordsFromLocalStorage = data.map((word: Word) => new Word(word));

            // merge the words from local storage with the words from the data
            words = words.map((word: Word) => {
                const wordFromLocalStorage = wordsFromLocalStorage.find((w: Word) => w.id === word.id);
                // replace match fields from the local storage if exists
                if (wordFromLocalStorage) {
                    return new Word({ ...word, ...wordFromLocalStorage });
                }
                return word;
            })
        }

        return words;
    }

    calculatePoints(word: Word) {
        const getPrecentage = (num: number, total: number) => Math.floor((num / total) * 100);
        const calculateFirstTwoStartsByMintuesSinceLastPractice = (date: Date) => {

            const minutesSinceLastPractice = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60));

            if (minutesSinceLastPractice > config.maxNumnerOfMinutes) {
                return 0;
            }
            else {
                const precentage = getPrecentage(minutesSinceLastPractice, config.maxNumnerOfMinutes);
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

    getAllHtmlElements(): Elements {
        const homeBtn = document.getElementById("home-btn");
        const appHeader = document.getElementById('app-header');
        const playBtn = document.getElementById('play-btn');
        const container = document.getElementById("container");
        const totalRank = document.getElementById("totalRank");
        const speaker = document.getElementById("speaker");
        const progress = document.getElementById("progress");


        if (!homeBtn || !appHeader || !playBtn || !container || !totalRank || !progress || !speaker) {
            throw new Error("Missing html elements");
        }


        return {
            homeBtn,
            playBtn,
            appHeader,
            container,
            totalRank,
            speaker,
            progress
        }
    }

    async init() {
        this.createListeners();

        // handle background music
        this.backgroundMusic = await new Audio('./assets/sounds/turkish-beat.mp3');
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = 0.3;
        
        this.words = this.getWords();
        this.syncWords(this.words);
        this.totalWords = this.words.length;
        this.elements.totalRank.innerText = "Rank: " + this.calculateTotalRank().toString();

    }

    createListeners() {
        this.elements.homeBtn.addEventListener('click', () => {
            this.handleHomeClick();
        });

        this.elements.speaker.addEventListener('click', () => {
            this.handleSpeakerClick();
        });

        this.elements.playBtn.addEventListener('click', () => {
            this.play();
        });
    }

    handleSpeakerClick() {
        this.elements.speaker.classList.toggle("on");
        this.isSoundMuted = !this.isSoundMuted;
        if (this.isSoundMuted) {
            this.backgroundMusic?.pause();
            this.isSoundMuted = true;
        }
        else {
            if (this.backgroundMusic?.paused) {
                this.backgroundMusic?.play();
                this.isSoundMuted = false; 
            }
        }
    }

    handleHomeClick() {
        this.elements.homeBtn.style.display = 'none';

        this.elements.appHeader.style.display = 'flex';

        this.elements.container.innerHTML = '';

        this.elements.playBtn.innerText = 'Start';

        this.elements.progress.style.display = 'none';

        this.elements.totalRank.innerText = "Rank: " + this.calculateTotalRank().toString();

    }

}
let app: App;
function setupApp() {
    app = new App();
    app.init();
}


window.onload = setupApp;