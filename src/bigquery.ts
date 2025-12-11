import { BigQuery } from "@google-cloud/bigquery";

const bigquery = new BigQuery({
  projectId: process.env.BIGQUERY_PROJECT_ID,
  credentials: {
    client_email: process.env.BIGQUERY_CLIENT_EMAIL,
    // Replace standard newlines with escaped newlines for Vercel/production support
    private_key: process.env.BIGQUERY_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: [
    "https://www.googleapis.com/auth/bigquery",
    "https://www.googleapis.com/auth/drive",
  ],
});

export default bigquery;
