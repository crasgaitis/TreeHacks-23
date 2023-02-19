import { mutation } from "./_generated/server";

export const createOrder = mutation(({ db }, email, legal, name, status, cost, parcel) => {
  const order = { email, legal, name, status, cost,parcel};
  db.insert("order", order);
});