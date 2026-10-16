export const profile = {
  name: "Shivam Kosta",
  title: "Senior Software Engineer",
  cluster: "cluster/shivam",
  email: "info.shivamkosta@gmail.com",
  phone: "8602750983",
  company: "Diverselynx",
  circle: "- Noida",
  chips: [
    "Node.js",
    "Python",
    "Go",
    "AWS Lambda",
    "Kafka",
    "Docker",
    "MongoDB",
    "ClickHouse",
    "Redis",
    "Microservices",
  ],
  spec: "Senior Software Engineer with 5+ years on Node.js, Python, TypeScript, and AWS, and a Golang path for the dataset that outgrew a script. Most days are REST APIs, ingestion pipelines, MongoDB aggregations, and whatever Lambda, API Gateway, and ECS are arguing about this week. Kafka moves the live traffic, Redis pretends the hot path is cheap, and MongoDB remembers everything until a query plan says otherwise. I trust an explain over a hunch, and I prefer a deploy that fails in CI to one that only works on my laptop.",
};

export type Job = {
  status: "running" | "stopped";
  dates: string;
  title: string;
  company: string;
  detail?: string;
  bullets: string[];
  tech: string[];
};

export const jobs: Job[] = [
  {
    status: "running",
    dates: "05/2022 – Present",
    title: "Software Developer",
    company: "Diverselynx",
    detail: "Hyblockcapital",
    bullets: [
      "Architected and developed scalable backend microservices and REST APIs using Python (FastAPI) and Node.js for a high-traffic crypto analytics platform deployed on AWS.",
      "Designed and implemented event-driven data processing pipelines using Redis, Kafka, and AWS SQS, ensuring reliability and decoupled workflows for mission-critical services.",
      "Containerized services using Docker and managed deployment pipelines on AWS (API Gateway, Lambda, EC2, ECS), including monitoring and alerts with CloudWatch.",
      "Led the technical migration of key APIs from Python to Golang, improving performance, scalability, and concurrency under higher platform load.",
      "Implemented API security with OAuth2/JWT, API-key authentication, and rate limiting for tiered subscription plans.",
      "Developed and maintained internal admin dashboards using React.js, from conception through deployment.",
      "Reduced API response times by about 40% and raised throughput by optimizing database queries and adding Redis caching.",
      "Decreased MongoDB storage by 75% and CPU utilization by 50% through schema redesign and a migration to time-series collections.",
      "Launched a top revenue-generating analytics product by building reliable, tiered, rate-limited API access for professional plans.",
      "Lowered production bugs by 35% by enforcing over 90% test coverage with Pytest and tighter error handling.",
      "Reduced operational costs by about 50% through architectural changes and tighter AWS resource use.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Node.js",
      "Go",
      "Redis",
      "Kafka",
      "AWS SQS",
      "Docker",
      "API Gateway",
      "Lambda",
      "EC2",
      "ECS",
      "CloudWatch",
      "OAuth2",
      "JWT",
      "React.js",
      "MongoDB",
      "Pytest",
    ],
  },
  {
    status: "stopped",
    dates: "09/2021 – 04/2022",
    title: "Software Engineer",
    company: "InnovationM",
    bullets: [
      "Built and maintained backend microservices for a BNPL platform using Node.js (Express) and MongoDB in a clean MVC architecture.",
      "Engineered secure API integrations with Razorpay, including webhook validation for transaction processing.",
      "Developed secure file upload services to AWS S3 and JWT-based authentication for critical endpoints.",
      "Used asynchronous queues to offload PDF generation and email notifications, improving API response time and resilience.",
      "Enabled automated contract generation and payment processing for B2B and BNPL workflows.",
      "Strengthened API security and stability, cutting payment processing errors through validation and resilient third-party integrations.",
      "Improved API performance by decoupling intensive background work from synchronous requests.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Razorpay", "AWS S3", "JWT"],
  },
  {
    status: "stopped",
    dates: "03/2021 – 09/2021",
    title: "Associate Software Engineer",
    company: "Digimonk",
    bullets: [
      "Developed full-stack modules using Node.js (Express) and MySQL, with RESTful services in a modular MVC structure.",
      "Built user authentication and authorization, multi-file uploads, and role-based access control for admin and user dashboards.",
      "Integrated the HTML5 Geolocation API for location-aware features.",
      "Delivered production admin and user portals that streamlined data-management workflows.",
      "Established a secure user-management system with RBAC so access matched each role.",
    ],
    tech: ["Node.js", "Express", "MySQL", "REST", "RBAC"],
  },
];

export const skillGroups: { name: string; items: string[] }[] = [
  {
    name: "Backend Development",
    items: [
      "Node.js",
      "Go",
      "Python",
      "TypeScript",
      "Express.js",
      "NestJS",
      "RESTful API Design",
      "Microservices Architecture",
    ],
  },
  {
    name: "Frontend Development",
    items: ["React.js", "Next.js", "Material UI", "HTML5", "CSS3"],
  },
  {
    name: "Database Management",
    items: [
      "MongoDB",
      "Mongoose",
      "ClickHouse",
      "Timeseries",
      "Aggregation Framework",
    ],
  },
  { name: "Caching", items: ["Redis"] },
  { name: "Data Visualization", items: ["Trading View", "SciCharts"] },
  {
    name: "Messaging & Streaming",
    items: ["Apache Kafka (MSK)", "WebSockets"],
  },
  {
    name: "Serverless & Cloud Computing",
    items: [
      "AWS Lambda",
      "Serverless Framework",
      "API Gateway",
      "SQS",
      "SNS",
      "S3",
      "Cognito",
      "CloudWatch",
    ],
  },
  {
    name: "CI/CD & DevOps",
    items: ["GitHub Actions", "AWS CodePipeline"],
  },
  {
    name: "Version Control & Collaboration",
    items: ["Git", "GitHub", "GitFlow", "Pull Request Workflows", "Code Reviews"],
  },
];

export const education = [
  {
    degree: "B.Sc — Computer Science",
    school: "Govt. Aadarsh Science College, Gwalior",
  },
  {
    degree: "MCA",
    school: "Maharana Pratap College Of Technology & Science College, Gwalior",
  },
];

export const themes = [
  { value: "control", label: "Control plane" },
  { value: "api", label: "API reference" },
  { value: "trace", label: "Trace" },
  { value: "plan", label: "Query plan" },
  { value: "log", label: "Event log" },
  { value: "pipeline", label: "Pipeline" },
  { value: "schematic", label: "Schematic" },
  { value: "packet", label: "Packet" },
  { value: "replica", label: "Replica set" },
  { value: "topic", label: "Topic" },
  { value: "diff", label: "Diff" },
  { value: "heat", label: "Heat" },
  { value: "rust", label: "Rust" },
  { value: "node", label: "Node.js" },
  { value: "java", label: "Java" },
  { value: "python", label: "Python" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" },
  { value: "cpp", label: "C++" },
] as const;
