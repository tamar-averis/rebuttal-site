/* Where the contact form goes.
 *
 * HubSpot hosts and stores the submission; the notification routes to INBOX
 * from inside HubSpot, not from this site. HubSpot will sign a BAA, but ours is
 * not signed yet, so the no-PHI notice under the form stays until it is. The
 * secure channel promised at intake is separate either way. */
export const HUBSPOT_PORTAL_ID = '247601150';
export const HUBSPOT_FORM_ID = '20276dfe-70c8-4015-9049-68224c8993ee';
export const HUBSPOT_REGION = 'na2';

/* Email-only signup popup, site-wide. Same portal/region as the contact form,
 * different form id. */
export const HUBSPOT_EMAIL_SIGNUP_FORM_ID = '36e6edb4-c5a3-4624-8979-e2af73627e2f';

export const INBOX = 'info@rebuttal.health';
export const PHONE = '+1 (941) 259-7630';

/* Google Appointment Schedule. Opens in a new tab rather than embedding, so no
 * third-party code loads on our pages and the privacy policy stays accurate. */
export const CALENDAR_URL = 'https://calendar.app.google/61XeDKttsafdUdX97';
