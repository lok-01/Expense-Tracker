import { useEffect, useState, useCallback } from "react";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  // ---------------- FETCH ----------------
  const fetchExpenses = useCallback(async () => {
    const res = await fetch("http://localhost:5000/api/expenses", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await res.json();
    setExpenses(data);
  }, [token]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  // ---------------- ADD / UPDATE ----------------
  const submitExpense = async () => {
    const url = editId
      ? `http://localhost:5000/api/expenses/${editId}`
      : "http://localhost:5000/api/expenses";

    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        title,
        amount,
        category,
        date: new Date()
      })
    });

    setTitle("");
    setAmount("");
    setCategory("");
    setEditId(null);

    fetchExpenses();
  };

  // ---------------- DELETE ----------------
  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/api/expenses/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    fetchExpenses();
  };

  // ---------------- EDIT ----------------
  const startEdit = (expense) => {
    setTitle(expense.title);
    setAmount(expense.amount);
    setCategory(expense.category);
    setEditId(expense._id);
  };

  // ---------------- TOTAL ----------------
  const totalAmount = expenses.reduce(
    (sum, e) => sum + Number(e.amount),
    0
  );

  // ---------------- LOGOUT ----------------
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard">
      <div className="top-bar">
        <h2>Dashboard</h2>
        <button onClick={logout}>Logout</button>
      </div>

      <div className="expense-form">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={submitExpense}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {expenses.map((e) => (
        <div key={e._id} className="expense-card">
          <h4>{e.title}</h4>
          <p>₹{e.amount}</p>
          <p>{e.category}</p>

          <button onClick={() => startEdit(e)}>Edit</button>
          <button onClick={() => deleteExpense(e._id)}>Delete</button>
        </div>
      ))}

      <h3 style={{ marginTop: "20px" }}>
        Total Expense: ₹{totalAmount}
      </h3>
    </div>
  );
}
