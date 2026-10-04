const $ = (id) => document.getElementById(id);

const menu = $("menuToggle");
const nav = $("navigation");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}));

const modalData = {
  email: {
    label: "WORK SAMPLE 01 · EMAIL DEVELOPMENT",
    title: "Responsive campaign email",
    content: `<p>This sample uses a table-based email layout, inline styles, responsive-width content, descriptive image alt text, and preference/unsubscribe placeholders.</p>
      <ul><li>Replace every {{PLACEHOLDER}} with approved brand and campaign data.</li>
      <li>Use hosted HTTPS images and check their dimensions.</li>
      <li>Test Outlook, Gmail, Apple Mail, mobile and dark mode.</li>
      <li>Confirm the ESP's required unsubscribe and preference-center syntax.</li></ul>
      <div class="callout">Portfolio sample only. Replace placeholder content and links and complete QA before sending.</div>
      <p><a class="text-link" href="email-template.html" target="_blank" rel="noreferrer">Open standalone email HTML ↗</a></p>`
  },
  journey: {
    label: "WORK SAMPLE 02 · LIFECYCLE DESIGN",
    title: "Signup to customer loyalty",
    content: `<p><b>Objective:</b> help a new subscriber discover value, reach the first conversion and continue receiving relevant communications after purchase.</p>
      <ol><li><b>Entry:</b> valid signup or consented customer event. Check channel consent and suppress unsubscribes.</li>
      <li><b>Welcome:</b> deliver the promised introduction promptly, personalizing only with permitted data.</li>
      <li><b>Engagement branch:</b> after a defined delay, test educational content for non-engagers rather than blindly resending.</li>
      <li><b>Conversion check:</b> exit promotional onboarding when the conversion event occurs.</li>
      <li><b>Post-purchase:</b> provide useful product guidance, then a relevant cross-sell when appropriate.</li>
      <li><b>Retention / win-back:</b> use recency and cohort signals, frequency caps and suppression rules.</li>
      <li><b>Measurement:</b> compare against a holdout where feasible; monitor unsubscribe, complaint and deliverability signals.</li></ol>
      <div class="callout">Implement with your ESP's supported events, consent model and actual customer data.</div>`
  }
};

const backdrop = $("modalBackdrop");
const modalContent = $("modalContent");
function openModal(key) {
  const data = modalData[key];
  if (!data) return;
  modalContent.innerHTML = `<p class="eyebrow">${data.label}</p><h2 id="modalTitle">${data.title}</h2>${data.content}`;
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal() {
  backdrop.hidden = true;
  document.body.style.overflow = "";
}
document.querySelectorAll("[data-modal]").forEach((button) =>
  button.addEventListener("click", () => openModal(button.dataset.modal))
);
$("modalClose").addEventListener("click", closeModal);
backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

$("runDemo").addEventListener("click", () => {
  const button = $("runDemo");
  const output = $("runResult");
  const steps = [
    "Validating required fields and consent flags…",
    "Mapping audience and campaign payload…",
    "Checking the human approval gate…",
    "Simulation complete. No API request or message was sent."
  ];
  let index = 0;
  button.disabled = true;
  output.textContent = steps[index];
  const next = () => {
    index += 1;
    if (index < steps.length) {
      output.textContent = steps[index];
      window.setTimeout(next, 500);
    } else {
      button.disabled = false;
      button.textContent = "Run again ↻";
    }
  };
  window.setTimeout(next, 500);
});

const periods = {
  month: { revenue: "$84,260", conversion: "3.8%", repeat: "28.6%", unsub: "0.18%", bars: [42, 58, 49, 76, 66, 91, 73, 100] },
  quarter: { revenue: "$246,800", conversion: "4.1%", repeat: "30.2%", unsub: "0.21%", bars: [37, 45, 43, 57, 62, 71, 84, 100] }
};
function renderDashboard(period) {
  const data = periods[period] || periods.month;
  $("revenueKpi").textContent = data.revenue;
  $("conversionKpi").textContent = data.conversion;
  $("repeatKpi").textContent = data.repeat;
  $("unsubKpi").textContent = data.unsub;
  $("barChart").innerHTML = data.bars.map((height, index) =>
    `<div class="bar-col"><i style="height:${height}%"></i><small>${index + 1}</small></div>`
  ).join("");
}
$("periodSelect").addEventListener("change", (event) => renderDashboard(event.target.value));
renderDashboard("month");

const insights = [
  "Compare repeat-purchase rate and unsubscribe rate by cohort; test a post-purchase message against a holdout group.",
  "Review conversion by lifecycle entry source. Different acquisition sources may need different onboarding paths.",
  "Check revenue per recipient alongside conversion and unsubscribe rates before increasing campaign frequency.",
  "Audit dormant profiles and consent status before re-engagement. Suppress ineligible contacts and monitor complaints.",
  "Compare time-to-first-conversion across cohorts to identify where onboarding education may be missing."
];
let insightIndex = 0;
$("refreshInsight").addEventListener("click", () => {
  insightIndex = (insightIndex + 1) % insights.length;
  $("recommendationText").textContent = insights[insightIndex];
});

$("copyCode").addEventListener("click", async () => {
  const button = $("copyCode");
  const code = document.querySelector(".code-card code").textContent;
  try {
    await navigator.clipboard.writeText(code);
    button.textContent = "Copied ✓";
  } catch {
    button.textContent = "Clipboard unavailable";
  }
});
