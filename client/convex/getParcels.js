import { query } from "./_generated/server";

export const getParcels = query(async ({ db }) => {
    const list = await db.query("parcel").collect();
    return list;
});

export const getThreeParcels = query(async ({ db }) => {
    const list = await db.query("parcel").take(3);
    return list;
});

export const getParcel = query(async ({ db }, id) => {
    const parcel = await db.get(id);
    return parcel;
});
