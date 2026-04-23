import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Send, ExternalLink, ArrowLeft } from "lucide-react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

const GITHUB = "https://github.com/ScherbAlex";

/* ===================== i18n content ===================== */
const content = {
    en: {
        nav: { stack: "Tech Stack", projects: "Projects", contact: "Contact" },
        hero: {
            badge: "Full-Stack Developer",
            title: "Alex Shcherbyna",
            subtitle:
                "Full-stack developer focused on backend systems, business logic, data processing, microservices, desktop/web apps, and modern frontend interfaces. Building clean, testable, production-ready applications.",
            ctas: { github: "View GitHub", projects: "See projects" },
        },
        sections: {
            stack: {
                title: "Tech Stack",
                cards: [
                    {
                        title: "Backend (Python)",
                        items: [
                            "Django, Django REST Framework",
                            "FastAPI, Pydantic",
                            "Celery / RQ / Dramatiq, Redis",
                            "SQLAlchemy / SQLModel",
                            "REST API, JWT / Token auth",
                            "Business & financial logic",
                        ],
                    },
                    {
                        title: "Backend (Go)",
                        items: [
                            "net/http, httputil",
                            "golang.org/x/time/rate",
                            "zap / logrus",
                            "goquery, redis",
                            "sync, context",
                            "cobra, viper, os/exec, ssh",
                        ],
                    },
                    {
                        title: "Backend (Java)",
                        items: [
                            "Spring Boot, Spring Web",
                            "Spring Data JPA",
                            "Spring Security",
                            "PostgreSQL, Flyway",
                            "MapStruct",
                            "JUnit 5, MockMvc, Testcontainers",
                        ],
                    },
                    {
                        title: "Frontend",
                        items: [
                            "React + Vite",
                            "TypeScript",
                            "TanStack Query",
                            "Zustand / Redux Toolkit",
                            "Tailwind CSS, shadcn/ui, Mantine",
                            "Drag & drop upload, dashboards",
                        ],
                    },
                ],
            },
            dataDevops: {
                cards: [
                    {
                        title: "Transcription / Desktop",
                        items: [
                            "Tauri + React",
                            "FastAPI backend",
                            "SQLite for desktop / MVP",
                            "PostgreSQL for web / production",
                            "Progress bars, jobs dashboard",
                            "LocalStorage, drag & drop UX",
                        ],
                    },
                    {
                        title: "Microservices",
                        items: [
                            "Java Spring Boot / Go / Node.js",
                            "PostgreSQL, Redis",
                            "RabbitMQ / Kafka",
                            "Docker Compose",
                            "WebSocket / SSE",
                            "OpenTelemetry, Prometheus, Grafana",
                        ],
                    },
                    {
                        title: "DevOps & Quality",
                        items: [
                            "Docker & Docker Compose",
                            "GitHub Actions (CI/CD)",
                            "Environment variables (.env)",
                            "Unit tests, integration tests",
                            "Clean architecture",
                            "Production-ready workflows",
                        ],
                    },
                ],
            },
            projects: {
                title: "Selected Projects",
                note: "Projects are based on my real GitHub showcase repositories.",
            },
            contact: { title: "Contact" },
        },
        footer: { madeWith: "Built with React + Framer Motion" },
        project: { back: "Back", openRepo: "Open repo" },
    },

    ru: {
        nav: { stack: "Стек", projects: "Проекты", contact: "Контакты" },
        hero: {
            badge: "Full-stack разработчик",
            title: "Alex Shcherbyna",
            subtitle:
                "Full-stack разработчик: backend-сервисы, бизнес-логика, обработка данных, микросервисы, desktop/web приложения и современный фронтенд. Делаю чистые, тестируемые и production-готовые приложения.",
            ctas: { github: "Открыть GitHub", projects: "К проектам" },
        },
        sections: {
            stack: {
                title: "Технологии",
                cards: [
                    {
                        title: "Backend (Python)",
                        items: [
                            "Django, Django REST Framework",
                            "FastAPI, Pydantic",
                            "Celery / RQ / Dramatiq, Redis",
                            "SQLAlchemy / SQLModel",
                            "REST API, JWT / Token auth",
                            "Финансовая и бизнес-логика",
                        ],
                    },
                    {
                        title: "Backend (Go)",
                        items: [
                            "net/http, httputil",
                            "golang.org/x/time/rate",
                            "zap / logrus",
                            "goquery, redis",
                            "sync, context",
                            "cobra, viper, os/exec, ssh",
                        ],
                    },
                    {
                        title: "Backend (Java)",
                        items: [
                            "Spring Boot, Spring Web",
                            "Spring Data JPA",
                            "Spring Security",
                            "PostgreSQL, Flyway",
                            "MapStruct",
                            "JUnit 5, MockMvc, Testcontainers",
                        ],
                    },
                    {
                        title: "Frontend",
                        items: [
                            "React + Vite",
                            "TypeScript",
                            "TanStack Query",
                            "Zustand / Redux Toolkit",
                            "Tailwind CSS, shadcn/ui, Mantine",
                            "Drag & drop upload, dashboards",
                        ],
                    },
                ],
            },
            dataDevops: {
                cards: [
                    {
                        title: "Транскрибация / Desktop",
                        items: [
                            "Tauri + React",
                            "FastAPI backend",
                            "SQLite для desktop / MVP",
                            "PostgreSQL для web / production",
                            "Progress bars, jobs dashboard",
                            "LocalStorage, drag & drop UX",
                        ],
                    },
                    {
                        title: "Микросервисы",
                        items: [
                            "Java Spring Boot / Go / Node.js",
                            "PostgreSQL, Redis",
                            "RabbitMQ / Kafka",
                            "Docker Compose",
                            "WebSocket / SSE",
                            "OpenTelemetry, Prometheus, Grafana",
                        ],
                    },
                    {
                        title: "DevOps и качество",
                        items: [
                            "Docker / Docker Compose",
                            "GitHub Actions (CI/CD)",
                            ".env и конфиги окружений",
                            "Unit и integration tests",
                            "Чистая архитектура",
                            "Production-ready workflows",
                        ],
                    },
                ],
            },
            projects: {
                title: "Избранные проекты",
                note: "Проекты основаны на моих реальных showcase-репозиториях на GitHub.",
            },
            contact: { title: "Контакты" },
        },
        footer: { madeWith: "Сделано на React + Framer Motion" },
        project: { back: "Назад", openRepo: "Открыть репо" },
    },
};

