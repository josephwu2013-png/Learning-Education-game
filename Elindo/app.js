const SESSION_STATE_KEY = "englishQuestAcademySessionV3";
const SAVE_SLOT_PREFIX = "englishQuestAcademySaveV3:";

const B1_EXPECTATIONS = {
  listening: [
    "I can understand the main points of clear standard speech on familiar, everyday subjects, with repetition or clarification when needed.",
    "I can understand what is said to me in everyday conversations, though I may sometimes need help with specific details.",
    "I can understand the main points of discussion on familiar topics when people speak clearly.",
    "I can follow clearly spoken, straightforward short talks on familiar topics.",
    "I can understand the main points in TV programmes on familiar topics when the delivery is slow and clear, and follow simple technical information."
  ],
  reading: [
    "I can understand the main points in straightforward factual texts well enough to talk about them afterwards.",
    "I can find and understand the information I need in brochures, leaflets, and short texts related to my interests.",
    "I can understand the main points in short newspaper and magazine articles about current and familiar topics.",
    "I can follow simple instructions for a game, familiar equipment, or a cooking task.",
    "I can understand simplified novels and short stories with a clear structure.",
    "I can understand private letters about events, feelings, and wishes well enough to reply."
  ],
  spokenInteraction: [
    "I can start, maintain, and close simple face-to-face conversations on familiar topics.",
    "I can express and respond to feelings like surprise, happiness, sadness, interest, and disinterest.",
    "I can give or seek opinions in informal discussion and agree or disagree politely.",
    "I can help solve practical problems and ask others what they think.",
    "I can find out and pass on uncomplicated factual information.",
    "I can ask for and follow detailed directions.",
    "I can manage unexpected situations while travelling or on holiday.",
    "I can make arrangements by phone or in person for flights, hotels, restaurants, cinemas, and similar plans.",
    "I can have simple telephone conversations with people I know."
  ],
  spokenProduction: [
    "I can give descriptions on familiar subjects related to my interests.",
    "I can talk in detail about experiences, feelings, and reactions.",
    "I can briefly explain and justify my opinions.",
    "I can give a short prepared presentation on a familiar area and answer clear questions.",
    "I can relate the main content of short texts I have read."
  ],
  writtenProduction: [
    "I can write short, comprehensible connected texts on familiar subjects.",
    "I can write simple texts about experiences or events and describe my feelings and reactions.",
    "I can write very brief reports using a standard format to pass on routine factual information.",
    "I can write emails, messages, or notes to friends or colleagues with simple news and questions.",
    "I can write a short formal letter asking for or giving simple information."
  ],
  strategies: [
    "I can ask someone to clarify or elaborate on what they have just said.",
    "I can repeat back part of what someone has said to confirm understanding.",
    "When I cannot think of a word, I can use a similar word and invite correction.",
    "I can ask for confirmation that a form is correct and fix basic mistakes if I have time."
  ],
  quality: [
    "I know enough vocabulary to talk about family, hobbies, work, travel, news, and current events.",
    "I can make my main points clear when I explain something.",
    "I can link short phrases into a connected sequence of ideas.",
    "I can express myself reasonably accurately in familiar situations.",
    "I can keep a conversation going, though I sometimes need to pause and plan.",
    "I can use simple expressions politely in everyday situations."
  ]
};

const PLACE_CONTEXTS = [
  {
    id: "school",
    name: "School",
    summary: "classrooms, clubs, projects, and teamwork",
    helper: "teacher",
    item: "notebook",
    itemUse: "write notes",
    target: "library",
    action: "build a robot with your team",
    simpleAction: "study, learn, and join clubs",
    eventName: "after-school science club",
    time: "3:30",
    serviceDesk: "school office",
    problem: "you cannot find Room 12",
    problemFix: "ask the teacher for directions",
    projectName: "student garden project",
    projectBenefit: "teaches teamwork and responsibility",
    opinionTopic: "after-school clubs",
    writingTopic: "a school trip"
  },
  {
    id: "shop",
    name: "Shop",
    summary: "shopping, counting, asking for help, and making choices",
    helper: "cashier",
    item: "basket",
    itemUse: "carry fruit",
    target: "payment counter",
    action: "buy fruit for a class picnic",
    simpleAction: "buy food and household items",
    eventName: "weekend market workshop",
    time: "10:15",
    serviceDesk: "customer help desk",
    problem: "you think the change is wrong",
    problemFix: "ask the cashier to check the receipt",
    projectName: "reuse bag project",
    projectBenefit: "reduces waste and helps customers shop responsibly",
    opinionTopic: "bringing reusable bags",
    writingTopic: "a visit to the market"
  },
  {
    id: "forest",
    name: "Forest",
    summary: "nature trails, signs, teamwork, and outdoor discovery",
    helper: "park ranger",
    item: "map",
    itemUse: "follow the trail",
    target: "wooden bridge",
    action: "complete a nature treasure hunt",
    simpleAction: "walk, explore, and learn about animals",
    eventName: "guided forest walk",
    time: "9:45",
    serviceDesk: "ranger cabin",
    problem: "you lost the path near the waterfall",
    problemFix: "ask the ranger for the safest route",
    projectName: "forest learning programme",
    projectBenefit: "helps students learn about wildlife and teamwork",
    opinionTopic: "outdoor learning",
    writingTopic: "a walk in nature"
  },
  {
    id: "airport",
    name: "Airport",
    summary: "travel English, announcements, directions, and problem solving",
    helper: "check-in officer",
    item: "passport",
    itemUse: "check in for a flight",
    target: "Gate 6",
    action: "board a flight to Singapore",
    simpleAction: "check in, wait, and travel",
    eventName: "travel safety talk",
    time: "11:20",
    serviceDesk: "information desk",
    problem: "your flight is delayed",
    problemFix: "ask the officer for the new boarding time",
    projectName: "student travel guide project",
    projectBenefit: "helps families understand airport signs and procedures",
    opinionTopic: "preparing well for travel",
    writingTopic: "an airport journey"
  },
  {
    id: "restaurant",
    name: "Restaurant",
    summary: "menus, ordering, polite conversation, and healthy choices",
    helper: "waiter",
    item: "menu",
    itemUse: "choose your meal",
    target: "Table 8",
    action: "order lunch with your family",
    simpleAction: "order food and eat together",
    eventName: "junior cooking class",
    time: "1:00",
    serviceDesk: "front desk",
    problem: "you received the wrong meal",
    problemFix: "ask the waiter to change the order",
    projectName: "healthy lunch menu project",
    projectBenefit: "helps students make balanced food choices",
    opinionTopic: "making healthy restaurant choices",
    writingTopic: "a meal out with family"
  },
  {
    id: "library",
    name: "Library",
    summary: "books, study spaces, questions, and research",
    helper: "librarian",
    item: "library card",
    itemUse: "borrow a book",
    target: "reading corner",
    action: "find information for a project",
    simpleAction: "read, research, and borrow books",
    eventName: "reading challenge meeting",
    time: "4:10",
    serviceDesk: "library desk",
    problem: "you cannot find the history shelf",
    problemFix: "ask the librarian for help",
    projectName: "reading passport project",
    projectBenefit: "builds research habits and stronger reading confidence",
    opinionTopic: "borrowing books every week",
    writingTopic: "a visit to the library"
  },
  {
    id: "museum",
    name: "Museum",
    summary: "exhibits, tours, facts, and presentations",
    helper: "guide",
    item: "ticket",
    itemUse: "enter the exhibit hall",
    target: "dinosaur hall",
    action: "take notes about an exhibit",
    simpleAction: "visit exhibits and learn facts",
    eventName: "young explorers tour",
    time: "2:25",
    serviceDesk: "museum entrance desk",
    problem: "you missed the start of the guided tour",
    problemFix: "ask the guide for the next tour time",
    projectName: "museum talk project",
    projectBenefit: "helps students present facts clearly",
    opinionTopic: "learning through exhibits",
    writingTopic: "a museum tour"
  },
  {
    id: "hospital",
    name: "Hospital",
    summary: "health vocabulary, directions, help, and emergencies",
    helper: "nurse",
    item: "appointment card",
    itemUse: "check in for a visit",
    target: "waiting room",
    action: "describe a simple health problem clearly",
    simpleAction: "check in, wait, and ask for help",
    eventName: "health and safety talk",
    time: "9:20",
    serviceDesk: "reception desk",
    problem: "you do not know which room the doctor is in",
    problemFix: "ask the nurse for directions",
    projectName: "healthy habits project",
    projectBenefit: "teaches students how to explain everyday health needs",
    opinionTopic: "learning basic health English",
    writingTopic: "a visit to the clinic"
  },
  {
    id: "stadium",
    name: "Stadium",
    summary: "sports language, announcements, teams, and events",
    helper: "coach",
    item: "team pass",
    itemUse: "enter the practice area",
    target: "training field",
    action: "join a team activity",
    simpleAction: "watch sports and join team practice",
    eventName: "junior sports briefing",
    time: "5:00",
    serviceDesk: "stadium gate office",
    problem: "you cannot find your team meeting point",
    problemFix: "ask the coach where your team should meet",
    projectName: "sports reporter project",
    projectBenefit: "helps students report events and results more clearly",
    opinionTopic: "joining school sports",
    writingTopic: "a day at the stadium"
  },
  {
    id: "harbor",
    name: "Harbor",
    summary: "boats, travel signs, weather, and directions",
    helper: "captain",
    item: "boarding pass",
    itemUse: "board the ferry",
    target: "pier 3",
    action: "follow a ferry boarding plan",
    simpleAction: "travel, wait, and follow harbor signs",
    eventName: "harbor safety briefing",
    time: "8:40",
    serviceDesk: "ticket office",
    problem: "your ferry platform changed at the last minute",
    problemFix: "ask the captain or ticket staff for the new pier",
    projectName: "coastal travel guide",
    projectBenefit: "improves travel vocabulary and practical listening",
    opinionTopic: "travelling by boat",
    writingTopic: "a trip from the harbor"
  }
];

const PLACE_NAMES = PLACE_CONTEXTS.map((place) => place.name);
const PLACE_ITEMS = PLACE_CONTEXTS.map((place) => place.item);
const PLACE_TARGETS = PLACE_CONTEXTS.map((place) => place.target);
const PLACE_HELPERS = PLACE_CONTEXTS.map((place) => place.helper);
const PLACE_EVENTS = PLACE_CONTEXTS.map((place) => place.eventName);

const WORLD_LAYOUT = {
  cols: 60,
  rows: 36,
  tileSize: 22,
  start: { x: 28, y: 18 },
  places: {
    school: { x: 4, y: 4, w: 7, h: 5, terrain: "school", label: "SCH", gate: { x: 7, y: 9 } },
    shop: { x: 18, y: 4, w: 7, h: 5, terrain: "shop", label: "SHOP", gate: { x: 21, y: 9 } },
    library: { x: 31, y: 4, w: 7, h: 5, terrain: "library", label: "BOOK", gate: { x: 34, y: 9 } },
    airport: { x: 45, y: 3, w: 10, h: 6, terrain: "airport", label: "AIR", gate: { x: 49, y: 9 } },
    museum: { x: 8, y: 15, w: 8, h: 5, terrain: "museum", label: "MUSE", gate: { x: 11, y: 14 } },
    hospital: { x: 22, y: 15, w: 8, h: 5, terrain: "hospital", label: "CARE", gate: { x: 25, y: 14 } },
    forest: { x: 38, y: 14, w: 10, h: 8, terrain: "forest", label: "WOOD", gate: { x: 42, y: 13 } },
    restaurant: { x: 7, y: 27, w: 7, h: 5, terrain: "restaurant", label: "FOOD", gate: { x: 10, y: 26 } },
    stadium: { x: 22, y: 26, w: 10, h: 6, terrain: "stadium", label: "PLAY", gate: { x: 26, y: 25 } },
    harbor: { x: 42, y: 27, w: 10, h: 6, terrain: "harbor", label: "PORT", gate: { x: 46, y: 26 } }
  }
};

const WATER_TILES = new Set([
  ...buildRect(0, 0, 7, 4),
  ...buildRect(52, 0, 8, 6),
  ...buildRect(0, 27, 5, 9),
  ...buildRect(48, 28, 12, 8),
  ...buildRect(26, 33, 10, 3)
]);

const PATH_TILES = new Set([
  ...buildLine(2, 12, 55, 12),
  ...buildLine(2, 13, 55, 13),
  ...buildLine(6, 24, 54, 24),
  ...buildLine(6, 25, 54, 25),
  ...buildLine(28, 10, 28, 31),
  ...buildLine(29, 10, 29, 31),
  ...Object.values(WORLD_LAYOUT.places).flatMap((zone) =>
    buildPathToHub(zone.gate.x, zone.gate.y)
  )
]);

