"use server";
import { sql } from "@vercel/postgres";
import bigquery from "./bigquery";

export type Dictionary = {
  word_en: string;
  word_fi: string;
};

const getDictionaryList = async () => {
  // ALWAYS use parameterized queries (@limit) to prevent SQL injection
  const query = `
    SELECT *
    FROM \`jeren-sivustot.kitara_sanakirja.kitara_sanakirja\`
    LIMIT @limit
  `;

  const options = {
    query: query,
    location: "EU", // Must match your dataset location
    params: { limit: 100 },
  };

  try {
    const [rows] = await bigquery.query(options);
    return rows as Dictionary[];
  } catch (error) {
    console.error("BigQuery Error:", error);
    return [];
  }

  /* const data = await sql`SELECT * FROM Dictionary`;
  
  const isValidData = isValidDictionaryData(data.rows as Dictionary[]);

  if (isValidData) {
    return data.rows;
  } else {
    throw Error;
  }*/
};

const isValidDictionaryData = (
  dataArr: Dictionary[]
): dataArr is Dictionary[] => {
  const isArray = Array.isArray(dataArr);

  if (!isArray) return false;

  const hasValidObjects = dataArr.every(isValidDictionaryDataObject);

  if (!hasValidObjects) return false;

  return true;
};

const isValidDictionaryDataObject = (
  dataObj: Dictionary
): dataObj is Dictionary => {
  const hasCorrectKeys = "en" in dataObj && "fi" in dataObj;

  if (!hasCorrectKeys) return false;

  if (typeof dataObj.en !== "string" || typeof dataObj.fi !== "string") {
    return false;
  }

  return true;
};

export { getDictionaryList };
