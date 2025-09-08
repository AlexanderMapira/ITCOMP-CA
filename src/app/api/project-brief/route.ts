// app/api/project-brief/route.ts
import { NextResponse } from "next/server";

/* =========================
   ENV + VALIDATION HELPERS
   ========================= */

const FORM_ID = process.env.GOOGLE_FORM_ID; // ID only (not full URL)
const FORM_ACTION = FORM_ID
  ? `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`
  : "";

const REQUIRED_ENV = [
  "GOOGLE_FORM_ID",
  "ENTRY_NAME",
  "ENTRY_EMAIL",
  "ENTRY_PHONE",
  "ENTRY_COMPANY",

  "ENTRY_PROJECT_TYPE",
  "ENTRY_PLATFORMS",           // checkbox
  "ENTRY_PROJECT_TITLE",
  "ENTRY_SUMMARY",
  "ENTRY_GOALS",
  "ENTRY_AUDIENCE",
  // "ENTRY_COMPETITORS",       // include if you have this question

  "ENTRY_FEATURES",
  "ENTRY_AUTH",
  "ENTRY_NEEDS_ADMIN",
  "ENTRY_ANALYTICS",
  "ENTRY_INTEGRATIONS",
  "ENTRY_COMPLIANCE",
  "ENTRY_ACCESSIBILITY",

  "ENTRY_BRAND_MOOD",
  "ENTRY_BRAND_COLORS",

  "ENTRY_DOMAIN_SUGGESTION",

  "ENTRY_BUDGET_RANGE",
  "ENTRY_DEADLINE",            // keep this a short-answer field in the Form
  "ENTRY_HOSTING",
  "ENTRY_MAINTENANCE",
  "ENTRY_TIMELINE_NOTES",

  "ENTRY_REFERENCES",
  "ENTRY_EXTRAS",
  // "ENTRY_RAW_JSON",
] as const;

function listMissingEnv() {
  const missing: string[] = [];
  for (const k of REQUIRED_ENV) {
    if (!process.env[k]) missing.push(k);
  }
  return missing;
}

/* =========================
   ENTRY MAP (server source of truth)
   ========================= */

const ENTRY = {
  // Contact
  NAME: process.env.ENTRY_NAME!,
  EMAIL: process.env.ENTRY_EMAIL!,
  PHONE: process.env.ENTRY_PHONE!,
  COMPANY: process.env.ENTRY_COMPANY!,

  // Project
  PROJECT_TYPE: process.env.ENTRY_PROJECT_TYPE!,
  PLATFORMS: process.env.ENTRY_PLATFORMS!, // checkbox question
  PROJECT_TITLE: process.env.ENTRY_PROJECT_TITLE!,
  SUMMARY: process.env.ENTRY_SUMMARY!,
  GOALS: process.env.ENTRY_GOALS!,
  AUDIENCE: process.env.ENTRY_AUDIENCE!,
  COMPETITORS: process.env.ENTRY_COMPETITORS, // optional

  // Features & Compliance
  FEATURES: process.env.ENTRY_FEATURES!,
  AUTH: process.env.ENTRY_AUTH!,
  NEEDS_ADMIN: process.env.ENTRY_NEEDS_ADMIN!,
  ANALYTICS: process.env.ENTRY_ANALYTICS!,
  INTEGRATIONS: process.env.ENTRY_INTEGRATIONS!,
  COMPLIANCE: process.env.ENTRY_COMPLIANCE!,
  ACCESSIBILITY: process.env.ENTRY_ACCESSIBILITY!,

  // Branding & Content
  BRAND_MOOD: process.env.ENTRY_BRAND_MOOD!,
  BRAND_COLORS: process.env.ENTRY_BRAND_COLORS!,

  // Domain
  DOMAIN_SUGGESTION: process.env.ENTRY_DOMAIN_SUGGESTION!,

  // Scope, budget, timeline
  BUDGET_RANGE: process.env.ENTRY_BUDGET_RANGE!,
  DEADLINE: process.env.ENTRY_DEADLINE!, // short-answer in Form (NOT date type)
  HOSTING: process.env.ENTRY_HOSTING!,
  MAINTENANCE: process.env.ENTRY_MAINTENANCE!,
  TIMELINE_NOTES: process.env.ENTRY_TIMELINE_NOTES!,

  // References & extras
  REFERENCES: process.env.ENTRY_REFERENCES!,
  EXTRAS: process.env.ENTRY_EXTRAS!,

  // RAW_JSON: process.env.ENTRY_RAW_JSON, // optional
} as const;

/* =========================
   LABEL MAPS (MUST match Form option text exactly)
   ========================= */