const gradeProfiles = [
  {
    id: "preschool",
    label: "Pre-School",
    band: "Starter Path",
    stage: "early",
    world: "First Words Trail",
    goal: "Name objects, follow simple directions, and answer with confidence.",
    summary:
      "Young learners explore friendly places and build first-word confidence through short, playful English tasks.",
    focus: ["phonics", "place words", "simple speaking"]
  },
  {
    id: "grade1",
    label: "Grade 1",
    band: "Starter Path",
    stage: "early",
    world: "Little Explorer Trail",
    goal: "Read short clues and choose the correct place words.",
    summary:
      "Players begin travelling through everyday places while reading simple sentences and giving short answers.",
    focus: ["reading words", "simple questions", "greetings"]
  },
  {
    id: "grade2",
    label: "Grade 2",
    band: "Starter Path",
    stage: "early",
    world: "Talking Places",
    goal: "Use fuller answers while moving through familiar locations.",
    summary:
      "This stage strengthens routines, place vocabulary, and short reading in an easy adventure format.",
    focus: ["daily routines", "place actions", "simple writing"]
  },
  {
    id: "grade3",
    label: "Grade 3",
    band: "Builder Path",
    stage: "middle",
    world: "Discovery Streets",
    goal: "Understand short passages, signs, and everyday conversations.",
    summary:
      "Learners start solving practical problems in places like school, shops, and forests through longer challenges.",
    focus: ["descriptions", "questions", "instructions"]
  },
  {
    id: "grade4",
    label: "Grade 4",
    band: "Builder Path",
    stage: "middle",
    world: "Explorer Streets",
    goal: "Connect ideas and explain what to do in real situations.",
    summary:
      "The game grows into mini stories, directions, and reason-giving tasks across each location.",
    focus: ["sequencing", "reasons", "practical English"]
  },
  {
    id: "grade5",
    label: "Grade 5",
    band: "Bridge Path",
    stage: "middle",
    world: "Adventure Routes",
    goal: "Summarize information and respond clearly in daily-life situations.",
    summary:
      "Players handle more text, clearer opinions, and stronger understanding of place-based English.",
    focus: ["summaries", "opinions", "problem solving"]
  },
  {
    id: "grade6",
    label: "Grade 6",
    band: "Bridge Path",
    stage: "middle",
    world: "Challenge Routes",
    goal: "Use practical English to follow instructions and explain ideas.",
    summary:
      "This stage prepares learners for lower secondary by making place exploration more detailed and strategic.",
    focus: ["instructions", "information finding", "clear explanations"]
  },
  {
    id: "grade7",
    label: "Grade 7",
    band: "Cambridge PET / B1",
    stage: "b1",
    world: "Bridge City",
    goal: "Build the habits needed for Grade 8 entry at Cambridge Preliminary / CEFR B1 level.",
    summary:
      "Grade 7 turns everyday place exploration into real B1 communication practice in listening, reading, speaking, writing, and repair strategies.",
    focus: ["B1 listening", "B1 reading", "B1 interaction", "B1 writing"],
    b1Track: true
  },
  {
    id: "grade8",
    label: "Grade 8",
    band: "Cambridge PET / B1",
    stage: "b1",
    world: "Gate 8 Hub",
    goal: "Maintain PET-level English while travelling through real-world situations.",
    summary:
      "Students explore familiar public places and practise Cambridge Preliminary style communication before moving toward stronger academic pathways.",
    focus: ["travel English", "telephone English", "problem solving", "connected writing"],
    b1Track: true
  },
  {
    id: "grade9",
    label: "Grade 9",
    band: "Cambridge PET / B1",
    stage: "b1",
    world: "Conversation Square",
    goal: "Use B1 English for discussion, practical tasks, and short presentations.",
    summary:
      "This stage adds more discussion, current-topic reading, and stronger connected speaking across public places.",
    focus: ["discussion", "presentations", "articles", "practical talk"],
    b1Track: true
  },
  {
    id: "grade10",
    label: "Grade 10",
    band: "Cambridge PET / B1",
    stage: "b1",
    world: "Project Lab",
    goal: "Apply B1 English to projects, reports, instructions, and teamwork.",
    summary:
      "Players use place-based tasks to practise reporting, explanation, and more accurate everyday English.",
    focus: ["reports", "instructions", "teamwork", "accuracy"],
    b1Track: true
  },
  {
    id: "grade11",
    label: "Grade 11",
    band: "Cambridge PET / B1",
    stage: "b1",
    world: "Launch Port",
    goal: "Consolidate B1 skills before moving toward First Certificate level.",
    summary:
      "This final B1 stage keeps the everyday-place adventure but expects more confident, connected, and accurate communication.",
    focus: ["consolidation", "presentations", "letters", "next-step readiness"],
    b1Track: true
  },
  {
    id: "grade12",
    label: "Grade 12",
    band: "Senior Path",
    stage: "senior",
    world: "Debate Heights",
    goal: "Move beyond B1 into stronger academic and persuasive English.",
    summary:
      "Learners still travel through real places, but now the challenges focus on analysis, argument, and formal writing.",
    focus: ["argument", "analysis", "formal writing"]
  },
  {
    id: "grade13",
    label: "Grade 13",
    band: "Senior Path",
    stage: "senior",
    world: "Mastery Summit",
    goal: "Use English with independence, flexibility, and polished expression.",
    summary:
      "The final stage blends reflection, professional communication, and confident language use across real-world settings.",
    focus: ["independence", "reflection", "polished expression"]
  }
];

const STAGE_CONFIG = {
  early: { questionsPerPlace: 14, unlockRequirement: 6 },
  middle: { questionsPerPlace: 18, unlockRequirement: 8 },
  b1: { questionsPerPlace: 22, unlockRequirement: 8 },
  senior: { questionsPerPlace: 18, unlockRequirement: 8 }
};

const PLACEMENT_QUESTIONS = [
  {
    prompt: "Which word matches the picture clue: a place where students learn?",
    options: ["School", "Bridge", "Harbor", "Forest"],
    answer: 0,
    weight: 1
  },
  {
    prompt: 'Choose the best sentence: "I ___ to the library every week."',
    options: ["go", "goes", "going", "gone"],
    answer: 0,
    weight: 1
  },
  {
    prompt:
      "Read this: 'Please check in at the front desk and wait near Room 4.' Where should you check in?",
    options: ["At the front desk", "Near Room 4", "Outside the school", "At the bus stop"],
    answer: 0,
    weight: 2
  },
  {
    prompt: 'Which sentence gives an opinion with a reason?',
    options: [
      "I think the class is useful because the teacher explains clearly.",
      "The class starts at nine o'clock.",
      "My notebook is on the table.",
      "We walked to the library yesterday."
    ],
    answer: 0,
    weight: 2
  },
  {
    prompt: "At an airport, which sentence is the most polite way to ask for help?",
    options: [
      "Excuse me, could you tell me where Gate 6 is, please?",
      "Gate 6. Show me now.",
      "You are wrong.",
      "I do not need words."
    ],
    answer: 0,
    weight: 3
  },
  {
    prompt:
      "Read this short article sentence: 'The new reading project helps students build confidence by using English in real situations.' What is the main benefit?",
    options: [
      "It helps students build confidence.",
      "It closes the library early.",
      "It removes all homework.",
      "It changes every class schedule."
    ],
    answer: 0,
    weight: 3
  },
  {
    prompt: "Which sentence sounds the most connected and accurate?",
    options: [
      "Although I was nervous at first, I asked for help and understood the instructions.",
      "I nervous first and then maybe help words.",
      "Help came because nothing sentence.",
      "Instructions, yes, but no ask and no plan."
    ],
    answer: 0,
    weight: 5
  },
  {
    prompt: "Which line works best in a short formal email?",
    options: [
      "Could you please send me the timetable for next week's class?",
      "Send timetable fast.",
      "What timetable maybe thing?",
      "I am not waiting for details."
    ],
    answer: 0,
    weight: 5
  }
];

const STUDY_SHOP_ITEMS = [
  {
    id: "focus-notebook",
    name: "Focus Notebook",
    cost: 40,
    effect: "A study reward that marks your desk as organised and ready."
  },
  {
    id: "coffee-pass",
    name: "Coffee Break Pass",
    cost: 65,
    effect: "A calm reward for long practice sessions in learning mode."
  },
  {
    id: "gold-pen",
    name: "Gold Pen",
    cost: 95,
    effect: "A premium writing reward for consistent daily work."
  },
  {
    id: "mentor-lamp",
    name: "Mentor Lamp",
    cost: 140,
    effect: "A top reward for serious learners who want a polished study desk."
  }
];

gradeProfiles.forEach((profile) => {
  profile.places = PLACE_CONTEXTS.map((place, index) => {
    const questions = buildQuestionsForStage(profile, place, index);
    return {
      ...place,
      order: index,
      unlockRequirement: STAGE_CONFIG[profile.stage].unlockRequirement,
      questions: expandQuestionSet(profile, place, questions)
    };
  });
  profile.totalQuestions = profile.places.reduce((sum, place) => sum + place.questions.length, 0);
});

const state = loadState();
let appStarted = false;
let setupMode = "new";
let mapHintMessage = "Step into a building or area to focus that place.";
const placementState = {
  open: false,
  index: 0,
  score: 0,
  selectedAnswer: null,
  finished: false,
  recommendation: null
};
const worldMapCache = {
  gradeId: null,
  cells: new Map(),
  markers: new Map(),
  avatarEl: null
};
const pressedDirections = new Set();
let movementLoopActive = false;
let lastMoveAt = 0;
const MOVE_REPEAT_MS = 80;

const elements = {
  appShell: document.querySelector("#appShell"),
  startScreen: document.querySelector("#startScreen"),
  newGameTabBtn: document.querySelector("#newGameTabBtn"),
  loadGameTabBtn: document.querySelector("#loadGameTabBtn"),
  setupForm: document.querySelector("#setupForm"),
  loadForm: document.querySelector("#loadForm"),
  playerNameInput: document.querySelector("#playerNameInput"),
  startGradeSelect: document.querySelector("#startGradeSelect"),
  avatarThemeSelect: document.querySelector("#avatarThemeSelect"),
  soundModeSelect: document.querySelector("#soundModeSelect"),
  savePasswordInput: document.querySelector("#savePasswordInput"),
  loadPasswordInput: document.querySelector("#loadPasswordInput"),
  openSetupSettingsBtn: document.querySelector("#openSetupSettingsBtn"),
  startPlacementBtn: document.querySelector("#startPlacementBtn"),
  placementPanel: document.querySelector("#placementPanel"),
  placementProgress: document.querySelector("#placementProgress"),
  placementPrompt: document.querySelector("#placementPrompt"),
  placementChoices: document.querySelector("#placementChoices"),
  placementNextBtn: document.querySelector("#placementNextBtn"),
  placementCloseBtn: document.querySelector("#placementCloseBtn"),
  placementResult: document.querySelector("#placementResult"),
  experienceModeSelect: document.querySelector("#experienceModeSelect"),
  themeSelect: document.querySelector("#themeSelect"),
  startFeedback: document.querySelector("#startFeedback"),
  xpValue: document.querySelector("#xpValue"),
  starValue: document.querySelector("#starValue"),
  streakValue: document.querySelector("#streakValue"),
  coinValue: document.querySelector("#coinValue"),
  gradeGrid: document.querySelector("#gradeGrid"),
  placeGrid: document.querySelector("#placeGrid"),
  learningPlaceGrid: document.querySelector("#learningPlaceGrid"),
  learningPlaceStatus: document.querySelector("#learningPlaceStatus"),
  placeRailStatus: document.querySelector("#placeRailStatus"),
  mapFrame: document.querySelector("#mapFrame"),
  worldMap: document.querySelector("#worldMap"),
  mapStatus: document.querySelector("#mapStatus"),
  mapLocation: document.querySelector("#mapLocation"),
  mapObjective: document.querySelector("#mapObjective"),
  mapHint: document.querySelector("#mapHint"),
  moveUpBtn: document.querySelector("#moveUpBtn"),
  moveLeftBtn: document.querySelector("#moveLeftBtn"),
  moveRightBtn: document.querySelector("#moveRightBtn"),
  moveDownBtn: document.querySelector("#moveDownBtn"),
  startChallengeBtn: document.querySelector("#startChallengeBtn"),
  playerBadge: document.querySelector("#playerBadge"),
  modeBadge: document.querySelector("#modeBadge"),
  saveStatus: document.querySelector("#saveStatus"),
  saveNowBtn: document.querySelector("#saveNowBtn"),
  openSettingsBtn: document.querySelector("#openSettingsBtn"),
  settingsModal: document.querySelector("#settingsModal"),
  settingsBackdrop: document.querySelector("#settingsBackdrop"),
  closeSettingsBtn: document.querySelector("#closeSettingsBtn"),
  saveSettingsBtn: document.querySelector("#saveSettingsBtn"),
  heroEyebrow: document.querySelector("#heroEyebrow"),
  heroText: document.querySelector("#heroText"),
  heroBadgeOne: document.querySelector("#heroBadgeOne"),
  heroBadgeTwo: document.querySelector("#heroBadgeTwo"),
  heroBadgeThree: document.querySelector("#heroBadgeThree"),
  worldEyebrow: document.querySelector("#worldEyebrow"),
  worldTitle: document.querySelector("#worldTitle"),
  gradeTitle: document.querySelector("#gradeTitle"),
  gradeBadge: document.querySelector("#gradeBadge"),
  gradeSummary: document.querySelector("#gradeSummary"),
  placeSummary: document.querySelector("#placeSummary"),
  worldValue: document.querySelector("#worldValue"),
  goalValue: document.querySelector("#goalValue"),
  skillValue: document.querySelector("#skillValue"),
  miniLabelOne: document.querySelector("#miniLabelOne"),
  miniLabelTwo: document.querySelector("#miniLabelTwo"),
  miniLabelThree: document.querySelector("#miniLabelThree"),
  missionList: document.querySelector("#missionList"),
  challengeTitle: document.querySelector("#challengeTitle"),
  challengeType: document.querySelector("#challengeType"),
  challengeSkill: document.querySelector("#challengeSkill"),
  challengeMedia: document.querySelector("#challengeMedia"),
  challengeForm: document.querySelector("#challengeForm"),
  choiceArea: document.querySelector("#choiceArea"),
  textAnswerWrap: document.querySelector("#textAnswerWrap"),
  textAnswer: document.querySelector("#textAnswer"),
  playAudioBtn: document.querySelector("#playAudioBtn"),
  speakBtn: document.querySelector("#speakBtn"),
  submitBtn: document.querySelector("#submitBtn"),
  feedbackBox: document.querySelector("#feedbackBox"),
  curriculumTitle: document.querySelector("#curriculumTitle"),
  curriculumPill: document.querySelector("#curriculumPill"),
  curriculumIntro: document.querySelector("#curriculumIntro"),
  curriculumContent: document.querySelector("#curriculumContent"),
  resetProgressBtn: document.querySelector("#resetProgressBtn"),
  studyHub: document.querySelector("#studyHub"),
  studyTrackValue: document.querySelector("#studyTrackValue"),
  studyPlaceValue: document.querySelector("#studyPlaceValue"),
  studyRewardValue: document.querySelector("#studyRewardValue"),
  studyHubText: document.querySelector("#studyHubText"),
  studyShop: document.querySelector("#studyShop"),
  shopList: document.querySelector("#shopList"),
  shopStatus: document.querySelector("#shopStatus"),
  dashboardEyebrowOne: document.querySelector("#dashboardEyebrowOne"),
  dashboardTitleOne: document.querySelector("#dashboardTitleOne"),
  dashboardPillOne: document.querySelector("#dashboardPillOne"),
  dashboardTextOne: document.querySelector("#dashboardTextOne"),
  dashboardEyebrowTwo: document.querySelector("#dashboardEyebrowTwo"),
  dashboardTitleTwo: document.querySelector("#dashboardTitleTwo"),
  dashboardPillTwo: document.querySelector("#dashboardPillTwo"),
  dashboardTextTwo: document.querySelector("#dashboardTextTwo")
};

