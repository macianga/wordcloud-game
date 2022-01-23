export const getLeaderboard = () => {
  return {
    sort: "desc",
    players: [
      {name: "John", score: 110},
      {name: "Alice", score: 98},
      {name: "Micky", score: 65},
      {name: "Mark", score: 54}],
  }
}

export const getGameData = () => {
  // mock api response by selecting random question
  const questions = [
    {
      question: "select animals",
      all_words: [
        "hole",
        "sofa",
        "pear",
        "tiger",
        "oatmeal",
        "square",
        "nut",
        "cub",
        "shirt",
        "tub",
        "passenger",
        "cow"
      ],
      good_words: [
        "tiger",
        "cow",
      ]
    },
    {
      question: "select colors",
      all_words:
        [
          "jeans",
          "existence",
          "ink",
          "red",
          "blue",
          "yellow",
          "laugh",
          "behavior",
          "expansion",
          "white",
          "black",
          "cakes"
        ],
      good_words:
        [
          "red",
          "blue",
          "yellow",
          "white",
          "black"
        ]
    },
    {
      question: "select vehicles",
      all_words:
        [
          "belief",
          "wire",
          "car",
          "bus",
          "star",
          "river",
          "hat",
          "skirt",
          "train",
        ],
      good_words:
        [
          "car",
          "bus",
          "train"
        ]
    }
  ];
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
}