const PLATFORM_LABELS: Record<"ios" | "android" | "web" | "desktop", string> = {
  ios: "iOS",
  android: "Android",
  web: "Web",
  desktop: "Desktop",
};

const AUTH_LABELS: Record<"email" | "oauth" | "sso" | "none", string> = {
  email: "Email + Password / Magic Link",
  oauth: "OAuth (Google, Apple, etc.)",
  sso: "SSO (SAML/OIDC)",
  none: "None",
};

const PROJECT_TYPE_LABELS: Record<"mobile-app" | "website" | "company-system", string> = {
  "mobile-app": "iOS/Android App",
  "website": "Website",
  "company-system": "Company System",
};

/* =========================
   TYPES (incoming from your client)
   ========================= */

type Incoming = {
  // Contact
  name?: string;
  email?: string;
  phone?: string;
  company?: string;

  // Project
  projectType?: "mobile-app" | "website" | "company-system" | string;
  platforms?: Array<"ios" | "android" | "web" | "desktop">;
  projectTitle?: string;
  summary?: string;
  goals?: string;
  audience?: string;
  competitors?: string;

  // Features
  features?: string;
  auth?: "email" | "oauth" | "sso" | "none";
  needsAdmin?: boolean;
  analytics?: boolean;
  integrations?: string;
  compliance?: string;
  accessibility?: string;

  // Branding & Content
  brandColors?: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  brandMood?: string;

  // Domain
  suggestedDomain?: string;

  // Scope, budget, timeline
  budgetRange?: string;
  deadline?: string;
  hosting?: string;
  maintenance?: string;
  timelineNotes?: string;

  // References & extras
  references?: string;
  extras?: string;
};

/* =========================
   UTILITIES
   ========================= */

function brandColorsString(colors?: Incoming["brandColors"]) {
  if (!colors) return "";
  return Object.entries(colors)
    .map(([k, v]) => `${k}: ${v}`)
    .join(" | ");
}

function buildPrefillFromParams(formId: string, params: URLSearchParams) {
  const url = new URL(`https://docs.google.com/forms/d/e/${formId}/viewform`);
  url.searchParams.set("usp", "pp_url");
  // copy all entry.* pairs (repeated keys are allowed)
  for (const [k, v] of params.entries()) {
    url.searchParams.append(k, v);
  }
  return url.toString();
}

/* =========================
   HANDLER
   ========================= */

