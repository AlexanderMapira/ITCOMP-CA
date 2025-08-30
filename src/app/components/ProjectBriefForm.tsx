"use client";

import React, { useMemo, useState, useEffect } from "react";

type ProjectType = "mobile-app" | "website" | "company-system";
type Platform = "ios" | "android" | "web" | "desktop";
type AuthMethod = "email" | "oauth" | "sso" | "none";

type FormData = {
  // Contact
  name: string;
  email: string;
  phone?: string;
  company?: string;
  // Project
  projectType: ProjectType | "";
  platforms: Platform[];
  projectTitle: string;
  summary: string;
  goals: string;
  audience: string;
  competitors?: string;
  // Features
  features: string;
  auth: AuthMethod;
  needsAdmin: boolean;
  analytics: boolean;
  integrations: string;
  compliance: string; // e.g., GDPR, HIPAA, POPIA, PCI, none
  accessibility: string; // e.g., WCAG AA target
  // Branding & Content
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  brandMood: string;
  hasLogo: "yes" | "no";
  contentReady: "ready" | "needs-copy" | "needs-assets";
  // Domain
  companyNameForDomain: string;
  domainKeywords: string;
  preferredTld: string; // .com/.ca/.io/...
  suggestedDomain: string;
  // Scope, budget, timeline
  budgetRange: string;
  deadline: string; // ISO date or string
  timelineNotes: string;
  // Maintenance & hosting
  hosting: string; // we host / client hosts / not sure
  maintenance: string; // monthly support level
  // References
  references: string; // links to products/inspiration
  // Anything else
  extras: string;
};

const DEFAULTS: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  platforms: [],
  projectTitle: "",
  summary: "",
  goals: "",
  audience: "",
  competitors: "",
  features: "",
  auth: "email",
  needsAdmin: true,
  analytics: true,
  integrations: "",
  compliance: "None",
  accessibility: "WCAG 2.2 AA (recommended)",
  brandColors: {
    primary: "#111827", // gray-900
    secondary: "#374151", // gray-700
    accent: "#22d3ee", // cyan-400
    background: "#0b0b0b", // dark bg
    text: "#ffffff",
  },
  brandMood: "Modern, minimal, confident",
  hasLogo: "yes",
  contentReady: "needs-copy",
  companyNameForDomain: "",
  domainKeywords: "",
  preferredTld: ".com",
  suggestedDomain: "",
  budgetRange: "15k–40k USD",
  deadline: "",
  timelineNotes: "",
  hosting: "Not sure",
  maintenance: "Recommended monthly support",
  references: "",
  extras: "",
};

function classCard() {
  return "rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md";
}

