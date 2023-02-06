// Function for doing multiplication 3 with input, then add 10, then deviation with 10, and then subtraction with 5.

function mindGame(positiveNumber) {
  if (typeof positiveNumber === "number") {
    let result = positiveNumber * 3;
    result += 10;
    result /= 2;
    result -= 5;
    return result;
  } else {
    return "Input should be a number";
  }
}

// Function for check the input lenght is odd or even.

function evenOdd(word) {
  if (typeof word === "string") {
    let countLetter = word.length;
    if (countLetter % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "Input should be an String";
  }
}

// Function for need to find the difference between the input value and 7. If this difference is smaller than 7, you must return the subtraction. Otherwise you must return double of the input. Means twice the number you took as input.

function isLGSeven(InputNumber) {
  if (typeof InputNumber === "number") {
    let substraction = InputNumber - 7;
    if (substraction < 7) {
      return substraction;
    } else {
      let result = InputNumber * 2;
      return result;
    }
  } else {
    return "Input should be an Number";
  }
}

// Function for counting how much negative value has in an array
function findingBadData(numberOfArray) {
  if (Array.isArray(numberOfArray)) {
    let badData = [];
    for (let i = 0; i < numberOfArray.length; i++) {
      if (numberOfArray[i] < 0) {
        badData.push(badData);
      }
    }

    let result = badData.length;
    return result;
  } else {
    return "Input will be an Array";
  }
}

// function for converting your gems into diamond

function gemsToDiamond(firstGems, secondGems, thirdGems) {
  if (
    typeof firstGems === "number" &&
    typeof secondGems === "number" &&
    typeof thirdGems === "number"
  ) {
    let firstGemsDimond = 21;
    let secondGemsDimond = 32;
    let thirdGemsDimond = 43;
    let firstTotalDimond = firstGems * firstGemsDimond;
    let secondTotalDimond = secondGems * secondGemsDimond;
    let thirdTotalDimond = thirdGems * thirdGemsDimond;

    let totalDimond = firstTotalDimond + secondTotalDimond + thirdTotalDimond;

    let result;
    if (totalDimond >= 1000 * 2) {
      result = totalDimond - 2000;
    } else {
      result = totalDimond;
    }

    return result;
  } else {
    return "Input should be an String and you have to give atleast 3 parameter";
  }
}
