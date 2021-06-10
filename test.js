const item = [
  { name: "Ali", score: 100 },
  { name: "Badar", score: 200 },
  { name: "callum", score: 300 },
  { name: "Danish", score: 400 },
  { name: "Elon", score: 500 },
  { name: "Faisal", score: 600 },
  { name: "Ghani", score: 650 },
  { name: "Hammad", score: 750 },
  { name: "Irfan", score: 800 },
];

scorers.map((name) => {
  if (num > 0 && num <= 300) {
    poor = parseInt(poor) + 1;
  } else if (num > 300 && num <= 500) {
    fair = parseInt(fair) + 1;
  } else if (num > 500 && num <= 650) {
    good = parseInt(good) + 1;
  } else if (num > 650 && num <= 750) {
    excellent = parseInt(excellent) + 1;
  } else if (num > 750 && num <= 800) {
    elite = parseInt(elite) + 1;
  }
});

array.push({ num: num, name: name });

scorers.map((name) => {
  if (num > 0 && num <= 300) {
    array.push({ num: num, name: name, Rank: "Poor" });
  } else if (num > 300 && num <= 500) {
    array.push({ num: num, name: name, Rank: "Fair" });
  } else if (num > 500 && num <= 650) {
    array.push({ num: num, name: name, Rank: "Good" });
  } else if (num > 650 && num <= 750) {
    array.push({ num: num, name: name, Rank: "Excellent" });
  } else if (num > 750 && num <= 800) {
    array.push({ num: num, name: name, Rank: "Elite" });
  }
});

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

  const obj = Object.entries(report)
    .sort((a, b) => a[1] - b[1])
    .map((el) => el[0]);
  console.log(obj);
  return res.send(report);
};
