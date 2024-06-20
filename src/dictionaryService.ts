"use server";
import { sql } from "@vercel/postgres";

const getDictionaryList = async () => {
  const data = await sql`SELECT * FROM Dictionary`;
  return data;
};

export { getDictionaryList };
