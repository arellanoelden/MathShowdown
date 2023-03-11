import Mexp from "math-expression-evaluator";

export const generateRandomEquationWithOptions = () => {
  const firstNumber = Math.floor(Math.random() * 10);
  const secondNumber = Math.floor(Math.random() * 10);

  const mexp = new Mexp();
  const simpleEval = "+";

  const fullExpression = `${firstNumber} ${simpleEval} ${secondNumber}`;
  return {
    equation: fullExpression,
    options: [
      {
        value: mexp.eval(fullExpression),
        isCorrectValue: true,
      },
      {
        value: mexp.eval(fullExpression) - 1,
        isCorrectValue: false,
      },
      {
        value: mexp.eval(fullExpression) - 2,
        isCorrectValue: false,
      },
      {
        value: mexp.eval(fullExpression) + 1,
        isCorrectValue: false,
      },
    ],
  };
};
