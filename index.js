// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const createFareMultiplier = function(value) {
    return function(fare) {
      return fare * value;
    };
  };

  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = function(drivers, select) {
    if (select === returnFirstTwoDrivers) {
      return returnFirstTwoDrivers(drivers);
    } else if (select === returnLastTwoDrivers) {
      return returnLastTwoDrivers(drivers);
    }
  };