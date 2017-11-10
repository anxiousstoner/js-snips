let raceNumber = Math.floor(Math.random()*1000);

let earlyReg = false;

let runnerAge = 19; 

if (earlyReg === false) {
    raceNumber += 1000;
    }
else {
    raceNumber;
    }

if (runnerAge > 18 && earlyReg === true) {
    console.log(`Race Number: ${raceNumber} Race will start at 9:30AM`);
    }
else if (runnerAge > 18 || earlyReg === true) {
         console.log(`Race Number: ${raceNumber} Race starts at 11:00AM`)
         }
else {
  console.log(`Race Number: ${raceNumber} Race starts at 12:30PM`)
}
