import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const content = {
    en: {
        nav: { stack: "Tech Stack", projects: "Projects", contact: "Contact" },
        hero: {
            badge: "Full-Stack Developer",
            title: "Alex Shcherbyna",
            subtitle:
                "Full-stack developer focused on backend systems, business logic, data processing, and modern frontend interfaces. Building clean, testable, production-ready applications.",
            ctas: {
                github: "View GitHub",
                projects: "See projects",
            },
        },
        sections: {
            stack: {
                title: "Tech Stack",
                cards: [
                    {
                        title: "Backend (Python)",
                        items: [
                            "Django, Django REST Framework",
                            "Celery, Redis",
                            "REST API, JWT / Token auth",
                            "Business & financial logic",
                        ],
                    },
                    {
                        title: "Backend (Java)",
                        items: ["Java Core", "Spring Boot", "REST APIs", "Layered architecture"],
                    },
                    {
                        title: "Frontend",
                        items: [
                            "React",
                            "HTML5, CSS3",
                            "Responsive layout",
                            "UI frameworks & components",
                        ],
                    },
                ],
            },
            dataDevops: {
                cards: [
                    {
                        title: "Data & Analytics",
                        items: [
                            "Pandas, ETL pipelines",
                            "CSV / JSON / XLSX",
                            "Aggregation & reports",
                            "Job market & finance analytics",
                        ],
                    },
                    {
                        title: "DevOps & Quality",
                        items: [
                            "Docker & Docker Compose",
                            "GitHub Actions (CI/CD)",
                            "Environment variables (.env)",
                            "Unit tests, clean architecture",
                        ],
                    },
                ],
            },
            projects: {
                title: "Selected Projects",
                note: "Projects are based on my real GitHub showcase repositories.",
                cards: [
                    {
                        title: "OnlineLearning",
                        text: "Online education platform with users, courses and role-based access.",
                        tags: ["Django", "DRF", "PostgreSQL"],
                    },
                    {
                        title: "Message_AutoSend",
                        text: "Email campaign management system with scheduling, reporting and logging.",
                        tags: ["Django", "Redis", "Scheduler"],
                    },
                    {
                        title: "AtomicHabits API",
                        text: "Habit tracking backend with background tasks and notifications.",
                        tags: ["Celery", "Redis", "API"],
                    },
                    {
                        title: "MyBank / ProjectBank",
                        text: "Financial transactions processing and analytics modules.",
                        tags: ["Pandas", "Finance", "Reports"],
                    },
                    {
                        title: "HH_Data / HH_Vacancies",
                        text: "Job market data collection and vacancy analytics (hh.ru).",
                        tags: ["Parsing", "PostgreSQL", "ETL"],
                    },
                    {
                        title: "ECommerceProject",
                        text: "Django-based e-commerce backend with products, categories and validation.",
                        tags: ["Django", "PostgreSQL", "Admin"],
                    },
                ],
            },
            contact: {
                title: "Contact",
                items: [
                    { label: "GitHub", value: "github.com/ScherbAlex" },
                    { label: "Role", value: "Backend • Full-stack • Data-driven development" },
                ],
                hint:
                    "Tip: replace Telegram/Email placeholders with your real contacts when you’re ready.",
            },
        },
        footer: { madeWith: "Built with React + Framer Motion" },
    },

    ru: {
        nav: { stack: "Стек", projects: "Проекты", contact: "Контакты" },
        hero: {
            badge: "Full-stack разработчик",
            title: "Alex Shcherbyna",
            subtitle:
                "Full-stack разработчик: backend-сервисы, бизнес-логика, обработка данных и современный фронтенд. Делаю чистые, тестируемые и production-готовые приложения.",
            ctas: {
                github: "Открыть GitHub",
                projects: "К проектам",
            },
        },
        sections: {
            stack: {
                title: "Технологии",
                cards: [
                    {
                        title: "Backend (Python)",
                        items: [
                            "Django, Django REST Framework",
                            "Celery, Redis",
                            "REST API, JWT / Token auth",
                            "Бизнес- и финтех-логика",
                        ],
                    },
                    {
                        title: "Backend (Java)",
                        items: ["Java Core", "Spring Boot", "REST API", "Слоистая архитектура"],
                    },
                    {
                        title: "Frontend",
                        items: [
                            "React",
                            "HTML5, CSS3",
                            "Адаптивная верстка",
                            "UI-фреймворки и компоненты",
                        ],
                    },
                ],
            },
            dataDevops: {
                cards: [
                    {
                        title: "Данные и аналитика",
                        items: [
                            "Pandas, ETL",
                            "CSV / JSON / XLSX",
                            "Агрегации и отчёты",
                            "Аналитика рынка вакансий и финансов",
                        ],
                    },
                    {
                        title: "DevOps и качество",
                        items: [
                            "Docker / Docker Compose",
                            "GitHub Actions (CI/CD)",
                            ".env и конфиги окружений",
                            "Unit-тесты, чистая архитектура",
                        ],
                    },
                ],
            },
            projects: {
                title: "Избранные проекты",
                note: "Проекты основаны на моих реальных showcase-репозиториях на GitHub.",
                cards: [
                    {
                        title: "OnlineLearning",
                        text: "Платформа онлайн-обучения: пользователи, курсы, роли и права.",
                        tags: ["Django", "DRF", "PostgreSQL"],
                    },
                    {
                        title: "Message_AutoSend",
                        text: "Система email-рассылок: расписание, отчёты, логирование.",
                        tags: ["Django", "Redis", "Scheduler"],
                    },
                    {
                        title: "AtomicHabits API",
                        text: "Трекер привычек: фоновые задачи и уведомления.",
                        tags: ["Celery", "Redis", "API"],
                    },
                    {
                        title: "MyBank / ProjectBank",
                        text: "Обработка транзакций и аналитика банковских операций.",
                        tags: ["Pandas", "FinTech", "Reports"],
                    },
                    {
                        title: "HH_Data / HH_Vacancies",
                        text: "Сбор и аналитика данных вакансий (hh.ru).",
                        tags: ["Parsing", "PostgreSQL", "ETL"],
                    },
                    {
                        title: "ECommerceProject",
                        text: "Backend интернет-магазина: товары, категории, валидация.",
                        tags: ["Django", "PostgreSQL", "Admin"],
                    },
                ],
            },
            contact: {
                title: "Контакты",
                items: [
                    { label: "GitHub", value: "github.com/ScherbAlex" },
                    { label: "Позиционирование", value: "Backend • Full-stack • Data-driven development" },
                ],
                hint:
                    "Подсказка: замени Telegram/Email на реальные контакты, когда будешь готов(а).",
            },
        },
        footer: { madeWith: "Сделано на React + Framer Motion" },
    },
};

