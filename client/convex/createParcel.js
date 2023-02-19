import { mutation } from "./_generated/server";

export default mutation(({ db }, description, image, lat, long, city, county, state, price_per_1000sqft) => {
  const parcel = { description, image, lat, long, city, county, state, price_per_1000sqft };
  db.insert("parcel", parcel);
});