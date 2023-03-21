let driver = (['Antonia', 'Nuru', 'Amari', 'Mo']);
    
function returnFirstTwoDrivers(){
    let driver = (['Antonia', 'Nuru', 'Amari', 'Mo']);
    return driver.slice(0, 2)
}
function returnLastTwoDrivers(){
    let driver = (['Antonia', 'Nuru', 'Amari', 'Mo']);
    return driver.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x){
    return function(){
      return (x ** 2)
    }
  }
  const m2 = createFareMultiplier(8);
  
  console.log(m2());

  function fareDoubler(m2){
    return (m2 * 2)
  }
  console.log(fareDoubler(10));
  
  function  fareTripler(m3){
    return (m3 * 3)
  }
  console.log(fareTripler(10));  

  

  function selectDifferentDrivers(driver, x){
    
    if (x=== returnFirstTwoDrivers){
        return driver, returnFirstTwoDrivers();
    }
    else if (x=== returnLastTwoDrivers){
        return returnLastTwoDrivers();
    }
  }
 console.log(selectDifferentDrivers(driver, returnFirstTwoDrivers));