function Pill({ children }) {
    return <span className="pill">{children}</span>;
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

export default function App() {
    const [lang, setLang] = useState("ru"); // default RU
    const t = useMemo(() => content[lang], [lang]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="page">
            {/* Background blobs */}
            <div className="bg">
                <div className="blob b1" />
                <div className="blob b2" />
                <div className="gridlines" />
            </div>

            {/* Top bar */}
            <header className="topbar">
                <div className="topbarInner">
                    <a className="brand" href="https://github.com/ScherbAlex" target="_blank" rel="noreferrer">
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
                            aria-label="Switch to Russian"
                        >
                            RU
                        </button>
                        <button
                            className={lang === "en" ? "active" : ""}
                            onClick={() => setLang("en")}
                            aria-label="Switch to English"
                        >
                            EN
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <main className="container">
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
                            <a className="btn primary" href="https://github.com/ScherbAlex" target="_blank" rel="noreferrer">
                                {t.hero.ctas.github}
                            </a>
                            <button className="btn" onClick={() => scrollTo("projects")}>
                                {t.hero.ctas.projects}
                            </button>
                        </div>

                        <div className="miniPills">
                            <Pill>Python</Pill>
                            <Pill>Django / DRF</Pill>
                            <Pill>Java / Spring Boot</Pill>
                            <Pill>React</Pill>
                            <Pill>PostgreSQL</Pill>
                            <Pill>Docker</Pill>
                            <Pill>CI/CD</Pill>
                        </div>
                    </motion.div>
                </section>

                {/* Stack */}
                <section id="stack" className="section">
                    <div className="sectionHeader">
                        <h2 className="h2">{t.sections.stack.title}</h2>
                        <p className="muted">Backend • Java • React • Data • DevOps</p>
                    </div>

                    <div className="grid3">
                        {t.sections.stack.cards.map((c, idx) => (
                            <GlassCard key={c.title} title={c.title} items={c.items} delay={idx * 0.07} />
                        ))}
                    </div>
                </section>

                {/* Data & DevOps */}
                <section className="section">
                    <div className="grid2">
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
                        {t.sections.projects.cards.map((p, idx) => (
                            <motion.div
                                key={p.title}
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
                                <p className="muted">{p.text}</p>

                                <div className="tags">
                                    {p.tags.map((x) => (
                                        <span key={x} className="tag">
                      {x}
                    </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="section">
                    <div className="sectionHeader">
                        <h2 className="h2">{t.sections.contact.title}</h2>
                        <p className="muted">{t.sections.contact.hint}</p>
                    </div>

                    <div className="grid2">
                        <GlassCard delay={0.05}>
                            <div className="contactBox">
                                {t.sections.contact.items.map((i) => (
                                    <div key={i.label} className="row">
                                        <div className="label">{i.label}</div>
                                        <div className="value">{i.value}</div>
                                    </div>
                                ))}
                                <div className="row">
                                    <div className="label">Telegram</div>
                                    <div className="value">@username</div>
                                </div>
                                <div className="row">
                                    <div className="label">Email</div>
                                    <div className="value">your@email.com</div>
                                </div>
                            </div>
                        </GlassCard>

                        <GlassCard delay={0.12} title="Links">
                            <div className="links">
                                <a className="link" href="https://github.com/ScherbAlex" target="_blank" rel="noreferrer">
                                    GitHub Showcase → github.com/ScherbAlex
                                </a>
                                <a className="link" href="https://github.com/ScherbAlex?tab=repositories" target="_blank" rel="noreferrer">
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