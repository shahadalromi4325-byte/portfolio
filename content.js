// Everything the site shows lives in this file. Edit the text here — no need to touch the HTML.

window.PORTFOLIO = {
  name: "Shahad Alromi",
  role: "Computer Science student & web developer",
  location: "Yanbu / Riyadh, Saudi Arabia",
  intro:
    "I build practical, well-designed web products. Strongest in front-end, with hands-on full-stack experience in PHP and MySQL. Looking for a 4-month co-op in web development.",

  about: [
    "I'm studying for a Bachelor of Computer Science at Yanbu Industrial College (Royal Commission Yanbu), graduating in 2027 with a 3.44 / 4.00 GPA. My coursework covers enterprise and object-oriented web development, artificial intelligence, operating systems, computer architecture and parallel computing, and algorithms.",
    "Alongside university I run a small side business designing and building interactive digital invitations, which is where I learned to take an idea from a Figma prototype to a finished, animated page.",
    "I speak Arabic natively and English fluently — all of my university study is in English. Off the screen, I play volleyball in Yanbu Industrial College tournaments.",
  ],

  // context: where the project comes from. status: "completed" or "ongoing"
  projects: [
    {
      title: "YIC Library System",
      context: "CS381",
      status: "completed",
      summary:
        "A full-stack library management system with separate admin and student roles. Admins get a dashboard with live statistics and full CRUD for the book catalog; students can search, filter, borrow, and review their borrowing history. Secured with PDO prepared statements, bcrypt hashing, CSRF tokens, XSS escaping, and role-based access.",
      stack: ["PHP", "MySQL", "JavaScript"],
      links: { live: "", code: "" },
    },
    {
      title: "Focus Pocus: mini-games platform",
      context: "CS382 · team of 4",
      status: "completed",
      summary:
        "I built the homepage, the global leaderboard, the Memory Match game, and the game likes system, and worked on user login and sign-up and on saving each player's stats to MySQL.",
      stack: ["PHP", "MySQL", "JavaScript"],
      links: { live: "", code: "" },
    },
    {
      title: "Workshop Feedback App",
      context: "Personal",
      status: "completed",
      summary:
        "A mobile-first Arabic (RTL) feedback kiosk for live workshops, with a PIN-protected admin panel and one-click Excel export of the results using SheetJS.",
      stack: ["HTML", "CSS", "JavaScript", "SheetJS"],
      links: { live: "", code: "" },
    },
    {
      title: "Digital invitation cards",
      context: "Side business",
      status: "ongoing",
      summary:
        "I design and build interactive wedding and graduation invitations, taking each one from Figma prototype to finished animated web card.",
      stack: ["Figma", "Node.js", "Lottie"],
      links: { live: "", code: "" },
    },
    {
      title: "Responsive academic portfolio",
      context: "CS381",
      status: "completed",
      summary:
        "A multi-page, mobile-first site built with Flexbox, CSS Grid, semantic HTML, and accessibility practices.",
      stack: ["HTML5", "CSS3"],
      links: { live: "", code: "" },
    },
    {
      title: "Git & GitHub interactive presentation",
      context: "CS382 · team of 8",
      status: "completed",
      summary:
        "Co-built a web-based slide deck that teaches the Git workflow, with keyboard navigation.",
      stack: ["HTML", "CSS", "JavaScript"],
      links: { live: "", code: "" },
    },
    {
      title: "Ladhatha (لذاذة): food brand identity",
      context: "Branding",
      status: "completed",
      summary:
        "Created the brand identity, promotional visuals, and a video ad for a homemade food brand.",
      stack: ["AI design tools"],
      links: { live: "", code: "" },
    },
  ],

  skills: [
    { group: "Languages", items: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Python (basic)", "VB.NET"] },
    { group: "Tools", items: ["Git & GitHub", "VS Code", "Cursor", "Node.js", "MySQL", "Laragon", "Linux (WSL/Ubuntu)"] },
    { group: "Design", items: ["Figma", "Canva", "Lottie"] },
    { group: "AI tools", items: ["Claude", "Cursor", "Perplexity", "Bloom", "Higgsfield"] },
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
