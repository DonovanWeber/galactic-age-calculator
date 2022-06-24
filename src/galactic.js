// Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
// Returns their age in Venus years. (A Venus year is .62 Earth years.)
// Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
// Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
// Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
// If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy. The number of years lived past life expectancy should be a positive number.
export class Age {
  constructor(earthAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
  }
  ageOnMercury() {
    const daysOnEarth = this.earthAge * 365;
    const daysOnMercury = 365 * .24;
    const ageOnMercury = daysOnEarth / daysOnMercury;
    const roundedAge = parseFloat(ageOnMercury.toFixed(2));
    return roundedAge;
  }
  
  ageOnVenus() {
    const daysOnEarth = this.earthAge * 365;
    const daysOnVenus = 365 * .62;
    const ageOnVenus = daysOnEarth / daysOnVenus;
    const roundedAge = parseFloat(ageOnVenus.toFixed(2));
    return roundedAge;
  }
  
  ageOnMars() {
    const daysOnEarth = this.earthAge * 365;
    const daysOnMars = 365 * 1.88;
    const ageOnMars = daysOnEarth / daysOnMars;
    const roundedAge = parseFloat(ageOnMars.toFixed(2));
    return roundedAge;
  }
  
  ageOnJupiter() {
    const daysOnEarth = this.earthAge * 365;
    const daysOnJupiter = 365 * 11.86;
    const ageOnJupiter = daysOnEarth / daysOnJupiter;
    const roundedAge = parseFloat(ageOnJupiter.toFixed(2));
    return roundedAge;
  }
  
  lifeOnMercury() {
    let age = this.ageOnMercury();
    let lifeExpectancy = this.lifeExpectancy;
    if (age >= lifeExpectancy) {
      age -= lifeExpectancy;
      return parseFloat(age.toFixed(2));
    } else  {
      let lifeLeft = lifeExpectancy - age;
      return parseFloat(lifeLeft.toFixed(2));
    } 
  }
  
  lifeOnVenus() {
    let age = this.ageOnVenus();
    let lifeExpectancy = this.lifeExpectancy;
    console.log(age);
    console.log(lifeExpectancy);
    if(age >= lifeExpectancy) {
      age -= lifeExpectancy;
      return parseFloat(age.toFixed(2));
    } else {
      let lifeLeft = lifeExpectancy - age;
      return parseFloat(lifeLeft.toFixed(2));
    }
  }

  lifeOnMars() {
    let age 
  }
}