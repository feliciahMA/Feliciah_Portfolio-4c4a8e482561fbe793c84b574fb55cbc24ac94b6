use strict';

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector(".sidebar-toggle");
const sidebarClose = document.querySelector(".mobile-close");
const overlay = document.querySelector(".sidebar-overlay");

function toggleSidebar() {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
}
sidebarBtn?.addEventListener("click", toggleSidebar);
sidebarClose?.addEventListener("click", toggleSidebar);
overlay?.addEventListener("click", toggleSidebar);

const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

function showPage(pageName) {
  pages.forEach(page => page.classList.toggle("active", page.dataset.page === pageName));
  navLinks.forEach(link => link.classList.toggle("active", link.dataset.navLink === pageName));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (sidebar.classList.contains("open")) toggleSidebar();
}

navLinks.forEach(link => link.addEventListener("click", () => showPage(link.dataset.navLink)));
document.querySelectorAll("[data-go]").forEach(btn => btn.addEventListener("click", () => showPage(btn.dataset.go)));

document.querySelector("[data-copy-email]")?.addEventListener("click", async function () {
  const email = "Feliciah.ma@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    const original = this.textContent;
    this.textContent = "Copied ✓";
    setTimeout(() => this.textContent = original, 1800);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

const projectData = {
  etl: {
    title: "Scalable Cloud ETL Pipeline",
    description: "A batch-oriented architecture designed to separate raw ingestion, distributed transformation, validation and curated analytics.",
    flow: ["Source Systems", "Cloud Storage", "PySpark / Dataproc", "Validation & Logging", "BigQuery"]
  },
  migration: {
    title: "Enterprise Data Modernisation",
    description: "A migration architecture for moving operational Oracle data into a cloud analytics environment with incremental extraction and reconciliation.",
    flow: ["Oracle", "Incremental Extract", "PySpark / Hadoop", "Schema & Reconciliation", "GCP Analytics"]
  },
  quality: {
    title: "Data Quality & Observability Layer",
    description: "A reliability layer that validates datasets, isolates failures and records operational signals for troubleshooting.",
    flow: ["Incoming Data", "Quality Rules", "Valid / Invalid Split", "Audit & Error Logs", "Curated Dataset"]
  }
};

const modal = document.querySelector("[data-project-modal]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDescription = document.querySelector("[data-modal-description]");
const modalFlow = document.querySelector("[data-modal-flow]");

document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => {
    const data = projectData[button.dataset.project];
    if (!data) return;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalFlow.innerHTML = data.flow.map((step, i) =>
      `<div class="modal-node"><small>0${i + 1}</small><strong>${step}</strong></div>${i < data.flow.length - 1 ? '<span>→</span>' : ''}`
    ).join("");
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });
});

document.querySelectorAll("[data-modal-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.getElementById("year").textContent = new Date().getFullYear();
