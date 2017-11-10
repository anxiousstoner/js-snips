const getSleepHours = (day) => {
  switch(day) {
    case 'Monday':
			return 12;
  	break;
    case 'Tuesday':
			return 12;
  	break;
    case 'Wednesday':
			return 10;
  	break;
    case 'Thursday':
			return 11;
  	break;
    case 'Friday':
			return 12;
  	break;
    case 'Saturday':
			return 9;
  	break;
    case 'Sunday':
			return 7;
  	break;
            }
};

const getActualSleepHours = () => {
 	return getSleepHours('Monday') +  
    getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
 	getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');
};

const getIdealSleepHours = () => {
  let idealHours = 10;
  return idealHours * 7
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let sleepOver = actualSleepHours - idealSleepHours;
  let sleepUnder = idealSleepHours - actualSleepHours;
  if (actualSleepHours === idealSleepHours) {
      console.log(`You got the perfect amount of sleep this week!`);
      }
  else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${sleepOver} too many hours sleep this week bro!`)
  }
  else {
    console.log(`Go rest! you need ${sleepUnder} more hours this week!`)
  }
}


console.log(`You got ${getActualSleepHours()} hours sleep this week!`);
console.log(`You needed ${getIdealSleepHours()}! `);
console.log(calculateSleepDebt());