function Pill({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "px-4 py-2 rounded-full text-sm uppercase tracking-wide transition-all",
        active
          ? "bg-white/20 border border-white/30 text-white"
          : "bg-white/5 border border-white/10 text-white/80 hover:bg-white/10",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function ProjectBriefForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(DEFAULTS);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canNext = useMemo(() => {
    if (step === 1) return data.name && data.email && data.projectType;
    if (step === 2) return data.projectTitle && data.summary;
    if (step === 3) return true;
    if (step === 4) return true;
    if (step === 5) return true;
    return true;
  }, [step, data]);

  // Domain suggestion helper
  useEffect(() => {
    const name = (data.companyNameForDomain || "").trim().toLowerCase();
    const kw = (data.domainKeywords || "").trim().toLowerCase();
    if (!name && !kw) {
      setData((d) => ({ ...d, suggestedDomain: "" }));
      return;
    }
    const base = [name, kw].filter(Boolean).join("");
    const safe = base
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/--+/g, "-");
    const pick = data.preferredTld || ".com";
    const suggestion = (safe || "your-brand") + pick;
    setData((d) => ({ ...d, suggestedDomain: suggestion }));
  }, [data.companyNameForDomain, data.domainKeywords, data.preferredTld]);

  const togglePlatform = (p: Platform) =>
    setData((d) => {
      const has = d.platforms.includes(p);
      return {
        ...d,
        platforms: has
          ? d.platforms.filter((x) => x !== p)
          : [...d.platforms, p],
      };
    });

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const submit = async () => {
    setSubmitting(true);
    try {
      // POST to your API route (adjust path or integrate with email/CRM)
      await fetch("/api/project-brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch (e) {
      console.error(e);
      alert("Something went wrong sending your request.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-900 text-white py-20 lg:py-28 relative overflow-hidden">
      {/* subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <header className="text-center mb-12">
          <div className="inline-flex items-center px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium uppercase tracking-[0.2em] text-gray-300 mb-6">
            <div className="w-2 h-2 bg-white/40 rounded-full mr-3 animate-pulse" />
            Start a Project
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[-0.02em] leading-[0.9]">
            Project <span className="text-gray-500 font-extralight">Brief</span>
          </h2>
          <p className="text-gray-300/90 mt-4">
            Tell us exactly what you need—we’ll turn it into a build plan,
            timeline, and quote.
          </p>
        </header>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className={[
                "h-2 rounded-full transition-all",
                n <= step ? "bg-white" : "bg-white/20",
                "w-8",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Form Card */}
        <div className={`${classCard()} p-6 md:p-8`}>
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="text-3xl font-bold mb-3">Thanks! 🎉</h3>
              <p className="text-gray-300">
                Your brief has been submitted. We’ll review it and reach out to
                you at <span className="font-semibold">{data.email}</span>.
              </p>
            </div>
          ) : (
            <>
              {step === 1 && (
                <Step1Contact
                  data={data}
                  update={update}
                  togglePlatform={togglePlatform}
                />
              )}
              {step === 2 && <Step2Overview data={data} update={update} />}
              {step === 3 && <Step3Features data={data} update={update} />}
              {step === 4 && <Step4Branding data={data} update={update} />}
              {step === 5 && <Step5Scope data={data} update={update} />}
              {step === 6 && <Step6Review data={data} />}
            </>
          )}
        </div>

        {!submitted && (
          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              disabled={step === 1}
            >
              Back
            </button>

            {step < 6 ? (
              <button
                type="button"
                onClick={() => setStep((s) => Math.min(6, s + 1))}
                disabled={!canNext}
                className={[
                  "px-6 py-3 rounded-2xl font-semibold uppercase tracking-wide",
                  canNext
                    ? "bg-white text-gray-900 hover:bg-gray-200"
                    : "bg-white/20 text-white/60 cursor-not-allowed",
                ].join(" ")}
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={submitting}
                className="px-6 py-3 rounded-2xl font-semibold uppercase tracking-wide bg-white text-gray-900 hover:bg-gray-200"
              >
                {submitting ? "Sending..." : "Submit Brief"}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Steps ---------- */

function Field({
  label,
  hint,
  children,
  required,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-sm uppercase tracking-wide text-white/80">
          {label}
        </span>
        {required && (
          <span className="text-xs text-white/60 bg-white/10 px-2 py-0.5 rounded-full">
            required
          </span>
        )}
      </div>
      {children}
      {hint && <p className="text-xs text-white/60 mt-2">{hint}</p>}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "w-full px-4 py-3 rounded-2xl",
        "bg-white/[0.06] border border-white/10 text-white placeholder-white/40",
        "focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-white/20",
      ].join(" ")}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        "w-full px-4 py-3 rounded-2xl min-h-[120px]",
        "bg-white/[0.06] border border-white/10 text-white placeholder-white/40",
        "focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-white/20",
      ].join(" ")}
    />
  );
}

/* Step 1: Contact & Project Type */
function Step1Contact({
  data,
  update,
  togglePlatform,
}: {
  data: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
  togglePlatform: (p: Platform) => void;
}) {
  return (
    <div className="grid gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Your Name" required>
          <Input
            required
            placeholder="Jane Doe"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </Field>
        <Field label="Email" required>
          <Input
            required
            type="email"
            placeholder="you@company.com"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </Field>
        <Field label="Phone">
          <Input
            placeholder="+1 555 123 4567"
            value={data.phone || ""}
            onChange={(e) => update("phone", e.target.value)}
          />
        </Field>
        <Field label="Company">
          <Input
            placeholder="Your company name"
            value={data.company || ""}
            onChange={(e) => update("company", e.target.value)}
          />
        </Field>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Project Type" required>
          <div className="flex flex-wrap gap-3">
            {[
              { v: "mobile-app", label: "iOS/Android App" },
              { v: "website", label: "Website" },
              { v: "company-system", label: "Company System" },
            ].map((opt) => (
              <Pill
                key={opt.v}
                active={data.projectType === (opt.v as ProjectType)}
                onClick={() => update("projectType", opt.v as ProjectType)}
              >
                {opt.label}
              </Pill>
            ))}
          </div>
        </Field>

        <Field label="Target Platforms">
          <div className="flex flex-wrap gap-3">
            {(["ios", "android", "web", "desktop"] as Platform[]).map((p) => (
              <Pill
                key={p}
                active={data.platforms.includes(p)}
                onClick={() => togglePlatform(p)}
              >
                {p.toUpperCase()}
              </Pill>
            ))}
          </div>
        </Field>
      </div>
    </div>
  );
}

/* Step 2: Overview */
function Step2Overview({
  data,
  update,
}: {
  data: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
}) {
  return (
    <div className="grid gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Project Title" required>
          <Input
            required
            placeholder="e.g., KHODI Mobile Commerce"
            value={data.projectTitle}
            onChange={(e) => update("projectTitle", e.target.value)}
          />
        </Field>
        <Field label="Primary Audience">
          <Input
            placeholder="e.g., B2B buyers in logistics"
            value={data.audience}
            onChange={(e) => update("audience", e.target.value)}
          />
        </Field>
      </div>

      <Field label="One-paragraph Summary" required>
        <Textarea
          required
          placeholder="What are we building and why? Core use cases in 4–6 sentences."
          value={data.summary}
          onChange={(e) => update("summary", e.target.value)}
        />
      </Field>

      <Field label="Business Goals">
        <Textarea
          placeholder="KPIs, outcomes, revenue/retention goals, etc."
          value={data.goals}
          onChange={(e) => update("goals", e.target.value)}
        />
      </Field>

      <Field label="Competitors or Market Context">
        <Textarea
          placeholder="Competitor names/links, what to learn from them."
          value={data.competitors || ""}
          onChange={(e) => update("competitors", e.target.value)}
        />
      </Field>
    </div>
  );
}

/* Step 3: Features & Compliance */
function Step3Features({
  data,
  update,
}: {
  data: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
}) {
  return (
    <div className="grid gap-6">
      <Field label="Key Features">
        <Textarea
          placeholder={`Examples:
- Onboarding & profiles
- Product catalog / booking / subscriptions
- Chat, push notifications
- Payments (Stripe), invoices
- Offline mode, multi-language`}
          value={data.features}
          onChange={(e) => update("features", e.target.value)}
        />
      </Field>

      <div className="grid md:grid-cols-3 gap-6">
        <Field label="Authentication">
          <select
            value={data.auth}
            onChange={(e) => update("auth", e.target.value as AuthMethod)}
            className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/10 text-white"
          >
            <option value="email">Email + Password / Magic Link</option>
            <option value="oauth">OAuth (Google, Apple, etc.)</option>
            <option value="sso">SSO (SAML/OIDC)</option>
            <option value="none">None</option>
          </select>
        </Field>

        <Field label="Admin Dashboard">
          <select
            value={data.needsAdmin ? "yes" : "no"}
            onChange={(e) => update("needsAdmin", e.target.value === "yes")}
            className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/10 text-white"
          >
            <option value="yes">Yes, include admin</option>
            <option value="no">No admin needed</option>
          </select>
        </Field>

        <Field label="Analytics">
          <select
            value={data.analytics ? "yes" : "no"}
            onChange={(e) => update("analytics", e.target.value === "yes")}
            className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/10 text-white"
          >
            <option value="yes">Yes, track usage</option>
            <option value="no">No analytics</option>
          </select>
        </Field>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Field label="Integrations (APIs, 3rd-party)">
          <Input
            placeholder="Stripe, Firebase, Shopify, HubSpot, etc."
            value={data.integrations}
            onChange={(e) => update("integrations", e.target.value)}
          />
        </Field>
        <Field label="Compliance">
          <Input
            placeholder="GDPR, POPIA, HIPAA, PCI-DSS, etc."
            value={data.compliance}
            onChange={(e) => update("compliance", e.target.value)}
          />
        </Field>
        <Field label="Accessibility Target">
          <Input
            placeholder="WCAG 2.2 AA (recommended)"
            value={data.accessibility}
            onChange={(e) => update("accessibility", e.target.value)}
          />
        </Field>
      </div>
    </div>
  );
}

/* Step 4: Branding & Content */
function Step4Branding({
  data,
  update,
}: {
  data: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
}) {
  const c = data.brandColors;

  type BrandColorKey = keyof FormData["brandColors"];
  const colorKeys: { key: BrandColorKey; label: string }[] = [
    { key: "primary", label: "Primary" },
    { key: "secondary", label: "Secondary" },
    { key: "accent", label: "Accent" },
    { key: "background", label: "Background" },
    { key: "text", label: "Text" },
  ];

  return (
    <div className="grid gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Brand Mood / Tone">
          <Input
            placeholder="e.g., Modern, minimal, confident"
            value={data.brandMood}
            onChange={(e) => update("brandMood", e.target.value)}
          />
        </Field>
        <Field label="Logo Availability">
          <select
            value={data.hasLogo}
            onChange={(e) => update("hasLogo", e.target.value as "yes" | "no")}
            className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/10 text-white"
          >
            <option value="yes">Yes, we have a logo</option>
            <option value="no">No, please propose</option>
          </select>
        </Field>
      </div>

      <Field label="Content Status">
        <select
          value={data.contentReady}
          onChange={(e) =>
            update(
              "contentReady",
              e.target.value as "ready" | "needs-copy" | "needs-assets"
            )
          }
          className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/10 text-white"
        >
          <option value="ready">We have all content</option>
          <option value="needs-copy">Need copywriting</option>
          <option value="needs-assets">Need images/assets</option>
        </select>
      </Field>

      <div className="grid md:grid-cols-5 gap-4">
        {colorKeys.map(({ key, label }) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-wide text-white/70">
              {label}
            </span>
            <input
              type="color"
              value={c[key]}
              onChange={(e) =>
                update("brandColors", { ...c, [key]: e.target.value })
              }
              className="h-12 w-full rounded-xl bg-transparent cursor-pointer"
            />
            <Input
              value={c[key]}
              onChange={(e) =>
                update("brandColors", { ...c, [key]: e.target.value })
              }
            />
          </div>
        ))}
      </div>

      {/* Domain suggestion */}
      <div className="grid md:grid-cols-3 gap-6">
        <Field label="Company / Brand for Domain">
          <Input
            placeholder="KHODITECH"
            value={data.companyNameForDomain}
            onChange={(e) => update("companyNameForDomain", e.target.value)}
          />
        </Field>
        <Field label="Domain Keywords">
          <Input
            placeholder="it, consulting, dev, app"
            value={data.domainKeywords}
            onChange={(e) => update("domainKeywords", e.target.value)}
          />
        </Field>
        <Field label="Preferred TLD">
          <select
            value={data.preferredTld}
            onChange={(e) => update("preferredTld", e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/10 text-white"
          >
            {[".com", ".ca", ".io", ".co", ".dev", ".ai", ".app", ".tech"].map(
              (t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              )
            )}
          </select>
        </Field>
      </div>

      <Field label="Suggested Domain (auto)">
        <Input value={data.suggestedDomain} readOnly />
      </Field>
    </div>
  );
}

/* Step 5: Scope, Budget, Timeline, References */
function Step5Scope({
  data,
  update,
}: {
  data: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
}) {
  return (
    <div className="grid gap-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Field label="Budget Range">
          <Input
            placeholder="e.g., 15k–40k USD"
            value={data.budgetRange}
            onChange={(e) => update("budgetRange", e.target.value)}
          />
        </Field>
        <Field label="Target Deadline">
          <Input
            type="date"
            value={data.deadline}
            onChange={(e) => update("deadline", e.target.value)}
          />
        </Field>
        <Field label="Hosting">
          <Input
            placeholder="We host / Client hosts / Not sure"
            value={data.hosting}
            onChange={(e) => update("hosting", e.target.value)}
          />
        </Field>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Maintenance / Support">
          <Input
            placeholder="e.g., Monthly plan, on-call, SLA, etc."
            value={data.maintenance}
            onChange={(e) => update("maintenance", e.target.value)}
          />
        </Field>
        <Field label="Timeline Notes">
          <Input
            placeholder="Hard milestones, launch constraints, events"
            value={data.timelineNotes}
            onChange={(e) => update("timelineNotes", e.target.value)}
          />
        </Field>
      </div>

      <Field label="References / Inspiration">
        <Textarea
          placeholder={`Links to sites/apps you like, competitor examples, brand decks, Behance/Dribbble etc.`}
          value={data.references}
          onChange={(e) => update("references", e.target.value)}
        />
      </Field>

      <Field label="Anything Else?">
        <Textarea
          placeholder="Edge cases, internal constraints, must-have tech, data model notes, etc."
          value={data.extras}
          onChange={(e) => update("extras", e.target.value)}
        />
      </Field>
    </div>
  );
}

/* Step 6: Review */
function Step6Review({ data }: { data: FormData }) {
  const items: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Company", data.company || "—"],
    ["Project Type", data.projectType || "—"],
    ["Platforms", data.platforms.join(", ").toUpperCase() || "—"],
    ["Title", data.projectTitle],
    ["Summary", data.summary],
    ["Goals", data.goals || "—"],
    ["Audience", data.audience || "—"],
    ["Key Features", data.features || "—"],
    ["Authentication", data.auth.toUpperCase()],
    ["Admin Dashboard", data.needsAdmin ? "Yes" : "No"],
    ["Analytics", data.analytics ? "Yes" : "No"],
    ["Integrations", data.integrations || "—"],
    ["Compliance", data.compliance || "—"],
    ["Accessibility", data.accessibility || "—"],
    ["Brand Mood", data.brandMood || "—"],
    ["Has Logo", data.hasLogo === "yes" ? "Yes" : "No"],
    ["Content", data.contentReady],
    [
      "Colors",
      Object.entries(data.brandColors)
        .map(([k, v]) => `${k}: ${v}`)
        .join(" | "),
    ],
    ["Domain Suggestion", data.suggestedDomain || "—"],
    ["Budget", data.budgetRange || "—"],
    ["Deadline", data.deadline || "—"],
    ["Hosting", data.hosting || "—"],
    ["Maintenance", data.maintenance || "—"],
    ["Timeline Notes", data.timelineNotes || "—"],
    ["References", data.references || "—"],
    ["Extras", data.extras || "—"],
  ];

  return (
    <div className="grid gap-4">
      {items.map(([k, v]) => (
        <div
          key={k}
          className="flex items-start justify-between gap-6 border-b border-white/10 py-3"
        >
          <span className="text-white/70 text-sm uppercase tracking-wide">
            {k}
          </span>
          <span className="text-white text-right whitespace-pre-wrap">{v}</span>
        </div>
      ))}
      <p className="text-white/70 text-sm mt-4">
        By submitting, you agree to be contacted by our team about this project.
      </p>
    </div>
  );
}
