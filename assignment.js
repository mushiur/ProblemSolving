// https://github.com/newlyyyy/ProblemSolving

// kilometerToMeter

function kilometerToMeter(kilometer) {
    if (kilometer >= 0 && typeof kilometer == "number") {
        var meter = kilometer * 1000;

        return meter;
    } else {
        return "distance can't be negative value.";
    }
}

kilometerToMeter(20);

//  budgetCalculator

function budgetCalculator(clock, phone, laptop) {
    // positive values 
    if (
        
        clock >= 0 && phone >= 0 && laptop >= 0
        
    ) {
        var clockBudget = clock * 50;
        var phoneBudget = phone * 100;
        var laptopBudget = laptop * 500;
        var totalBudget = clockBudget + phoneBudget + laptopBudget; //Total Budget 
        
        return totalBudget;
    } else {
        return "number of product can't be negative value  or less than three numbers.";
    }
}

// var result = 
budgetCalculator(1, 2, 3);
// console.log(result);

// hotelCost

function hotelCost(days) {
    var firstTenDays;
    var secondTenDays;
    var uptoTwentyDays;
    var totalCost;

    if (days >= 0 ) {
        if (days <= 10) {
            firstTenDays = days * 100;
            totalCost = firstTenDays;

            return totalCost;

        } else if (days <= 20) {
            firstTenDays = 10 * 100;
            secondTenDays = (days - 10) * 80;
            totalCost = firstTenDays + secondTenDays;

            return totalCost;

        } else if (days > 20) {
            firstTenDays = 10 * 100;
            secondTenDays = 10 * 80;
            uptoTwentyDays = (days - 20) * 50;
            totalCost = firstTenDays + secondTenDays + uptoTwentyDays;
            // total costing ;

            return totalCost;
        }

    } else {
        return "days can't be negative value";
    }
}

hotelCost(12);

// megaFriend


function megaFriend(friends) {
    let word = "";
    for (let i = 0; i < friends.length; i++) {
      if (word.length < friends[i].length) {
        word = friends[i];
      }
      else{
          return "undefined"; 
      }
    }
    return word;
  }
//   var result1 = 
  megaFriend(['rifatRahman', 'istak', 'niloy']);
//   console.log(result1);

