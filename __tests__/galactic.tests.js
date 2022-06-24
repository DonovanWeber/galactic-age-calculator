import { Age } from './../src/galactic.js';

describe('Age', () => {
  let donovan;
  beforeEach(() => {
    donovan = new Age(19, 79);
  });
  test('should create an age object with two properties of age and life expectancy', () => {
    expect(donovan.earthAge).toEqual(19);
    expect(donovan.lifeExpectancy).toEqual(79);
  });
  test('should return the age of the object on Mercury', () => {
    expect(donovan.ageOnMercury()).toEqual(79.17);
  });
  test('should return the age of the object on Venus', () => {
    expect(donovan.ageOnVenus()).toEqual(30.65);
  });
  test('should return the age of the object on Mars', () => {
    expect(donovan.ageOnMars()).toEqual(10.11);
  });
  test('should return the age of the object on Jupiter', () => {
    expect(donovan.ageOnJupiter()).toEqual(1.6);
  });
  test('should return the life expectancy left on Mercury or how many years passed your life expectancy', () => {
    let newPerson = new Age(20, 85);
    expect(donovan.lifeOnMercury()).toEqual(.17);
    expect(newPerson.lifeOnMercury()).toEqual(1.67);
  });
  test('should return the life expectancy left on Venus or how many years passed your life expectancy on Venus', () => {
    let newPerson = new Age(34,40);
    expect(donovan.lifeOnVenus()).toEqual(48.35);
    expect(newPerson.lifeOnVenus()).toEqual(14.84);
  });
  test('should return the life expectancy left on Mars or how many years passed your life expectancy on Mars', () => {
    let newPerson = new Age(45, 10);
    expect(donovan.lifeOnMars()).toEqual(68.89);
    expect(newPerson.lifeOnMars()).toEqual(13.94);
  });
  test('should return the life expectancy left on Jupiter or how many years passed your life expectancy on Jupiter', () => {
    let newPerson = new Age(24, 2);
    expect(donovan.lifeOnJupiter()).toEqual(77.4);
    expect(newPerson.lifeOnJupiter()).toEqual(0.02);
  });
});