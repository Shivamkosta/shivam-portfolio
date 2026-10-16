import { education, jobs, profile, skillGroups } from "../content";
import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <>
      <div className="atmosphere" aria-hidden="true" />
      <div className="rail" aria-hidden="true" />
      <main>
        <header className="header">
          <div className="topbar">
            <span className="label">{profile.cluster}</span>
            <nav>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </nav>
          </div>
          <div className="status-row">
            <span className="live-pill">
              <span className="status-dot" aria-hidden="true" />
              <span className="pill-label">control plane</span>
            </span>
            <span className="label">{profile.company} {profile.circle}</span>
          </div>
          <h1>{profile.name}</h1>
          <p className="role">
            <span
              className="type-line"
              style={{ ["--chars" as string]: profile.title.length }}
            >
              {profile.title}
            </span>
            <span className="caret" aria-hidden="true" />
          </p>
          <ul className="runtime">
            {profile.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </header>

        <section className="summary-panel" data-block="spec">
          <p className="label">spec</p>
          <p className="summary">{profile.spec}</p>
        </section>

        <section data-block="experience">
          <h2 className="label">svc / experience</h2>
          <ol className="jobs">
            {jobs.map((job) => (
              <li className="job" key={job.company + job.dates}>
                <div className="job-head">
                  <span className={`status ${job.status}`}>
                    <span className="status-dot" aria-hidden="true" />
                    {job.status}
                  </span>
                  <span className="dates">{job.dates}</span>
                </div>
                <h3>{job.title}</h3>
                <p className="company">{job.company}</p>
                {job.detail ? <p className="detail">{job.detail}</p> : null}
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="tech">Technologies: {job.tech.join(", ")}</p>
              </li>
            ))}
          </ol>
        </section>

        <section data-block="skills">
          <h2 className="label">svc / skills</h2>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.name}>
                <h3>{group.name}</h3>
                <ul className="tags">
                  {group.items.map((item) => (
                    <li className="tag" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section data-block="education">
          <h2 className="label">svc / education</h2>
          <ul className="education">
            {education.map((item) => (
              <li key={item.degree}>
                <span>{item.degree}</span>
                <span className="school">{item.school}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <ThemeToggle />
    </>
  );
}
