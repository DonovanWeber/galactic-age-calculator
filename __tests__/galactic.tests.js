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
test('should return the age of the object on mercury', () => {
    expect(donovan.ageOnMercury()).toEqual(79.17);
  });
test('should return the age of the object on Venus', () => {
    expect(donovan.ageOnVenus()).toEqual(30.65);
  });

});