let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const age = 18;

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(`You will run at 9:30 am.`)
  console.log(`And your number is ${raceNumber}`)
} else if (age > 18 && !registeredEarly) {
  console.log(`You will run at 11:00 am.`)
  console.log(`And your number is ${raceNumber}`)
} else if (age < 18) {
  console.log(`You will run at 12:30 pm.`)
  console.log(`And your number is ${raceNumber}`)
} else if (age == 18) {
  console.log(`Since you are 18 years old, you should see the registration desk.`)
}