// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLoc) {
    if (42 > pickUpLoc) {
        return 42 - pickUpLoc;
    } else { 
        return pickUpLoc - 42;
    }
}


function distanceFromHqInFeet(pickUpLoc) {
    return distanceFromHqInBlocks(pickUpLoc) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        let distanceInBlocks = start - destination;
        return distanceInBlocks * 264;
    } else {
        let distanceInBlocks = destination - start;
        return distanceInBlocks * 264;
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    } else if (distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}


console.log(calculatesFarePrice(34, 32))