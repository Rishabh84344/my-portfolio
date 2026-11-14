// Edit your personal details here. Leave blank fields hidden until verified.
export const profile = {
  name: 'Rishabh Kumar',
  firstName: 'Rishabh',
  role: 'Senior TechOps Engineer',
  headline: 'Operating reliable systems. Building toward DevOps & Cloud.',
  location: 'Noida, India',
  email: 'krrishab2000@gmail.com', // Add your public contact email
  resumeUrl: '',
  github: 'https://github.com/Rishabh84344',
  linkedin: 'https://www.linkedin.com/in/imrishab/',
  initials: 'RK',
  intro: 'I work at the intersection of production operations, troubleshooting, and modern cloud-native tooling. I enjoy understanding how applications travel from code to reliable services.',
  about: 'My journey started in banking application support, where I worked with production systems, payment workflows, middleware, and incident resolution. Today I work in TechOps and am sharpening my hands-on DevOps skills with Docker, Kubernetes, CI/CD and observability.',
};

export const metrics = [
  { value: '3+', label: 'Years in IT operations', note: 'Approximate, as of late 2026' },
  { value: '3', label: 'Organizations', note: 'Support & TechOps' },
  { value: '10+', label: 'Tools explored', note: 'Ops, cloud and DevOps' },
];

export const skills = [
  { category: 'DevOps & CI/CD', items: ['Git', 'GitHub', 'Jenkins', 'CI/CD Pipelines', 'Webhooks', 'Docker', 'Docker Compose'] },
  { category: 'Containers & Cloud', items: ['Kubernetes', 'Minikube', 'OpenShift', 'Helm (Learning)', 'AWS EC2', 'YAML'] },
  { category: 'Observability', items: ['Prometheus', 'Grafana', 'Loki', 'Kibana', 'Elasticsearch', 'Log Analysis'] },
  { category: 'Production & Systems', items: ['Linux', 'IBM MQ', 'Tomcat', 'SQL', 'Postman', 'Incident Management', 'RCA', 'ITSM'] },
];

export const experiences = [
  { company: 'Paytm', role: 'Senior TechOps Engineer', period: 'Oct 2026 — Present', location: 'Noida, India', current: true, points: ['Technical operations and support for the Nayara Energy FleetPlus platform.', 'Learning application workflows, reconciliation and operational reliability.'] },
  { company: 'Winjit Technologies', role: 'Application Support Engineer — UPI', period: 'Apr 2026 — Oct 2026', location: 'New Delhi, India', points: ['Supported the DakPay UPI platform for India Post Payments Bank.', 'Monitored production services with OpenShift, Grafana/Loki and Kibana; investigated API and transaction issues.', 'Worked with incident tickets, health checks and operational reporting.'] },
  { company: 'Acutec Global Services', role: 'Application / Technical Support Engineer', period: 'Jan 2024 — Mar 2026', location: 'India', points: ['Supported banking payment systems including NEFT, RTGS and SFMS.', 'Worked with Linux, IBM MQ, Tomcat, SQL and production incident management.', 'Participated in go-live activities, patching and disaster recovery operations.'] },
];

export const education = [
  { title: 'Bachelor of Technology (B.Tech)', institute: 'Aryabhatta Knowledge University', period: '2019 — 2023', desc: 'Engineering graduate with a foundation in programming and software systems.' },
];

export const certifications = [
  { name: 'AWS Academy Cloud Foundations', issuer: 'AWS Academy', year: '2022' },
  { name: 'MySQL Basics', issuer: 'Great Learning', year: '2023' },
  { name: 'Programming with Java', issuer: 'Infosys Springboard', year: '2023' },
];

// Replace demo/lab entries with project evidence, screenshots, and repo URLs as you complete each phase.
export const projects = [
  { slug: 'portfolio-devops-platform', title: 'Portfolio DevOps Platform', category: 'Featured · In progress', status: 'In progress', summary: 'My personal site will also serve as a hands-on CI/CD, Docker, Kubernetes and observability lab.', tags: ['React', 'Vite', 'GitHub', 'Docker', 'Kubernetes'], accent: 'purple', icon: 'layers', details: 'A long-running learning project: first build a responsive portfolio, then automate image builds, deploy to local Kubernetes, and add metrics and logging.', goals: ['Responsive application with reusable components', 'GitHub-based change history', 'Jenkins CI and container image pipeline', 'Kubernetes deployment on Minikube', 'Metrics, logs and controlled failure testing'], github: '', live: '' },
  { slug: 'monitoring-lab', title: 'Local Observability Lab', category: 'Hands-on lab', status: 'Lab practiced', summary: 'Local Prometheus, Grafana and Loki stack for exploring metrics, dashboards and log queries.', tags: ['Prometheus', 'Grafana', 'Loki', 'Docker Compose'], accent: 'teal', icon: 'activity', details: 'An experimentation environment to understand how infrastructure metrics and logs are collected and visualized.', goals: ['Run monitoring components with Docker Compose', 'Connect Prometheus to Grafana', 'Explore Loki queries and container logging', 'Build an actionable dashboard'], github: '', live: '' },
  { slug: 'kubernetes-practice', title: 'Kubernetes Practice Cluster', category: 'Hands-on lab', status: 'Lab practiced', summary: 'Learning Kubernetes objects, routing, configuration and deployments with Minikube.', tags: ['Minikube', 'Kubernetes', 'YAML', 'Services'], accent: 'blue', icon: 'box', details: 'A local environment for practicing the fundamentals of application orchestration and debugging.', goals: ['Deploy and inspect Pods and Deployments', 'Expose applications using Services', 'Practice ConfigMaps and Secrets', 'Observe rollouts and troubleshoot resources'], github: '', live: '' },
];

export const posts = [
  { slug: 'why-i-am-learning-devops', title: 'Why I am learning DevOps', date: 'November 2026', category: 'Career Journey', read: '3 min read', excerpt: 'From supporting production banking systems to building systems I can deploy and observe myself.', paragraphs: ['My experience in application support made me curious about the full journey of an application: from a developer commit to production operations.', 'I have worked with monitoring, incident response, Linux, middleware and APIs. The next step is building hands-on experience with automation, containers and infrastructure.', 'This portfolio is my living notebook. I plan to share projects, experiments, mistakes and improvements as I learn.'] },
  { slug: 'docker-to-kubernetes', title: 'From Docker to Kubernetes: my learning notes', date: 'November 2026', category: 'DevOps Notes', read: '4 min read', excerpt: 'What changes when we go from one container on a laptop to a managed cluster?', paragraphs: ['Docker lets us package an application with its dependencies into an image and run it in a container.', 'Kubernetes helps manage containerized workloads through declarative configuration, rollouts and desired state reconciliation.', 'In my lab, I am learning how Deployments, Pods and Services connect, and why monitoring and troubleshooting matter as much as deployment.'] },
];
