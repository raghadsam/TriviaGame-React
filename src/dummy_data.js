export const categories = {
  0: "history",
  1: "science",
  2: "music",
  3: "geography",
  4: "languages",
  5: "coding",
  6: "literature",
  7: "movies",
  8: "business",
  9: "politics",
  10: "sports",
  11: "challenges",
};

export const difficulty = {
  0: "Easy",
  1: "Med",
  2: "Hard",
};

export const quizzes = [
  {
    name: "Quiz 1",
    rating: 3.8,
    difficulty: 0,
    players: 150,
    times_played: 200,
    created_by: "JSTrivia",
    number_of_ratings: 1000,
    category: 1,
    questions: [
      {
        questionText: "What is 2+2?",
        questionOptions: [
          { answerText: 4, isCorrect: true },
          { answerText: 6, isCorrect: false },
          { answerText: 8, isCorrect: false },
          { answerText: 10, isCorrect: false },
        ],
        questionId: 0,
      },
      {
        questionText: "What is 42*2?",
        questionOptions: [
          { answerText: 84, isCorrect: true },
          { answerText: 64, isCorrect: false },
          { answerText: 422, isCorrect: false },
          { answerText: 7, isCorrect: false },
        ],
        questionId: 1,
      },
      {
        questionText: "How many sides does a square have ?",
        questionOptions: [
          { answerText: 4, isCorrect: true },
          { answerText: 6, isCorrect: false },
          { answerText: 8, isCorrect: false },
          { answerText: 10, isCorrect: false },
        ],
        questionId: 2,
      },
      {
        questionText: "What is the sum of angles in a triangle?",
        questionOptions: [
          { answerText: 90, isCorrect: false },
          { answerText: 100, isCorrect: false },
          { answerText: 180, isCorrect: true },
          { answerText: 360, isCorrect: false },
        ],
        questionId: 3,
      },
    ],
  },
  {
    name: "Quiz 2",
    rating: 3.8,
    difficulty: 1,
    players: 300,
    times_played: 700,
    created_by: "JSTrivia",
    number_of_ratings: 1567,
    category: 5,
    questions: [
      {
        questionText: "What does the MP stand for in MP3?",
        questionOptions: [
          { answerText: "Music Player", isCorrect: false },
          { answerText: "Multi Pass", isCorrect: false },
          { answerText: "Micro Point", isCorrect: false },
          { answerText: "Moving Picture", isCorrect: true },
        ],
        questionId: 0,
      },
      {
        questionText: "What amount of bits commonly equals one byte?",
        questionOptions: [
          { answerText: 1, isCorrect: false },
          { answerText: 2, isCorrect: false },
          { answerText: 8, isCorrect: false },
          { answerText: 64, isCorrect: true },
        ],
        questionId: 1,
      },
      {
        questionText: "In web design, what does CSS stand for?",
        questionOptions: [
          { answerText: "Counter Strike: Source", isCorrect: false },
          { answerText: "Corrective Style Sheet", isCorrect: false },
          { answerText: "Cascading Style Sheet", isCorrect: true },
          { answerText: "Computer Style Sheet", isCorrect: false },
        ],
        questionId: 2,
      },
      {
        questionText: "This mobile OS held the largest market share in 2012.",
        questionOptions: [
          { answerText: "Android", isCorrect: false },
          { answerText: "BlackBerry", isCorrect: false },
          { answerText: "Symbian", isCorrect: false },
          { answerText: "iOS", isCorrect: true },
        ],
        questionId: 3,
      },
    ],
  },
  {
    name: "Quiz 3",
    rating: 3.8,
    difficulty: 0,
    players: 150,
    times_played: 200,
    created_by: "JSTrivia",
    number_of_ratings: 1000,
    category: 3,
    questions: [
      {
        questionText: "What is the capital of India?",
        questionOptions: [
          { answerText: "Bejing", isCorrect: false },
          { answerText: "Montreal", isCorrect: false },
          { answerText: "Tithi", isCorrect: false },
          { answerText: "New Delhi", isCorrect: true },
        ],
        questionId: 0,
      },
      {
        questionText: "The Alps are a mountain range on which continent?",
        questionOptions: [
          { answerText: "North America", isCorrect: false },
          { answerText: "Europe", isCorrect: true },
          { answerText: "Asia", isCorrect: false },
          { answerText: "Africa", isCorrect: false },
        ],
        questionId: 1,
      },
      {
        questionText: "What is Laos?",
        questionOptions: [
          { answerText: "Country", isCorrect: true },
          { answerText: "Region", isCorrect: false },
          { answerText: "River", isCorrect: false },
          { answerText: "City", isCorrect: false },
        ],
        questionId: 2,
      },
    ],
  },
  {
    name: "Quiz 4",
    rating: 3.8,
    difficulty: 2,
    players: 150,
    times_played: 200,
    created_by: "JSTrivia",
    number_of_ratings: 1000,
    category: 6,
    questions: [
      {
        questionText:
          "In the Beatrix Potter books, what type of animal is Tommy Brock?",
        questionOptions: [
          { answerText: "Fox", isCorrect: false },
          { answerText: "Frog", isCorrect: false },
          { answerText: "Rabbit", isCorrect: false },
          { answerText: "Badger", isCorrect: true },
        ],
        questionId: 0,
      },
      {
        questionText:
          "In the Harry Potter universe, what is Cornelius Fudge's middle name?",
        questionOptions: [
          { answerText: "James", isCorrect: false },
          { answerText: "Harold", isCorrect: false },
          { answerText: "Christopher", isCorrect: false },
          { answerText: "Oswald", isCorrect: true },
        ],
        questionId: 1,
      },
      {
        questionText: "What is Hermione Granger's middle name?",
        questionOptions: [
          { answerText: "Jean", isCorrect: true },
          { answerText: "Jane", isCorrect: false },
          { answerText: "Emma", isCorrect: false },
          { answerText: "Jo", isCorrect: false },
        ],
        questionId: 2,
      },
      {
        questionText:
          "In the Harry Potter series, what is Headmaster Dumbledore's full name?",
        questionOptions: [
          {
            answerText: "Albus Valum Jetta Mobius Dumbledore",
            isCorrect: false,
          },
          { answerText: "Albus James Lunae Otto Dumbledore", isCorrect: false },
          {
            answerText: "Albus Valencium Horatio Kul Dumbledore",
            isCorrect: false,
          },
          {
            answerText: "Albus Percival Wulfric Brian Dumbledore",
            isCorrect: true,
          },
        ],
        questionId: 3,
      },
    ],
  },
  {
    name: "Quiz 5",
    rating: 3.8,
    difficulty: 0,
    players: 150,
    times_played: 200,
    created_by: "JSTrivia",
    number_of_ratings: 1000,
    category: 10,
    questions: [
      {
        questionText: "Which country hosted the 2021 Summer Olympics?",
        questionOptions: [
          { answerText: "Japan", isCorrect: true },
          { answerText: "China", isCorrect: false },
          { answerText: "Australia", isCorrect: false },
          { answerText: "Germany", isCorrect: false },
        ],
        questionId: 0,
      },
      {
        questionText: "Who won the 2015 Formula 1 World Championship?",
        questionOptions: [
          { answerText: "Quebec City", isCorrect: true },
          { answerText: "Houston", isCorrect: false },
          { answerText: "Montreal", isCorrect: false },
          { answerText: "New York", isCorrect: false },
        ],
        questionId: 1,
      },
      {
        questionText:
          "What team did England beat to win in the 1966 World Cup final?",
        questionOptions: [
          { answerText: "West Germany", isCorrect: true },
          { answerText: "Soviet Union", isCorrect: false },
          { answerText: "Portugal", isCorrect: false },
          { answerText: "Brazil", isCorrect: false },
        ],
        questionId: 2,
      },
      {
        questionText:
          "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
        questionOptions: [
          { answerText: "1-5", isCorrect: false },
          { answerText: "1-6", isCorrect: false },
          { answerText: "2-6", isCorrect: false },
          { answerText: "1-7", isCorrect: true },
        ],
        questionId: 3,
      },
    ],
  },
  {
    name: "Quiz 6",
    rating: 3.8,
    difficulty: 1,
    players: 150,
    times_played: 200,
    created_by: "JSTrivia",
    number_of_ratings: 1000,
    category: 9,
    questions: [
      {
        questionText:
          "Which president erased the national debt of the United States?",
        questionOptions: [
          { answerText: "Andrew Jackson", isCorrect: true },
          { answerText: "Ronald Reagan", isCorrect: false },
          { answerText: "John F. Kennedy", isCorrect: false },
          { answerText: "Franklin Roosevelt", isCorrect: false },
        ],
        questionId: 0,
      },
      {
        questionText:
          "Who became Prime Minister of the United Kingdom in July 2016?",
        questionOptions: [
          { answerText: "Theresa May", isCorrect: true },
          { answerText: "Boris Johnson", isCorrect: false },
          { answerText: "David Cameron", isCorrect: false },
          { answerText: "Tony Blair", isCorrect: false },
        ],
        questionId: 1,
      },
      {
        questionText:
          "What is former United States President Bill Clinton's full name?",
        questionOptions: [
          { answerText: "William Jefferson Clinton", isCorrect: true },
          { answerText: "William Roosevelt Clinton", isCorrect: false },
          { answerText: "William Truman Clinton", isCorrect: false },
          { answerText: "William Lincoln Clinton", isCorrect: false },
        ],
        questionId: 2,
      },
      {
        questionText:
          "Who succeeded Joseph Stalin as General Secretary of the Communist Party of the Soviet Union?",
        questionOptions: [
          { answerText: "Nikita Khrushchev", isCorrect: true },
          { answerText: "Leonid Brezhnev", isCorrect: false },
          { answerText: "Mikhail Gorbachev", isCorrect: false },
          { answerText: "Boris Yeltsin", isCorrect: false },
        ],
        questionId: 3,
      },
    ],
  },
];