/* ===================== Projects ===================== */
/* Полностью замени свой const projects = [...] на этот */

const projects = [
    {
        slug: "mediscanclinic",
        title: "MediscanClinic",
        text_en:
            "Production-ready medical platform with appointments, reminders, Telegram/email notifications and admin workflows.",
        text_ru:
            "Production-ready медицинская платформа: запись на приём, напоминания, Telegram/email уведомления и admin-процессы.",
        tags: ["Django", "Celery", "Redis", "PostgreSQL", "Docker"],
        repo: "MediscanClinic",
    },

    {
        slug: "avito",
        title: "Avito Marketplace Platform",
        text_en:
            "Marketplace platform with Spring Boot backend and React frontend. Auth, ads, comments, image uploads and REST API.",
        text_ru:
            "Маркетплейс платформа на Spring Boot + React. Авторизация, объявления, комментарии, загрузка изображений и REST API.",
        tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
        repo: "avito",
    },

    {
        slug: "concurrent-web-scraper",
        title: "ConcurrentWebScraper",
        text_en:
            "Concurrent scraping platform with worker pool, queue processing, job statuses and scalable architecture.",
        text_ru:
            "Платформа параллельного парсинга: worker pool, очередь задач, статусы jobs и масштабируемая архитектура.",
        tags: ["Go", "Workers", "Concurrency", "Redis"],
        repo: "ConcurrentWebScraper",
    },

    {
        slug: "api-gateway",
        title: "ApiGateway",
        text_en:
            "High-performance API Gateway / Reverse Proxy with middleware chain, routing, logging and metrics.",
        text_ru:
            "Высокопроизводительный API Gateway / Reverse Proxy с middleware chain, маршрутизацией, логированием и метриками.",
        tags: ["Go", "net/http", "Proxy", "Middleware"],
        repo: "ApiGateway",
    },

    {
        slug: "devops-cli",
        title: "DevOpsCLI",
        text_en:
            "CLI deployment tool for config validation, Docker Compose control, SSH deploy and environment automation.",
        text_ru:
            "CLI DevOps-инструмент: валидация конфигов, управление Docker Compose, SSH deploy и автоматизация окружений.",
        tags: ["Go", "CLI", "Docker", "SSH"],
        repo: "DevOpsCLI",
    },

    {
        slug: "myplanner-tree",
        title: "MyPlannerTree",
        text_en:
            "Visual task planner with tree structure, drag & drop, node management and productivity workflows.",
        text_ru:
            "Визуальный планировщик задач с древовидной структурой, drag & drop, управлением узлами и productivity workflow.",
        tags: ["React", "TypeScript", "Planner", "UI"],
        repo: "MyPlannerTree",
    },

    {
        slug: "mylandingreact",
        title: "MyLandingReact",
        text_en:
            "Modern portfolio landing page built with React, animations, responsive UI and GitHub Pages deployment.",
        text_ru:
            "Современный portfolio landing page на React: анимации, responsive UI и деплой на GitHub Pages.",
        tags: ["React", "Vite", "Landing", "Frontend"],
        repo: "MyLandingReact",
    },

    {
        slug: "vatranscribe",
        title: "VATranscribe",
        text_en:
            "Audio/video transcription platform with queue jobs, progress dashboard and desktop/web architecture.",
        text_ru:
            "Платформа транскрибации аудио/видео с очередями задач, dashboard прогресса и web/desktop архитектурой.",
        tags: ["FastAPI", "React", "TypeScript", "Tauri", "Redis"],
        repo: "VATranscribe",
    },

    {
        slug: "onlinelearning",
        title: "OnlineLearning",
        text_en:
            "Online education platform with users, courses, lessons and role-based access.",
        text_ru:
            "Платформа онлайн-обучения: пользователи, курсы, уроки и роли доступа.",
        tags: ["Django", "DRF", "PostgreSQL"],
        repo: "OnlineLearning",
    },

    {
        slug: "atomichabits",
        title: "AtomicHabits API",
        text_en:
            "Habit tracking backend with notifications, scheduled jobs and API architecture.",
        text_ru:
            "Backend трекера привычек: уведомления, фоновые задачи и API архитектура.",
        tags: ["Django", "Celery", "Redis"],
        repo: "AtomicHabits",
    },

    {
        slug: "message-autosend",
        title: "Message_AutoSend",
        text_en:
            "Email campaign management system with scheduling, reporting and delivery logs.",
        text_ru:
            "Система email-рассылок: расписание, отчёты и логирование отправок.",
        tags: ["Django", "Redis", "Scheduler"],
        repo: "Message_AutoSend",
    },

    {
        slug: "onlinestore",
        title: "OnlineStore",
        text_en:
            "E-commerce backend with products, categories, validation and REST API.",
        text_ru:
            "Backend интернет-магазина: товары, категории, валидация и REST API.",
        tags: ["Django", "DRF", "PostgreSQL"],
        repo: "OnlineStore",
    },

    {
        slug: "mybank",
        title: "MyBank",
        text_en:
            "Financial transactions processing module with imports, currency conversion and reporting.",
        text_ru:
            "Модуль обработки финансовых транзакций: импорт, конвертация валют и отчёты.",
        tags: ["Python", "Pandas", "Finance"],
        repo: "MyBank",
    },

    {
        slug: "hh-data",
        title: "HH_Data",
        text_en:
            "Job market data collection platform based on hh.ru with storage and analytics.",
        text_ru:
            "Система сбора данных рынка вакансий hh.ru с хранением и аналитикой.",
        tags: ["Python", "PostgreSQL", "ETL"],
        repo: "HH_Data",
    },
];

