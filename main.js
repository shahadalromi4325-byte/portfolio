(function () {
  const data = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);

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

  const stripProtocol = (url) => url.replace(/^https?:\/\/(www\.)?/, "");

  document.querySelectorAll("[data-bind]").forEach((node) => {
    node.textContent = data[node.dataset.bind] || "";
  });
  document.title = `${data.name} | ${data.role}`;

  // Avatar
  const avatar = $("avatar");
  if (data.photo) {
    const img = el("img");
    img.src = data.photo;
    img.alt = data.name;
    avatar.append(img);
  } else {
    avatar.textContent = data.initials;
    avatar.setAttribute("aria-hidden", "true");
  }

  // Contact channels, shared by the profile card and the Contact tab
  const channels = [
    ["email", "Email", (v) => `mailto:${v}`, (v) => v],
    ["github", "GitHub", (v) => v, stripProtocol],
    ["github2", "GitHub", (v) => v, stripProtocol],
    ["linkedin", "LinkedIn", (v) => v, stripProtocol],
    ["cv", "CV", (v) => v, () => "Download PDF"],
  ].filter(([key]) => data.contact[key]);

  const facts = $("facts");
  const addFact = (label, valueNode) => {
    const row = el("li");
    row.append(el("span", "facts__label", label), valueNode);
    facts.append(row);
  };
  channels.forEach(([key, label, toHref, toText]) => {
    const value = data.contact[key];
    addFact(label, link(toHref(value), toText(value)));
  });
  addFact("Location", el("span", null, data.location));

  const contactList = $("contact-list");
  channels.forEach(([key, label, toHref, toText]) => {
    const value = data.contact[key];
    const row = el("li");
    row.append(el("span", "contact__label", label), link(toHref(value), toText(value)));
    contactList.append(row);
  });

  // About
  data.about.forEach((paragraph) => $("about-text").append(el("p", null, paragraph)));
  data.focus.forEach(({ title, text }) => {
    const item = el("li", "focus__item");
    item.append(el("h3", null, title), el("p", null, text));
    $("focus").append(item);
  });

  // Resume
  data.education.forEach(({ title, place, period, detail }) => {
    const item = el("li", "timeline__item");
    item.append(
      el("h3", null, title),
      el("p", "timeline__period", period),
      el("p", null, place),
      el("p", null, detail)
    );
    $("education").append(item);
  });
  data.coursework.forEach((course) => $("coursework").append(el("li", null, course)));
  data.skills.forEach(({ group, items }) => {
    const row = el("div", "skills__row");
    const list = el("dd");
    const chips = el("ul", "chips");
    items.forEach((skill) => chips.append(el("li", null, skill)));
    list.append(chips);
    row.append(el("dt", null, group), list);
    $("skill-list").append(row);
  });
  data.languages.forEach((language) => $("languages").append(el("li", null, language)));
  data.activities.forEach((activity) => $("activities").append(el("li", null, activity)));

  // Projects
  const grid = $("project-grid");
  data.projects.forEach((project) => {
    const card = el("li", "project");
    card.dataset.category = project.category;

    const head = el("p", "project__meta");
    head.append(el("span", "project__category", project.category), el("span", null, project.context));

    const stack = el("ul", "chips chips--small");
    project.stack.forEach((tech) => stack.append(el("li", null, tech)));

    card.append(head, el("h3", "project__title", project.title), el("p", "project__summary", project.summary), stack);

    const links = el("p", "project__links");
    if (project.links.live) links.append(link(project.links.live, "Open live site"));
    if (project.links.code) links.append(link(project.links.code, "View code"));
    if (links.childNodes.length) card.append(links);

    grid.append(card);
  });

  const filters = $("filters");
  const categories = ["All", ...new Set(data.projects.map((project) => project.category))];
  const setFilter = (category) => {
    filters.querySelectorAll("button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.textContent === category));
    });
    grid.querySelectorAll(".project").forEach((card) => {
      card.hidden = category !== "All" && card.dataset.category !== category;
    });
  };
  categories.forEach((category) => {
    const button = el("button", null, category);
    button.type = "button";
    button.addEventListener("click", () => setFilter(category));
    filters.append(button);
  });
  setFilter("All");

  // Tabs
  const tabs = document.querySelectorAll(".tabs button");
  const pages = document.querySelectorAll(".page");
  const showPage = (name) => {
    if (![...pages].some((page) => page.dataset.page === name)) name = "about";
    pages.forEach((page) => page.classList.toggle("is-active", page.dataset.page === name));
    tabs.forEach((tab) => {
      if (tab.dataset.tab === name) tab.setAttribute("aria-current", "page");
      else tab.removeAttribute("aria-current");
    });
  };
  tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      history.replaceState(null, "", `#${tab.dataset.tab}`);
      showPage(tab.dataset.tab);
      window.scrollTo({ top: 0 });
    })
  );
  window.addEventListener("hashchange", () => showPage(location.hash.slice(1)));
  showPage(location.hash.slice(1));

  // Contacts toggle (small screens)
  const toggle = $("contacts-toggle");
  toggle.addEventListener("click", () => {
    const open = $("profile").classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Hide contacts" : "Show contacts";
  });
})();