elements.newGameTabBtn.addEventListener("click", () => setSetupMode("new"));
elements.loadGameTabBtn.addEventListener("click", () => setSetupMode("load"));
elements.setupForm.addEventListener("submit", handleNewGameSubmit);
elements.loadForm.addEventListener("submit", handleLoadGameSubmit);
elements.openSetupSettingsBtn?.addEventListener("click", openSettingsModal);
elements.openSettingsBtn?.addEventListener("click", openSettingsModal);
elements.closeSettingsBtn?.addEventListener("click", closeSettingsModal);
elements.settingsBackdrop?.addEventListener("click", closeSettingsModal);
elements.saveSettingsBtn?.addEventListener("click", saveSettingsFromModal);
elements.startPlacementBtn.addEventListener("click", startPlacementAssessment);
elements.placementNextBtn.addEventListener("click", advancePlacementAssessment);
elements.placementCloseBtn.addEventListener("click", closePlacementAssessment);
elements.challengeForm.addEventListener("submit", handleSubmit);
elements.playAudioBtn.addEventListener("click", playCurrentAudio);
elements.speakBtn.addEventListener("click", captureSpeech);
elements.saveNowBtn.addEventListener("click", saveCurrentProgress);
elements.resetProgressBtn.addEventListener("click", resetProgress);
elements.moveUpBtn.addEventListener("click", () => movePlayer(0, -1));
elements.moveLeftBtn.addEventListener("click", () => movePlayer(-1, 0));
elements.moveRightBtn.addEventListener("click", () => movePlayer(1, 0));
elements.moveDownBtn.addEventListener("click", () => movePlayer(0, 1));
elements.startChallengeBtn.addEventListener("click", openSelectedPlaceChallenge);
document.addEventListener("keydown", handleMovementKeys);
document.addEventListener("keyup", handleMovementKeyUp);

populateSetupOptions();
loadSetupDraft();
ensureValidSelection();
render();
renderStartScreen();

function buildQuestionsForStage(profile, place, placeIndex) {
  if (profile.stage === "early") {
    return buildEarlyQuestions(profile, place, placeIndex);
  }
  if (profile.stage === "middle") {
    return buildMiddleQuestions(profile, place, placeIndex);
  }
  if (profile.stage === "b1") {
    return buildB1Questions(profile, place, placeIndex);
  }
  return buildSeniorQuestions(profile, place, placeIndex);
}

function buildEarlyQuestions(profile, place, placeIndex) {
  const idBase = `${profile.id}-${place.id}`;
  const placeName = place.name.toLowerCase();

  return [
    makeMultiple({
      id: `${idBase}-q1`,
      title: "Item Match",
      skill: "Vocabulary",
      objective: `Choose the item used at the ${placeName}.`,
      prompt: `Which item helps you ${place.itemUse} at the ${placeName}?`,
      correct: place.item,
      distractors: collectDistractors(PLACE_ITEMS, place.item),
      explanation: `The key item for the ${placeName} is a ${place.item}.`,
      xp: 12,
      stars: 1,
      core: true
    }),
    makeMultiple({
      id: `${idBase}-q2`,
      title: "Reading Step",
      skill: "Reading",
      objective: "Read one sentence and find the place target.",
      passage: `At the ${placeName}, Mia carries a ${place.item} and walks to the ${place.target}.`,
      prompt: "Where does Mia go?",
      correct: place.target,
      distractors: collectDistractors(PLACE_TARGETS, place.target),
      explanation: "Look for the place word that answers where someone goes.",
      xp: 12,
      stars: 1,
      core: true
    }),
    makeFixedMultiple({
      id: `${idBase}-q3`,
      title: "Greeting Gate",
      skill: "Spoken Interaction",
      objective: `Choose a kind way to speak to the ${place.helper}.`,
      prompt: `You want help from the ${place.helper}. What should you say?`,
      options: [
        "Hello, can you help me, please?",
        "No talking now.",
        "Fast! Do it!",
        "I walk away."
      ],
      answer: 0,
      explanation: "Polite English helps the player move forward in every place.",
      xp: 12,
      stars: 1,
      core: true
    }),
    makeMultiple({
      id: `${idBase}-q4`,
      title: "Place Action",
      skill: "Understanding",
      objective: `Choose what people usually do at the ${placeName}.`,
      prompt: `What do people often do at the ${placeName}?`,
      correct: place.simpleAction,
      distractors: collectDistractors(
        PLACE_CONTEXTS.map((item) => item.simpleAction),
        place.simpleAction
      ),
      explanation: `Each place has its own action words and routines.`,
      xp: 12,
      stars: 1,
      core: true
    }),
    makeMultiple({
      id: `${idBase}-q5`,
      title: "Sign Trail",
      skill: "Reading",
      objective: "Follow a simple sign.",
      passage: `Sign: Go to the ${place.target}.`,
      prompt: "Where should you go?",
      correct: place.target,
      distractors: collectDistractors(PLACE_TARGETS, place.target),
      explanation: "Good readers follow simple signs and instructions.",
      xp: 12,
      stars: 1,
      core: true
    }),
    makeMultiple({
      id: `${idBase}-q6`,
      title: "Listening Bell",
      skill: "Listening",
      objective: "Hear one short instruction and answer the key detail.",
      voiceText: `Welcome to the ${place.name}. Bring your ${place.item} and go to the ${place.target}.`,
      prompt: "What should you bring?",
      correct: place.item,
      distractors: collectDistractors(PLACE_ITEMS, place.item),
      explanation: "Listening carefully helps you collect the right item.",
      xp: 14,
      stars: 2,
      core: false
    }),
    makeFixedMultiple({
      id: `${idBase}-q7`,
      title: "Help Door",
      skill: "Spoken Interaction",
      objective: "Choose the best way to ask for help.",
      prompt: `You need help because ${place.problem}. Which answer is best?`,
      options: [
        `Excuse me, ${place.problem}. Can you help me, please?`,
        "No help. I stay silent.",
        "Wrong place! Bad place!",
        "I run in circles."
      ],
      answer: 0,
      explanation: "Short, clear, polite sentences keep the adventure going.",
      xp: 14,
      stars: 2,
      core: false
    }),
    makeTyping({
      id: `${idBase}-q8`,
      title: "Word Collector",
      skill: "Writing",
      objective: `Type a few words you might see at the ${placeName}.`,
      prompt: `Type two or three easy words you might see at the ${placeName}.`,
      keywords: [place.item, place.target.toLowerCase(), place.helper, place.name.toLowerCase()],
      threshold: 2,
      sample: `Example: ${place.item} ${place.name.toLowerCase()}`,
      explanation: "Writing short place words builds confidence and memory.",
      xp: 16,
      stars: 2,
      core: false
    })
  ];
}

function buildMiddleQuestions(profile, place, placeIndex) {
  const idBase = `${profile.id}-${place.id}`;
  const placeName = place.name.toLowerCase();
  const middlePassage =
    `Our class visited the ${placeName} today. First we met the ${place.helper}, then we used a ${place.item}. ` +
    `After that, we went to the ${place.target} and learned how to ${place.action}.`;

  return [
    makeMultiple({
      id: `${idBase}-q1`,
      title: "Word Meaning",
      skill: "Vocabulary",
      objective: `Choose the word that fits the ${placeName}.`,
      prompt: `Which item would you use at the ${placeName} to ${place.itemUse}?`,
      correct: place.item,
      distractors: collectDistractors(PLACE_ITEMS, place.item),
      explanation: `Vocabulary grows when learners connect words to real places.`,
      xp: 14,
      stars: 1,
      core: true
    }),
    makeMultiple({
      id: `${idBase}-q2`,
      title: "Reading Detail",
      skill: "Reading",
      objective: "Read a short paragraph and find one important detail.",
      passage: middlePassage,
      prompt: "Where did the class go after meeting the helper?",
      correct: place.target,
      distractors: collectDistractors(PLACE_TARGETS, place.target),
      explanation: "Look for the sequence words and the location clue.",
      xp: 14,
      stars: 1,
      core: true
    }),
    makeMultiple({
      id: `${idBase}-q3`,
      title: "Main Idea",
      skill: "Reading",
      objective: "Choose the main action in the passage.",
      passage: middlePassage,
      prompt: "What did the class learn how to do?",
      correct: place.action,
      distractors: collectDistractors(
        PLACE_CONTEXTS.map((item) => item.action),
        place.action
      ),
      explanation: "Strong readers can find the main activity in a paragraph.",
      xp: 14,
      stars: 1,
      core: true
    }),
    makeFixedMultiple({
      id: `${idBase}-q4`,
      title: "Polite Voice",
      skill: "Spoken Interaction",
      objective: `Choose a polite way to speak to the ${place.helper}.`,
      prompt: `You want to speak to the ${place.helper}. What is the best sentence?`,
      options: [
        `Could you help me at the ${placeName}, please?`,
        "You must help me now.",
        "Help. Fast. No thanks.",
        "I will not explain."
      ],
      answer: 0,
      explanation: "Middle grades should use fuller and kinder sentences.",
      xp: 16,
      stars: 2,
      core: true
    }),
    makeMultiple({
      id: `${idBase}-q5`,
      title: "Instruction Track",
      skill: "Reading",
      objective: "Follow a practical instruction.",
      passage: `Instructions: Meet at the ${place.serviceDesk}. Bring a ${place.item}. Then go to the ${place.target}.`,
      prompt: "Where do you meet first?",
      correct: place.serviceDesk,
      distractors: collectDistractors(
        PLACE_CONTEXTS.map((item) => item.serviceDesk),
        place.serviceDesk
      ),
      explanation: "Following instructions is a big part of practical English.",
      xp: 16,
      stars: 2,
      core: true
    }),
    makeMultiple({
      id: `${idBase}-q6`,
      title: "Listening Signal",
      skill: "Listening",
      objective: "Catch the main detail in a clear spoken message.",
      voiceText:
        `Good morning. The ${place.eventName} starts at ${place.time}. ` +
        `Please check in at the ${place.serviceDesk} and bring your ${place.item}.`,
      prompt: "Where should you check in?",
      correct: place.serviceDesk,
      distractors: collectDistractors(
        PLACE_CONTEXTS.map((item) => item.serviceDesk),
        place.serviceDesk
      ),
      explanation: "Listeners should notice the key practical detail.",
      xp: 18,
      stars: 2,
      core: false
    }),
    makeFixedMultiple({
      id: `${idBase}-q7`,
      title: "Problem Solver",
      skill: "Spoken Interaction",
      objective: "Choose the sentence that solves a real problem.",
      prompt: `You are at the ${placeName} and ${place.problem}. What should you say?`,
      options: [
        `Excuse me, ${place.problem}. Could you help me, please?`,
        "I will never ask.",
        "Everything is wrong forever.",
        "No sentence now."
      ],
      answer: 0,
      explanation: "Clear problem-solving language helps players move to the next place.",
      xp: 18,
      stars: 2,
      core: false
    }),
    makeFixedMultiple({
      id: `${idBase}-q8`,
      title: "Direction Choice",
      skill: "Directions",
      objective: "Choose a sentence for asking where to go.",
      prompt: `You need to get to the ${place.target}. What is the best question?`,
      options: [
        `Could you tell me how to get to the ${place.target}, please?`,
        "Where target maybe now?",
        "No directions needed.",
        "I like walking slowly."
      ],
      answer: 0,
      explanation: "Asking clear direction questions builds real confidence.",
      xp: 18,
      stars: 2,
      core: false
    }),
    makeTyping({
      id: `${idBase}-q9`,
      title: "Place Journal",
      skill: "Writing",
      objective: `Write a short summary of a visit to the ${placeName}.`,
      prompt:
        `Write one or two sentences about ${place.writingTopic}. Say what you did and one thing you learned.`,
      keywords: [place.name.toLowerCase(), "went", "did", "learned", place.item, place.target.toLowerCase()],
      threshold: 3,
      sample:
        `Example: We went to the ${place.name.toLowerCase()} and used a ${place.item}. ` +
        `I learned how to ${place.action}.`,
      explanation: "Connected writing grows when learners add actions and one useful detail.",
      xp: 20,
      stars: 3,
      core: false
    }),
    makeTyping({
      id: `${idBase}-q10`,
      title: "Reason Builder",
      skill: "Writing",
      objective: `Give an opinion about the ${placeName}.`,
      prompt: `Write a short opinion about ${place.opinionTopic}. Use "because" in your answer.`,
      keywords: [place.name.toLowerCase(), "because", "I", "think", "good", "helpful", place.item],
      threshold: 2,
      sample: `Example: I think ${place.opinionTopic} is useful because it helps people make better choices.`,
      explanation: "Middle-grade writers should start giving reasons, not only short answers.",
      xp: 20,
      stars: 3,
      core: false
    })
  ];
}

