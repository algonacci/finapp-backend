import { db } from "./db";

db.exec(`CREATE TABLE transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT,
    amount TEXT NOT NULL,
    transaction_date TEXT DEFAULT (datetime('now','localtime')),
    description TEXT,
    type TEXT NOT NULL
)`);

// Seeder untuk tabel transactions
db.exec(`INSERT INTO transactions (category, amount, description, type) VALUES
    ("Gaji", '100.00', 'Income from job', 'in'),
    ("Belanja", '50.00', 'Grocery shopping', 'out'),
    ("Gaji", '200.00', 'Freelance project', 'in'),
    ("Makan", '30.00', 'Dinner at restaurant', 'out')
`);
