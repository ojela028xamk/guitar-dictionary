"use server";
import { sql } from "@vercel/postgres";

export type Dictionary = {
  en: string;
  fi: string;
};

const getDictionaryList = async () => {
  const data = await sql`SELECT * FROM Dictionary`;

  const isValidData = isValidDictionaryData(data.rows as Dictionary[]);

  if (isValidData) {
    return data.rows;
  } else {
    throw Error;
  }
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