function buildB1Questions(profile, place, placeIndex) {
  const idBase = `${profile.id}-${place.id}`;
  const placeName = place.name.toLowerCase();
  const voiceText =
    `Good afternoon. The ${place.eventName} at the ${placeName} begins at ${place.time}. ` +
    `Please check in at the ${place.serviceDesk} and bring your ${place.item}. ` +
    `Today you will ${place.action}.`;
  const brochureText =
    `${place.name} Explorer Programme runs every Saturday. Visitors check in at the ${place.serviceDesk}, ` +
    `bring a ${place.item}, and join activities that teach them how to ${place.action}. ` +
    `The programme is popular because it is practical and friendly for new learners.`;
  const articleText =
    `A local ${placeName} has started the ${place.projectName}. Teachers and families say it ${place.projectBenefit}. ` +
    `The project also gives students more chances to use everyday English in real situations.`;

  return [
    makeMultiple({
      id: `${idBase}-q1`,
      title: "Listening Main Point",
      skill: "Listening",
      objective: "Understand the main point of a clear spoken announcement.",
      voiceText,
      prompt: "What is the announcement mainly about?",
      correct: place.eventName,
      distractors: collectDistractors(PLACE_EVENTS, place.eventName),
      explanation: "B1 listeners should catch the main point of clear standard speech.",
      xp: 18,
      stars: 2,
      core: true
    }),
    makeMultiple({
      id: `${idBase}-q2`,
      title: "Listening Detail",
      skill: "Listening",
      objective: "Find one practical detail in the spoken message.",
      voiceText,
      prompt: "Where should visitors check in?",
      correct: place.serviceDesk,
      distractors: collectDistractors(
        PLACE_CONTEXTS.map((item) => item.serviceDesk),
        place.serviceDesk
      ),
      explanation: "B1 learners should understand practical details when speech is clear.",
      xp: 18,
      stars: 2,
      core: true
    }),
    makeMultiple({
      id: `${idBase}-q3`,
      title: "Brochure Scan",
      skill: "Reading",
      objective: "Scan a short factual text for needed information.",
      passage: brochureText,
      prompt: "What should visitors bring?",
      correct: place.item,
      distractors: collectDistractors(PLACE_ITEMS, place.item),
      explanation: "This matches the B1 goal of finding information in brochures and short texts.",
      xp: 18,
      stars: 2,
      core: true
    }),
    makeMultiple({
      id: `${idBase}-q4`,
      title: "Article Focus",
      skill: "Reading",
      objective: "Understand the main idea in a short article.",
      passage: articleText,
      prompt: `What is one benefit of the ${place.projectName}?`,
      correct: place.projectBenefit,
      distractors: [
        "It removes every problem immediately.",
        "It closes public places early each day.",
        "It stops students from working together."
      ],
      explanation: "B1 reading includes the main points in short articles about familiar topics.",
      xp: 18,
      stars: 2,
      core: true
    }),
    makeFixedMultiple({
      id: `${idBase}-q5`,
      title: "Polite Request",
      skill: "Spoken Interaction",
      objective: "Ask for information politely in a familiar place.",
      prompt: `Which sentence is best if you need help finding the ${place.target}?`,
      options: [
        `Could you tell me how to get to the ${place.target}, please?`,
        "Target. Fast. Where?",
        "I am not asking anything.",
        "You go. I wait."
      ],
      answer: 0,
      explanation: "B1 interaction includes asking for and following detailed directions politely.",
      xp: 20,
      stars: 3,
      core: true
    }),
    makeFixedMultiple({
      id: `${idBase}-q6`,
      title: "Practical Problem",
      skill: "Spoken Interaction",
      objective: "Choose the best sentence for solving a real-world problem.",
      prompt: `You are at the ${placeName} and ${place.problem}. Which reply is best?`,
      options: [
        `Excuse me, ${place.problem}. Could you help me, please?`,
        "This place is bad. Bye.",
        "No words. Only worry.",
        "I will guess everything."
      ],
      answer: 0,
      explanation: "B1 speakers should help solve practical problems and pass on clear information.",
      xp: 20,
      stars: 3,
      core: true
    }),
    makeFixedMultiple({
      id: `${idBase}-q7`,
      title: "Arrangement Line",
      skill: "Spoken Interaction",
      objective: "Make or confirm an arrangement clearly.",
      prompt: `You need to meet at the ${place.serviceDesk} at ${place.time}. Which sentence works best?`,
      options: [
        `Great, I will meet you at the ${place.serviceDesk} at ${place.time}.`,
        "Maybe somewhere sometime.",
        "Meeting not words now.",
        "Time is a desk."
      ],
      answer: 0,
      explanation: "B1 interaction includes making arrangements clearly in everyday situations.",
      xp: 20,
      stars: 3,
      core: false
    }),
    makeSpeaking({
      id: `${idBase}-q8`,
      title: "Opinion Spark",
      skill: "Spoken Production",
      objective: "Give a short opinion and support it with a reason.",
      prompt:
        `Say or type your opinion about ${place.opinionTopic}. Give one reason and one example from the ${placeName}.`,
      keywords: [place.name.toLowerCase(), "because", place.opinionTopic.split(" ")[0], "I think", place.item, place.target.toLowerCase()],
      threshold: 2,
      sample:
        `I think ${place.opinionTopic} is important because it helps people make better decisions at the ${placeName}.`,
      explanation: "B1 speakers can briefly explain and justify opinions on familiar topics.",
      xp: 22,
      stars: 3,
      core: false
    }),
    makeTyping({
      id: `${idBase}-q9`,
      title: "Email Mission",
      skill: "Written Production",
      objective: "Write a short connected message about a familiar event.",
      prompt:
        `Write a short email to a friend about ${place.writingTopic}. Say where you went, what you did, and how you felt.`,
      keywords: [place.name.toLowerCase(), "went", "did", "felt", place.item, place.target.toLowerCase(), "because"],
      threshold: 3,
      sample:
        `Example: I went to the ${place.name.toLowerCase()} and used a ${place.item}. ` +
        `We went to the ${place.target} and I felt excited because I learned something useful.`,
      explanation: "B1 writing expects short connected texts about experiences, feelings, and reactions.",
      xp: 24,
      stars: 3,
      core: false
    }),
    makeFixedMultiple({
      id: `${idBase}-q10`,
      title: "Clarify Strategy",
      skill: "Strategies",
      objective: "Use a repair strategy when you need more information.",
      prompt: "Which sentence is the best clarification strategy?",
      options: [
        "Could you explain that last part again, please?",
        "I will guess everything.",
        "No more questions forever.",
        "You are wrong."
      ],
      answer: 0,
      explanation: "B1 learners should ask for clarification and keep communication moving.",
      xp: 18,
      stars: 2,
      core: false
    }),
    makeFixedMultiple({
      id: `${idBase}-q11`,
      title: "Quality Of Language",
      skill: "Quality of Language",
      objective: "Choose the clearest connected sentence.",
      prompt: `Which sentence sounds the most accurate and connected for the ${placeName}?`,
      options: [
        `I went to the ${place.name.toLowerCase()}, and I asked the ${place.helper} for help because I needed clear information.`,
        `${place.name} good. Me there. Fast help maybe.`,
        `I no understand and no ask.`,
        `Place words broken now.`
      ],
      answer: 0,
      explanation: "B1 quality includes connected phrasing and reasonably accurate everyday language.",
      xp: 18,
      stars: 2,
      core: false
    }),
    makeTyping({
      id: `${idBase}-q12`,
      title: "Project Summary",
      skill: "Written Production",
      objective: "Pass on factual information in a short connected text.",
      prompt:
        `Write a short summary of the ${place.projectName}. Mention the place, the main idea, and one benefit.`,
      keywords: [place.projectName.split(" ")[0].toLowerCase(), place.name.toLowerCase(), "benefit", "helps", "students", place.projectBenefit.split(" ")[0].toLowerCase()],
      threshold: 3,
      sample:
        `Example: The ${place.projectName} takes place at the ${place.name.toLowerCase()}. ` +
        `Its main idea is to help learners use English in real situations, and it ${place.projectBenefit}.`,
      explanation: "B1 learners should be able to write short, connected, factual texts.",
      xp: 24,
      stars: 3,
      core: false
    })
  ];
}

function buildSeniorQuestions(profile, place, placeIndex) {
  const idBase = `${profile.id}-${place.id}`;
  const placeName = place.name.toLowerCase();
  const articleText =
    `The ${place.projectName} at the ${placeName} has become popular because it ${place.projectBenefit}. ` +
    `Teachers also believe that it gives students stronger independence and more confidence in real-world English.`;

  return [
    makeMultiple({
      id: `${idBase}-q1`,
      title: "Precision Word",
      skill: "Vocabulary",
      objective: "Choose the strongest word for the context.",
      prompt: `Which word best fits a visit to the ${placeName}: ${place.item}, because you use it to ${place.itemUse}?`,
      correct: place.item,
      distractors: collectDistractors(PLACE_ITEMS, place.item),
      explanation: "Senior learners should select precise vocabulary in context.",
      xp: 18,
      stars: 2,
      core: true
    }),
    makeMultiple({
      id: `${idBase}-q2`,
      title: "Article Analysis",
      skill: "Reading",
      objective: "Identify the central claim in a short analytical text.",
      passage: articleText,
      prompt: "What is the main claim of the article?",
      correct: `The ${place.projectName} helps learners grow in practical and confident English use.`,
      distractors: [
        `The ${place.name} should close earlier each week.`,
        `Students should stop visiting the ${place.name.toLowerCase()}.`,
        `Only teachers benefit from the ${place.projectName}.`
      ],
      explanation: "Senior readers should extract the central claim, not only one detail.",
      xp: 18,
      stars: 2,
      core: true
    }),
    makeMultiple({
      id: `${idBase}-q3`,
      title: "Listening Focus",
      skill: "Listening",
      objective: "Follow a short spoken briefing and identify the key instruction.",
      voiceText:
        `Before joining today's ${place.eventName}, check in at the ${place.serviceDesk}, bring your ${place.item}, and be ready to ${place.action}. ` +
        `Please arrive ten minutes early so we can begin on time.`,
      prompt: "What is one key instruction in the briefing?",
      correct: `Check in at the ${place.serviceDesk}`,
      distractors: [
        "Arrive one hour late",
        `Leave your ${place.item} at home`,
        `Skip the ${place.eventName}`
      ],
      explanation: "Advanced learners should filter the key instruction quickly.",
      xp: 18,
      stars: 2,
      core: true
    }),
    makeFixedMultiple({
      id: `${idBase}-q4`,
      title: "Debate Reply",
      skill: "Spoken Interaction",
      objective: "Choose the clearest persuasive response.",
      prompt: `A classmate says ${place.opinionTopic} does not matter. Which reply is strongest?`,
      options: [
        `I disagree because ${place.opinionTopic} helps people make better decisions in the ${placeName}.`,
        "No. Wrong. End.",
        "Maybe words later.",
        "Everything is the same."
      ],
      answer: 0,
      explanation: "Senior learners should support disagreement with a clear reason.",
      xp: 20,
      stars: 3,
      core: true
    }),
    makeFixedMultiple({
      id: `${idBase}-q5`,
      title: "Formal Question",
      skill: "Written Production",
      objective: "Recognize the most appropriate formal request.",
      prompt: `Which sentence best asks for information about the ${place.eventName}?`,
      options: [
        `Could you please send me the schedule and entry details for the ${place.eventName}?`,
        "Send details now.",
        "What time maybe thing?",
        "I refuse all information."
      ],
      answer: 0,
      explanation: "Formal writing depends on tone as much as information.",
      xp: 20,
      stars: 3,
      core: true
    }),
    makeFixedMultiple({
      id: `${idBase}-q6`,
      title: "Real-World Repair",
      skill: "Problem Solving",
      objective: "Choose the sentence that addresses a practical issue professionally.",
      prompt: `You are at the ${placeName} and ${place.problem}. Which response is strongest?`,
      options: [
        `Excuse me, ${place.problem}. Could you check this for me, please?`,
        "Everything is broken forever.",
        "I will not explain the issue.",
        "No sentence needed."
      ],
      answer: 0,
      explanation: "Professional communication stays calm, precise, and solution-focused.",
      xp: 20,
      stars: 3,
      core: false
    }),
    makeSpeaking({
      id: `${idBase}-q7`,
      title: "Reflective Talk",
      skill: "Spoken Production",
      objective: "Give a short reflective response using detail and opinion.",
      prompt:
        `Talk about a time you visited a ${placeName}. Describe what happened, what you learned, and what you would do better next time.`,
      keywords: [place.name.toLowerCase(), "learned", "next time", "I", "because", place.item],
      threshold: 3,
      sample:
        `I visited a ${place.name.toLowerCase()} and learned how important clear communication is. ` +
        `Next time I would ask questions earlier so I can understand every step.`,
      explanation: "Senior speakers should connect experience, reflection, and future action.",
      xp: 22,
      stars: 3,
      core: false
    }),
    makeTyping({
      id: `${idBase}-q8`,
      title: "Reflection Note",
      skill: "Written Production",
      objective: "Write a short reflective paragraph with purpose.",
      prompt:
        `Write a short reflection about ${place.writingTopic}. Include one challenge, one success, and one insight.`,
      keywords: [place.name.toLowerCase(), "challenge", "success", "learned", "insight", "next"],
      threshold: 3,
      sample:
        `Example: One challenge at the ${place.name.toLowerCase()} was understanding every direction. ` +
        `A success was asking for help clearly. I learned that calm communication improves the result.`,
      explanation: "Reflective writing should describe events and draw a clear lesson from them.",
      xp: 24,
      stars: 3,
      core: false
    }),
    makeFixedMultiple({
      id: `${idBase}-q9`,
      title: "Connected Register",
      skill: "Quality of Language",
      objective: "Choose the most polished connected sentence.",
      prompt: `Which sentence is the most polished for the ${placeName}?`,
      options: [
        `Although I was unsure at first, I asked the ${place.helper} for help and solved the problem successfully.`,
        "I unsure first. Problem maybe. Words broken.",
        "No link. No plan. No help.",
        "Place happened and things."
      ],
      answer: 0,
      explanation: "Senior language should sound connected, controlled, and purposeful.",
      xp: 18,
      stars: 2,
      core: false
    }),
    makeTyping({
      id: `${idBase}-q10`,
      title: "Insight Summary",
      skill: "Writing",
      objective: "Summarize a project and its importance in a concise way.",
      prompt:
        `Write a short summary of why the ${place.projectName} matters. Mention the place and one impact on learners.`,
      keywords: [place.projectName.split(" ")[0].toLowerCase(), place.name.toLowerCase(), "helps", "learners", "confidence", "english"],
      threshold: 3,
      sample:
        `Example: The ${place.projectName} at the ${place.name.toLowerCase()} matters because it helps learners use English with more confidence in real situations.`,
      explanation: "Senior summaries should be concise, clear, and purposeful.",
      xp: 22,
      stars: 3,
      core: false
    })
  ];
}

