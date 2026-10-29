import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.png.asset.json";
import logo from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RKBA — Ranthushka Karunathilaka Badminton Academy" },
      { name: "description", content: "Professional badminton training in Sri Lanka. Group and individual coaching by former national players since 2022." },
      { property: "og:title", content: "RKBA — Ranthushka Karunathilaka Badminton Academy" },
      { property: "og:description", content: "Developing skilled, disciplined, confident badminton players for national and international levels." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [["About", "#about"], ["Training", "#training"], ["Coaches", "#coaches"], ["Achievements", "#achievements"]];

const mission = [
  "Professional training under qualified, experienced coaches",
  "Identify and nurture young badminton talent",
  "Develop technical skill, physical fitness and mental strength",
  "Promote discipline, teamwork and sportsmanship",
  "Create opportunities to compete in tournaments",
];

const coaches = [
  { role: "Head Coach", name: "Ranthushka Sasindu", creds: ["South Asian Medalist", "Former National Ranked Player", "BWF Coaching Course – Level 1"] },
  { role: "Assistant Coach", name: "Ramesh Chanaka", creds: ["BWF Disability Coaching – Level 1", "BWF Coaching Course – Level 1", "SLB Coaching Course – Level 1"] },
  { role: "Assistant Coach & Manager", name: "Surani Wickramasinghe", creds: ["NISS & SLB Coaching – Level 1", "Former National Player", "Former Sri Lanka University Team"] },
  { role: "Assistant Coach", name: "Chamindu Shihara", creds: ["SLB Level 01 Completed"] },
];

const players = [
  { name: "Inuki Wijesekara", tag: "U13", wins: ["U13 Girls' Singles & Doubles Champion – Southern Open All-Island 2026", "2nd Runner-Up U13 Singles & Doubles – 73rd National Championship 2025", "U13 Singles & Doubles Champion – Kandy All Island 2025", "2nd Runner-Up U13 Singles – 53rd AVI Junior Nationals 2025"] },
  { name: "Maneth Wijegunawardana", tag: "U19", wins: ["U19 Boys' Singles Champion – Southern Open All-Island 2026", "Member – Asian Junior Championship 2025 (Indonesia)", "1st Runner-Up U19 Singles – PDBA All Island Open 2025", "U19 Boys' Doubles Champion – MBA All Island Open 2025"] },
  { name: "Sithuli Ranasinghe", tag: "U17 / Open", wins: ["2nd Runner-Up Women's Open Singles – 73rd National Championship 2025", "2nd Runner-Up U17 Singles – Sri Lanka Junior International 2025", "Member – Asian Junior Championship 2025 (Indonesia)", "U17 Girls' Singles Champion – PDBA All Island Open 2025"] },
  { name: "Senudi Sohansa", tag: "U19", wins: ["1st Runner-Up U19 Singles – 73rd National Championship 2025", "Most Upcoming Player – AVI Junior Nationals 2025", "2nd Runner-Up U17 Singles – AVI Junior Nationals 2025", "U19 Singles Semi Finalist – NWPA Open 2026"] },
];

function Label({ n, children }: { n: string; children: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-tech text-xs uppercase tracking-[0.3em] text-primary">
      <span>{n}</span><span className="h-px w-12 bg-primary" /><span>{children}</span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="RKBA logo" className="h-11 w-11 rounded-full object-cover" />
            <span className="font-display text-2xl font-extrabold tracking-wide text-primary">RKBA</span>
          </a>
          <nav className="hidden gap-8 font-tech text-sm uppercase tracking-widest md:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="text-muted-foreground transition-colors hover:text-primary">{l}</a>)}
          </nav>
          <a href="#join" className="clip-cut bg-primary px-5 py-2 font-tech text-sm font-bold uppercase tracking-wider text-primary-foreground">Join</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero.url} alt="RKBA player lunging for a shuttle" className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
        <div className="hero-overlay absolute inset-0" />
        <div className="fade-bottom absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40">
          <p className="animate-rise font-tech text-sm uppercase tracking-[0.4em] text-primary">Est. 2022 · Sri Lanka</p>
          <h1 className="animate-rise mt-4 max-w-3xl font-display text-6xl font-extrabold uppercase leading-[0.9] md:text-8xl lg:text-9xl" style={{ animationDelay: "0.1s" }}>
            Train hard.<br /><span className="text-primary">Play fearless.</span>
          </h1>
          <p className="animate-rise mt-6 max-w-lg text-lg text-muted-foreground" style={{ animationDelay: "0.2s" }}>
            Ranthushka Karunathilaka Badminton Academy — building champions for district, national and international courts.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
            <a href="#training" className="clip-cut glow bg-primary px-8 py-4 font-tech font-bold uppercase tracking-wider text-primary-foreground">Start Training</a>
            <a href="#achievements" className="border border-foreground/30 px-8 py-4 font-tech font-bold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary">Our Champions</a>
          </div>
          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-6">
            {[["2022", "Founded"], ["4", "Expert coaches"], ["20+", "Titles & podiums"]].map(([v, l]) => (
              <div key={l}><div className="font-display text-4xl font-extrabold text-primary">{v}</div><div className="font-tech text-xs uppercase tracking-widest text-muted-foreground">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border bg-primary py-4 text-primary-foreground">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-display text-2xl font-extrabold uppercase">
          {Array.from({ length: 2 }).flatMap((_, i) => ["Technique", "Footwork", "Strategy", "Fitness", "Mental Strength", "Discipline", "Sportsmanship"].map((w) => <span key={i + w}>{w} ✦</span>))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="topo relative py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <Label n="01">About</Label>
            <h2 className="font-display text-5xl font-extrabold uppercase leading-none md:text-6xl">Where young talent becomes <span className="text-primary">elite.</span></h2>
            <p className="mt-6 text-muted-foreground">RKBA was established in 2022 to develop talented badminton players and promote the sport among young athletes. Structured programs led by experienced coaches and former national players build technical skill, fitness, discipline and sportsmanship.</p>
            <div className="clip-cut mt-10 border-l-4 border-primary bg-card p-6">
              <div className="font-tech text-xs uppercase tracking-widest text-primary">Vision</div>
              <p className="mt-2 text-lg">To become a leading academy that develops skilled, disciplined and confident players who represent their clubs, schools and country at national and international levels.</p>
            </div>
          </div>
          <div>
            <div className="mb-6 font-tech text-xs uppercase tracking-widest text-primary">Mission</div>
            <ul className="space-y-px">
              {mission.map((m, i) => (
                <li key={m} className="group flex items-center gap-6 border-b border-border py-5 transition-colors hover:bg-card">
                  <span className="font-display text-3xl font-extrabold text-muted-foreground transition-colors group-hover:text-primary">0{i + 1}</span>
                  <span className="text-lg">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Training */}
      <section id="training" className="border-t border-border py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Label n="02">Programs</Label>
          <h2 className="font-display text-5xl font-extrabold uppercase md:text-6xl">Training built for every level</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { t: "Group Training", d: "Practice in a competitive, supportive environment — build teamwork, match experience and consistency.", pts: ["Footwork & technique", "Match strategy", "Fitness conditioning"] },
              { t: "Individual Coaching", d: "One-on-one sessions for advanced technique, tactical improvement and preparation for major tournaments.", pts: ["Personal skill plans", "Tactical analysis", "Tournament preparation"] },
            ].map((p, i) => (
              <div key={p.t} className="clip-cut group relative overflow-hidden bg-card p-10 transition-all hover:-translate-y-1 hover:glow">
                <div className="absolute -right-4 -top-6 font-display text-[9rem] font-extrabold leading-none text-muted transition-colors group-hover:text-primary/15">0{i + 1}</div>
                <h3 className="relative font-display text-4xl font-extrabold uppercase">{p.t}</h3>
                <p className="relative mt-4 text-muted-foreground">{p.d}</p>
                <div className="relative mt-8 flex flex-wrap gap-2">
                  {p.pts.map((x) => <span key={x} className="border border-primary/40 px-3 py-1 font-tech text-xs uppercase tracking-wider text-primary">{x}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section id="coaches" className="topo border-t border-border py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Label n="03">Coaches</Label>
          <h2 className="font-display text-5xl font-extrabold uppercase md:text-6xl">The team behind the wins</h2>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {coaches.map((c) => (
              <div key={c.name} className="group bg-background p-8 transition-colors hover:bg-card">
                <div className="flex h-16 w-16 items-center justify-center bg-primary font-display text-2xl font-extrabold text-primary-foreground">
                  {c.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div className="mt-6 font-tech text-xs uppercase tracking-widest text-primary">{c.role}</div>
                <h3 className="mt-1 font-display text-3xl font-bold uppercase leading-tight">{c.name}</h3>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {c.creds.map((x) => <li key={x} className="flex gap-2"><span className="text-primary">▸</span>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="border-t border-border py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Label n="04">Hall of Fame</Label>
          <h2 className="font-display text-5xl font-extrabold uppercase md:text-6xl">Our <span className="text-primary">champions</span></h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {players.map((p) => (
              <div key={p.name} className="clip-cut border border-border bg-card p-8 transition-colors hover:border-primary">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl font-extrabold uppercase">{p.name}</h3>
                  <span className="shrink-0 bg-primary px-3 py-1 font-tech text-xs font-bold text-primary-foreground">{p.tag}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.wins.map((w) => <li key={w} className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />{w}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="topo relative overflow-hidden border-t border-border bg-card py-28 text-center">
        <img src={logo.url} alt="" className="mx-auto h-28 w-28 rounded-full object-cover glow" />
        <h2 className="mx-auto mt-8 max-w-3xl px-6 font-display text-5xl font-extrabold uppercase leading-none md:text-7xl">Ready to step on <span className="text-primary">court?</span></h2>
        <p className="mx-auto mt-6 max-w-md px-6 text-muted-foreground">Join group sessions or book individual coaching with RKBA today.</p>
        <a href="#top" className="clip-cut glow mt-10 inline-block bg-primary px-10 py-4 font-tech font-bold uppercase tracking-wider text-primary-foreground">Get in touch</a>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 font-tech text-xs uppercase tracking-widest text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Ranthushka Karunathilaka Badminton Academy</span>
          <span className="text-primary">Train · Compete · Excel</span>
        </div>
      </footer>
    </div>
  );
}
