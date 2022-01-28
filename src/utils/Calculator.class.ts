import { OPERATIONS_ } from "./Calculator.types";

export default class Calculator {
  display: (number | string)[] = [];
  storedNumber: number;
  storedOperation: [OPERATIONS_?] = [];

  constructor (number: number) {
    this.storedNumber = number
  }
}