function expandQuestionSet(profile, place, baseQuestions) {
  const questions = [...baseQuestions];
  const targetCount = STAGE_CONFIG[profile.stage].questionsPerPlace;
  let seed = 0;

  while (questions.length < targetCount) {
    const extraIndex = questions.length + 1;
    questions.push(buildSupplementQuestion(profile, place, extraIndex, seed));
    seed += 1;
  }

  return questions;
}

function buildSupplementQuestion(profile, place, extraIndex, seed) {
  const idBase = `${profile.id}-${place.id}-extra-${extraIndex}`;
  const placeName = place.name.toLowerCase();
  const promptSet = [
    {
      kind: "multiple",
      title: "Extra Detail",
      skill: "Reading",
      objective: `Read for one extra detail in the ${placeName}.`,
      passage:
        `At the ${placeName}, visitors first go to the ${place.serviceDesk}. They bring a ${place.item} and then walk to the ${place.target}.`,
      prompt: "Where do visitors go after the service desk?",
      correct: place.target,
      distractors: collectDistractors(PLACE_TARGETS, place.target),
      explanation: "Extra reading practice helps the world feel fuller and more replayable."
    },
    {
      kind: "multiple",
      title: "Extra Listening",
      skill: "Listening",
      voiceText:
        `Attention please. The ${place.eventName} will begin at ${place.time}. Please bring your ${place.item} and report to the ${place.serviceDesk}.`,
      objective: "Catch another practical detail from a spoken message.",
      prompt: "What should you bring?",
      correct: place.item,
      distractors: collectDistractors(PLACE_ITEMS, place.item),
      explanation: "Repeated listening in new forms builds stronger comprehension."
    },
    {
      kind: "typing",
      title: "Extra Writing",
      skill: "Writing",
      objective: `Write a short extra response about the ${placeName}.`,
      prompt: `Write one or two sentences about what people do at the ${placeName} and why it is useful.`,
      keywords: [place.name.toLowerCase(), "because", place.item, place.target.toLowerCase(), "useful", "people"],
      threshold: 2,
      sample: `Example: People go to the ${place.name.toLowerCase()} to use a ${place.item} because it helps them complete an important task.`,
      explanation: "Extra writing questions add IXL-style repetition and volume."
    },
    {
      kind: "multiple",
      title: "Extra Interaction",
      skill: "Spoken Interaction",
      objective: `Choose the best extra sentence for the ${placeName}.`,
      prompt: `Which sentence would help you communicate politely at the ${placeName}?`,
      options: [
        `Excuse me, could you help me get to the ${place.target}, please?`,
        "No help needed ever.",
        "Wrong place, no words.",
        "I will not explain."
      ],
      answer: 0,
      explanation: "Extra communication drills make the challenge bank feel much deeper."
    }
  ];

  const selected = promptSet[seed % promptSet.length];
  if (selected.kind === "typing") {
    return makeTyping({
      id: idBase,
      title: `${selected.title} ${extraIndex}`,
      skill: selected.skill,
      objective: selected.objective,
      prompt: selected.prompt,
      keywords: selected.keywords,
      threshold: selected.threshold,
      sample: selected.sample,
      explanation: selected.explanation,
      xp: profile.stage === "early" ? 16 : 20,
      stars: 2,
      core: false
    });
  }

  if (selected.options) {
    return makeFixedMultiple({
      id: idBase,
      title: `${selected.title} ${extraIndex}`,
      skill: selected.skill,
      objective: selected.objective,
      prompt: selected.prompt,
      options: selected.options,
      answer: selected.answer,
      explanation: selected.explanation,
      xp: profile.stage === "early" ? 14 : 18,
      stars: 2,
      core: false
    });
  }

  return makeMultiple({
    id: idBase,
    title: `${selected.title} ${extraIndex}`,
    skill: selected.skill,
    objective: selected.objective,
    prompt: selected.prompt,
    correct: selected.correct,
    distractors: selected.distractors,
    passage: selected.passage,
    voiceText: selected.voiceText,
    explanation: selected.explanation,
    xp: profile.stage === "early" ? 14 : 18,
    stars: 2,
    core: false
  });
}

function makeMultiple({
  id,
  title,
  skill,
  objective,
  prompt,
  correct,
  distractors,
  passage,
  voiceText,
  explanation,
  xp,
  stars,
  core
}) {
  const { options, answer } = buildChoiceSet(id, correct, distractors);
  return {
    id,
    title,
    type: "multiple",
    skill,
    objective,
    prompt,
    options,
    answer,
    passage,
    voiceText,
    explanation,
    xp,
    stars,
    core
  };
}

function makeFixedMultiple({
  id,
  title,
  skill,
  objective,
  prompt,
  options,
  answer,
  explanation,
  xp,
  stars,
  core
}) {
  return {
    id,
    title,
    type: "multiple",
    skill,
    objective,
    prompt,
    options,
    answer,
    explanation,
    xp,
    stars,
    core
  };
}

function makeTyping({
  id,
  title,
  skill,
  objective,
  prompt,
  keywords,
  threshold,
  sample,
  explanation,
  xp,
  stars,
  core
}) {
  return {
    id,
    title,
    type: "typing",
    skill,
    objective,
    prompt,
    keywords,
    threshold,
    sample,
    explanation,
    xp,
    stars,
    core
  };
}

function makeSpeaking({
  id,
  title,
  skill,
  objective,
  prompt,
  keywords,
  threshold,
  sample,
  explanation,
  xp,
  stars,
  core
}) {
  return {
    id,
    title,
    type: "speaking",
    skill,
    objective,
    prompt,
    keywords,
    threshold,
    sample,
    explanation,
    xp,
    stars,
    core
  };
}

function collectDistractors(values, correct) {
  return values.filter((value) => value !== correct).slice(0, 3);
}

function buildChoiceSet(id, correct, distractors) {
  const all = [correct, ...distractors.slice(0, 3)];
  const shift = hashSeed(id) % all.length;
  const options = all.slice(shift).concat(all.slice(0, shift));
  return { options, answer: options.indexOf(correct) };
}

function hashSeed(value) {
  return [...value].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function createFreshState(overrides = {}) {
  const base = {
    playerName: "Explorer",
    avatarTheme: "sky",
    soundMode: "on",
    experienceMode: "adventure",
    theme: "light",
    saveSlotKey: null,
    selectedGradeId: "preschool",
    selectedPlaceId: "school",
    activeQuestionId: null,
    playerX: WORLD_LAYOUT.start.x,
    playerY: WORLD_LAYOUT.start.y,
    xp: 0,
    stars: 0,
    streak: 0,
    coins: 0,
    ownedShopItemIds: [],
    completedQuestionIds: []
  };
  return { ...base, ...overrides };
}

function getSaveSlotKey(password) {
  const clean = password.trim();
  if (!clean) {
    return null;
  }
  return `slot-${hashSeed(clean)}-${clean.length}`;
}

function getSaveSlotValue(password) {
  const slotKey = getSaveSlotKey(password);
  if (!slotKey) {
    return null;
  }
  const saved = JSON.parse(localStorage.getItem(`${SAVE_SLOT_PREFIX}${slotKey}`) || "null");
  return saved ? { ...createFreshState(), ...saved } : null;
}

function getSelectedGradeStartPlace(gradeId) {
  const profile = gradeProfiles.find((grade) => grade.id === gradeId) || gradeProfiles[0];
  return profile.places[0]?.id || "school";
}

function getAvatarThemeVars(theme) {
  const themes = {
    sky: { shirt: "#2a88c9", hair: "#3a3c49", boots: "#704f2d" },
    sunset: { shirt: "#ff7a45", hair: "#4d342a", boots: "#7b4b32" },
    forest: { shirt: "#3e9b5d", hair: "#2d2b32", boots: "#6d4f34" },
    violet: { shirt: "#7c64d8", hair: "#2c2d39", boots: "#563a7e" }
  };
  return themes[theme] || themes.sky;
}

function loadState() {
  const saved = JSON.parse(localStorage.getItem(SESSION_STATE_KEY) || "null");
  return saved ? { ...createFreshState(), ...saved } : createFreshState();
}

function saveState() {
  localStorage.setItem(SESSION_STATE_KEY, JSON.stringify(state));
  if (state.saveSlotKey) {
    localStorage.setItem(`${SAVE_SLOT_PREFIX}${state.saveSlotKey}`, JSON.stringify(state));
  }
}

function populateSetupOptions() {
  elements.startGradeSelect.innerHTML = gradeProfiles
    .map((grade) => `<option value="${grade.id}">${grade.label} • ${grade.band}</option>`)
    .join("");
}

function loadSetupDraft() {
  elements.playerNameInput.value = state.playerName || "Explorer";
  elements.startGradeSelect.value = state.selectedGradeId || "preschool";
  elements.avatarThemeSelect.value = state.avatarTheme || "sky";
  elements.soundModeSelect.value = state.soundMode || "on";
  elements.experienceModeSelect.value = state.experienceMode || "adventure";
  if (elements.themeSelect) {
    elements.themeSelect.value = state.theme || "light";
  }
}

function setSetupMode(mode) {
  setupMode = mode;
  elements.newGameTabBtn.classList.toggle("active", mode === "new");
  elements.loadGameTabBtn.classList.toggle("active", mode === "load");
  elements.setupForm.classList.toggle("hidden", mode !== "new");
  elements.loadForm.classList.toggle("hidden", mode !== "load");
  elements.startFeedback.className = "start-feedback";
  elements.startFeedback.textContent =
    mode === "new"
      ? "Choose your settings here first. Your password becomes the key for saving and loading progress."
      : "Type the same password you used before to load your saved progress.";
}

function renderStartScreen() {
  elements.startScreen.classList.toggle("hidden", appStarted);
  elements.appShell.classList.toggle("hidden", !appStarted);
}

function openSettingsModal() {
  syncSettingsControls();
  elements.settingsModal?.classList.remove("hidden");
  elements.settingsModal?.setAttribute("aria-hidden", "false");
}

function closeSettingsModal() {
  elements.settingsModal?.classList.add("hidden");
  elements.settingsModal?.setAttribute("aria-hidden", "true");
}

function syncSettingsControls() {
  if (elements.experienceModeSelect) {
    elements.experienceModeSelect.value = state.experienceMode || "adventure";
  }
  if (elements.themeSelect) {
    elements.themeSelect.value = state.theme || "light";
  }
  if (elements.avatarThemeSelect) {
    elements.avatarThemeSelect.value = state.avatarTheme || "sky";
  }
  if (elements.soundModeSelect) {
    elements.soundModeSelect.value = state.soundMode || "on";
  }
}

function saveSettingsFromModal() {
  state.experienceMode = elements.experienceModeSelect?.value || "adventure";
  state.theme = elements.themeSelect?.value || "light";
  state.avatarTheme = elements.avatarThemeSelect?.value || "sky";
  state.soundMode = elements.soundModeSelect?.value || "on";
  applyTheme();
  saveState();
  closeSettingsModal();
  if (appStarted) {
    render();
  }
}

function startPlacementAssessment() {
  placementState.open = true;
  placementState.index = 0;
  placementState.score = 0;
  placementState.selectedAnswer = null;
  placementState.finished = false;
  placementState.recommendation = null;
  renderPlacementAssessment();
}

function renderPlacementAssessment() {
  elements.placementPanel.classList.toggle("hidden", !placementState.open);
  if (!placementState.open) {
    return;
  }

  elements.placementResult.className = "start-feedback hidden";
  elements.placementResult.textContent = "";

  if (placementState.finished) {
    const recommendedGrade = gradeProfiles.find(
      (grade) => grade.id === placementState.recommendation
    ) || gradeProfiles[0];
    elements.placementProgress.textContent = "Finished";
    elements.placementPrompt.textContent =
      `Recommended start: ${recommendedGrade.label} • ${recommendedGrade.band}`;
    elements.placementChoices.innerHTML = "";
    elements.placementNextBtn.classList.add("hidden");
    elements.placementResult.className = "start-feedback success";
    elements.placementResult.textContent =
      `You can start at ${recommendedGrade.label}. We also moved the grade selector there for you.`;
    return;
  }

  const question = PLACEMENT_QUESTIONS[placementState.index];
  elements.placementProgress.textContent = `Question ${placementState.index + 1} / ${PLACEMENT_QUESTIONS.length}`;
  elements.placementPrompt.textContent = question.prompt;
  elements.placementChoices.innerHTML = "";

  question.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = `choice-card ${placementState.selectedAnswer === index ? "selected" : ""}`;
    label.innerHTML = `
      <input type="radio" name="placementAnswer" value="${index}" ${
        placementState.selectedAnswer === index ? "checked" : ""
      } />
      <span>${option}</span>
    `;
    label.addEventListener("click", () => {
      placementState.selectedAnswer = index;
      renderPlacementAssessment();
    });
    elements.placementChoices.appendChild(label);
  });

  elements.placementNextBtn.classList.remove("hidden");
  elements.placementNextBtn.textContent =
    placementState.index === PLACEMENT_QUESTIONS.length - 1 ? "See result" : "Next question";
}

function advancePlacementAssessment() {
  if (placementState.finished) {
    closePlacementAssessment();
    return;
  }
  if (placementState.selectedAnswer === null) {
    elements.placementResult.className = "start-feedback error";
    elements.placementResult.textContent = "Choose one answer first so the placement check can continue.";
    elements.placementResult.classList.remove("hidden");
    return;
  }

  const question = PLACEMENT_QUESTIONS[placementState.index];
  if (placementState.selectedAnswer === question.answer) {
    placementState.score += question.weight;
  }

  placementState.index += 1;
  placementState.selectedAnswer = null;

  if (placementState.index >= PLACEMENT_QUESTIONS.length) {
    placementState.finished = true;
    placementState.recommendation = getPlacementRecommendation(placementState.score);
    elements.startGradeSelect.value = placementState.recommendation;
  }

  renderPlacementAssessment();
}

