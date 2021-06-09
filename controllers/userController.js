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
  const users = req.params.name;
  //console.log(users);
  const getScore = req.params.score;
  //console.log(getScore);
  const findUserIndex = scorers.indexOf(users);
  //console.log(findUserIndex);
  const findScoreIndex = scores.indexOf(parseInt(getScore));
  let array = [getScore, users];
  //console.log(findScoreIndex);

  try {
    if (findUserIndex != findScoreIndex) {
      return res.send({ msg: "user and score not matched" });
    } else if (getScore > 0 && getScore <= 300) {
      array.splice(1, 0, "Poor");
      console.log(array);
    } else if (getScore > 300 && getScore <= 500) {
      array.splice(1, 0, "Fair");
    } else if (getScore > 500 && getScore <= 650) {
      array.splice(1, 0, "Good");
    } else if (getScore > 650 && getScore <= 750) {
      array.splice(1, 0, "Excellent");
    } else if (getScore > 750 && getScore <= 800) {
      array.splice(1, 0, "Elite");
    }
    const obj = Object.assign(array);
    return res.send(obj);
  } catch (error) {
    return res.status(400).send(error);
  }

  //   if () {

  //   }
  //   const find = scores.indexOf(parseInt(getScore));
  //   // console.log(find);

  //   //console.log(findScore);
  //   // scores.map((score) => {
  //   scorers.map((scorer) => {
  //     //console.log("rer");
  //     if (parseInt(find) === scorers.indexOf(parseInt(scorer))) {
  //       console.log("enter");
  //     }
  //   });
  //   // });
  //   const index = scores.indexOf(400);
  //console.log(index);
};

exports.getReport = async (req, res) => {
  let poor = 0;
  let fair = 0;
  let good = 0;
  let excellent = 0;
  let elite = 0;

  //array = [{ poor: poor[0] }];
  scores.map((getScore) => {
    if (getScore > 0 && getScore <= 300) {
      poor = parseInt(poor) + 1;
      //report.push(poor);
      return poor;
    } else if (getScore > 300 && getScore <= 500) {
      fair = parseInt(fair) + 1;
      //return fair;
    } else if (getScore > 500 && getScore <= 650) {
      good = parseInt(good) + 1;
      return good;
    } else if (getScore > 650 && getScore <= 750) {
      excellent = parseInt(excellent) + 1;
      return excellent;
    } else if (getScore > 750 && getScore <= 800) {
      elite = parseInt(elite) + 1;
      return elite;
    }
  });
  let report = {
    poor: poor,
    fair: fair,
    good: good,
    excellent: excellent,
    elite: elite,
  };
  return res.send(report);
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
