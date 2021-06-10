const scores = [100, 200, 300, 400, 500, 600, 650, 750, 800];
const scorers = [
  "Ali",
  "Badar",
  "Callum",
  "Danish",
  "Elon",
  "Faisal",
  "Ghani",
  "Hammad",
  "Irfan",
];

exports.getUser = async (req, res) => {
  let array = [];
  try {
    scores.map((score) => {
      //console.log(score);
      scorers.map((name) => {
        if (scores.indexOf(score) == scorers.indexOf(name)) {
          if (score > 0 && score <= 300) {
            array.push({ score: score, name: name, Rank: "Poor" });
          } else if (score > 300 && score <= 500) {
            array.push({ score: score, name: name, Rank: "Fair" });
          } else if (score > 500 && score <= 650) {
            array.push({ score: score, name: name, Rank: "Good" });
          } else if (score > 650 && score <= 750) {
            array.push({ score: score, name: name, Rank: "Excellent" });
          } else if (score > 750 && score <= 800) {
            array.push({ score: score, name: name, Rank: "Elite" });
          }
        }
      });
    });
    return res.status(200).send(array);
  } catch (error) {
    return res.status(400).send(error);
  }
};

exports.getReport = async (req, res) => {
  let poor = 0;
  let fair = 0;
  let good = 0;
  let excellent = 0;
  let elite = 0;

  //array = [{ poor: poor[0] }];
  try {
    scores.map((getScore) => {
      if (getScore > 0 && getScore <= 300) {
        poor = parseInt(poor) + 1;
      } else if (getScore > 300 && getScore <= 500) {
        fair = parseInt(fair) + 1;
      } else if (getScore > 500 && getScore <= 650) {
        good = parseInt(good) + 1;
      } else if (getScore > 650 && getScore <= 750) {
        excellent = parseInt(excellent) + 1;
      } else if (getScore > 750 && getScore <= 800) {
        elite = parseInt(elite) + 1;
      }
    });
    let report = {
      poor: poor,
      fair: fair,
      good: good,
      excellent: excellent,
      elite: elite,
    };
    const sortedList = Object.entries(report).sort((a, b) => {
      if (a[1] >= b[1]) return -1;
      else if (a[1] < b[1]) return -1;
      else {
        if (b[0] > a[0]) return 1;
        else if (b[0] < a[0]) return -1;
        else return 0;
      }
    });

    return res.send(sortedList);
  } catch (error) {
    return res.status(400).send(error);
  }
};

exports.getRank = async (req, res) => {
  const users = req.body.name;
  //console.log(users);
  const getScore = req.body.score;
  //console.log(getScore);
  const findUserIndex = scorers.indexOf(users);
  //console.log(findUserIndex);
  const findScoreIndex = scores.indexOf(parseInt(getScore));
  let array = [getScore, users];
  //console.log(findScoreIndex);

  try {
    if (findUserIndex != findScoreIndex) {
      return res.send({ Rank: "user and score not matched" });
    } else if (getScore > 0 && getScore <= 300) {
      return res.send({ Rank: "Poor Rank" });
    } else if (getScore > 300 && getScore <= 500) {
      return res.send({ Rank: "Fair Rank" });
    } else if (getScore > 500 && getScore <= 650) {
      return res.send({ Rank: "Good Rank" });
    } else if (getScore > 650 && getScore <= 750) {
      return res.send({ Rank: "Excellent Rank" });
    } else if (getScore > 750 && getScore <= 800) {
      return res.send({ Rank: "Elite Rank" });
    }
    return status(200);
  } catch (error) {
    return res.status(400).send(error);
  }
};
