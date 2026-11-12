# Rishabh Kumar — Personal Portfolio

A fully responsive, component-based React + Vite portfolio with dedicated routes for About, Experience, Education, Projects, Project Details, Journal and Contact. Built to grow into a DevOps hands-on project.

## Requirements

- Node.js 20.19+ or 22.12+
- npm
- VS Code (recommended)

## Start on localhost

```bash
npm install
npm run dev
```

Open **http://localhost:5173/** in a browser. Stop with `Ctrl+C`.

## Production build

```bash
npm run build
npm run preview
```

`dist/` contains production assets. For client-side routes like `/projects/portfolio-devops-platform`, configure your web server/hosting to serve `index.html` as the fallback for unknown paths.

## Where to edit content

Most content is in **`src/data/profile.js`**. Update it before publishing:

- `profile`: name, role, public contact links, bio
- `skills`: skill cards
- `experiences`: employment history
- `education` and `certifications`
- `projects`: new cards and detailed project routes (unique `slug` required)
- `posts`: technical blog posts (unique `slug` required)

Each Project/Journal entry creates a detail URL automatically. Examples:

- `/projects/portfolio-devops-platform`
- `/journal/docker-to-kubernetes`

## Files

```text
src/
├── components/UI.jsx       Shared navbar, footer, project cards, UI helpers
├── data/profile.js         Edit your content here
├── pages/Home.jsx          Homepage
├── pages/Pages.jsx         Other pages and dynamic detail routes
├── styles/main.css         Responsive design
└── main.jsx                Application routing
public/                     Resume and image assets
index.html
vite.config.js
```

## Personal details and placeholders

Professional details are prefilled from our conversation; verify wording, dates and project status before sharing publicly. Public email, GitHub URL, LinkedIn URL, resume URL and personal photo are intentionally **not invented**. Add them to `src/data/profile.js`. Contact cards show placeholders until valid links are supplied.

## Roadmap (do not claim as implemented yet)

1. Run locally, test responsive UI and all routes.
2. Push source to GitHub.
3. Add Dockerfile and run a containerized preview.
4. Add Jenkinsfile for CI, tests and image publishing.
5. Add Minikube Kubernetes manifests and deployment automation.
6. Add observability with Prometheus, Grafana and Loki.
7. Deploy public static site to an always-on provider, add domain and HTTPS.

## Notes

- No backend API is needed for this version; it's a static client-side React app with real URL routes.
- The public portfolio can be hosted separately from your local K8s learning environment.
- No paid infrastructure is required to run locally.
