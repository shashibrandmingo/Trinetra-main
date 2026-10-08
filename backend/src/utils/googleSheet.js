/**
 * Google Sheet Integration Utility
 * Forwards legal inquiries to a Google Sheet via Google Apps Script Webhook.
 */

export async function appendToGoogleSheet(data) {
  const webhookUrl =
    process.env.GOOGLE_SHEET_WEBHOOK_URL ||
    'https://script.google.com/macros/s/AKfycbzG16LR2WO9-FKNf4cwJGaoj15DQRsHLbNKT-r8E4h-3ExkFdRWNOhqRtHpSHAiolLnrA/exec';

  if (!webhookUrl) {
    console.log('[GoogleSheet] GOOGLE_SHEET_WEBHOOK_URL not defined in .env, skipping Google Sheet sync.');
    return;
  }

  try {
    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      fullName: data.fullName || '',
      phone: data.phone || '',
      email: data.email || 'N/A',
      practiceArea: data.practiceArea || '',
      urgency: data.urgency || 'standard',
      matterSummary: data.matterSummary || '',
      status: data.status || 'new',
    };

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log(`[GoogleSheet] Successfully forwarded inquiry for ${data.fullName} (Status: ${res.status})`);
  } catch (error) {
    console.error('[GoogleSheet] Error syncing inquiry to Google Sheet:', error.message);
  }
}
