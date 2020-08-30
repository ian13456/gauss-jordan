import { PrimeField } from '../PrimeField';
import { Matrix } from '../Matrix';

it('test', () => {
  const modulus = 7;

  const input = [
    [3, 1, 4, 1],
    [5, 2, 6, 5],
    [0, 5, 2, 1],
  ];

  const p = new PrimeField(modulus);
  const m = new Matrix(input.length, input[0].length, p);

  for (let i = 0; i < input.length; i++)
    for (let j = 0; j < input[i].length; j++) {
      m.set(i, j, input[i][j]);
    }

  m.reducedRowEchelonForm();

  expect(m.values).toEqual([
    [1, 0, 0, 4],
    [0, 1, 0, 3],
    [0, 0, 1, 0],
  ]);
});