import {onValue, ref, set} from "firebase/database";
import {database} from "./firebase";

export const getLeaderboard = () => {
  return {
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

export const saveScore = async (username: String, score: Number) => {
  if(!username) return false;
  return await set(ref(database, 'users/' + username), {
    username: username,
    score: score
  });
}

export const getAllScores = async (start:Number=0, limit:Number=10) =>{
  const starCountRef = ref(database, 'users/');
  let allScores = {};
  onValue(starCountRef, (snapshot) => {
    allScores = snapshot.val()
  });
  return allScores;
}