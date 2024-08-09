export function calculate(expression: string): number {
  expression = expression.replaceAll(" ", "");
  return evaluate(expression);

  function evaluate(expression: string): number {
    if (expression.length == 1) {
      return Number(expression);
    }

    const operator = expression[0];
    const operand1 = isOperator(expression[1]) ? expression.slice(1, -1) : expression[1];
    const operand2 = isOperator(expression[1]) ? expression.slice(-1) : expression.slice(2);

    return new Function(`return ${evaluate(operand1)}${operator}${evaluate(operand2)}`)();
  }
}

function isOperator(string: string) {
  const operators = ["+", "-", "*", "/", "%"];
  return operators.includes(string);
}

console.log(calculate("+ * 1 2 3")); // (1 * 2) + 3 = 5
console.log(calculate("+ 2 * 2 4")); // 2 + (2 * 4) = 8