function closePlacementAssessment() {
  placementState.open = false;
  renderPlacementAssessment();
}

function getPlacementRecommendation(score) {
  if (score <= 1) return "preschool";
  if (score <= 3) return "grade1";
  if (score <= 5) return "grade2";
  if (score <= 7) return "grade3";
  if (score <= 9) return "grade4";
  if (score <= 11) return "grade5";
  if (score <= 13) return "grade6";
  if (score <= 15) return "grade7";
  if (score === 16) return "grade8";
  if (score === 17) return "grade9";
  if (score === 18) return "grade10";
  if (score === 19) return "grade11";
  if (score <= 21) return "grade12";
  return "grade13";
}

function handleNewGameSubmit(event) {
  event.preventDefault();
  const playerName = elements.playerNameInput.value.trim() || "Explorer";
  const selectedGradeId = elements.startGradeSelect.value;
  const avatarTheme = elements.avatarThemeSelect.value;
  const soundMode = elements.soundModeSelect.value;
  const experienceMode = elements.experienceModeSelect.value;
  const theme = elements.themeSelect?.value || "light";
  const password = elements.savePasswordInput.value.trim();

  if (!password) {
    elements.startFeedback.className = "start-feedback error";
    elements.startFeedback.textContent = "Type a password so the game can save and load your data.";
    return;
  }

  const saveSlotKey = getSaveSlotKey(password);
  const fresh = createFreshState({
    playerName,
    selectedGradeId,
    selectedPlaceId: getSelectedGradeStartPlace(selectedGradeId),
    avatarTheme,
    soundMode,
    experienceMode,
    theme,
    saveSlotKey
  });

  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, fresh);
  teleportPlayerToPlace(state.selectedPlaceId);
  mapHintMessage =
    state.experienceMode === "learning"
      ? "Your study setup is ready. Pick a place and begin serious practice."
      : "Your settings are locked in. Walk to a place and begin your first mission.";
  saveState();
  appStarted = true;
  renderStartScreen();
  render();
}

function handleLoadGameSubmit(event) {
  event.preventDefault();
  const password = elements.loadPasswordInput.value.trim();
  const loaded = getSaveSlotValue(password);

  if (!loaded) {
    elements.startFeedback.className = "start-feedback error";
    elements.startFeedback.textContent = "No saved adventure matches that password yet.";
    return;
  }

  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, createFreshState(), loaded, { saveSlotKey: getSaveSlotKey(password) });
  mapHintMessage = `Welcome back, ${state.playerName || "Explorer"}. Your saved world is ready.`;
  saveState();
  appStarted = true;
  renderStartScreen();
  render();
}

function saveCurrentProgress() {
  if (!state.saveSlotKey) {
    elements.feedbackBox.className = "feedback-box error";
    elements.feedbackBox.textContent = "No password save is active. Start a game from the setup screen with a password first.";
    return;
  }

  saveState();
  elements.feedbackBox.className = "feedback-box success";
  elements.feedbackBox.textContent = "Progress saved to your password-protected local slot.";
  renderHeaderStatus();
}

function purchaseShopItem(item) {
  if (state.ownedShopItemIds.includes(item.id)) {
    return;
  }
  if ((state.coins || 0) < item.cost) {
    elements.feedbackBox.className = "feedback-box error";
    elements.feedbackBox.textContent = "You need more coins before you can buy that reward.";
    return;
  }

  state.coins -= item.cost;
  state.ownedShopItemIds.push(item.id);
  saveState();
  renderStats();
  renderShop();
  elements.feedbackBox.className = "feedback-box success";
  elements.feedbackBox.textContent = `You bought ${item.name}. ${item.effect}`;
}

function ensureValidSelection() {
  const grade = getCurrentGrade();
  const unlockedPlace = getFirstUnlockedPlace(grade);
  if (!grade.places.some((place) => place.id === state.selectedPlaceId)) {
    state.selectedPlaceId = unlockedPlace.id;
  }

  const selectedPlace = getCurrentPlace();
  if (!selectedPlace || !isPlaceUnlocked(grade, selectedPlace.id)) {
    state.selectedPlaceId = unlockedPlace.id;
  }

  const place = getCurrentPlace();
  if (!place.questions.some((question) => question.id === state.activeQuestionId)) {
    state.activeQuestionId = getFirstAvailableQuestion(place)?.id || null;
  }

  if (!isWithinWorld(state.playerX, state.playerY)) {
    teleportPlayerToPlace(state.selectedPlaceId);
  }
  saveState();
}

function getCurrentGrade() {
  return gradeProfiles.find((profile) => profile.id === state.selectedGradeId) || gradeProfiles[0];
}

function getCurrentPlace() {
  const grade = getCurrentGrade();
  return grade.places.find((place) => place.id === state.selectedPlaceId) || grade.places[0];
}

function getCurrentQuestion() {
  const place = getCurrentPlace();
  return place.questions.find((question) => question.id === state.activeQuestionId) || null;
}

function render() {
  ensureValidSelection();
  applyTheme();
  applyAvatarTheme();
  renderExperienceMode();
  renderStats();
  renderHeaderStatus();
  renderGradeGrid();
  renderPlaceGrid();
  renderWorldMap();
  renderGradePanel();
  renderQuestion();
  renderCurriculum();
}

function renderStats() {
  elements.xpValue.textContent = state.xp;
  elements.starValue.textContent = state.stars;
  elements.streakValue.textContent = state.streak;
  elements.coinValue.textContent = state.coins || 0;
}

function renderHeaderStatus() {
  elements.playerBadge.textContent = state.playerName || "Explorer";
  elements.modeBadge.textContent =
    state.experienceMode === "learning" ? "Learning Mode" : "Adventure Mode";
  elements.saveStatus.textContent = state.saveSlotKey
    ? "Password save active"
    : "No password save active";
}

function applyTheme() {
  document.body.dataset.theme = state.theme || "light";
}

function renderExperienceMode() {
  const learningMode = state.experienceMode === "learning";
  document.body.classList.toggle("mode-learning", learningMode);
  document
    .querySelectorAll(".adventure-only")
    .forEach((item) => item.classList.toggle("hidden", learningMode));
  document
    .querySelectorAll(".learning-only")
    .forEach((item) => item.classList.toggle("hidden", !learningMode));
  elements.mapStatus.classList.toggle("hidden", learningMode);
  elements.studyHub?.classList.add("hidden");
  elements.studyShop?.classList.add("hidden");

  elements.heroEyebrow.textContent = learningMode ? "Serious English Practice" : "Map-First English RPG";
  elements.heroText.textContent = learningMode
    ? "Study by grade and place with a clean practice flow."
    : "Move on the map, open a challenge, and keep progressing.";
  elements.heroBadgeOne.textContent = learningMode ? "Adult-focused study flow" : "Top-down block map";
  elements.heroBadgeTwo.textContent = learningMode
    ? "Placement check for the right starting level"
    : "Unlock new zones by clearing quests";
  elements.heroBadgeThree.textContent = "Big question banks from Pre-School to Grade 13";
  elements.worldEyebrow.textContent = learningMode ? "Focused Study Flow" : "Top-Down Adventure";
  elements.worldTitle.textContent = learningMode ? "Learning Studio" : "Quest World";
  elements.dashboardEyebrowOne.textContent = learningMode ? "How To Study" : "How To Play";
  elements.dashboardTitleOne.textContent = learningMode ? "Serious Learning Loop" : "Adventure Loop";
  elements.dashboardPillOne.textContent = learningMode ? "No Map" : "Map First";
  elements.dashboardTextOne.textContent = learningMode
    ? "Choose your grade, select a place, work through the challenge bank, and build skill through repeated focused practice."
    : "Walk your character into a place, open a mission from the quest dock, solve English tasks, and unlock the next zone on the world map.";
  elements.dashboardEyebrowTwo.textContent = learningMode ? "Study Style" : "World Style";
  elements.dashboardTitleTwo.textContent = learningMode ? "Adult Track" : "Game Feel";
  elements.dashboardPillTwo.textContent = learningMode ? "Quiet, Focused Practice" : "Prodigy-Inspired Flow";
  elements.dashboardTextTwo.textContent = learningMode
    ? "Learning mode keeps the rewards, challenge bank, and progression, but removes the map-first pressure for a more serious adult experience."
    : "The map is now the main stage, with the quest panel and controls attached to it like a HUD. Grades, places, and curriculum sit lower as support.";
  elements.studyHubText.textContent = learningMode
    ? "Choose a grade, choose a place, and work through the question bank with less distraction."
    : elements.studyHubText.textContent;
}

function applyAvatarTheme() {
  const theme = getAvatarThemeVars(state.avatarTheme);
  document.documentElement.style.setProperty("--avatar-shirt", theme.shirt);
  document.documentElement.style.setProperty("--avatar-hair", theme.hair);
  document.documentElement.style.setProperty("--avatar-boots", theme.boots);
}

function renderGradeGrid() {
  const currentGrade = getCurrentGrade();
  elements.gradeGrid.innerHTML = "";

  gradeProfiles.forEach((profile) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `grade-card ${profile.id === currentGrade.id ? "active" : ""}`;
    button.innerHTML = `
      <strong>${profile.label}</strong>
      <span>${profile.band}</span>
      <small>${countCompletedForGrade(profile)} / ${profile.totalQuestions} challenges cleared</small>
    `;
    button.addEventListener("click", () => {
      state.selectedGradeId = profile.id;
      state.selectedPlaceId = getFirstUnlockedPlace(profile).id;
      teleportPlayerToPlace(state.selectedPlaceId);
      state.activeQuestionId = getFirstAvailableQuestion(getCurrentPlace())?.id || null;
      saveState();
      render();
    });
    elements.gradeGrid.appendChild(button);
  });
}

function renderPlaceGrid() {
  const grade = getCurrentGrade();
  elements.placeGrid.innerHTML = "";
  if (elements.learningPlaceGrid) {
    elements.learningPlaceGrid.innerHTML = "";
  }
  elements.placeRailStatus.textContent =
    state.experienceMode === "learning"
      ? `${grade.places.length} study tracks • ${grade.totalQuestions} challenges in ${grade.label}`
      : `${grade.places.length} places • ${grade.totalQuestions} challenges in ${grade.label}`;
  if (elements.learningPlaceStatus) {
    elements.learningPlaceStatus.textContent = `${grade.label} • ${grade.places.length} places`;
  }

  grade.places.forEach((place) => {
    const unlocked = isPlaceUnlocked(grade, place.id);
    const completed = isPlaceCompleted(place);
    const createPlaceButton = () => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `place-card ${place.id === state.selectedPlaceId ? "active" : ""} ${
        unlocked ? "" : "locked"
      } ${completed ? "completed" : ""}`.trim();
      button.innerHTML = `
        <strong>${place.name}</strong>
        <span>${place.summary}</span>
        <small>${countCompletedForPlace(place)} / ${place.questions.length} cleared ${
        unlocked ? "" : "• Locked"
      }</small>
      `;
      button.addEventListener("click", () => {
        if (!unlocked) {
          const previous = grade.places[Math.max(place.order - 1, 0)];
          elements.feedbackBox.className = "feedback-box error";
          elements.feedbackBox.textContent =
            `This place is locked. Clear ${previous.unlockRequirement} core challenges in ${previous.name} first.`;
          return;
        }
        state.selectedPlaceId = place.id;
        teleportPlayerToPlace(place.id);
        state.activeQuestionId = getFirstAvailableQuestion(place)?.id || place.questions[0].id;
        mapHintMessage = `You walked to ${place.name}. Open a challenge when you are ready.`;
        saveState();
        render();
      });
      return button;
    };

    elements.placeGrid.appendChild(createPlaceButton());
    if (elements.learningPlaceGrid) {
      elements.learningPlaceGrid.appendChild(createPlaceButton());
    }
  });
}

function renderWorldMap() {
  const grade = getCurrentGrade();
  const currentPlace = getCurrentPlace();
  elements.worldMap.style.setProperty("--world-cols", String(WORLD_LAYOUT.cols));
  elements.worldMap.style.setProperty("--tile-size", `${WORLD_LAYOUT.tileSize}px`);
  elements.mapStatus.textContent = `Top-down mode • ${currentPlace.name} selected • Move with arrow keys or WASD`;
  elements.mapObjective.textContent =
    `Clear ${currentPlace.unlockRequirement} core challenges in ${currentPlace.name} to unlock the next zone.`;

  const currentTile = getTileMeta(grade, state.playerX, state.playerY);
  const tilePlaceName = currentTile.placeId
    ? grade.places.find((place) => place.id === currentTile.placeId)?.name || capitalize(currentTile.placeId)
    : null;
  const locationLabel = currentTile.placeId
    ? `${tilePlaceName} zone`
    : currentTile.terrain === "path"
      ? "Stone path"
      : currentTile.terrain === "water"
        ? "Water edge"
        : "Grass field";
  elements.mapLocation.textContent = `${locationLabel} • (${state.playerX}, ${state.playerY})`;
  elements.mapHint.textContent = mapHintMessage;

  if (worldMapCache.gradeId !== grade.id) {
    buildWorldMapStructure(grade);
  }
  updateWorldMapStructure(grade);

  requestAnimationFrame(centerMapOnPlayer);
}

function buildWorldMapStructure(grade) {
  worldMapCache.gradeId = grade.id;
  worldMapCache.cells = new Map();
  worldMapCache.markers = new Map();
  elements.worldMap.innerHTML = "";

  const fragment = document.createDocumentFragment();
  for (let y = 0; y < WORLD_LAYOUT.rows; y += 1) {
    for (let x = 0; x < WORLD_LAYOUT.cols; x += 1) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "map-tile";
      cell.dataset.x = String(x);
      cell.dataset.y = String(y);
      cell.addEventListener("click", () => handleMapTileClick(x, y));
      worldMapCache.cells.set(`${x},${y}`, cell);
      fragment.appendChild(cell);
    }
  }

  worldMapCache.avatarEl = document.createElement("div");
  worldMapCache.avatarEl.className = "avatar";
  elements.worldMap.appendChild(fragment);

  grade.places.forEach((place) => {
    const zone = getPlaceZone(place.id);
    const marker = document.createElement("button");
    marker.type = "button";
    marker.className = "map-marker";
    marker.textContent = place.name;
    marker.style.left = `${zone.x * (WORLD_LAYOUT.tileSize + 2) + zone.w * (WORLD_LAYOUT.tileSize + 2) / 2}px`;
    marker.style.top = `${zone.y * (WORLD_LAYOUT.tileSize + 2) + 10}px`;
    marker.addEventListener("click", () => handleMapMarkerClick(place.id));
    worldMapCache.markers.set(place.id, marker);
    elements.worldMap.appendChild(marker);
  });
}

