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


