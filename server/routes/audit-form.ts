import { RequestHandler } from "express";
import { google } from "googleapis";

interface FormData {
  email: string;
  name: string;
  companyName: string;
  websiteUrl: string;
  whatsappNumber?: string;
  productsServicesSummary?: string;
  monthlyOrderVolume: string;
  whereDoYouSell: string;
  customerEscalation: string;
  customerSupportAutomation: string;
  commonCustomerQueries: string;
  orderUpdatesAutomated: string;
  primaryMarketingChannel: string;
  monthlyAdSpend: string;
  inventoryManagementChallenges: string;
  biggestChallenge: string;
  usedAIToolsBefore: string;
  previousAutomationMethod?: string;
  timeSpentOnRepetitiveTasks: string;
  successIn6Months: string;
  whenToImplement: string;
  monthlyInvestment: string;
  anythingElse?: string;
}

export const handleAuditForm: RequestHandler = async (req, res) => {
  try {
    const formData: FormData = req.body;

    // Validate required fields
    const requiredFields = [
      "email",
      "name",
      "companyName",
      "websiteUrl",
      "monthlyOrderVolume",
      "whereDoYouSell",
      "customerEscalation",
      "customerSupportAutomation",
      "commonCustomerQueries",
      "orderUpdatesAutomated",
      "primaryMarketingChannel",
      "monthlyAdSpend",
      "inventoryManagementChallenges",
      "biggestChallenge",
      "usedAIToolsBefore",
      "timeSpentOnRepetitiveTasks",
      "successIn6Months",
      "whenToImplement",
      "monthlyInvestment",
    ];

    for (const field of requiredFields) {
      if (!formData[field as keyof FormData]) {
        return res.status(400).json({
          error: `Missing required field: ${field}`,
        });
      }
    }

    // Google Sheets configuration
    const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || "1EVwp5c-0J3SZUerQbSWKmcRtZbSfLt53DS8K4JR4nvA";
    const SHEET_NAME = "Sheet1"; // Adjust if your sheet has a different name

    // Authenticate with Google Sheets API
    // Option 1: Service Account (Recommended for production)
    // Option 2: OAuth2 (For user-specific access)
    // For now, we'll use service account credentials from environment variables

    const auth = new google.auth.GoogleAuth({
      credentials: process.env.GOOGLE_SERVICE_ACCOUNT_KEY
        ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)
        : undefined,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Prepare row data matching the Google Form structure
    const rowData = [
      new Date().toISOString(), // Timestamp
      formData.email,
      formData.name,
      formData.companyName,
      formData.websiteUrl,
      formData.whatsappNumber || "",
      formData.productsServicesSummary || "",
      formData.monthlyOrderVolume,
      formData.whereDoYouSell,
      formData.customerEscalation,
      formData.customerSupportAutomation,
      formData.commonCustomerQueries,
      formData.orderUpdatesAutomated,
      formData.primaryMarketingChannel,
      formData.monthlyAdSpend,
      formData.inventoryManagementChallenges,
      formData.biggestChallenge,
      formData.usedAIToolsBefore,
      formData.previousAutomationMethod || "",
      formData.timeSpentOnRepetitiveTasks,
      formData.successIn6Months,
      formData.whenToImplement,
      formData.monthlyInvestment,
      formData.anythingElse || "",
    ];

    // Append row to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:Z`, // Adjust range as needed
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowData],
      },
    });

    res.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Error submitting form to Google Sheets:", error);
    res.status(500).json({
      error: "Failed to submit form",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
