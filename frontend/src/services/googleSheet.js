/**
 * Client-side Google Sheet Forwarder
 * Directly submits inquiry data to Google Apps Script Webhook.
 * Uses mode: 'no-cors' for seamless cross-origin execution from browser.
 */

export const GOOGLE_SHEET_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbzG16LR2WO9-FKNf4cwJGaoj15DQRsHLbNKT-r8E4h-3ExkFdRWNOhqRtHpSHAiolLnrA/exec';

export async function sendLeadToGoogleSheet(data) {
  const webhookUrl = GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      fullName: data.fullName || '',
      phone: data.phone || '',
      email: data.email || 'N/A',
      practiceArea: data.practiceArea || '',
      urgency: data.urgency || 'standard',
      matterSummary: data.matterSummary || '',
      source: data.source || 'Website Enquiry Popup',
    };

    // Google Apps Script requires text/plain to avoid CORS preflight OPTIONS blocking in browsers
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    console.log('[GoogleSheet] Lead dispatched to Google Sheet successfully.');
  } catch (error) {
    console.warn('[GoogleSheet] Notice:', error.message);
  }
}
