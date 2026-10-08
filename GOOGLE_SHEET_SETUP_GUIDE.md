# Google Sheet Webhook Setup & Troubleshooting Guide

## 1. Apps Script Code (Copy & Paste in Apps Script)
Google Sheet me jayein > **Extensions** > **Apps Script**, purana code hata kar ye paste karein:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Agar Sheet khali hai toh headers automatic add karega
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Phone / WhatsApp",
        "Email",
        "Practice Domain",
        "Urgency",
        "Brief Matter Summary",
        "Source"
      ]);
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var timestamp = data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    var fullName = data.fullName || '';
    var phone = data.phone || '';
    var email = data.email || '';
    var practiceArea = data.practiceArea || '';
    var urgency = data.urgency || 'standard';
    var matterSummary = data.matterSummary || '';
    var source = data.source || 'Website Enquiry';

    // Append inquiry row
    sheet.appendRow([
      timestamp,
      fullName,
      phone,
      email,
      practiceArea,
      urgency,
      matterSummary,
      source
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', row: sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Webhook status test
function doGet(e) {
  return ContentService
    .createTextOutput("Trinetra Google Sheet Webhook is LIVE and connected!")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

---

## 2. Deploy Karte Waqt Yeh 2 Cheezein Zaroor Check Karein:

1. **Deploy Settings**:
   - **Deploy** > **Manage deployments** (ya **New deployment**)
   - Type: **Web app**
   - **Execute as**: `Me (your email)`
   - **Who has access**: **`Anyone`** *(Yeh sabse zaroori hai! Agar 'Only myself' hoga toh data nahi aayega)*
   - Click **Deploy**

2. **Code update hone par**:
   - Jab bhi Apps Script me code save karein, **Manage deployments** me ja kar **Edit (pencil icon)** par click karein aur **Version**: **`New version`** choose karke **Deploy** karein.
