// Published by scripts/publish.py from nil-billing-erp 10624d3 for staging. Edit app/config.js there, not here.
// Deployment settings for the Receivables Control Room. See docs/DEPLOY.md.
// This file is public once hosted, so put no secrets here. The OAuth client ID is not a secret.
window.RCR_CONFIG = {
  // "production" for the live site. Anything else (e.g. "staging") shows a striped banner on every screen.
  // scripts/publish.py sets this and sheetId per environment (deploy/environments.json).
  env: "staging",
  // Google Cloud > APIs & Services > Credentials > OAuth 2.0 Client ID (type "Web application")
  clientId: "114080182998-k4rc89441ahkoet42l2sgannbmhialaq.apps.googleusercontent.com",
  // The long id in the sheet's URL: https://docs.google.com/spreadsheets/d/<sheetId>/edit
  sheetId: "1j6qMR3rJL9mq9_swNTy7yuloA2CjmWNkj04K2Lz6uWI",
  // The payables page (payables.html) keeps its own Google Sheet. Blank: the page says it is not set up yet.
  payablesSheetId: "1ScT9qC18KXgYTr5qQyaD9UVEc5HNyuJoELDk2H8AHIo",
  // Only these Google accounts can use the tool. Each one must also have the sheet shared with them (Editor).
  // Google Drive folder (id from its URL) where bill documents are uploaded, shared with the team as Editor.
  // Blank: each uploader gets "NIL Contracts" in their own My Drive.
  driveRoot: "",
  allowedEmails: ["vjprabhu9@gmail.com", "corporate.nityanand@gmail.com", "ajit.nityanand@gmail.com", "jayanthsprabhu@gmail.com", "nilmisetu3@gmail.com"]
};