export async function POST(req: Request) {
  try {
    // Hard fail if FORM_ID missing
    if (!FORM_ID) {
      return NextResponse.json(
        { ok: false, error: "GOOGLE_FORM_ID missing on server" },
        { status: 500 }
      );
    }

    // Warn (not fatal) for any missing ENTRY_* (helps find blank fields)
    const missingEnv = listMissingEnv();
    if (missingEnv.length) {
      console.warn("Missing ENTRY_* variables:", missingEnv.join(", "));
    }

    const url = new URL(req.url);
    const echo = url.searchParams.get("echo") === "1";

    const data = (await req.json()) as Incoming;
    const p = new URLSearchParams();

    // ---- Contact
    if (data.name && ENTRY.NAME) p.append(ENTRY.NAME, data.name);
    if (data.email && ENTRY.EMAIL) p.append(ENTRY.EMAIL, data.email);
    if (data.phone && ENTRY.PHONE) p.append(ENTRY.PHONE, data.phone);
    if (data.company && ENTRY.COMPANY) p.append(ENTRY.COMPANY, data.company);

    // ---- Project
    if (data.projectType && ENTRY.PROJECT_TYPE) {
      const label =
        PROJECT_TYPE_LABELS[data.projectType as keyof typeof PROJECT_TYPE_LABELS] ??
        data.projectType;
      p.append(ENTRY.PROJECT_TYPE, label);
    }

    if (Array.isArray(data.platforms) && ENTRY.PLATFORMS) {
      for (const pl of data.platforms) {
        const label = PLATFORM_LABELS[pl];
        if (label) p.append(ENTRY.PLATFORMS, label); // repeat same key for checkboxes
      }
    }

    if (data.projectTitle && ENTRY.PROJECT_TITLE)
      p.append(ENTRY.PROJECT_TITLE, data.projectTitle);
    if (data.summary && ENTRY.SUMMARY) p.append(ENTRY.SUMMARY, data.summary);
    if (data.goals && ENTRY.GOALS) p.append(ENTRY.GOALS, data.goals);
    if (data.audience && ENTRY.AUDIENCE) p.append(ENTRY.AUDIENCE, data.audience);
    if (data.competitors && ENTRY.COMPETITORS)
      p.append(ENTRY.COMPETITORS, data.competitors);

    // ---- Features & Compliance
    if (data.features && ENTRY.FEATURES) p.append(ENTRY.FEATURES, data.features);
    if (data.auth && ENTRY.AUTH)
      p.append(ENTRY.AUTH, AUTH_LABELS[data.auth] ?? data.auth);
    if (typeof data.needsAdmin === "boolean" && ENTRY.NEEDS_ADMIN)
      p.append(ENTRY.NEEDS_ADMIN, data.needsAdmin ? "Yes" : "No");
    if (typeof data.analytics === "boolean" && ENTRY.ANALYTICS)
      p.append(ENTRY.ANALYTICS, data.analytics ? "Yes" : "No");
    if (data.integrations && ENTRY.INTEGRATIONS)
      p.append(ENTRY.INTEGRATIONS, data.integrations);
    if (data.compliance && ENTRY.COMPLIANCE)
      p.append(ENTRY.COMPLIANCE, data.compliance);
    if (data.accessibility && ENTRY.ACCESSIBILITY)
      p.append(ENTRY.ACCESSIBILITY, data.accessibility);

    // ---- Branding & Content
    if (data.brandMood && ENTRY.BRAND_MOOD)
      p.append(ENTRY.BRAND_MOOD, data.brandMood);
    if (ENTRY.BRAND_COLORS)
      p.append(ENTRY.BRAND_COLORS, brandColorsString(data.brandColors));
    // If your Form has hasLogo/contentReady questions, add & map them here.

    // ---- Domain
    if (data.suggestedDomain && ENTRY.DOMAIN_SUGGESTION)
      p.append(ENTRY.DOMAIN_SUGGESTION, data.suggestedDomain);

    // ---- Scope / Budget / Timeline
    if (data.budgetRange && ENTRY.BUDGET_RANGE)
      p.append(ENTRY.BUDGET_RANGE, data.budgetRange);
    if (data.deadline && ENTRY.DEADLINE)
      p.append(ENTRY.DEADLINE, data.deadline); // keep Form question = Short answer
    if (data.hosting && ENTRY.HOSTING) p.append(ENTRY.HOSTING, data.hosting);
    if (data.maintenance && ENTRY.MAINTENANCE)
      p.append(ENTRY.MAINTENANCE, data.maintenance);
    if (data.timelineNotes && ENTRY.TIMELINE_NOTES)
      p.append(ENTRY.TIMELINE_NOTES, data.timelineNotes);

    // ---- References & Extras
    if (data.references && ENTRY.REFERENCES)
      p.append(ENTRY.REFERENCES, data.references);
    if (data.extras && ENTRY.EXTRAS) p.append(ENTRY.EXTRAS, data.extras);

    // Optional JSON dump
    // if (ENTRY.RAW_JSON) p.append(ENTRY.RAW_JSON, JSON.stringify(data));

    // Prevent blank rows if nothing mapped
    if ([...p.keys()].length === 0) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "No fields were appended. Verify ENTRY_* env vars match your Form's entry IDs and that option labels match exactly.",
        },
        { status: 400 }
      );
    }

    // ===== Echo/diagnostics mode =====
    if (echo) {
      const dbgParams = Array.from(p.entries()).reduce((acc, [k, v]) => {
        acc[k] = acc[k] ? `${acc[k]}, ${v}` : v;
        return acc;
      }, {} as Record<string, string>);
      const serverPrefillUrl = buildPrefillFromParams(FORM_ID, p);
      return NextResponse.json({
        ok: true,
        formAction: FORM_ACTION,
        params: dbgParams,
        serverPrefillUrl,
        missingEnv,
        notes: [
          "Open serverPrefillUrl to confirm all fields prefill correctly.",
          "If any are blank there, fix the ENTRY_* id or the exact option label in your Form.",
        ],
      });
    }

    // ===== Actual submit to Google Forms =====
    const r = await fetch(FORM_ACTION, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "User-Agent": "Mozilla/5.0",
      },
      body: p.toString(),
      redirect: "follow",
    });

    const html = await r.text();

    // Common failure detections
    const redirectedToLogin =
      r.url.includes("ServiceLogin") || /<title>Sign in/i.test(html);
    const formClosed =
      /not accepting responses|no longer accepting responses/i.test(html);
    const success =
      /Your response has been recorded|Thanks for responding|Your response has been submitted/i.test(
        html
      );

    if (redirectedToLogin) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Form requires sign-in. In Google Form → Settings, turn OFF 'Restrict to users in your organization' and 'Require sign-in'.",
        },
        { status: 400 }
      );
    }
    if (formClosed) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Form is not accepting responses. In Google Form, toggle 'Accepting responses' ON.",
        },
        { status: 400 }
      );
    }
    if (!r.ok || !success) {
      return NextResponse.json(
        {
          ok: false,
          error: `Unexpected response ${r.status}`,
          detail: html.slice(0, 800),
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
