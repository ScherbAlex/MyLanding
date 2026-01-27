import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Send, ExternalLink } from "lucide-react";
import "./App.css";

const GITHUB = "https://github.com/ScherbAlex";

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
                    { title: "Backend (Java)", items: ["Java Core", "Spring Boot", "REST APIs", "Layered architecture"] },
                    { title: "Frontend", items: ["React", "HTML5, CSS3", "Responsive layout", "UI frameworks & components"] },
                ],
            },
            dataDevops: {
                cards: [
                    { title: "Data & Analytics", items: ["Pandas, ETL pipelines", "CSV / JSON / XLSX", "Aggregation & reports", "Job market & finance analytics"] },
                    { title: "DevOps & Quality", items: ["Docker & Docker Compose", "GitHub Actions (CI/CD)", "Environment variables (.env)", "Unit tests, clean architecture"] },
                ],
            },
            projects: {
                title: "Selected Projects",
                note: "Projects are based on my real GitHub showcase repositories.",
            },
            contact: { title: "Contact" },
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
                            "Celery, Redis",
                            "REST API, JWT / Token auth",
                            "Финансовая и бизнес-логика",
                        ],
                    },
                    { title: "Backend (Java)", items: ["Java Core", "Spring Boot", "REST API", "Слоистая архитектура"] },
                    { title: "Frontend", items: ["React", "HTML5, CSS3", "Адаптивная верстка", "UI-фреймворки и компоненты"] },
                ],
            },
            dataDevops: {
                cards: [
                    { title: "Данные и аналитика", items: ["Pandas, ETL", "CSV / JSON / XLSX", "Агрегации и отчёты", "Аналитика рынка вакансий и финансов"] },
                    { title: "DevOps и качество", items: ["Docker / Docker Compose", "GitHub Actions (CI/CD)", ".env и конфиги окружений", "Unit-тесты, чистая архитектура"] },
                ],
            },
            projects: {
                title: "Избранные проекты",
                note: "Проекты основаны на моих реальных showcase-репозиториях на GitHub.",
            },
            contact: { title: "Контакты" },
        },
        footer: { madeWith: "Сделано на React + Framer Motion" },
    },
};

// IMPORTANT: проверь точные названия репозиториев на GitHub и поправь repo при необходимости
const projects = [
    {
        title: "OnlineLearning",
        text_en: "Online education platform with users, courses and role-based access.",
        text_ru: "Платформа онлайн-обучения: пользователи, курсы, роли и права.",
        tags: ["Django", "DRF", "PostgreSQL"],
        repo: "OnlineLearning",
    },
    {
        title: "Message_AutoSend",
        text_en: "Email campaign management system with scheduling, reporting and logging.",
        text_ru: "Система email-рассылок: расписание, отчёты, логирование.",
        tags: ["Django", "Redis", "Scheduler"],
        repo: "Message_AutoSend",
    },
    {
        title: "AtomicHabits API",
        text_en: "Habit tracking backend with background tasks and notifications.",
        text_ru: "Трекер привычек: фоновые задачи и уведомления.",
        tags: ["Celery", "Redis", "API"],
        repo: "AtomicHabits",
    },
    {
        title: "MyBank",
        text_en: "Financial transactions processing module (imports, conversion, reports).",
        text_ru: "Модуль обработки транзакций (импорт, конвертация, отчёты).",
        tags: ["Python", "Pandas", "Finance"],
        repo: "MyBank",
    },
    {
        title: "ProjectBank",
        text_en: "Bank operations analytics tool with aggregation and reporting.",
        text_ru: "Аналитика банковских операций: агрегации и отчёты.",
        tags: ["Python", "Pandas", "Analytics"],
        repo: "ProjectBank",
    },
    {
        title: "HH_Data",
        text_en: "Job market data collection (hh.ru) with database storage.",
        text_ru: "Сбор данных рынка вакансий (hh.ru) с хранением в БД.",
        tags: ["Parsing", "PostgreSQL", "ETL"],
        repo: "HH_Data",
    },
    {
        title: "HH_Vacancies",
        text_en: "Vacancy analytics and processing based on hh.ru data.",
        text_ru: "Аналитика и обработка вакансий на данных hh.ru.",
        tags: ["Pandas", "Analytics", "Jobs"],
        repo: "HH_Vacanties", // <-- если у тебя репо называется так, оставь; если нет — поправь на точное имя
    },
    {
        title: "ECommerceProject",
        text_en: "Django-based e-commerce backend with products, categories and validation.",
        text_ru: "Backend интернет-магазина на Django: товары, категории, валидация.",
        tags: ["Django", "PostgreSQL", "Admin"],
        repo: "ECommerceProject",
    },
];

function Pill({ children }) {
    return <span className="pill">{children}</span>;
}

function IconLink({ href, icon: Icon, label, value }) {
    return (
        <a className="iconLink" href={href} target={href.startsWith("mailto:") ? "_self" : "_blank"} rel="noreferrer">
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

export default function App() {
    const [lang, setLang] = useState("ru");
    const t = useMemo(() => content[lang], [lang]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="page">
            {/* Background */}
            <div className="bg">
                <div className="blob b1" />
                <div className="blob b2" />
                <div className="gridlines" />
            </div>

            {/* Top bar */}
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
                        <button className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>
                            RU
                        </button>
                        <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
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
                        {projects.map((p, idx) => {
                            const repoUrl = `${GITHUB}/${p.repo}`;
                            const text = lang === "ru" ? p.text_ru : p.text_en;

                            return (
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

                                    <p className="muted">{text}</p>

                                    <div className="tags">
                                        {p.tags.map((x) => (
                                            <span key={x} className="tag">
                        {x}
                      </span>
                                        ))}
                                    </div>

                                    <div className="projectActions">
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
                                <IconLink href={GITHUB} icon={Github} label="GitHub" value="github.com/ScherbAlex" />
                                <IconLink href="https://t.me/Alex_181173" icon={Send} label="Telegram" value="@Alex_181173" />
                                <IconLink href="mailto:alexshcherbyna1173@gmail.com" icon={Mail} label="Email" value="alexshcherbyna1173@gmail.com" />
                            </div>
                        </GlassCard>

                        <GlassCard delay={0.12} title="Links">
                            <div className="links">
                                <a className="link" href={GITHUB} target="_blank" rel="noreferrer">
                                    GitHub Showcase → github.com/ScherbAlex
                                </a>
                                <a className="link" href={`${GITHUB}?tab=repositories`} target="_blank" rel="noreferrer">
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