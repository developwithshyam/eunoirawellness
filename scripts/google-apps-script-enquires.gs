/**
 * Eunoira Wellness — contact form handler
 *
 * Setup:
 * 1. Open spreadsheet "Eunoira Wellness Enquires"
 * 2. Rename the tab at the bottom to exactly: enquires
 * 3. Row 1 headers: Timestamp | Name | Email | Phone | Intent | Message
 * 4. Extensions → Apps Script → paste this file → Save
 * 5. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the /exec URL into GOOGLE_SHEETS_WEBAPP_URL in .env.local
 */

var SHEET_NAME = "enquires";

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      result: "ok",
      message: "Eunoira contact form endpoint is ready. Submissions use POST.",
    }),
  ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({
          result: "error",
          message: "Sheet tab '" + SHEET_NAME + "' not found. Check the tab name at the bottom of the spreadsheet.",
        }),
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "Intent",
        "Message",
      ]);
    }

    var p = e.parameter;

    sheet.appendRow([
      new Date(),
      p.Name || "",
      p.Email || "",
      p.Phone || "",
      p.Intent || "",
      p.Message || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", message: String(error) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
