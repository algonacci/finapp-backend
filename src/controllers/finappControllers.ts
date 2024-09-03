import { Elysia, t } from "elysia";
import { db } from "../models/db";

export const finappControllers = (app: Elysia) => {
  app.get("/transactions", () => {
    const transactions = db.query("SELECT * FROM transactions").all();
    return {
      status: {
        code: 200,
        message: "Transactions fetched successfully",
      },
      data: transactions,
    };
  });

  app.post(
    "/transactions",
    ({ body }) => {
      const { category, amount, transaction_date, description, type } = body;
      const transaction = db
        .query(
          "INSERT INTO transactions (category, amount, transaction_date, description, type) VALUES (?, ?, ?, ?, ?)"
        )
        .run(category, amount, transaction_date, description, type);
      return {
        status: {
          code: 201,
          message: "Transaction created successfully",
        },
        data: transaction,
      };
    },
    {
      body: t.Object({
        category: t.String(),
        amount: t.String(),
        transaction_date: t.String(),
        description: t.String(),
        type: t.String(),
      }),
    }
  );

  return app;
};
