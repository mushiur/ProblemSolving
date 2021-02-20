// kilometerToMeter

function kilometerToMeter(kilometer) {
    if (kilometer >= 0 && typeof kilometer == "number") {
        var meter = kilometer * 1000;

        return meter;
    } else {
        return "distance cannot be non-numeric value or negative value ";
    }
}

kilometerToMeter(10);