/* ===================== UI helpers ===================== */
function Pill({ children }) {
    return <span className="pill">{children}</span>;
}

function IconLink({ href, icon: Icon, label, value }) {
    const isMail = href.startsWith("mailto:");
    return (
        <a
            className="iconLink"
            href={href}
            target={isMail ? "_self" : "_blank"}
            rel={isMail ? undefined : "noreferrer"}
        >
      <span className="iconWrap">
        <Icon size={18} />
      </span>
            <span className="iconText">
        <span className="iconLabel">{label}</span>
        <span className="iconValue">{value}</span>
      </span>
            <ExternalLink size={16} className="iconExt" />
        </a>
    );
}

function GlassCard({ title, items, children, delay = 0 }) {
    return (
        <motion.div
            className="card glass"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay }}
        >
            {title && <h3 className="cardTitle">{title}</h3>}
            {items && (
                <ul className="list">
                    {items.map((x) => (
                        <li key={x}>{x}</li>
                    ))}
                </ul>
            )}
            {children}
        </motion.div>
    );
}

/* ===================== Pages ===================== */
function Landing({ lang, setLang }) {
    const t = useMemo(() => content[lang], [lang]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="page">
            <div className="bg">
                <div className="blob b1" />
                <div className="blob b2" />
                <div className="gridlines" />
            </div>

            <header className="topbar">
                <div className="topbarInner">
                    <a className="brand" href={GITHUB} target="_blank" rel="noreferrer">
                        <span className="brandDot" />
                        ScherbAlex
                    </a>

                    <nav className="nav">
                        <button onClick={() => scrollTo("stack")}>{t.nav.stack}</button>
                        <button onClick={() => scrollTo("projects")}>{t.nav.projects}</button>
                        <button onClick={() => scrollTo("contact")}>{t.nav.contact}</button>
                    </nav>

                    <div className="langSwitch">
                        <button
                            className={lang === "ru" ? "active" : ""}
                            onClick={() => setLang("ru")}
                        >
                            RU
                        </button>
                        <button
                            className={lang === "en" ? "active" : ""}
                            onClick={() => setLang("en")}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </header>

            <main className="container">
                {/* Hero */}
                <section className="hero">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="heroInner"
                    >
                        <div className="badge">{t.hero.badge}</div>

                        <h1 className="h1">
                            {t.hero.title}
                            <span className="accent">.</span>
                        </h1>

                        <p className="subtitle">{t.hero.subtitle}</p>

                        <div className="ctaRow">
                            <a className="btn primary" href={GITHUB} target="_blank" rel="noreferrer">
                                {t.hero.ctas.github}
                            </a>
                            <button className="btn" onClick={() => scrollTo("projects")}>
                                {t.hero.ctas.projects}
                            </button>
                        </div>

                        <div className="miniPills">
                            <Pill>Python</Pill>
                            <Pill>Django / FastAPI</Pill>
                            <Pill>Go</Pill>
                            <Pill>Java / Spring Boot</Pill>
                            <Pill>React + TypeScript</Pill>
                            <Pill>PostgreSQL</Pill>
                            <Pill>Redis</Pill>
                            <Pill>Docker</Pill>
                            <Pill>CI/CD</Pill>
                            <Pill>Microservices</Pill>
                        </div>
                    </motion.div>
                </section>

                {/* Stack */}
                <section id="stack" className="section">
                    <div className="sectionHeader">
                        <h2 className="h2">{t.sections.stack.title}</h2>
                        <p className="muted">
                            Python • Go • Java • React • Transcription • Microservices • DevOps
                        </p>
                    </div>

                    <div className="grid3">
                        {t.sections.stack.cards.map((c, idx) => (
                            <GlassCard key={c.title} title={c.title} items={c.items} delay={idx * 0.07} />
                        ))}
                    </div>
                </section>

                {/* Extra stack */}
                <section className="section">
                    <div className="grid3">
                        {t.sections.dataDevops.cards.map((c, idx) => (
                            <GlassCard key={c.title} title={c.title} items={c.items} delay={idx * 0.08} />
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="section">
                    <div className="sectionHeader">
                        <h2 className="h2">{t.sections.projects.title}</h2>
                        <p className="muted">{t.sections.projects.note}</p>
                    </div>

                    <div className="grid3">
                        {projects.map((p, idx) => {
                            const repoUrl = `${GITHUB}/${p.repo}`;
                            const text = lang === "ru" ? p.text_ru : p.text_en;

                            return (
                                <motion.div
                                    key={p.slug}
                                    className="card glass projectCard"
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-90px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.04 }}
                                >
                                    <div className="projectTop">
                                        <h3 className="cardTitle">{p.title}</h3>
                                        <span className="spark" />
                                    </div>

                                    <p className="muted">{text}</p>

                                    <div className="tags">
                                        {p.tags.map((x) => (
                                            <span key={x} className="tag">
                        {x}
                      </span>
                                        ))}
                                    </div>

                                    <div className="projectActions">
                                        <Link className="btnSmall" to={`/project/${p.slug}`}>
                                            <span>View</span>
                                            <ExternalLink size={14} />
                                        </Link>

                                        <a className="btnSmall" href={repoUrl} target="_blank" rel="noreferrer">
                                            <Github size={16} />
                                            <span>Open repo</span>
                                            <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="section">
                    <div className="sectionHeader">
                        <h2 className="h2">{t.sections.contact.title}</h2>
                        <p className="muted">Let’s connect.</p>
                    </div>

                    <div className="grid2">
                        <GlassCard delay={0.05} title={lang === "ru" ? "Связаться" : "Get in touch"}>
                            <div className="contactLinks">
                                <IconLink
                                    href={GITHUB}
                                    icon={Github}
                                    label="GitHub"
                                    value="github.com/ScherbAlex"
                                />
                                <IconLink
                                    href="https://t.me/Alex_181173"
                                    icon={Send}
                                    label="Telegram"
                                    value="@Alex_181173"
                                />
                                <IconLink
                                    href="mailto:alexshcherbyna1173@gmail.com"
                                    icon={Mail}
                                    label="Email"
                                    value="alexshcherbyna1173@gmail.com"
                                />
                            </div>
                        </GlassCard>

                        <GlassCard delay={0.12} title="Links">
                            <div className="links">
                                <a className="link" href={GITHUB} target="_blank" rel="noreferrer">
                                    GitHub Showcase → github.com/ScherbAlex
                                </a>
                                <a
                                    className="link"
                                    href={`${GITHUB}?tab=repositories`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Repositories →
                                </a>
                            </div>
                        </GlassCard>
                    </div>
                </section>

                <footer className="footer">
                    <span className="muted">{t.footer.madeWith}</span>
                </footer>
            </main>
        </div>
    );
}

function ProjectPage({ lang }) {
    const t = useMemo(() => content[lang], [lang]);
    const { slug } = useParams();

    const project = projects.find((p) => p.slug === slug);
    if (!project) {
        return (
            <div className="container" style={{ paddingTop: 120 }}>
                <Link className="btnSmall" to="/">
                    <ArrowLeft size={16} />
                    <span>{t.project.back}</span>
                </Link>
                <h2 style={{ marginTop: 16 }}>Not found</h2>
            </div>
        );
    }

    const text = lang === "ru" ? project.text_ru : project.text_en;
    const repoUrl = `${GITHUB}/${project.repo}`;

    return (
        <div className="container" style={{ paddingTop: 120 }}>
            <Link className="btnSmall" to="/">
                <ArrowLeft size={16} />
                <span>{t.project.back}</span>
            </Link>

            <div style={{ marginTop: 16 }} className="card glass">
                <h2 className="h2">{project.title}</h2>
                <p className="muted" style={{ marginTop: 10 }}>
                    {text}
                </p>

                <div className="tags" style={{ marginTop: 12 }}>
                    {project.tags.map((x) => (
                        <span key={x} className="tag">
              {x}
            </span>
                    ))}
                </div>

                <div className="projectActions" style={{ marginTop: 14 }}>
                    <a className="btnSmall" href={repoUrl} target="_blank" rel="noreferrer">
                        <Github size={16} />
                        <span>{t.project.openRepo}</span>
                        <ExternalLink size={14} />
                    </a>
                </div>
            </div>
        </div>
    );
}

/* ===================== Router ===================== */
export default function App() {
    const [lang, setLang] = useState("ru");

    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Landing lang={lang} setLang={setLang} />} />
                <Route path="/project/:slug" element={<ProjectPage lang={lang} />} />
            </Routes>
        </BrowserRouter>
    );
}