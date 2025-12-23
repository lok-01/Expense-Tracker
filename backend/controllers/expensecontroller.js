const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
  const expense = await Expense.create({
    ...req.body,
    user: req.user
  });
  res.status(201).json(expense);
};

exports.getExpenses = async (req, res) => {
  const { category, date } = req.query;

  let filter = { user: req.user };

  if (category) filter.category = category;
  if (date) filter.date = date;

  const expenses = await Expense.find(filter);
  res.json(expenses);
};

exports.updateExpense = async (req, res) => {
  const expense = await Expense.findOneAndUpdate(
    { _id: req.params.id, user: req.user },
    req.body,
    { new: true }
  );

  if (!expense) {
    return res.status(404).json({ message: "Expense not found" });
  }

  res.json(expense);
};

exports.deleteExpense = async (req, res) => {
  const expense = await Expense.findOneAndDelete({
    _id: req.params.id,
    user: req.user
  });

  if (!expense) {
    return res.status(404).json({ message: "Expense not found" });
  }

  res.json({ message: "Expense deleted" });
};