function updateWorldMapStructure(grade) {
  for (let y = 0; y < WORLD_LAYOUT.rows; y += 1) {
    for (let x = 0; x < WORLD_LAYOUT.cols; x += 1) {
      const tile = getTileMeta(grade, x, y);
      const cell = worldMapCache.cells.get(`${x},${y}`);
      if (!cell) {
        continue;
      }
      cell.className = [
        "map-tile",
        `tile-${tile.terrain}`,
        tile.gate ? "tile-gate" : "",
        tile.locked ? "tile-locked" : "",
        tile.placeId === state.selectedPlaceId ? "tile-active-place" : ""
      ]
        .filter(Boolean)
        .join(" ");
      cell.setAttribute("aria-label", tile.placeId ? `${tile.placeId} tile` : `${tile.terrain} tile`);
      cell.innerHTML = "";
      if (tile.gate) {
        const gate = document.createElement("span");
        gate.className = "tile-gate-icon";
        gate.textContent = tile.locked ? "LOCK" : "GO";
        cell.appendChild(gate);
      }
    }
  }

  const avatarCell = worldMapCache.cells.get(`${state.playerX},${state.playerY}`);
  if (avatarCell && worldMapCache.avatarEl) {
    avatarCell.appendChild(worldMapCache.avatarEl);
  }

  grade.places.forEach((place) => {
    const marker = worldMapCache.markers.get(place.id);
    if (!marker) {
      return;
    }
    marker.className = `map-marker ${place.id === state.selectedPlaceId ? "active" : ""} ${
      isPlaceUnlocked(grade, place.id) ? "" : "locked"
    }`.trim();
  });
}

function handleMapTileClick(x, y) {
  const grade = getCurrentGrade();
  const tile = getTileMeta(grade, x, y);
  if (Math.abs(x - state.playerX) + Math.abs(y - state.playerY) === 1) {
    movePlayer(x - state.playerX, y - state.playerY);
    return;
  }
  if (tile.placeId && !tile.locked) {
    state.selectedPlaceId = tile.placeId;
    teleportPlayerToPlace(tile.placeId);
    state.activeQuestionId = getFirstAvailableQuestion(getCurrentPlace())?.id || null;
    mapHintMessage = `Travelled to ${capitalize(tile.placeId)}. Open a challenge to continue.`;
    saveState();
    render();
  }
}

function handleMapMarkerClick(placeId) {
  const grade = getCurrentGrade();
  const place = grade.places.find((item) => item.id === placeId);
  if (!place) {
    return;
  }
  if (!isPlaceUnlocked(grade, place.id)) {
    const previous = grade.places[Math.max(place.order - 1, 0)];
    mapHintMessage =
      `That zone is locked. Clear ${previous.unlockRequirement} core challenges in ${previous.name} first.`;
    renderWorldMap();
    return;
  }
  state.selectedPlaceId = place.id;
  teleportPlayerToPlace(place.id);
  state.activeQuestionId = getFirstAvailableQuestion(getCurrentPlace())?.id || null;
  mapHintMessage = `Travelled to ${place.name}. The signpost now marks your active zone.`;
  saveState();
  render();
}

function renderGradePanel() {
  const grade = getCurrentGrade();
  const place = getCurrentPlace();
  const coreProgress = countCoreCompleted(place);
  const totalCompleted = countCompletedForPlace(place);

  elements.gradeTitle.textContent = `${grade.label} • ${place.name}`;
  elements.gradeBadge.textContent = grade.band;
  elements.gradeSummary.textContent = grade.summary;
  elements.placeSummary.textContent = "";
  elements.miniLabelOne.textContent = "Selected Place";
  elements.miniLabelTwo.textContent =
    state.experienceMode === "learning" ? "Study Progress" : "Unlock Progress";
  elements.miniLabelThree.textContent =
    state.experienceMode === "learning" ? "Practice Bank" : "Question Bank";
  elements.worldValue.textContent = place.name;
  elements.goalValue.textContent =
    state.experienceMode === "learning"
      ? `${coreProgress} / ${place.unlockRequirement} core checks`
      : `${coreProgress} / ${place.unlockRequirement} core challenges`;
  elements.skillValue.textContent = `${totalCompleted} / ${place.questions.length} cleared`;
  elements.studyTrackValue.textContent = grade.label;
  elements.studyPlaceValue.textContent = place.name;
  elements.studyRewardValue.textContent = `${state.coins || 0} coins earned • ${state.ownedShopItemIds.length} reward item(s) owned`;

  renderQuestionBank(place);
  renderShop();
}

function renderQuestionBank(place) {
  elements.missionList.innerHTML = "";

  place.questions.forEach((question, index) => {
    const completed = state.completedQuestionIds.includes(question.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `mission-button ${question.id === state.activeQuestionId ? "active" : ""} ${
      completed ? "completed" : ""
    }`;
    button.innerHTML = `
      <div class="mission-title">
        <strong>${index + 1}. ${question.title}</strong>
        <span>${completed ? "Cleared" : `+${question.xp} XP`}</span>
      </div>
      <span class="mission-meta">${question.skill} • ${question.core ? "Core" : "Practice"} • ${question.stars} stars</span>
      <span class="mission-objective">${question.objective}</span>
    `;
    button.addEventListener("click", () => {
      state.activeQuestionId = question.id;
      saveState();
      renderQuestion();
      renderQuestionBank(place);
    });
    elements.missionList.appendChild(button);
  });
}

function renderShop() {
  if (!elements.shopList) {
    return;
  }

  elements.shopStatus.textContent = `${state.coins || 0} coins available`;
  elements.shopList.innerHTML = "";

  STUDY_SHOP_ITEMS.forEach((item) => {
    const owned = state.ownedShopItemIds.includes(item.id);
    const canAfford = (state.coins || 0) >= item.cost;
    const card = document.createElement("article");
    card.className = `mission-button shop-button ${owned ? "owned" : ""}`.trim();
    card.innerHTML = `
      <div class="mission-title">
        <strong>${item.name}</strong>
        <span>${owned ? "Owned" : `${item.cost} coins`}</span>
      </div>
      <span class="mission-meta">Reward item • ${owned ? "Collected" : "Available to buy"}</span>
      <span class="mission-objective">${item.effect}</span>
    `;

    const action = document.createElement("button");
    action.type = "button";
    action.className = owned ? "ghost-button" : canAfford ? "secondary-button" : "ghost-button";
    action.textContent = owned ? "Already owned" : canAfford ? "Buy reward" : "Need more coins";
    action.disabled = owned || !canAfford;
    action.addEventListener("click", () => purchaseShopItem(item));
    card.appendChild(action);

    elements.shopList.appendChild(card);
  });
}

function renderQuestion() {
  const question = getCurrentQuestion();

  if (!question) {
    elements.challengeTitle.textContent = "Pick a challenge to begin";
    elements.challengeType.textContent = "Ready";
    elements.challengeSkill.textContent = "Choose a question from the challenge bank.";
    elements.challengeMedia.innerHTML = "";
    elements.choiceArea.innerHTML = "";
    elements.textAnswerWrap.classList.add("hidden");
    elements.playAudioBtn.classList.add("hidden");
    elements.speakBtn.classList.add("hidden");
    return;
  }

  elements.challengeTitle.textContent = question.title;
  elements.challengeType.textContent = question.skill;
  elements.challengeSkill.textContent = question.prompt;
  elements.feedbackBox.className = "feedback-box";
  elements.feedbackBox.textContent =
    question.type === "multiple"
      ? state.experienceMode === "learning"
        ? "Choose the best answer, then check your understanding."
        : "Choose the best answer, then check your progress."
      : state.experienceMode === "learning"
        ? "Use your own words. The checker looks for the main ideas, not perfect wording."
        : "Use your own words. The game checks for the main ideas, not perfect wording.";

  const media = [];
  if (question.passage) {
    media.push(`<div class="media-card"><strong>Reading Text</strong>${question.passage}</div>`);
  }
  if (question.voiceText) {
    media.push(
      `<div class="media-card"><strong>Audio Challenge</strong>Press "Play listening audio" and listen for the main points.</div>`
    );
  }
  if (question.sample) {
    media.push(`<div class="media-card"><strong>Coach Model</strong>${question.sample}</div>`);
  }
  elements.challengeMedia.innerHTML = media.join("");

  if (question.type === "multiple") {
    renderChoices(question);
    elements.textAnswerWrap.classList.add("hidden");
    elements.playAudioBtn.classList.toggle("hidden", !question.voiceText);
    elements.speakBtn.classList.add("hidden");
  } else {
    elements.choiceArea.innerHTML = "";
    elements.textAnswerWrap.classList.remove("hidden");
    elements.textAnswer.value = "";
    elements.playAudioBtn.classList.toggle("hidden", !question.voiceText);
    elements.speakBtn.classList.toggle("hidden", question.type !== "speaking");
  }
}

function renderChoices(question) {
  elements.choiceArea.innerHTML = "";
  question.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "choice-card";
    label.innerHTML = `
      <input type="radio" name="answer" value="${index}" />
      <span>${option}</span>
    `;
    label.addEventListener("click", () => {
      document.querySelectorAll(".choice-card").forEach((card) => card.classList.remove("selected"));
      label.classList.add("selected");
    });
    elements.choiceArea.appendChild(label);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  const question = getCurrentQuestion();
  if (!question) {
    return;
  }

  const result =
    question.type === "multiple"
      ? checkMultipleChoice(question)
      : checkTextResponse(question, elements.textAnswer.value);

  elements.feedbackBox.className = `feedback-box ${result.correct ? "success" : "error"}`;
  elements.feedbackBox.textContent = result.message;

  if (result.correct) {
    completeQuestion(question);
  } else {
    state.streak = 0;
    saveState();
    renderStats();
  }
}

function checkMultipleChoice(question) {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    return {
      correct: false,
      message: "Choose one answer first so the game can check it."
    };
  }
  const chosen = Number(selected.value);
  const correct = chosen === question.answer;
  return {
    correct,
    message: correct
      ? `Excellent. ${question.explanation}`
      : `Not quite yet. ${question.explanation}`
  };
}

function checkTextResponse(question, value) {
  const clean = value.trim().toLowerCase();
  if (!clean) {
    return {
      correct: false,
      message: "Type or speak an answer first, then try again."
    };
  }

  const matched = question.keywords.filter((keyword) => clean.includes(keyword.toLowerCase()));
  const correct = matched.length >= question.threshold;

  return {
    correct,
    message: correct
      ? `Nice work. You included ${matched.length} key idea(s), so the answer communicates clearly.`
      : `You have a good start. Try adding more key ideas like: ${question.keywords
          .slice(0, 4)
          .join(", ")}.`
  };
}

function completeQuestion(question) {
  const grade = getCurrentGrade();
  const currentPlace = getCurrentPlace();
  const wasCompleted = state.completedQuestionIds.includes(question.id);
  const beforeCore = countCoreCompleted(currentPlace);

  if (!wasCompleted) {
    state.completedQuestionIds.push(question.id);
    state.xp += question.xp;
    state.stars += question.stars;
    state.coins += Math.max(4, question.stars * 6);
  }

  state.streak += 1;
  const afterCore = countCoreCompleted(currentPlace);
  const nextUnlockedPlace = grade.places[currentPlace.order + 1];
  const unlockedNewPlace =
    nextUnlockedPlace &&
    !wasCompleted &&
    beforeCore < currentPlace.unlockRequirement &&
    afterCore >= currentPlace.unlockRequirement;

  const nextQuestion = getNextQuestionInPlace(currentPlace, question.id);
  if (nextQuestion) {
    state.activeQuestionId = nextQuestion.id;
  } else if (unlockedNewPlace) {
    state.selectedPlaceId = nextUnlockedPlace.id;
    teleportPlayerToPlace(nextUnlockedPlace.id);
    state.activeQuestionId = getFirstAvailableQuestion(nextUnlockedPlace)?.id || null;
  } else {
    state.activeQuestionId = currentPlace.questions[0].id;
  }

  saveState();
  render();

  if (unlockedNewPlace) {
    elements.feedbackBox.className = "feedback-box success";
    elements.feedbackBox.textContent =
      state.experienceMode === "learning"
        ? `Great work. You unlocked ${nextUnlockedPlace.name} by clearing ${currentPlace.unlockRequirement} core checks in ${currentPlace.name}.`
        : `Great work. You unlocked ${nextUnlockedPlace.name} by clearing ${currentPlace.unlockRequirement} core challenges in ${currentPlace.name}.`;
    mapHintMessage =
      state.experienceMode === "learning"
        ? `${nextUnlockedPlace.name} is now unlocked in the study track list.`
        : `${nextUnlockedPlace.name} is now unlocked on the map. Walk there or tap it to continue.`;
  }
}

function getNextQuestionInPlace(place, currentQuestionId) {
  const currentIndex = place.questions.findIndex((question) => question.id === currentQuestionId);
  for (let index = currentIndex + 1; index < place.questions.length; index += 1) {
    const candidate = place.questions[index];
    if (!state.completedQuestionIds.includes(candidate.id)) {
      return candidate;
    }
  }
  return null;
}

function getFirstAvailableQuestion(place) {
  return place.questions.find((question) => !state.completedQuestionIds.includes(question.id)) || place.questions[0];
}

function countCompletedForGrade(grade) {
  return grade.places.reduce((sum, place) => sum + countCompletedForPlace(place), 0);
}

