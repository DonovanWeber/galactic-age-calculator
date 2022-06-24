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
test('should create return the age of object on mercury', () => {
    expect(donovan.ageOnMercury()).toEqual(79.17);
});

});