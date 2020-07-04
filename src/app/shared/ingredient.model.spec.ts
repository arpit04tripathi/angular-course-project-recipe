import { Ingredient } from './ingredient.model';

describe('Ingredient.Model', () => {
  it('should create an instance', () => {
    expect(new Ingredient("name",2)).toBeTruthy();
  });
});
