(function () {
  const data = window.PORTFOLIO;

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  const link = (href, text, className) => {
    const a = el("a", className, text);
    a.href = href;
    if (/^https?:/.test(href)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    return a;
  };

  document.querySelectorAll("[data-bind]").forEach((node) => {
    node.textContent = data[node.dataset.bind] || "";
  });
  document.title = `${data.name} — ${data.role}`;
  document.getElementById("year").textContent = new Date().getFullYear();

  // Work log
  const log = document.getElementById("log");
  data.projects.forEach((project) => {
    const ongoing = project.status === "ongoing";
    const item = el("li", "entry" + (ongoing ? " entry--open" : ""));

    const meta = el("p", "entry__meta");
    meta.append(el("span", "entry__context", project.context), el("span", "entry__status", project.status));

    const body = el("div", "entry__body");
    body.append(el("h3", "entry__title", project.title), el("p", "entry__summary", project.summary));

    const stack = el("ul", "entry__stack");
    project.stack.forEach((tech) => stack.append(el("li", null, tech)));
    body.append(stack);

    const links = el("p", "entry__links");
    if (project.links.live) links.append(link(project.links.live, "Open live site"));
    if (project.links.code) links.append(link(project.links.code, "View code"));
    if (links.childNodes.length) body.append(links);

    item.append(meta, body);
    log.append(item);
  });

  // Skills
  const skillList = document.getElementById("skill-list");
  data.skills.forEach(({ group, items }) => {
    const row = el("div", "skills__row");
    row.append(el("dt", null, group), el("dd", null, items.join(" · ")));
    skillList.append(row);
  });

  // About
  const about = document.getElementById("about-text");
  data.about.forEach((paragraph) => about.append(el("p", null, paragraph)));

  // Contact
  const contactList = document.getElementById("contact-list");
  const channels = [
    ["email", "Email", (v) => `mailto:${v}`, (v) => v],
    ["github", "GitHub", (v) => v, (v) => v.replace(/^https?:\/\/(www\.)?/, "")],
    ["github2", "GitHub", (v) => v, (v) => v.replace(/^https?:\/\/(www\.)?/, "")],
    ["linkedin", "LinkedIn", (v) => v, (v) => v.replace(/^https?:\/\/(www\.)?/, "")],
    ["cv", "CV", (v) => v, () => "Download PDF"],
  ];
  channels.forEach(([key, label, toHref, toText]) => {
    const value = data.contact[key];
    if (!value) return;
    const row = el("li");
    row.append(el("span", "contact__label", label), link(toHref(value), toText(value)));
    contactList.append(row);
  });
  if (!contactList.childNodes.length) {
    contactList.append(el("li", "contact__empty", "Add your email and links in content.js to show them here."));
  }

  // Reveal entries as they scroll in
  const entries = document.querySelectorAll(".entry");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(
      (seen) =>
        seen.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.2 }
    );
    entries.forEach((entry) => {
      entry.classList.add("will-reveal");
      observer.observe(entry);
    });
  }
})();
