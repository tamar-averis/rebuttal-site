/* Where the contact form goes.
 *
 * HubSpot hosts and stores the submission; the notification routes to INBOX
 * from inside HubSpot, not from this site. HubSpot will sign a BAA, but ours is
 * not signed yet, so the no-PHI notice under the form stays until it is. The
 * secure channel promised at intake is separate either way. */
// PLACEHOLDER — this HubSpot portal/form does not exist yet. Create a
// Rebuttal HubSpot account and form, then replace these three values.
export const HUBSPOT_PORTAL_ID = 'PLACEHOLDER_PORTAL_ID';
export const HUBSPOT_FORM_ID = 'PLACEHOLDER_FORM_ID';
export const HUBSPOT_REGION = 'na2';

export const INBOX = 'info@rebuttal.health';
export const PHONE = '+1 (941) 259-7630';

/* Google Appointment Schedule. Opens in a new tab rather than embedding, so no
 * third-party code loads on our pages and the privacy policy stays accurate. */
export const CALENDAR_URL = 'https://calendar.app.google/61XeDKttsafdUdX97';
