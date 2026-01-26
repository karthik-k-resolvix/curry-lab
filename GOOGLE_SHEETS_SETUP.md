# Google Sheets API Setup Guide

This guide will help you set up Google Sheets API integration to save form submissions to your Google Sheet.

## Prerequisites

- A Google account
- Access to the Google Sheet: https://docs.google.com/spreadsheets/d/1EVwp5c-0J3SZUerQbSWKmcRtZbSfLt53DS8K4JR4nvA/edit

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

## Step 2: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: `resolvix-form-submitter` (or any name you prefer)
   - Click "Create and Continue"
   - Skip the optional steps and click "Done"

## Step 3: Generate Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON" format
5. Download the JSON file - this contains your credentials

## Step 4: Share Google Sheet with Service Account

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1EVwp5c-0J3SZUerQbSWKmcRtZbSfLt53DS8K4JR4nvA/edit
2. Click the "Share" button
3. Copy the email address from the service account JSON file (it looks like: `your-service-account@project-id.iam.gserviceaccount.com`)
4. Paste it in the "Share" dialog and give it "Editor" permissions
5. Click "Send"

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add the following environment variables:

```env
GOOGLE_SHEETS_SPREADSHEET_ID=1EVwp5c-0J3SZUerQbSWKmcRtZbSfLt53DS8K4JR4nvA
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"your-project-id",...}
```

**Important:** The `GOOGLE_SERVICE_ACCOUNT_KEY` should be the entire JSON content from the downloaded service account key file, but as a single-line string. You can:

- Option A: Copy the entire JSON file content and minify it (remove all line breaks)
- Option B: Use a tool to convert the JSON to a single-line string

Example format:
```env
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"my-project","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}
```

## Step 6: Install Dependencies

Run the following command to install the required package:

```bash
pnpm install
# or
npm install
```

This will install `googleapis` which is required for the Google Sheets integration.

## Step 7: Verify Setup

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Navigate to `/ai-audit` in your browser
3. Fill out and submit the form
4. Check your Google Sheet to verify the data was written

## Troubleshooting

### Error: "The caller does not have permission"
- Make sure you've shared the Google Sheet with the service account email
- Verify the service account has "Editor" permissions

### Error: "Invalid credentials"
- Check that the `GOOGLE_SERVICE_ACCOUNT_KEY` environment variable is correctly formatted
- Ensure the JSON is a single-line string (no line breaks)
- Verify the service account key file hasn't been corrupted

### Error: "Spreadsheet not found"
- Verify the `GOOGLE_SHEETS_SPREADSHEET_ID` matches your sheet ID
- Ensure the service account has access to the sheet

### Data not appearing in sheet
- Check the server logs for any errors
- Verify the sheet name matches "Sheet1" (or update it in `server/routes/audit-form.ts`)
- Ensure the sheet has enough columns (at least 25 columns: A-Z)

## Alternative: Using Google Apps Script (Simpler but less secure)

If you prefer a simpler setup without service accounts, you can use Google Apps Script:

1. Open your Google Sheet
2. Go to "Extensions" > "Apps Script"
3. Create a new script that accepts POST requests
4. Update the form submission endpoint to point to your Apps Script web app URL

This approach is simpler but requires making your script publicly accessible.

## Security Notes

- Never commit your `.env` file to version control
- Keep your service account key secure
- Regularly rotate your service account keys
- Use environment-specific service accounts for production vs development
