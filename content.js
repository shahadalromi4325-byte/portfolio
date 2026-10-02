// Everything the site shows lives in this file. Edit the text here — no need to touch the HTML.

window.PORTFOLIO = {
  name: "Shahad Alromi",
  initials: "SA",
  photo: "logo.webp", // optional: path to a square photo, e.g. "photo.jpg". Empty shows the initials.
  role: "CS student · Web developer",
  location: "Yanbu / Riyadh, Saudi Arabia",

  about: [
    "Computer Science student looking for a 4-month co-op in web development.",
    "I'm strongest in front-end, with hands-on full-stack experience in PHP and MySQL, and I care about building practical, well-designed digital products.",
    "Alongside university I run a small side business designing and building interactive digital invitations, taking each one from a Figma prototype to a finished, animated web card.",
  ],

  focus: [
    {
      title: "Front-end development",
      text: "Mobile-first, responsive pages built with semantic HTML, Flexbox, CSS Grid, and accessibility practices.",
    },
    {
      title: "Full-stack web apps",
      text: "PHP and MySQL applications with user roles, CRUD dashboards, authentication, and secure data handling.",
    },
    {
      title: "Design to code",
      text: "Figma prototypes turned into finished, animated web pages using Lottie.",
    },
    {
      title: "Arabic & RTL interfaces",
      text: "Right-to-left layouts that work properly on phones, built for real events and real users.",
    },
  ],

  education: [
    {
      title: "Bachelor of Computer Science",
      place: "Yanbu Industrial College (Royal Commission Yanbu)",
      period: "Expected graduation 2027",
      detail: "GPA 3.44 / 4.00",
    },
  ],

  coursework: [
    "Enterprise Web Application Development",
    "Object-Oriented Web Development",
    "Web Application Development",
    "Artificial Intelligence",
    "Operating Systems",
    "Computer Architecture & Parallel Computing",
    "Algorithms",
  ],

  skills: [
    { group: "Languages", items: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Python (basic)", "VB.NET"] },
    { group: "Tools", items: ["Git & GitHub", "VS Code", "Cursor", "Node.js", "MySQL", "Laragon", "Linux (WSL/Ubuntu)"] },
    { group: "Design", items: ["Figma", "Canva", "Lottie"] },
    { group: "AI tools", items: ["Claude", "Cursor", "Perplexity", "Bloom", "Higgsfield"] },
    { group: "Soft skills", items: ["Teamwork", "Technical writing", "Problem solving"] },
  ],

  languages: ["Arabic — native", "English — fluent (all university study is in English)"],
  activities: ["Volleyball player in Yanbu Industrial College tournaments"],

  // category is used for the filter buttons on the Projects tab.
  projects: [
    {
      title: "YIC Library System",
      category: "Full-stack",
      context: "CS381",
      summary:
        "A library management system with separate admin and student roles. Admins get a dashboard with live statistics and full CRUD for the book catalog; students can search, filter, borrow, and review their borrowing history. Secured with PDO prepared statements, bcrypt hashing, CSRF tokens, XSS escaping, and role-based access.",
      stack: ["PHP", "MySQL", "JavaScript"],
      links: { live: "", code: "" },
    },
    {
      title: "Focus Pocus: mini-games platform",
      category: "Full-stack",
      context: "CS382 · team of 4",
      summary:
        "I built the homepage, the global leaderboard, the Memory Match game, and the game likes system, and worked on user login and sign-up and on saving each player's stats to MySQL.",
      stack: ["PHP", "MySQL", "JavaScript"],
      links: { live: "", code: "" },
    },
    {
      title: "Workshop Feedback App",
      category: "Front-end",
      context: "Personal project",
      summary:
        "A mobile-first Arabic (RTL) feedback kiosk for live workshops, with a PIN-protected admin panel and one-click Excel export of the results using SheetJS.",
      stack: ["HTML", "CSS", "JavaScript", "SheetJS"],
      links: { live: "", code: "" },
    },
    {
      title: "Digital invitation cards",
      category: "Design",
      context: "Side business · ongoing",
      summary:
        "I design and build interactive wedding and graduation invitations, taking each one from Figma prototype to finished animated web card.",
      stack: ["Figma", "Node.js", "Lottie"],
      links: { live: "", code: "" },
    },
    {
      title: "Responsive academic portfolio",
      category: "Front-end",
      context: "CS381",
      summary:
        "A multi-page, mobile-first site built with Flexbox, CSS Grid, semantic HTML, and accessibility practices.",
      stack: ["HTML5", "CSS3"],
      links: { live: "", code: "" },
    },
    {
      title: "Git & GitHub interactive presentation",
      category: "Front-end",
      context: "CS382 · team of 8",
      summary: "Co-built a web-based slide deck that teaches the Git workflow, with keyboard navigation.",
      stack: ["HTML", "CSS", "JavaScript"],
      links: { live: "", code: "" },
    },
    {
      title: "Ladhatha (لذاذة): food brand identity",
      category: "Design",
      context: "Branding",
      summary: "Created the brand identity, promotional visuals, and a video ad for a homemade food brand.",
      stack: ["AI design tools"],
      links: { live: "", code: "" },
    },
  ],

  // Leave any of these empty ("") to hide it.
  contact: {
    email: "shahadalromi4325@gmail.com",
    github: "https://github.com/shahadalromi4325-byte",
    github2: "https://github.com/Shahad-31",
    linkedin: "",
    cv: "",
  },
};
