(() => {
    const defines = {};
    const entry = [null];
    function define(name, dependencies, factory) {
        defines[name] = { dependencies, factory };
        entry[0] = name;
    }
    define("require", ["exports"], (exports) => {
        Object.defineProperty(exports, "__cjsModule", { value: true });
        Object.defineProperty(exports, "default", { value: (name) => resolve(name) });
    });
    define("api", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.generateRandomIcebreaker = exports.allIcebreakers = void 0;
        const icebreakers = [
            {
                id: 0,
                question: "If you had to describe how you're feeling right now as a weather pattern, what's your forecast?",
            },
            {
                id: 1,
                question: "What's something you're looking forward to, and why?",
            },
            {
                id: 2,
                question: "What's something you're worried about?",
            },
            {
                id: 3,
                question: "What's something new or interesting you've learned recently?",
            },
            {
                id: 4,
                question: "What animal best represents you today, and why?",
            },
            {
                id: 5,
                question: "What's the weirdest thing in your fridge right now?",
            },
            {
                id: 6,
                question: "What was your favorite recent meal, and why?",
            },
            {
                id: 7,
                question: "If you could have one superpower today, what would it be, and for what purpose?",
            },
            {
                id: 8,
                question: "What are you grateful for today, and why?",
            },
            {
                id: 9,
                question: "What would you do if you had an extra day off tomorrow?",
            },
            {
                id: 10,
                question: "If you could invite anyone to dinner tonight, who would it be and what would you eat?",
            },
            {
                id: 11,
                question: "What was the last song you listened to, and where?",
            },
            {
                id: 12,
                question: "What's your favorite recent accomplishment, and why?",
            },
            {
                id: 13,
                question: "If you could get advice from anyone in the world today, whom would you ask, and what would you ask them?",
            },
            {
                id: 14,
                question: "If you had an expert personal assistant today, what would you have them do?",
            },
            {
                id: 15,
                question: "What's something about the next teammate that you appreciate?",
            },
            {
                id: 16,
                question: "Show us something in your space that you really like!",
            },
            {
                id: 17,
                question: "What's got your attention today, and why?",
            },
            {
                id: 18,
                question: "What was your favorite recent book or article, and what did it inspire?",
            },
            {
                id: 19,
                question: "What emoji best represents you today, and why?",
            },
            {
                id: 20,
                question: "What's the most important thing to remember daily that you haven't been able to?",
            },
            {
                id: 21,
                question: "What help could you most use that you haven't asked for?",
            },
            {
                id: 22,
                question: "What is your one piece of advice to everyone here?",
            },
            {
                id: 23,
                question: "Who was the last person you felt inspired by?",
            },
            {
                id: 24,
                question: "What simple thing still blows your mind?",
            },
            {
                id: 25,
                question: "What sparked your curiosity in whatever you're most curious about now?",
            },
            {
                id: 26,
                question: "If you could know the absolute and total truth to one question, what question would you ask?",
            },
            {
                id: 27,
                question: "Which question can you ask to find out the most about a person?",
            },
            {
                id: 28,
                question: "What color best describes your personality today?",
            },
            {
                id: 29,
                question: "What's something new you've learned about yourself in the last three months?",
            },
            {
                id: 30,
                question: "Have you been pleasantly surprised by anything recently?",
            },
            {
                id: 31,
                question: "If you did not have to sleep, how would you spend the extra 8 hours?",
            },
            {
                id: 32,
                question: "What thing from nature, excluding animals, best describes you today?",
            },
            {
                id: 33,
                question: "If you could do something that you don't do because it's bad for you, but you could do it without any repercussions — what would you do?",
            },
            {
                id: 34,
                question: "What question do you wish people would ask you?",
            },
            {
                id: 35,
                question: "If you could be one other person, who would that person be and why?",
            },
            {
                id: 36,
                question: "If you had to describe how you're feeling right now as an amusement park ride, what ride are you on?",
            },
            {
                id: 37,
                question: "If you could safely eat any inedible object, what would it be?",
            },
            {
                id: 38,
                question: "What are you reading right now?",
            },
            {
                id: 39,
                question: "If you could pick up a new skill in an instant what would it be?",
            },
            {
                id: 40,
                question: "Is there any topic lately that you would like to be mentored on?",
            },
            {
                id: 41,
                question: "Are there any aspects of your personality that hold you back? How do you adapt?",
            },
            {
                id: 42,
                question: "What's one project that you could stop doing to give yourself more focus?",
            },
            {
                id: 43,
                question: "When you're feeling stressed, how do you deal with it?",
            },
            {
                id: 44,
                question: "How would you describe your communication style in 3 words?",
            },
            {
                id: 45,
                question: "What criteria helps you decide whether to say “no” to something or commit to it?",
            },
            {
                id: 46,
                question: "What are you excited about this week? What worries you?",
            },
            {
                id: 47,
                question: "What's one rule your parents or guardians enforced when you were a kid?",
            },
            {
                id: 48,
                question: "Do you have any routines you use to improve your energy and focus?",
            },
            {
                id: 49,
                question: "How do you recognize when you're stressed?",
            },
            {
                id: 50,
                question: "Who has made a positive difference in your life recently?",
            },
            {
                id: 51,
                question: "What was the last thing you fell in love with?",
            },
            {
                id: 52,
                question: "What thing or experience exceeded your expectations recently?",
            },
            {
                id: 53,
                question: "When was the last time you felt unbounded optimism?",
            },
            {
                id: 54,
                question: "Do you have any non-work goals right now? What are they?",
            },
            {
                id: 55,
                question: "What's one country you would love to visit and why?",
            },
            {
                id: 56,
                question: "What's the most useful thing you own?",
            },
            {
                id: 57,
                question: "What's something you couldn't live without?",
            },
            {
                id: 58,
                question: "If you had to sing karaoke right now, which song would you pick?",
            },
            {
                id: 59,
                question: "What drink best describes you today?",
            },
            {
                id: 60,
                question: "What's one thing many people hate, but you love?",
            },
            {
                id: 61,
                question: "What was the first thing you thought about when waking up today?",
            },
            {
                id: 62,
                question: "What's the last thing you completed that you're proud of?",
            },
            {
                id: 63,
                question: "What's something in your workspace that cheers you up during the day?",
            },
            {
                id: 64,
                question: "What's something that made you smile recently?",
            },
            {
                id: 65,
                question: "What's one of your favorite recent memories?",
            },
            {
                id: 66,
                question: "What's one thing that brings you energy and joy?",
            },
            {
                id: 67,
                question: "What are you nostalgic about recently?",
            },
            {
                id: 68,
                question: "What are you looking forward to?",
            },
            {
                id: 69,
                question: "What fictional world or place would you like to visit?",
            },
            {
                id: 70,
                question: "If you could have an animal sidekick, what animal would it be? Why?",
            },
            {
                id: 71,
                question: "What is one thing we would never guess about you?",
            },
            {
                id: 72,
                question: "What current fact about your life would most impress your five-year-old self?",
            },
            {
                id: 73,
                question: "What fruit or vegetable represents your mood today?",
            },
            {
                id: 74,
                question: "What's something you are craving right now?",
            },
            {
                id: 75,
                question: "What's something you would change if you ran the world?",
            },
            {
                id: 76,
                question: "If you could rid the world of one thing, what would it be?",
            },
            {
                id: 77,
                question: "What were you most passionate about as a kid?",
            },
            {
                id: 78,
                question: "If you were a takeaway food, what would sum up your day and why?",
            },
            {
                id: 79,
                question: "What looks easy peasy lemon squeezy but is actually difficult difficult lemon difficult?",
            },
            {
                id: 80,
                question: "What's something from your childhood that you still love today?",
            },
            {
                id: 81,
                question: "What healthy food tastes just as good to you as unhealthy food?",
            },
            {
                id: 82,
                question: "You've died but instead of entering the afterlife, you've entered Earth 2.0. What is something that make Earth 2.0 better?",
            },
            {
                id: 83,
                question: "What's a small act of kindness you were once shown, that you'll never forget?",
            },
            {
                id: 84,
                question: "What's a movie you always recommend to people? Why do you love it?",
            },
            {
                id: 85,
                question: "What's normal where you live, but might seem weird to the rest of the world?",
            },
            {
                id: 86,
                question: "What do you value most in a friendship?",
            },
            {
                id: 87,
                question: "What's something that you've never learned to do?",
            },
            {
                id: 88,
                question: "Where do you feel most at home?",
            },
            {
                id: 89,
                question: "What small thing would improve your day today?",
            },
            {
                id: 90,
                question: "If you could go back in time 10,000 years ago and make a cave painting to confuse everyone in the future, what would you draw?",
            },
            {
                id: 91,
                question: "What do you enjoy most about what you spend your time on?",
            },
            {
                id: 92,
                question: "What's one thing you want to do in life, but don't know where to start",
            },
            {
                id: 93,
                question: "What's your favorite thing about the place you live?",
            },
            {
                id: 94,
                question: "What's something that puts you in a state of flow?",
            },
            {
                id: 95,
                question: "If you could go back in time and make little changes to your childhood, what is one thing you'd learn so you could be an expert at it today?",
            },
            {
                id: 96,
                question: "A genie appears and grants you a wish for someone else in the world. Who and what do you make a wish for?",
            },
            {
                id: 97,
                question: "If you could instantly know any other language, which would it be and why?",
            },
            {
                id: 98,
                question: "What's the best phrase or piece of slang people in your hometown use?",
            },
            {
                id: 99,
                question: "What's something you wish you'd learned earlier in life?",
            },
            {
                id: 100,
                question: "What's an unusual skill you'd love to master?",
            },
            {
                id: 101,
                question: "If you were going to be frozen tomorrow for a one-way 1000-year interstellar voyage, what would you most want to communicate (and to whom) before you leave?",
            },
            {
                id: 102,
                question: "If you had to eat only one dish for the rest of time, what would it be?",
            },
            {
                id: 103,
                question: "If you could be fluent in another language instantly, which would you choose, and why?",
            },
            {
                id: 104,
                question: "What's something people don't know about you?",
            },
            {
                id: 105,
                question: "What's the best piece of advice you've ever been given?",
            },
            {
                id: 106,
                question: "What's the most useful item you've purchased this year?",
            },
            {
                id: 107,
                question: "If you could describe your life as a movie, what genre would it be?",
            },
            {
                id: 108,
                question: "If you were coming out onto a stage, what would your entrance song be?",
            },
            {
                id: 109,
                question: "What was your least favorite food as a child? Why did you dislike it?",
            },
            {
                id: 110,
                question: "If you were setting off to Mars and could take only one luxury item with you, what would it be?",
            },
            {
                id: 111,
                question: "If you had to give a lecture on one thing, what would it be?",
            },
            {
                id: 112,
                question: "If you could become a supernatural creature at night, what would it be, and why?",
            },
            {
                id: 113,
                question: "If you could bring back a fashion trend, what would it be, and why?",
            },
            {
                id: 114,
                question: "What season best describes you? Winter, Spring, Summer or Autumn?",
            },
            {
                id: 115,
                question: "If you could have an unlimited supply of one food or drink, what would it be?",
            },
            {
                id: 116,
                question: "You're cooking for the whole team, what is your signature dish?",
            },
            {
                id: 117,
                question: "If you could live in another historical period, would you? If so, which one?",
            },
            {
                id: 118,
                question: "As a child, what did you want to be when you grew up?",
            },
            {
                id: 119,
                question: "What's the best book you've ever read? Why was it so memorable?",
            },
            {
                id: 120,
                question: "If you had a time machine, would you go back in time to meet your ancestors, or forward in time to meet your descendents?",
            },
            {
                id: 121,
                question: "If you could live with any fictional character, who would you choose?",
            },
            {
                id: 122,
                question: "If you were reincarnated as an animal what would you choose and why?",
            },
            {
                id: 123,
                question: "Which bucket list item do you most want to check off this year?",
            },
            {
                id: 124,
                question: "What's the worst piece of advice you've ever been given? And why was it so bad?",
            },
            {
                id: 125,
                question: "If you could teleport anywhere in the world, where would you go right now?",
            },
            {
                id: 126,
                question: "Which fictional character would you want by your side during a zombie apocalypse?",
            },
            {
                id: 127,
                question: "What's one thing you wish could be automated in your job?",
            },
            {
                id: 128,
                question: "What's an unusual tradition you or your family have?",
            },
            {
                id: 129,
                question: "Name a TV show you think is under-rated. Describe it in a sentence.",
            },
            {
                id: 130,
                question: "What was your first ever job?",
            },
            {
                id: 131,
                question: "What's one thing you are unbeatable at?",
            },
            {
                id: 132,
                question: "If you were a cocktail, which would you be today?",
            },
            {
                id: 133,
                question: "What is your favorite smell and why?",
            },
            {
                id: 134,
                question: "What's one thing you've been procrastinating on and can't finish?",
            },
            {
                id: 135,
                question: "What was your favorite class in school? Why?",
            },
            {
                id: 136,
                question: "If you could keep only one part of your morning routine, what would it be?",
            },
            {
                id: 137,
                question: "Do you work better with or without music? What are you listening to while you work?",
            },
            {
                id: 138,
                question: "Have you ever experienced a culture shock? Where was it and what happened?",
            },
            {
                id: 139,
                question: "If you had unlimited time and resources, how would you spend your days?",
            },
            {
                id: 140,
                question: "What's the last book you quit reading, and why?",
            },
            {
                id: 141,
                question: "Have you learned any useful productivity hacks recently?",
            },
            {
                id: 142,
                question: "If your home was packed full of golf balls how would you remove them?",
            },
            {
                id: 143,
                question: "Do you have a favorite mug? Let us see it and tell us why you love it!",
            },
            {
                id: 144,
                question: "What's one productivity tool you couldn't live without, and what makes it indispensable?",
            },
            {
                id: 145,
                question: "How do you get motivated for difficult tasks?",
            },
            {
                id: 146,
                question: "Look around and assess how satisfied you are with your physical workspace. What's one thing you love about it? What would you improve?",
            },
            {
                id: 147,
                question: "Name a healthy food you enjoy and an unhealthy food that you find hard to resist.",
            },
            {
                id: 148,
                question: "What's an adventurous thing you've done recently?",
            },
            {
                id: 149,
                question: "What's a TV show you recommend to everyone?",
            },
            {
                id: 150,
                question: "What age do you wish you could be permanently?",
            },
            {
                id: 151,
                question: "What's a guilty pleasure you love to indulge from time to time?",
            },
            {
                id: 152,
                question: "Where did you grow up and what was it like?",
            },
            {
                id: 153,
                question: "What are some strategies that you've found to be helpful in your recent work?",
            },
            {
                id: 154,
                question: "What's something on your desk, a nearby wall, or out the window that cheers you up during the day?",
            },
            {
                id: 155,
                question: "What boundaries have you set to ensure that you unplug from work?",
            },
            {
                id: 156,
                question: "If you were forced to watch reruns of a favorite show, which would you choose?",
            },
            {
                id: 157,
                question: "Would you rather spend a three-week trip visiting multiple interesting destinations or one interesting destination?",
            },
            {
                id: 158,
                question: "What's one of the biggest risks you've taken in your career? How do you feel about having taken it?",
            },
            {
                id: 159,
                question: "What was your favorite breakfast as a kid?",
            },
            {
                id: 160,
                question: "What's something you rebelled against as a kid?",
            },
            {
                id: 161,
                question: "What were some of your favorite activities as a kid?",
            },
            {
                id: 162,
                question: "What's a food, smell, or sound that you associate with where you grew up?",
            },
            {
                id: 163,
                question: "What's a landmark, popular destination, or local hangout spot that you either frequented or avoided when you were growing up?",
            },
            {
                id: 164,
                question: "Would you rather receive a shoutout from the CEO at a company all-hands meeting or a private word of thanks from them?",
            },
            {
                id: 165,
                question: "Would you rather someone took a boring task off your to-do list or invited you to participate in a project of great interest?",
            },
            {
                id: 166,
                question: "You can grow the tail of any animal or mythical creature. Which do you choose?",
            },
            {
                id: 167,
                question: "What's a time when someone did something you appreciated (at work or in another context), but you didn't let them know? What held you back?",
            },
            {
                id: 168,
                question: "Would you rather take a cold shower every day or always sleep an hour less than you need?",
            },
            {
                id: 169,
                question: "Which do you prefer, oceans or mountains? Why?",
            },
            {
                id: 170,
                question: "Would you rather speak all languages or be able to communicate with animals?",
            },
            {
                id: 171,
                question: "Make a choice: Never hear music again or lose the ability to read?",
            },
            {
                id: 172,
                question: "Do you have any mentors or people you look up to? Tell us about one of them.",
            },
            {
                id: 173,
                question: "What would you do if you came home and found a penguin in your freezer?",
            },
            {
                id: 174,
                question: "If you had to sing karaoke right now, which song would you pick?",
            },
            {
                id: 175,
                question: "You've been teleported to the middle ages. How do you make a living there?",
            },
            {
                id: 176,
                question: "If you had a magic button on your desk to bring you whatever you wanted instantly, what would it summon?",
            },
            {
                id: 177,
                question: "What's your guilty pleasure right now?",
            },
            {
                id: 178,
                question: "What was the last thing you did that gave you child-like joy?",
            },
            {
                id: 179,
                question: "What's a book you would like to live in?",
            },
            {
                id: 180,
                question: "What's the last thing you did for the first time?",
            },
            {
                id: 181,
                question: "What's one activity that grants you pure escapism?",
            },
            {
                id: 182,
                question: "You're on a desert island and can bring one luxury with you – what is it?",
            },
            {
                id: 183,
                question: "What's one characteristic you admire in others and why?",
            },
            {
                id: 184,
                question: "What's an organization or private company you admire and why?",
            },
            {
                id: 185,
                question: "What was the first concert or gig you ever attended?",
            },
            {
                id: 186,
                question: "What does friendship mean to you?",
            },
            {
                id: 187,
                question: "What's one possession or tool that enhances your daily life?",
            },
            {
                id: 188,
                question: "What smell or image triggers nostalgia for you?",
            },
            {
                id: 189,
                question: "How do you like to sit in a chair?",
            },
            {
                id: 190,
                question: "What's a cause or purpose you deeply believe in?",
            },
            {
                id: 191,
                question: "What's a hobby or side project you've been meaning to take up?",
            },
            {
                id: 192,
                question: "What ice cream flavour sums up your personality today?",
            },
            {
                id: 193,
                question: "What's one thing your parents or guardians always nagged you about?",
            },
            {
                id: 194,
                question: "What's something you do to relieve anger or stress?",
            },
            {
                id: 195,
                question: "What's a sauce, condiment or dressing you couldn't live without?",
            },
            {
                id: 196,
                question: "What are you doing when you feel most alive?",
            },
            {
                id: 197,
                question: "Tell us about a stranger you still remember. What made them memorable?",
            },
            {
                id: 198,
                question: "What would you do if you came home and found a penguin in your freezer?",
            },
            {
                id: 199,
                question: "What's one thing you wish you'd been taught in school?",
            },
            {
                id: 200,
                question: "You've been granted a one-way ticket to another country of your choice. Where are you going?",
            },
            {
                id: 201,
                question: "What does it feel like to be you right now?",
            },
            {
                id: 202,
                question: "How have you changed in the last year?",
            },
            {
                id: 203,
                question: "What's a food that reminds you of childhood?",
            },
            {
                id: 204,
                question: "What's something our team is good at?",
            },
            {
                id: 205,
                question: "What's something you've drawn inspiration from recently?",
            },
            {
                id: 206,
                question: "What's something you like to do whenever you travel to a new country?",
            },
            {
                id: 207,
                question: "Who on the team would you like to swap jobs with for a day?",
            },
            {
                id: 208,
                question: "It's your first day on the job as an evil villain. What's the first piece of mischief you commit?",
            },
            {
                id: 209,
                question: "Who's an ex-colleague from this job or another that you still think about?",
            },
            {
                id: 210,
                question: "What's an adult problem nobody prepared you for?",
            },
            {
                id: 211,
                question: "What do your family think you do for work?",
            },
            {
                id: 212,
                question: "What's a book that affected you so deeply (emotionally or intellectually) that you still regularly think about it?",
            },
            {
                id: 213,
                question: "What's something that doesn't deserve the hate it gets?",
            },
            {
                id: 214,
                question: "What's a simple life hack that everyone can benefit from?",
            },
            {
                id: 215,
                question: "What is a lesson you feel you learned too late in life?",
            },
            {
                id: 216,
                question: "If buying groceries were a game, what would be one of the loading screen tips?",
            },
            {
                id: 217,
                question: "What's one of your recent pet peeves?",
            },
            {
                id: 218,
                question: "How would your best friend describe you?",
            },
            {
                id: 219,
                question: "Congratulations! You've been chosen to represent your country in a global competition. What sport or activity are you doing?",
            },
        ];
        const allIcebreakers = () => icebreakers;
        exports.allIcebreakers = allIcebreakers;
        const generateRandomIcebreaker = (icebreakers) => {
            return icebreakers[Math.floor(Math.random() * icebreakers.length)];
        };
        exports.generateRandomIcebreaker = generateRandomIcebreaker;
    });
    // This is a counter widget with buttons to increment and decrement the number.
    define("code", ["require", "exports", "api"], function (require, exports, api_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        const { widget } = figma;
        const { useSyncedState, usePropertyMenu, AutoLayout, Frame, Text, SVG, Line } = widget;
        function Widget() {
            const [icebreaker, setIcebreaker] = useSyncedState('icebreaker', { question: 'Placeholder' });
            /*  if (count !== 0) {
                usePropertyMenu(
                  [
                    {
                      itemType: 'action',
                      propertyName: 'reset',
                      tooltip: 'Reset',
                      icon: `<svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9026 1.43168C12.1936 1.47564 12.4822 1.54098 12.7663 1.62777L12.7719 1.62949C14.0176 2.0114 15.109 2.78567 15.8858 3.83854L15.8918 3.84665C16.5473 4.73808 16.9484 5.78867 17.058 6.88508L14.0863 4.88858L13.3259 6.02047L17.3852 8.74774L17.9079 9.09894L18.2994 8.60571L21.0056 5.19662L19.9376 4.34879L18.3531 6.34479C18.3424 6.27511 18.3306 6.20563 18.3179 6.13636C18.1135 5.02233 17.6601 3.96334 16.9851 3.04274L16.9791 3.03462C16.0303 1.74427 14.6956 0.794984 13.1714 0.326388L13.1658 0.32466C12.8171 0.217755 12.4627 0.137298 12.1055 0.0832198C10.899 -0.0994351 9.66061 0.0188515 8.50099 0.435448L8.4947 0.437711C7.42511 0.823053 6.46311 1.44778 5.6774 2.25801C5.38576 2.55876 5.11841 2.88506 4.87886 3.23416C4.85856 3.26376 4.83845 3.29351 4.81854 3.32343L5.94262 4.08294L5.94802 4.07484C5.96253 4.0531 5.97717 4.03146 5.99195 4.00993C6.71697 2.95331 7.75331 2.15199 8.95541 1.72013L8.9617 1.71788C9.33245 1.58514 9.71301 1.48966 10.098 1.43156C10.6957 1.34135 11.3039 1.34123 11.9026 1.43168ZM3.70034 6.39429L0.994141 9.80338L2.06217 10.6512L3.64663 8.65521C3.65741 8.72489 3.66916 8.79437 3.68187 8.86364C3.88627 9.97767 4.33964 11.0367 5.01467 11.9573L5.02063 11.9654C5.96945 13.2557 7.30418 14.205 8.82835 14.6736L8.83398 14.6753C9.18281 14.7823 9.53732 14.8628 9.89464 14.9168C11.101 15.0994 12.3393 14.9811 13.4988 14.5646L13.5051 14.5623C14.5747 14.1769 15.5367 13.5522 16.3224 12.742C16.614 12.4413 16.8813 12.115 17.1209 11.7659C17.1412 11.7363 17.1613 11.7065 17.1812 11.6766L16.0571 10.9171L16.0518 10.9252C16.0372 10.9469 16.0225 10.9686 16.0078 10.9902C15.2827 12.0467 14.2464 12.848 13.0444 13.2799L13.0381 13.2821C12.6673 13.4149 12.2868 13.5103 11.9018 13.5684C11.3041 13.6587 10.6958 13.6588 10.0971 13.5683C9.8062 13.5244 9.51754 13.459 9.23347 13.3722L9.22784 13.3705C7.98212 12.9886 6.89078 12.2143 6.11393 11.1615L6.10795 11.1534C5.45247 10.2619 5.05138 9.21133 4.94181 8.11492L7.91342 10.1114L8.6739 8.97953L4.61459 6.25226L4.09188 5.90106L3.70034 6.39429Z" fill="white"/>
                      </svg>
                      `,
                    },
                  ],
                  () => {
                    setCount(0)
                  },
                )
              }
            */
            return (figma.widget.h(AutoLayout, { name: "main", effect: [
                    {
                        type: "drop-shadow",
                        color: "#44425833",
                        offset: {
                            x: 0,
                            y: 1,
                        },
                        blur: 3,
                    },
                    {
                        type: "drop-shadow",
                        color: "#4442581F",
                        offset: {
                            x: 0,
                            y: 2,
                        },
                        blur: 2,
                    },
                    {
                        type: "drop-shadow",
                        color: "#44425824",
                        offset: {
                            x: 0,
                            y: 0,
                        },
                        blur: 2,
                    },
                ], fill: "#FFF", cornerRadius: 8, overflow: "visible", direction: "vertical", spacing: 0, padding: {
                    top: 0,
                    right: 0,
                    bottom: 24,
                    left: 0,
                }, width: 600 },
                figma.widget.h(AutoLayout, { name: "top", overflow: "visible", direction: "vertical", spacing: 8, padding: {
                        vertical: 24,
                        horizontal: 0,
                    }, width: "fill-parent", verticalAlignItems: "center", horizontalAlignItems: "center" },
                    figma.widget.h(Frame, { name: "Parabol_Logo_Color", overflow: "visible", width: 120.069, height: 24 },
                        figma.widget.h(SVG, { name: "Path 240_Path 241_Path 242_Path 243_Path 244_Path 245_Rectangle 196_Path 246_Path 247_Path 248_Path 249_Path 250_Path 251", height: 24, width: 120, src: "<svg width='122' height='24' viewBox='0 0 122 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\n<path d='M37.5178 24.0002V5.37042H40.306V6.89948C40.6461 6.38022 41.1229 5.96495 41.684 5.69943C42.3676 5.33227 43.1332 5.14441 43.9091 5.1534C44.7313 5.09784 45.5553 5.23117 46.318 5.54318C47.0806 5.85519 47.7618 6.33761 48.3093 6.95348C49.3926 8.40428 49.9256 10.1926 49.8134 11.9997C49.9134 13.7938 49.3745 15.5654 48.2923 16.9999C47.7436 17.6257 47.0583 18.1168 46.2894 18.4354C45.5205 18.7539 44.6886 18.8914 43.8581 18.837C43.1297 18.8457 42.4097 18.6804 41.758 18.355C41.1825 18.0821 40.6843 17.6695 40.3089 17.1549V24.0002H37.5178ZM41.093 8.77456C40.4202 9.71075 40.0872 10.8485 40.1489 11.9997C40.087 13.1509 40.4201 14.2887 41.093 15.2248C41.382 15.5959 41.7516 15.8963 42.1739 16.1033C42.5962 16.3104 43.0601 16.4186 43.5304 16.4199C44.0007 16.4211 44.4652 16.3153 44.8886 16.1106C45.312 15.9058 45.6832 15.6073 45.9742 15.2378C46.6484 14.2973 46.9828 13.1554 46.9222 11.9997C46.9841 10.8488 46.6518 9.71122 45.9802 8.77456C45.6903 8.4032 45.3195 8.1028 44.8961 7.8962C44.4727 7.68959 44.0077 7.58221 43.5366 7.58221C43.0655 7.58221 42.6005 7.68959 42.1771 7.8962C41.7537 8.1028 41.3829 8.4032 41.093 8.77456' fill='#2D2D39'/>\n<path d='M51.473 14.8148C51.4505 14.1942 51.5832 13.5778 51.8591 13.0214C52.135 12.4651 52.5454 11.9864 53.053 11.6287C54.2809 10.8068 55.7404 10.4015 57.2162 10.4726H59.5033V9.89459C59.5294 9.56653 59.4772 9.23696 59.351 8.93304C59.2248 8.62911 59.0281 8.35953 58.7773 8.14651C58.2403 7.75286 57.5854 7.5536 56.9202 7.58149C56.371 7.55471 55.8287 7.71385 55.3811 8.03321C54.9334 8.35257 54.6065 8.8135 54.4531 9.34156L51.948 8.81454C52.1981 7.74099 52.8247 6.79261 53.7141 6.14142C54.6544 5.46804 55.7891 5.1207 56.9452 5.15238C60.5087 5.15238 62.2904 6.89979 62.2904 10.3946V18.63H59.9773L59.6773 16.8959C59.2146 17.5354 58.5985 18.0483 57.8857 18.3873C57.1729 18.7263 56.3862 18.8806 55.5981 18.836H55.5601C54.4923 18.8735 53.4492 18.5092 52.637 17.8149C52.2345 17.4311 51.9217 16.9632 51.7209 16.4447C51.52 15.9261 51.4361 15.3696 51.475 14.8148H51.473ZM54.3661 14.8148C54.351 15.034 54.384 15.2539 54.4627 15.459C54.5413 15.6642 54.6639 15.8497 54.8216 16.0027C54.9794 16.1556 55.1687 16.2722 55.3762 16.3445C55.5837 16.4167 55.8045 16.4428 56.0232 16.4209C56.917 16.4352 57.7852 16.1222 58.4643 15.5408C58.8151 15.2326 59.0911 14.8486 59.2715 14.4178C59.4518 13.9871 59.5318 13.5209 59.5053 13.0547V12.7547H57.1052C56.3962 12.7163 55.694 12.9101 55.1051 13.3067C54.8683 13.4769 54.677 13.7028 54.5481 13.9644C54.4192 14.226 54.3567 14.5153 54.3661 14.8068' fill='#2D2D39'/>\n<path d='M65.3911 18.6296V5.36999H68.1832V7.58008C68.5915 6.83877 69.1906 6.22006 69.9183 5.78801C70.5753 5.38199 71.3302 5.16215 72.1024 5.15198C72.679 5.14766 73.2509 5.25674 73.7855 5.47299L73.3094 7.9781C72.8447 7.69983 72.3098 7.56098 71.7684 7.57808C71.2471 7.60459 70.7414 7.76514 70.3003 8.04421C69.8592 8.32328 69.4975 8.71144 69.2503 9.17115C68.4588 10.5471 68.0879 12.1249 68.1832 13.7093V18.6296H65.3911Z' fill='#2D2D39'/>\n<path d='M74.4935 14.8148C74.471 14.1942 74.6037 13.5778 74.8796 13.0214C75.1555 12.4651 75.5659 11.9864 76.0735 11.6287C77.3014 10.8068 78.7609 10.4015 80.2367 10.4726H82.5238V9.89459C82.5498 9.56654 82.4976 9.237 82.3714 8.93309C82.2452 8.62917 82.0486 8.35959 81.7978 8.14651C81.2608 7.75293 80.6059 7.55368 79.9407 7.58149C79.3915 7.55471 78.8492 7.71385 78.4016 8.03321C77.9539 8.35257 77.627 8.8135 77.4736 9.34156L74.9685 8.81454C75.2186 7.74099 75.8452 6.79261 76.7346 6.14142C77.6748 5.46804 78.8096 5.1207 79.9657 5.15238C83.5292 5.15238 85.311 6.89979 85.311 10.3946V18.63H82.9978L82.6978 16.8959C82.2351 17.5354 81.619 18.0483 80.9062 18.3873C80.1934 18.7263 79.4067 18.8806 78.6186 18.836H78.5806C77.5128 18.8734 76.4698 18.5091 75.6575 17.8149C75.2551 17.4311 74.9423 16.9632 74.7414 16.4447C74.5405 15.9261 74.4566 15.3696 74.4955 14.8148H74.4935ZM77.3866 14.8148C77.3715 15.034 77.4045 15.2539 77.4832 15.459C77.5619 15.6642 77.6844 15.8497 77.8421 16.0027C77.9999 16.1556 78.1892 16.2722 78.3967 16.3445C78.6042 16.4167 78.825 16.4428 79.0437 16.4209C79.9375 16.4352 80.8057 16.1222 81.4848 15.5408C81.8356 15.2326 82.1116 14.8486 82.292 14.4178C82.4724 13.9871 82.5523 13.5209 82.5258 13.0547V12.7547H80.1257C79.4167 12.7164 78.7146 12.9102 78.1256 13.3067C77.8888 13.4769 77.6975 13.7028 77.5686 13.9644C77.4398 14.226 77.3772 14.5153 77.3866 14.8068' fill='#2D2D39'/>\n<path d='M88.4121 18.6308V0H91.2002V6.8353C91.6067 6.32779 92.1304 5.92661 92.7263 5.66625C93.3537 5.34189 94.0472 5.16603 94.7534 5.15222C95.5847 5.09868 96.4171 5.23758 97.186 5.5581C97.9549 5.87863 98.6395 6.37215 99.1866 7.0003C100.267 8.43594 100.805 10.2067 100.708 12.0005C100.819 13.8051 100.284 15.5902 99.1996 17.0367C98.6515 17.6519 97.9703 18.1338 97.2077 18.4458C96.4452 18.7577 95.6215 18.8915 94.7994 18.8368C94.0263 18.8442 93.2635 18.6586 92.5803 18.2968C92.0159 18.0358 91.5361 17.6218 91.1952 17.1017V18.6308H88.4121ZM91.9873 8.77638C91.3148 9.71233 90.9818 10.8497 91.0432 12.0005C90.9814 13.1517 91.3145 14.2895 91.9873 15.2257C92.2763 15.5967 92.6459 15.8971 93.0682 16.1041C93.4905 16.3112 93.9544 16.4194 94.4247 16.4207C94.895 16.4219 95.3595 16.3162 95.7829 16.1114C96.2062 15.9066 96.5775 15.6081 96.8685 15.2387C97.5427 14.2981 97.877 13.1562 97.8165 12.0005C97.878 10.8495 97.5454 9.71191 96.8735 8.77538C96.5835 8.40402 96.2128 8.10362 95.7894 7.89702C95.3659 7.69041 94.901 7.58303 94.4299 7.58303C93.9587 7.58303 93.4938 7.69041 93.0704 7.89702C92.6469 8.10362 92.2762 8.40402 91.9863 8.77538' fill='#2D2D39'/>\n<path d='M102.558 11.975C102.507 10.1929 103.142 8.45923 104.331 7.13077C104.954 6.50366 105.694 6.00597 106.51 5.66634C107.326 5.32671 108.201 5.15186 109.085 5.15186C109.969 5.15186 110.844 5.32671 111.66 5.66634C112.476 6.00597 113.216 6.50366 113.839 7.13077C115.029 8.46892 115.663 10.2104 115.612 12C115.663 13.7879 115.029 15.5278 113.839 16.8632C113.239 17.5197 112.503 18.0366 111.681 18.3774C110.86 18.7181 109.973 18.8744 109.085 18.8353C109.083 18.8349 109.081 18.835 109.08 18.8355C109.078 18.836 109.076 18.837 109.075 18.8383C109.074 18.8396 109.073 18.8411 109.072 18.8429C109.072 18.8446 109.072 18.8465 109.072 18.8483C108.185 18.8848 107.301 18.7266 106.482 18.3849C105.663 18.0431 104.929 17.5261 104.331 16.8702C103.14 15.5205 102.506 13.7691 102.558 11.97V11.975ZM106.412 15.1051C106.711 15.5294 107.112 15.8718 107.578 16.1008C108.043 16.3299 108.559 16.4383 109.078 16.4162C109.597 16.4379 110.114 16.3306 110.581 16.1037C111.049 15.8768 111.453 15.5375 111.757 15.1161C112.385 14.1984 112.721 13.1124 112.721 12.0005C112.721 10.8886 112.385 9.80258 111.757 8.88484C111.439 8.47826 111.032 8.14956 110.567 7.9237C110.103 7.69784 109.593 7.58076 109.077 7.58134C108.56 7.58192 108.051 7.70014 107.587 7.92704C107.123 8.15394 106.716 8.48354 106.399 8.89084C105.75 9.78523 105.415 10.8694 105.448 11.974C105.419 13.0962 105.757 14.1972 106.412 15.1091' fill='#2D2D39'/>\n<path d='M121.035 0H118.246V18.6308H121.035V0Z' fill='#2D2D39'/>\n<path d='M14.2575 19.7867C13.3754 19.7867 12.5044 19.7447 11.6573 19.6647C14.8895 23.2068 18.5506 24.8709 20.9067 23.5098C22.4068 22.6428 23.1068 20.7017 23.0478 18.2246C20.2434 19.2947 17.2619 19.8248 14.2605 19.7867' fill='#FD6157'/>\n<path d='M14.2574 4.21003C15.1404 4.21003 16.0105 4.25203 16.8575 4.33203C13.6294 0.790879 9.96823 -0.873193 7.61212 0.486866C6.11206 1.3539 5.41203 3.29499 5.47103 5.77209C8.27545 4.70195 11.257 4.17195 14.2584 4.21003' fill='#FD6157'/>\n<path d='M24.0434 7.50204C23.5678 10.4656 22.5359 13.3124 21.0023 15.8924C20.5592 16.6604 20.0872 17.3925 19.5942 18.0865C24.2774 17.0585 27.5496 14.7204 27.5496 11.9982C27.5496 10.2642 26.2195 8.6851 24.0434 7.49805' fill='#55C0CF'/>\n<path d='M7.51274 8.10571C7.95576 7.33768 8.42778 6.60565 8.9208 5.91162C4.2366 6.93967 0.965454 9.27876 0.965454 11.9999C0.965454 13.734 2.29451 15.313 4.47161 16.5001C4.94709 13.5362 5.97894 10.689 7.51274 8.10872' fill='#55C0CF'/>\n<path d='M21.0014 8.10411C21.4424 8.86814 21.8415 9.64317 22.2015 10.4202C23.6495 5.84801 23.2595 1.84783 20.9034 0.487775C19.4033 -0.380262 17.3673 -0.0172464 15.2532 1.27681C17.5831 3.16962 19.5336 5.48654 21.0014 8.10511' fill='#A06BD6'/>\n<path d='M7.51275 15.8928C7.07173 15.1287 6.67271 14.3537 6.31269 13.5767C4.86063 18.1469 5.25065 22.149 7.60775 23.5101C9.10782 24.3781 11.1439 24.0151 13.258 22.7211C10.928 20.8282 8.97759 18.5113 7.50975 15.8928' fill='#A06BD6'/>\n</svg>\n" }))),
                figma.widget.h(Line, { length: 600, stroke: "#E0DDEC", strokeWidth: 1 }),
                figma.widget.h(AutoLayout, { name: "icebreaker", overflow: "visible", spacing: 8, padding: {
                        top: 32,
                        right: 32,
                        bottom: 16,
                        left: 32,
                    }, width: "fill-parent", horizontalAlignItems: "center", verticalAlignItems: "center" },
                    figma.widget.h(Text, { fontFamily: "IBM Plex Sans", fontSize: 24, fill: "#493272", width: "fill-parent", horizontalAlignText: 'center' }, icebreaker.question)),
                figma.widget.h(AutoLayout, { name: "bottom", overflow: "visible", direction: "vertical", spacing: 8, padding: {
                        top: 24,
                        right: 8,
                        bottom: 8,
                        left: 8,
                    }, width: "fill-parent", verticalAlignItems: "center", horizontalAlignItems: "center" },
                    figma.widget.h(AutoLayout, { name: "button", fill: "#493272", cornerRadius: 72, overflow: "visible", direction: "vertical", padding: {
                            vertical: 4,
                            horizontal: 24,
                        }, onClick: () => {
                            setIcebreaker((0, api_1.generateRandomIcebreaker)((0, api_1.allIcebreakers)()));
                        } },
                        figma.widget.h(Text, { name: "Gimme another one", fill: "#FFF", verticalAlignText: "center", lineHeight: 32, fontFamily: "IBM Plex Sans", fontWeight: 500 }, "Refresh")))));
        }
        widget.register(Widget);
    });
    
    'marker:resolver';

    function get_define(name) {
        if (defines[name]) {
            return defines[name];
        }
        else if (defines[name + '/index']) {
            return defines[name + '/index'];
        }
        else {
            const dependencies = ['exports'];
            const factory = (exports) => {
                try {
                    Object.defineProperty(exports, "__cjsModule", { value: true });
                    Object.defineProperty(exports, "default", { value: require(name) });
                }
                catch (_a) {
                    throw Error(['module "', name, '" not found.'].join(''));
                }
            };
            return { dependencies, factory };
        }
    }
    const instances = {};
    function resolve(name) {
        if (instances[name]) {
            return instances[name];
        }
        if (name === 'exports') {
            return {};
        }
        const define = get_define(name);
        if (typeof define.factory !== 'function') {
            return define.factory;
        }
        instances[name] = {};
        const dependencies = define.dependencies.map(name => resolve(name));
        define.factory(...dependencies);
        const exports = dependencies[define.dependencies.indexOf('exports')];
        instances[name] = (exports['__cjsModule']) ? exports.default : exports;
        return instances[name];
    }
    if (entry[0] !== null) {
        return resolve(entry[0]);
    }
})();