function countCompletedForPlace(place) {
  return place.questions.filter((question) => state.completedQuestionIds.includes(question.id)).length;
}

function countCoreCompleted(place) {
  return place.questions.filter(
    (question) => question.core && state.completedQuestionIds.includes(question.id)
  ).length;
}

function isPlaceUnlocked(grade, placeId) {
  const place = grade.places.find((item) => item.id === placeId);
  if (!place || place.order === 0) {
    return true;
  }
  const previous = grade.places[place.order - 1];
  return countCoreCompleted(previous) >= previous.unlockRequirement;
}

function getFirstUnlockedPlace(grade) {
  return grade.places.find((place) => isPlaceUnlocked(grade, place.id)) || grade.places[0];
}

function isPlaceCompleted(place) {
  return countCompletedForPlace(place) === place.questions.length;
}

function renderCurriculum() {
  const grade = getCurrentGrade();
  const learningMode = state.experienceMode === "learning";

  elements.curriculumTitle.textContent = grade.b1Track
    ? `${grade.label} B1 / PET Exploration Blueprint`
    : `${grade.label} Exploration Blueprint`;
  elements.curriculumPill.textContent = grade.b1Track ? "Cambridge PET / CEFR B1" : grade.band;
  elements.curriculumIntro.textContent = grade.b1Track
    ? learningMode
      ? "Grades 7-11 use the Cambridge Preliminary / CEFR B1 expectations inside a serious learning studio. Learners practise practical English by place and skill without relying on the world map."
      : "Grades 7-11 use the Cambridge Preliminary / CEFR B1 expectations inside a place-exploration game. Learners practise school, shop, forest, airport, and restaurant English while preparing for stronger levels such as First Certificate."
    : learningMode
      ? `${grade.label} includes ${grade.totalQuestions} place-based challenges across ${grade.places.length} locations. Learning mode keeps the full question bank but removes the map-first flow.`
      : `${grade.label} includes ${grade.totalQuestions} place-based challenges across ${grade.places.length} locations. Players unlock new places by clearing core English tasks in each area.`;

  if (grade.b1Track) {
    elements.curriculumContent.innerHTML = `
      <div class="descriptor-card">
        <h3>Listening</h3>
        <ul>${B1_EXPECTATIONS.listening.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="descriptor-card">
        <h3>Reading</h3>
        <ul>${B1_EXPECTATIONS.reading.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="descriptor-card">
        <h3>Spoken Interaction</h3>
        <ul>${B1_EXPECTATIONS.spokenInteraction.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="descriptor-card">
        <h3>Spoken Production</h3>
        <ul>${B1_EXPECTATIONS.spokenProduction.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="descriptor-card">
        <h3>Written Production</h3>
        <ul>${B1_EXPECTATIONS.writtenProduction.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="descriptor-card">
        <h3>Quality Of Language</h3>
        <ul>${B1_EXPECTATIONS.quality.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="descriptor-card" style="grid-column: 1 / -1;">
        <h3>Strategies</h3>
        <div class="strategy-grid">
          ${B1_EXPECTATIONS.strategies
            .map((item) => `<div class="strategy-chip">${item}</div>`)
            .join("")}
        </div>
      </div>
    `;
    return;
  }

  elements.curriculumContent.innerHTML = `
    <div class="descriptor-card">
      <h3>Places</h3>
      <ul>${grade.places.map((place) => `<li>${place.name}: ${place.summary}</li>`).join("")}</ul>
    </div>
    <div class="descriptor-card">
      <h3>Core Skills</h3>
      <ul>${grade.focus.map((item) => `<li>${capitalize(item)}</li>`).join("")}</ul>
    </div>
    <div class="descriptor-card">
      <h3>Game Loop</h3>
      <ul>
        <li>${
          learningMode
            ? "Choose a grade and place, then work through the challenge bank in a calmer study flow."
            : "Explore each place and clear core challenges to unlock the next one."
        }</li>
        <li>Use the larger question bank for repeated practice and more variety.</li>
        <li>Earn XP, stars, streaks, and coins while building English in real-life situations.</li>
      </ul>
    </div>
  `;
}

function playCurrentAudio() {
  const question = getCurrentQuestion();
  if (!question || !question.voiceText) {
    return;
  }

  if (state.soundMode === "off") {
    elements.feedbackBox.className = "feedback-box error";
    elements.feedbackBox.textContent =
      "Sound mode is turned off in your setup settings. Turn it on from a new setup if you want spoken audio.";
    return;
  }

  if (!("speechSynthesis" in window)) {
    elements.feedbackBox.className = "feedback-box error";
    elements.feedbackBox.textContent =
      "Your browser does not support speech playback here, so use the reading text and question instead.";
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(question.voiceText);
  utterance.rate = 0.94;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function handleMovementKeys(event) {
  if (!appStarted) {
    return;
  }
  if (state.experienceMode === "learning") {
    return;
  }

  const activeTag = document.activeElement?.tagName;
  if (activeTag === "TEXTAREA" || activeTag === "INPUT" || activeTag === "SELECT") {
    return;
  }

  const direction = getDirectionFromKey(event.key);
  if (direction) {
    event.preventDefault();
    const directionKey = `${direction.dx},${direction.dy}`;
    if (!pressedDirections.has(directionKey)) {
      pressedDirections.add(directionKey);
      movePlayer(direction.dx, direction.dy);
    }
    startMovementLoop();
  } else if (event.key.toLowerCase() === "enter") {
    event.preventDefault();
    openSelectedPlaceChallenge();
  }
}

function handleMovementKeyUp(event) {
  const direction = getDirectionFromKey(event.key);
  if (!direction) {
    return;
  }
  pressedDirections.delete(`${direction.dx},${direction.dy}`);
}

function getDirectionFromKey(keyValue) {
  const key = keyValue.toLowerCase();
  if (key === "arrowup" || key === "w") {
    return { dx: 0, dy: -1 };
  }
  if (key === "arrowdown" || key === "s") {
    return { dx: 0, dy: 1 };
  }
  if (key === "arrowleft" || key === "a") {
    return { dx: -1, dy: 0 };
  }
  if (key === "arrowright" || key === "d") {
    return { dx: 1, dy: 0 };
  }
  return null;
}

function startMovementLoop() {
  if (movementLoopActive) {
    return;
  }
  movementLoopActive = true;

  const step = (timestamp) => {
    if (!pressedDirections.size) {
      movementLoopActive = false;
      return;
    }

    if (!lastMoveAt || timestamp - lastMoveAt >= MOVE_REPEAT_MS) {
      const [entry] = pressedDirections;
      const [dx, dy] = entry.split(",").map(Number);
      movePlayer(dx, dy);
      lastMoveAt = timestamp;
    }
    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

function movePlayer(dx, dy) {
  const nextX = state.playerX + dx;
  const nextY = state.playerY + dy;
  const grade = getCurrentGrade();
  const previousPlaceId = state.selectedPlaceId;

  if (!isWithinWorld(nextX, nextY)) {
    mapHintMessage = "You reached the edge of the world map.";
    renderWorldMap();
    return;
  }

  const tile = getTileMeta(grade, nextX, nextY);
  if (!tile.walkable) {
    if (tile.locked && tile.placeId) {
      const previous = grade.places[Math.max(getCurrentPlaceOrder(tile.placeId) - 1, 0)];
      mapHintMessage =
        `That zone is locked. Clear ${previous.unlockRequirement} core challenges in ${previous.name} first.`;
    } else {
      mapHintMessage = "That tile is blocked. Try another path.";
    }
    renderWorldMap();
    return;
  }

  state.playerX = nextX;
  state.playerY = nextY;
  let placeChanged = false;

  if (tile.placeId && !tile.locked) {
    state.selectedPlaceId = tile.placeId;
    state.activeQuestionId = getFirstAvailableQuestion(getCurrentPlace())?.id || null;
    placeChanged = previousPlaceId !== tile.placeId;
    mapHintMessage = tile.gate
      ? `You reached the ${capitalize(tile.placeId)} gate. Press Enter or Open challenge.`
      : `You are exploring ${capitalize(tile.placeId)}.`;
  } else if (tile.terrain === "path") {
    mapHintMessage = "You are on the stone path. Follow it to the next place.";
  } else if (tile.terrain === "water") {
    mapHintMessage = "That water edge is just scenery from the block world.";
  } else {
    mapHintMessage = "You are walking across the open field between places.";
  }

  if (placeChanged) {
    saveState();
    renderPlaceGrid();
    renderGradePanel();
    renderQuestion();
    renderWorldMap();
  } else {
    renderWorldMap();
  }
}

function openSelectedPlaceChallenge() {
  const place = getCurrentPlace();
  state.activeQuestionId = getFirstAvailableQuestion(place)?.id || place.questions[0].id;
  saveState();
  renderQuestion();
  renderQuestionBank(place);
  elements.challengeTitle.scrollIntoView({ behavior: "smooth", block: "start" });
}

function captureSpeech() {
  const question = getCurrentQuestion();
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!question) {
    return;
  }
  if (!Recognition) {
    elements.feedbackBox.className = "feedback-box error";
    elements.feedbackBox.textContent =
      "Speech input is not supported in this browser, so type your answer instead.";
    return;
  }

  const recognition = new Recognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  elements.feedbackBox.className = "feedback-box";
  elements.feedbackBox.textContent = "Listening... speak clearly, then wait for the text to appear.";

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    elements.textAnswer.value = transcript;
    elements.feedbackBox.className = "feedback-box";
    elements.feedbackBox.textContent = `Captured: "${transcript}"`;
  };

  recognition.onerror = () => {
    elements.feedbackBox.className = "feedback-box error";
    elements.feedbackBox.textContent =
      "The speech capture did not complete. Try again or type your answer.";
  };

  recognition.start();
}

function resetProgress() {
  const fresh = createFreshState({
    playerName: state.playerName || "Explorer",
    selectedGradeId: state.selectedGradeId || "preschool",
    selectedPlaceId: getSelectedGradeStartPlace(state.selectedGradeId || "preschool"),
    avatarTheme: state.avatarTheme || "sky",
    soundMode: state.soundMode || "on",
    experienceMode: state.experienceMode || "adventure",
    saveSlotKey: state.saveSlotKey || null
  });
  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, fresh);
  localStorage.removeItem(SESSION_STATE_KEY);
  if (state.saveSlotKey) {
    localStorage.setItem(`${SAVE_SLOT_PREFIX}${state.saveSlotKey}`, JSON.stringify(state));
  }
  teleportPlayerToPlace(state.selectedPlaceId);
  mapHintMessage =
    state.experienceMode === "learning"
      ? "Choose a place from the study track list to continue."
      : "Step into a building or area to focus that place.";
  saveState();
  render();
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function buildLine(x1, y1, x2, y2) {
  const tiles = [];
  if (x1 === x2) {
    const start = Math.min(y1, y2);
    const end = Math.max(y1, y2);
    for (let y = start; y <= end; y += 1) {
      tiles.push(`${x1},${y}`);
    }
  } else if (y1 === y2) {
    const start = Math.min(x1, x2);
    const end = Math.max(x1, x2);
    for (let x = start; x <= end; x += 1) {
      tiles.push(`${x},${y1}`);
    }
  }
  return tiles;
}

function buildRect(startX, startY, width, height) {
  const tiles = [];
  for (let y = startY; y < startY + height; y += 1) {
    for (let x = startX; x < startX + width; x += 1) {
      tiles.push(`${x},${y}`);
    }
  }
  return tiles;
}

function buildPathToHub(gateX, gateY) {
  const hubY = gateY < 18 ? 12 : 24;
  const vertical = buildLine(gateX, Math.min(gateY, hubY), gateX, Math.max(gateY, hubY));
  const horizontal = gateX < 29
    ? buildLine(gateX, hubY, 28, hubY)
    : buildLine(29, hubY, gateX, hubY);
  return [...vertical, ...horizontal];
}

function isWithinWorld(x, y) {
  return x >= 0 && x < WORLD_LAYOUT.cols && y >= 0 && y < WORLD_LAYOUT.rows;
}

function getPlaceZone(placeId) {
  return WORLD_LAYOUT.places[placeId];
}

function teleportPlayerToPlace(placeId) {
  const zone = getPlaceZone(placeId);
  if (!zone) {
    state.playerX = WORLD_LAYOUT.start.x;
    state.playerY = WORLD_LAYOUT.start.y;
    return;
  }
  state.playerX = zone.gate.x;
  state.playerY = zone.gate.y;
}

function centerMapOnPlayer() {
  const frame = elements.mapFrame;
  if (!frame) {
    return;
  }

  const tileSize = WORLD_LAYOUT.tileSize + 2;
  const targetLeft = state.playerX * tileSize - frame.clientWidth / 2 + tileSize / 2;
  const targetTop = state.playerY * tileSize - frame.clientHeight / 2 + tileSize / 2;
  frame.scrollLeft = Math.max(0, targetLeft);
  frame.scrollTop = Math.max(0, targetTop);
}

function getCurrentPlaceOrder(placeId) {
  const grade = getCurrentGrade();
  return grade.places.find((place) => place.id === placeId)?.order || 0;
}

function getTileMeta(grade, x, y) {
  const key = `${x},${y}`;
  let terrain = WATER_TILES.has(key) ? "water" : PATH_TILES.has(key) ? "path" : "grass";
  let placeId = null;
  let gate = false;
  let locked = false;
  grade.places.forEach((place) => {
    const zone = getPlaceZone(place.id);
    const inRect =
      x >= zone.x && x < zone.x + zone.w && y >= zone.y && y < zone.y + zone.h;
    const onGate = x === zone.gate.x && y === zone.gate.y;
    if (inRect) {
      terrain = zone.terrain;
      placeId = place.id;
      locked = !isPlaceUnlocked(grade, place.id);
    }
    if (onGate) {
      gate = true;
      placeId = place.id;
      locked = !isPlaceUnlocked(grade, place.id);
      terrain = "path";
    }
  });

  const walkable = terrain !== "water" && !locked;
  return { terrain, placeId, gate, locked, walkable };
}
