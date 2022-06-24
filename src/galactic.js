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
    if(age >= lifeExpectancy) {
      age -= lifeExpectancy;
      return parseFloat(age.toFixed(2));
    } else {
      let lifeLeft = lifeExpectancy - age;
      return parseFloat(lifeLeft.toFixed(2));
    }
  }

  lifeOnMars() {
    let age = this.ageOnMars();
    let lifeExpectancy = this.lifeExpectancy;
    if(age >= lifeExpectancy) {
      age -= lifeExpectancy;
      return parseFloat(age.toFixed(2));
    } else {
      let lifeLeft = lifeExpectancy - age;
      return parseFloat(lifeLeft.toFixed(2));
    }
  }
  lifeOnJupiter() {
    let age = this.ageOnJupiter();
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
}