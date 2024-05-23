type Income = {
  // Assuming 'Income' is a structure with basic income details
  baseSalary: number;
  bonus: number;
  overtime: number;
  calculateTotal: () => number;
};

const riyadIncome: Income = {
  baseSalary: 50000, // Base annual salary
  bonus: 5000,       // Annual bonus
  overtime: 2000,    // Overtime earnings
  calculateTotal: function() {
    // Total income is the sum of all components
    return this.baseSalary + this.bonus + this.overtime;
  }
};

// Example usage
console.log(`Total Income: ${riyadIncome.calculateTotal()}`);
