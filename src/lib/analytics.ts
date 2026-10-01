/**
 * Analytics abstraction layer.
 * Swap the implementation here without touching call sites.
 * Currently a no-op — connect GA4 / GTM when the client provides a Measurement ID.
 */

type EventName =
  | "cta_click"
  | "contact_form_submit"
  | "consultation_request"
  | "phone_click"
  | "whatsapp_click"
  | "newsletter_signup"
  | "job_application"
  | "case_study_view"
  | "service_view";

interface EventProperties {
  label?: string;
  value?: string | number;
  page?: string;
  [key: string]: string | number | boolean | undefined;
}

export function track(event: EventName, properties?: EventProperties): void {
  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", event, properties ?? {});
  }

  // GA4 — uncomment and replace MEASUREMENT_ID when ready
  // if (typeof window !== "undefined" && window.gtag) {
  //   window.gtag("event", event, properties);
  // }

  // GTM — uncomment when ready
  // if (typeof window !== "undefined" && window.dataLayer) {
  //   window.dataLayer.push({ event, ...properties });
  // }
}

export function pageView(path: string): void {
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics] pageview", path);
  }
  // window.gtag?.("event", "page_view", { page_path: path });
}