export const dummyUser = {
  isAdmin: true,
  quizzes: [
    "01hbVvu365pZoSU146pM",
    "4YjTYiJcnpDLEVnnNYbk",
    "WBoRvtvaEGTpuT3IHCLO",
    "1o8ZlhMfpdyv9gq6LvEL",
  ],
};

export const dummyReports = [
  {
    message: "This quiz contains some inappropriate contents",
    quizId: "01hbVvu365pZoSU146pM",
    userId: "",
    reportId: 0,
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum egestas libero, nec lobortis neque vehicula ullamcorper. Etiam ac ex ac libero vehicula congue sed ut dui. Vestibulum eu ipsum et urna fermentum vehicula. Curabitur sodales sem dolor, quis aliquam tortor porttitor quis. Nunc id elit velit. Morbi cursus eget est in commodo. ",
    quizId: "4YjTYiJcnpDLEVnnNYbk",
    userId: "",
    reportId: 1,
  },
  {
    message:
      "Nam dignissim sagittis sagittis. Proin luctus nulla nec lorem vulputate porttitor. In consectetur ex enim, sit amet pulvinar urna auctor vel. ",
    quizId: "WBoRvtvaEGTpuT3IHCLO",
    userId: "",
    reportId: 2,
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum egestas libero, nec lobortis neque vehicula ullamcorper. Etiam ac ex ac libero vehicula congue sed ut dui. Vestibulum eu ipsum et urna fermentum vehicula. Curabitur sodales sem dolor, quis aliquam tortor porttitor quis. Nunc id elit velit. Morbi cursus eget est in commodo. Quisque sed nisi ultrices, fringilla ipsum nec, posuere quam. Suspendisse in orci vehicula felis dictum consectetur. Nam dignissim sagittis sagittis. Proin luctus nulla nec lorem vulputate porttitor. In consectetur ex enim, sit amet pulvinar urna auctor vel. Morbi rhoncus, nisi sit amet scelerisque imperdiet, tortor lacus interdum massa, sit amet condimentum leo neque vel nulla. Donec efficitur hendrerit sagittis. Donec a porttitor dui. Suspendisse sit amet vulputate metus.",
    quizId: "1o8ZlhMfpdyv9gq6LvEL",
    userId: "",
    reportId: 3,
  },
];
