import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PHONE, PHONE_LABEL } from "@/lib/academy-contact";
import hero from "@/assets/hero.png.asset.json";
import logo from "@/assets/logo.png.asset.json";
import court1 from "@/assets/court1.jpg";
import court2 from "@/assets/court2.jpg";
import court3 from "@/assets/court3.jpg";
import court4 from "@/assets/court4.jpg";
import collab1 from "@/assets/collab1.jpg";
import collab2 from "@/assets/collab2.jpg";
import collabVideo from "@/assets/collab-partnership.mp4.asset.json";
import collabVideoPoster from "@/assets/collab-partnership-poster.jpg.asset.json";
import podcast from "@/assets/podcast-episode-1.jpg.asset.json";
import awuruduTiktok from "@/assets/awurudu-tiktok.mp4.asset.json";
import tiktok1 from "@/assets/tiktok-1.mp4.asset.json";
import tiktok2 from "@/assets/tiktok-2.mp4.asset.json";
import tiktok3 from "@/assets/tiktok-3.mp4.asset.json";
import tiktok4 from "@/assets/tiktok-4.mp4.asset.json";
import tiktokPoster1 from "@/assets/tiktok-poster-1.jpg.asset.json";
import tiktokPoster2 from "@/assets/tiktok-poster-2.jpg.asset.json";
import tiktokPoster3 from "@/assets/tiktok-poster-3.jpg.asset.json";
import tiktokPoster4 from "@/assets/tiktok-poster-4.jpg.asset.json";
import congrats1 from "@/assets/congrats-1.jpg.asset.json";
import congrats2 from "@/assets/congrats-2.jpg.asset.json";
import congrats3 from "@/assets/congrats-3.jpg.asset.json";
import congrats4 from "@/assets/congrats-4.jpg.asset.json";
import congrats5 from "@/assets/congrats-5.jpg.asset.json";
import congrats6 from "@/assets/congrats-6.jpg.asset.json";
import congrats7 from "@/assets/congrats-7.jpg.asset.json";
import congrats8 from "@/assets/congrats-8.jpg.asset.json";
import congrats9 from "@/assets/congrats-9.jpg.asset.json";
import congrats10 from "@/assets/congrats-10.jpg.asset.json";
import congrats11 from "@/assets/congrats-11.jpg.asset.json";
import congrats12 from "@/assets/congrats-12.jpg.asset.json";
import congrats13 from "@/assets/congrats-13.jpg.asset.json";
import congrats14 from "@/assets/congrats-14.jpg.asset.json";
import congrats15 from "@/assets/congrats-15.jpg.asset.json";
import congrats16 from "@/assets/congrats-16.jpg.asset.json";
import congrats17 from "@/assets/congrats-17.jpg.asset.json";
import congrats18 from "@/assets/congrats-18.jpg.asset.json";
import congrats19 from "@/assets/congrats-19.jpg.asset.json";
import congrats20 from "@/assets/congrats-20.jpg.asset.json";
import congrats21 from "@/assets/congrats-21.jpg.asset.json";
import congrats22 from "@/assets/congrats-22.jpg.asset.json";
import congrats23 from "@/assets/congrats-23.jpg.asset.json";
import congrats24 from "@/assets/congrats-24.jpg.asset.json";
import congrats25 from "@/assets/congrats-25.jpg.asset.json";
import congrats26 from "@/assets/congrats-26.jpg.asset.json";
import congrats27 from "@/assets/congrats-27.jpg.asset.json";
import newyear1 from "@/assets/newyear-01.jpg.asset.json";
import newyear2 from "@/assets/newyear-02.jpg.asset.json";
import newyear3 from "@/assets/newyear-03.jpg.asset.json";
import newyear4 from "@/assets/newyear-04.jpg.asset.json";
import newyear5 from "@/assets/newyear-05.jpg.asset.json";
import newyear6 from "@/assets/newyear-06.jpg.asset.json";
import newyear7 from "@/assets/newyear-07.jpg.asset.json";
import newyear8 from "@/assets/newyear-08.jpg.asset.json";
import newyear9 from "@/assets/newyear-09.jpg.asset.json";
import newyear10 from "@/assets/newyear-10.jpg.asset.json";
import newyear11 from "@/assets/newyear-11.jpg.asset.json";
import newyear12 from "@/assets/newyear-12.jpg.asset.json";
import newyear13 from "@/assets/newyear-13.jpg.asset.json";
import newyear14 from "@/assets/newyear-14.jpg.asset.json";
import newyear15 from "@/assets/newyear-15.jpg.asset.json";
import newyear16 from "@/assets/newyear-16.jpg.asset.json";
import newyear17 from "@/assets/newyear-17.jpg.asset.json";
import rdsCampCover from "@/assets/rds-camp-cover.jpg.asset.json";
import rdsCamp1 from "@/assets/rds-camp-01.jpg.asset.json";
import rdsCamp2 from "@/assets/rds-camp-02.jpg.asset.json";
import rdsCamp3 from "@/assets/rds-camp-03.jpg.asset.json";
import rdsCamp4 from "@/assets/rds-camp-04.jpg.asset.json";
import rdsCamp5 from "@/assets/rds-camp-05.jpg.asset.json";
import rdsCamp6 from "@/assets/rds-camp-06.jpg.asset.json";
import rdsCamp7 from "@/assets/rds-camp-07.jpg.asset.json";
import rdsCamp8 from "@/assets/rds-camp-08.jpg.asset.json";
import rdsCamp9 from "@/assets/rds-camp-09.jpg.asset.json";

// TODO: replace with the academy's real profile links
const socials = {
  tiktok: "https://www.tiktok.com/",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
};

function TikTokIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.6a2.9 2.9 0 1 1-2-2.7V9.4a6.3 6.3 0 1 0 5.4 6.2V8.7a8.2 8.2 0 0 0 3.8 1.2V6.7z"/></svg>;
}
function InstaIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>;
}
function FbIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M14 8V6c0-.9.6-1 1-1h3V1h-4c-3.3 0-4 2.4-4 4v3H7v4h3v11h4V12h3.3l.7-4z"/></svg>;
}
function Socials({ size = "h-10 w-10" }: { size?: string }) {
  const items = [["TikTok", socials.tiktok, <TikTokIcon key="t" />], ["Instagram", socials.instagram, <InstaIcon key="i" />], ["Facebook", socials.facebook, <FbIcon key="f" />]] as const;
  return (
    <div className="flex gap-3">
      {items.map(([l, h, icon]) => (
        <a key={l} href={h} target="_blank" rel="noreferrer" aria-label={l} className={`${size} hover-action flex items-center justify-center border border-border text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground`}>{icon}</a>
      ))}
    </div>
  );
}

// Congratulations posts (add new images here as they're shared on social media)
const congrats: { img: string; caption: string }[] = [
  { img: congrats24.url, caption: "Sithuli Ranasinghe – Open Women's Singles Champion, Kandy All Island Open 2026" },
  { img: congrats25.url, caption: "Yenadi Yuhansa Silva & Methuli Mendis – U19 Girls' Doubles Runners-Up & Women's Doubles Semi-Finalists, Kandy All Island Open 2026" },
  { img: congrats26.url, caption: "Wedhaka Gomes – U19 Boys' Singles Runner-Up, Kandy All Island Open 2026" },
  { img: congrats27.url, caption: "Inuki Sihathna Wijesekara – U13 Girls' Singles Champion & U13 Girls' Doubles 2nd Runner-Up, Kandy All Island Open 2026" },
  { img: congrats1.url, caption: "Congratulations!" },
  { img: congrats2.url, caption: "Congratulations!" },
  { img: congrats3.url, caption: "Congratulations!" },
  { img: congrats4.url, caption: "Congratulations!" },
  { img: congrats5.url, caption: "Congratulations!" },
  { img: congrats6.url, caption: "Congratulations!" },
  { img: congrats7.url, caption: "Congratulations!" },
  { img: congrats8.url, caption: "Congratulations!" },
  { img: congrats9.url, caption: "Congratulations!" },
  { img: congrats10.url, caption: "Congratulations!" },
  { img: congrats11.url, caption: "Inuki Wijesekara – U13 Girls Singles Champion, North Central Province All Island Open 2026" },
  { img: congrats12.url, caption: "Inuki Wijesekara – U13 Singles 2nd Runner-up & Doubles Champions, MBA All Island Open 2026" },
  { img: congrats13.url, caption: "Inuki Wijesekara – U13 Singles 2nd Runner-up & Doubles 1st Runner-up, NWPBA Open 2026" },
  { img: congrats14.url, caption: "Senudi Sohansa – U19 Girls' Singles Semi-Finalist, NWPA Open Championship 2026" },
  { img: congrats15.url, caption: "Inuki Wijesekara – U13 Girls' Singles & Doubles 2nd Runner-Up, 73rd National Badminton Championship 2025" },
  { img: congrats16.url, caption: "Sithuli Ranasinghe – Women's Open Singles 2nd Runner-Up, 73rd National Badminton Championship 2025" },
  { img: congrats17.url, caption: "Hiruka Sahanmith – U19 Boys' Singles 1st Runner-Up, 73rd National Badminton Championship 2025" },
  { img: congrats18.url, caption: "Senudi – U19 Girls' Singles 1st Runner-Up, 73rd National Badminton Championship 2025" },
  { img: congrats19.url, caption: "Maneth Wijegunawardana – U19 Boys' Singles 2nd Runner-Up, Kandy All Island Badminton Championship 2025" },
  { img: congrats20.url, caption: "Inuki Wijesekara – U13 Girls' Singles & Doubles Champion, Kandy All Island Badminton Championship 2025" },
  { img: congrats21.url, caption: "Wedhaka Gomes – U17 Boys' Singles 2nd Runner-Up & Doubles 1st Runner-Up, 53rd AVI Junior National Championship Finals 2025" },
  { img: congrats22.url, caption: "Senudi Sohansa – U17 Girls' Singles 2nd Runner-Up & Most Upcoming Player, 53rd AVI Junior National Championship Finals 2025" },
  { img: congrats23.url, caption: "Inuki Wijesekara – U13 Girls' Singles 2nd Runner-Up, 53rd AVI Junior National Championship Finals 2025" },
];

const rdsCampPhotos = [rdsCamp1.url, rdsCamp2.url, rdsCamp3.url, rdsCamp4.url, rdsCamp5.url, rdsCamp6.url, rdsCamp7.url, rdsCamp8.url, rdsCamp9.url];
const newyearPhotos = [
  newyear1.url, newyear2.url, newyear3.url, newyear4.url, newyear5.url,
  newyear6.url, newyear7.url, newyear8.url, newyear9.url, newyear10.url,
  newyear11.url, newyear12.url, newyear13.url, newyear14.url, newyear15.url,
  newyear16.url, newyear17.url,
];

const events: { date: string; title: string; place: string; img: string; desc: string; photos?: string[]; video?: string; cover?: string }[] = [
  { date: "Apr 2026", title: "සිංහල අලුත් අවුරුදු උත්සවය 2026", place: "RKBA Family Day", img: newyear1.url, desc: "Traditional games, fun and celebration with our players, parents and coaches — a true Sri Lanka New Year festival.", photos: newyearPhotos },
  { date: "Apr 2026", title: "Awurudu 2026 on TikTok", place: "RKBA Family Day", img: "", desc: "Relive the fun of our Sinhala New Year celebration.", video: awuruduTiktok.url },
  { date: "15 Jan 2026", title: "RDS & RKBA Badminton Collaboration Coaching Camp", place: "SRS Sport Complex, Galle", img: rdsCampCover.url, cover: rdsCampCover.url, desc: "A joint coaching camp by RDS Shuttle Sprint Badminton Academy and RKBA, headed by Olympian Niluka Karunaratne with the OLY Niluka Karunaratne Foundation.", photos: [rdsCampCover.url, ...rdsCampPhotos] },
];

const tiktoks = [
  { title: "Training session", src: tiktok1.url, poster: tiktokPoster1.url },
  { title: "On court drills", src: tiktok2.url, poster: tiktokPoster2.url },
  { title: "Match practice", src: tiktok3.url, poster: tiktokPoster3.url },
  { title: "Academy moments", src: tiktok4.url, poster: tiktokPoster4.url },
];

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

const nav = [["About", "#about"], ["Training", "#training"], ["Coaches", "#coaches"], ["Champions", "#achievements"], ["Events", "#events"], ["Partners", "#collab"]];

const mission = [
  "Professional training under qualified, experienced coaches",
  "Identify and nurture young badminton talent",
  "Develop technical skill, physical fitness and mental strength",
  "Promote discipline, teamwork and sportsmanship",
  "Create opportunities to compete in tournaments",
];

const coaches = [
  { img: "", role: "Head Coach", name: "Ranthushka Sasindu", creds: ["South Asian Medalist", "Former National Ranked Player", "BWF Coaching Course – Level 1"] },
  { img: "", role: "Assistant Coach", name: "Ramesh Chanaka", creds: ["BWF Disability Coaching – Level 1", "BWF Coaching Course – Level 1", "SLB Coaching Course – Level 1"] },
  { img: "", role: "Assistant Coach & Manager", name: "Surani Wickramasinghe", creds: ["NISS & SLB Coaching – Level 1", "Former National Player", "Former Sri Lanka University Team"] },
  { img: "", role: "Assistant Coach", name: "Chamindu Shihara", creds: ["SLB Level 01 Completed"] },
];

const players = [
  {
    name: "Inuki Wijesekara", tag: "U13", wins: [
      "Under-13 Girls' Singles & Doubles Champion – Premasiri Halambage Memorial Southern Open All-Island Level 01 Badminton Championship 2026",
      "Under-13 Singles 2nd Runner-Up & Doubles 1st Runner-Up – NWPBA Open Level 01 Badminton Championship 2026",
      "2nd Runner-Up – Under-13 Singles & Doubles, 73rd National Badminton Championship 2025",
      "Under-13 Girls' Singles & Doubles Champion – Kandy All Island Badminton Championship 2025",
      "2nd Runner-Up – Under-13 Girls' Singles, 53rd AVI Junior National Championship Finals 2025",
    ],
  },
  {
    name: "Maneth Wijegunawardana", tag: "U19", wins: [
      "Under-19 Boys' Singles Champion – Premasiri Halambage Memorial Southern Open All-Island Level 01 Badminton Championship 2026",
      "Member – Asian Junior Badminton Championship 2025 (Indonesia)",
      "1st Runner-Up – Under-19 Boys' Singles, PDBA All Island Open Badminton Championship 2025",
      "Under-19 Boys' Doubles Champion – MBA All Island Open Championship 2025",
      "2nd Runner-Up – Under-19 Boys' Singles, Summer Season Open Championship 2025",
    ],
  },
  {
    name: "Sithuli Ranasinghe", tag: "U17 / Open", wins: [
      "2nd Runner-Up – Women's Open Singles, 73rd National Badminton Championship 2025",
      "Under-17 Girls' Singles 2nd Runner-Up – Sri Lanka Junior International Series 2025",
      "Member – Asian Junior Badminton Championship 2025 (Indonesia)",
      "Member – U17 Selection Trials for Asian Youth Games 2025 (Bahrain)",
      "Under-17 Girls' Singles Champion – PDBA All Island Open Championship 2025",
    ],
  },
  {
    name: "Senudi Sohansa", tag: "U17 / U19", wins: [
      "Under-19 Girls' Singles Semi-Finalist – NWPA Open Championship 2026",
      "1st Runner-Up – Under-19 Girls' Singles, 73rd National Badminton Championship 2025",
      "Under-17 Girls' Singles 2nd Runner-Up – AVI Junior National Championship Finals 2025",
      "Most Upcoming Player of the Tournament – AVI Junior National Championship Finals 2025",
      "Under-19 Girls' Singles 2nd Runner-Up – North Central Province All Island Championship 2025",
    ],
  },
  {
    name: "Wedhaka Gomes", tag: "U17 / U19", wins: [
      "Under-17 Boys' Singles 2nd Runner-Up & Doubles 1st Runner-Up – AVI Junior National Championship Finals 2025",
      "Under-17 Boys' Singles Champion – Western Province All Island Open Championship 2025",
      "Runner-Up – Sri Lanka Schools Badminton Association Under-19 Championship 2025",
      "Under-17 Boys' Champion – Summer Season Open Championship 2025",
      "1st Runner-Up – Under-17 Boys' Singles, SPBA All Island Open Championship 2025",
      "1st Runner-Up – Under-17 Boys' Singles, EPBA All Island Badminton Championship 2025",
    ],
  },
  {
    name: "Hiruka Sahanmith", tag: "U19 / Open", wins: [
      "1st Runner-Up – Under-19 Boys' Singles, 73rd National Badminton Championship 2025",
      "Under-19 Boys' Singles 2nd Runner-Up – PDBA All Island Open Badminton Championship 2025",
      "Champion – Summer Season 2025 Open Men's Singles",
      "1st Runner-Up – Under-19 Boys' Singles, SPBA All Island Open Badminton Championship 2025",
    ],
  },
];

function Label({ n, children }: { n: string; children: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-tech text-xs uppercase tracking-[0.3em] text-primary">
      <span>{n}</span><span className="section-label-line h-px w-12 bg-primary transition-all duration-300" /><span>{children}</span>
    </div>
  );
}

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" className="relative h-5 w-5" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>;
}

function useScrollFx() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    // Observe individual cards, not tall grids that can enter long before a card is visible.
    const els = document.querySelectorAll<HTMLElement>("section:not(#top) .hover-card, section:not(#top) h2, section:not(#top) > div > p, #about > div > div");
    els.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { e.target.classList.toggle("reveal-in", e.isIntersecting); }),
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));

    // Lazy-load videos: only play when visible in viewport
    const videoObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        const video = e.target as HTMLVideoElement;
        if (e.isIntersecting) {
          if (video.src !== video.dataset.src && video.dataset.src) {
            video.src = video.dataset.src;
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }),
      { threshold: 0.1 },
    );
    document.querySelectorAll<HTMLVideoElement>("video[data-lazy]").forEach((v) => videoObserver.observe(v));

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      videoObserver.disconnect();
      els.forEach((el) => el.classList.remove("reveal", "reveal-in"));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return progress;
}

function Index() {
  const progress = useScrollFx();
  const [gallery, setGallery] = useState<{ title: string; photos: string[] } | null>(null);
  const [gi, setGi] = useState(0);

  useEffect(() => {
    if (!gallery) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGallery(null);
      if (e.key === "ArrowRight") setGi((i) => Math.min(i + 1, gallery.photos.length - 1));
      if (e.key === "ArrowLeft") setGi((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [gallery]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed left-0 top-0 z-[60] h-0.5 bg-primary" style={{ width: `${progress * 100}%` }} />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 py-2.5 sm:py-3">
          {/* Left: Logo */}
          <div className="flex flex-1 items-center justify-start">
            <a href="#top" className="shrink-0 flex items-center gap-3">
              <img src={logo.url} alt="RKBA logo" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" />
            </a>
          </div>

          {/* Center: Desktop Navigation Bar */}
          <nav className="hidden xl:flex items-center justify-center gap-7 font-tech text-xs uppercase tracking-widest">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="hover-nav text-muted-foreground hover:text-primary transition-colors py-1">
                {l}
              </a>
            ))}
          </nav>

          {/* Right: Academy Brand Title */}
          <div className="flex flex-1 items-center justify-end">
            <a href="#top" className="text-right font-display font-extrabold uppercase leading-none tracking-wide text-primary">
              <span className="block text-sm sm:text-lg xl:text-xl">Ranthushka Karunathilaka</span>
              <span className="block font-tech text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-foreground">Badminton Academy</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation: Centered on phones and small tablets */}
        <nav className="flex items-center justify-center gap-3.5 sm:gap-6 overflow-x-auto border-t border-border/50 px-4 py-2 font-tech text-[11px] sm:text-xs uppercase tracking-widest xl:hidden scrollbar-none">
          {nav.map(([l, h]) => (
            <a key={h} href={h} className="hover-nav shrink-0 text-muted-foreground hover:text-primary py-0.5">
              {l}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero.url} alt="RKBA player lunging for a shuttle" className="animate-kenburns absolute inset-0 h-full w-full object-cover object-[42%_center] md:object-[70%_center]" />
        <div className="hero-overlay absolute inset-0" />
        <div className="fade-bottom absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[15, 35, 60, 80].map((l, i) => <span key={l} className="animate-float absolute bottom-0 h-1 w-1 rounded-full bg-primary" style={{ left: `${l}%`, animationDelay: `${i * 1.7}s` }} />)}
        </div>
        <div className="absolute right-4 sm:right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex">
          <span className="font-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground [writing-mode:vertical-rl]">Follow us</span>
          <div className="[&>div]:flex-col"><Socials /></div>
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 pb-16 pt-32 sm:pb-24 sm:pt-40">
          <p className="animate-rise font-tech text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-primary">Est. 2022 · Sri Lanka</p>
          <h1 className="animate-rise mt-3 sm:mt-4 max-w-3xl font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase leading-[0.92] sm:leading-[0.9]" style={{ animationDelay: "0.1s" }}>
            Train hard.<br /><span className="text-primary">Play fearless.</span>
          </h1>
          <p className="animate-rise mt-4 sm:mt-6 max-w-lg text-base sm:text-lg text-muted-foreground" style={{ animationDelay: "0.2s" }}>
            Ranthushka Karunathilaka Badminton Academy — building champions for district, national and international courts.
          </p>
          <div className="animate-rise mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4" style={{ animationDelay: "0.3s" }}>
            <a href="#training" className="hover-action clip-cut glow bg-primary px-6 sm:px-8 py-3.5 sm:py-4 text-center font-tech font-bold uppercase tracking-wider text-primary-foreground">Start Training</a>
            <a href="#achievements" className="hover-action border border-foreground/30 px-6 sm:px-8 py-3.5 sm:py-4 text-center font-tech font-bold uppercase tracking-wider hover:border-primary hover:text-primary">Our Champions</a>
          </div>
          <div className="mt-12 sm:mt-16 grid max-w-2xl grid-cols-3 gap-3 sm:gap-6 border-t border-border pt-5 sm:pt-6">
            {[["2022", "Founded"], ["4", "Expert coaches"], ["20+", "Titles & podiums"]].map(([v, l]) => (
              <div key={l}><div className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">{v}</div><div className="font-tech text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{l}</div></div>
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
      <section id="about" className="topo relative py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 sm:gap-16 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Label n="01">About</Label>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight sm:leading-none">Where young talent becomes <span className="text-primary">elite.</span></h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground">RKBA was established in 2022 to develop talented badminton players and promote the sport among young athletes. Structured programs led by experienced coaches and former national players build technical skill, fitness, discipline and sportsmanship.</p>
            <div className="clip-cut hover-vision mt-8 sm:mt-10 border-l-4 border-primary bg-card p-4 sm:p-6">
              <div className="font-tech text-xs uppercase tracking-widest text-primary">Vision</div>
              <p className="mt-2 text-base sm:text-lg">To become a leading academy that develops skilled, disciplined and confident players who represent their clubs, schools and country at national and international levels.</p>
            </div>
          </div>
          <div>
            <div className="mb-4 sm:mb-6 font-tech text-xs uppercase tracking-widest text-primary">Mission</div>
            <ul className="space-y-px">
              {mission.map((m, i) => (
                <li key={m} className="hover-mission group flex items-center gap-4 sm:gap-6 border-b border-border py-4 sm:py-5">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-primary">0{i + 1}</span>
                  <span className="text-base sm:text-lg transition-colors group-hover:text-foreground">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Training */}
      <section id="training" className="border-t border-border py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Label n="02">Programs</Label>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase">Training built for every level</h2>
          <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-2">
            {[
              { t: "Group Training", d: "Practice in a competitive, supportive environment — build teamwork, match experience and consistency.", pts: ["Footwork & technique", "Match strategy", "Fitness conditioning"] },
              { t: "Individual Coaching", d: "One-on-one sessions for advanced technique, tactical improvement and preparation for major tournaments.", pts: ["Personal skill plans", "Tactical analysis", "Tournament preparation"] },
            ].map((p, i) => (
              <div key={p.t} className="hover-card clip-cut group relative overflow-hidden bg-card p-6 sm:p-8 lg:p-10">
                <div className="absolute -right-3 -top-5 sm:-right-4 sm:-top-6 font-display text-[6rem] sm:text-[8rem] lg:text-[9rem] font-extrabold leading-none text-muted transition-all duration-500 group-hover:text-primary/20 group-hover:scale-110 group-hover:-translate-y-2">0{i + 1}</div>
                <div className="absolute inset-x-0 bottom-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                <h3 className="relative font-display text-2xl sm:text-4xl font-extrabold uppercase">{p.t}</h3>
                <p className="relative mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{p.d}</p>
                <div className="relative mt-6 sm:mt-8 flex flex-wrap gap-2">
                  {p.pts.map((x) => <span key={x} className="border border-primary/40 px-2.5 sm:px-3 py-1 font-tech text-[10px] sm:text-xs uppercase tracking-wider text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">{x}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section id="coaches" className="topo border-t border-border py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Label n="03">Coaches</Label>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase">The team behind the wins</h2>
          <div className="mt-10 sm:mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {coaches.map((c) => (
              <div key={c.name} className="hover-card group bg-background p-4 sm:p-6 hover:bg-card">
                <div className="relative aspect-[4/5] overflow-hidden bg-card">
                  {c.img ? (
                    <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  ) : (
                    <div className="topo flex h-full w-full items-center justify-center font-display text-6xl sm:text-7xl font-extrabold text-primary/80 transition-all duration-500 group-hover:text-primary group-hover:scale-110">
                      {c.name.split(" ").map((w) => w[0]).join("")}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </div>
                <div className="mt-5 sm:mt-6 font-tech text-xs uppercase tracking-widest text-primary">{c.role}</div>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold uppercase leading-tight">{c.name}</h3>
                <ul className="mt-4 sm:mt-5 space-y-2 text-xs sm:text-sm text-muted-foreground">
                  {c.creds.map((x) => <li key={x} className="flex gap-2 transition-all duration-200 group-hover:translate-x-1"><span className="text-primary">▸</span>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="border-t border-border py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Label n="04">Hall of Fame</Label>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase">Our <span className="text-primary">champions</span></h2>
          <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-2">
            {players.map((p) => (
              <div key={p.name} className="hover-card clip-cut group border border-border bg-card p-5 sm:p-6 lg:p-8">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <h3 className="min-w-0 break-words font-display text-2xl sm:text-3xl font-extrabold uppercase">{p.name}</h3>
                  <span className="shrink-0 bg-primary px-2.5 sm:px-3 py-1 font-tech text-[10px] sm:text-xs font-bold text-primary-foreground transition-all duration-300 group-hover:shadow-[0_0_12px_var(--primary)]">{p.tag}</span>
                </div>
                <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
                  {p.wins.map((w) => <li key={w} className="flex gap-2.5 sm:gap-3 text-xs sm:text-sm text-muted-foreground transition-all duration-200 group-hover:text-foreground/80"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_6px_var(--primary)]" />{w}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20">
            <div className="flex flex-wrap items-end justify-between gap-3 sm:gap-4">
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase">Congratulations <span className="text-primary">wall</span></h3>
              <a href={socials.instagram} target="_blank" rel="noreferrer" className="font-tech text-xs uppercase tracking-widest text-primary hover:underline">See more on Instagram →</a>
            </div>
            <div className="congrats-strip mt-6 sm:mt-8 overflow-hidden border-y border-border py-4 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
              <div className="animate-congrats flex w-max gap-3 sm:gap-4 pr-4 hover:[animation-play-state:paused]">
                {[...congrats, ...congrats].map((c, i) => (
                  <figure key={`${c.img}-${i}`} className="hover-card group shrink-0 overflow-hidden border border-border bg-card">
                    <img src={c.img} alt={c.caption} loading="lazy" className="h-60 sm:h-72 md:h-80 w-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="topo border-t border-border py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Label n="05">Events</Label>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase">Events by <span className="text-primary">RKBA</span></h2>
          <div className="mt-10 sm:mt-14 grid items-stretch gap-6 md:grid-cols-3">
            {events.map((e) => (
              <article
                key={e.title}
                onClick={() => { if (!e.photos) return; setGallery({ title: e.title, photos: e.photos }); setGi(0); }}
                className={`hover-card clip-cut group flex min-w-0 flex-col overflow-hidden border border-border bg-card${e.photos ? " cursor-pointer" : ""}`}
              >
                <div className="relative aspect-[9/16] shrink-0 overflow-hidden bg-background">
                  {e.cover ? (
                    <img src={e.cover} alt={e.title} loading="lazy" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" />
                  ) : e.photos && e.photos.length >= 3 ? (
                    <div className="grid h-full grid-rows-3 gap-1">
                      {e.photos.slice(0, 3).map((p, i) => (
                        <img key={p} src={p} alt={`${e.title} — photo ${i + 1}`} loading="lazy" className="h-full min-h-0 w-full object-contain transition-transform duration-700 group-hover:scale-105" />
                      ))}
                    </div>
                  ) : e.video ? (
                    <video data-lazy data-src={e.video} aria-label={e.title} muted loop playsInline controls preload="none" className="h-full w-full object-contain" />
                  ) : (
                    <img src={e.img} alt={e.title} loading="lazy" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" />
                  )}
                  {e.photos && (
                    <div className="absolute right-3 top-3 flex items-center gap-1.5 bg-background/80 px-2.5 sm:px-3 py-1 sm:py-1.5 font-tech text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M9 3l-1.5 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.5L15 3H9zm3 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
                      {e.photos.length} photos
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </div>
                <div className="min-h-56 sm:min-h-64 flex-1 p-4 sm:p-6">
                  <div className="font-tech text-xs uppercase tracking-widest text-primary">{e.date} · {e.place}</div>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-extrabold uppercase leading-tight">{e.title}</h3>
                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">{e.desc}</p>
                  {e.photos && (
                    <span className="mt-4 inline-flex items-center gap-2 font-tech text-xs font-bold uppercase tracking-widest text-primary">
                      View gallery
                      <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Shuttle collaboration */}
      <section id="collab" className="border-t border-border py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Label n="06">Collaboration</Label>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase">RKBA <span className="text-primary">×</span> Elite Shuttle</h2>
          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base text-muted-foreground">A special collaboration between RKBA and Elite Shuttle — joint training sessions, friendly matches, media days and a podcast episode celebrating both academies.</p>

          {/* Podcast feature */}
          <div className="hover-card clip-cut mt-10 sm:mt-14 grid overflow-hidden border border-border bg-card md:grid-cols-2">
            <div className="group overflow-hidden">
              <img src={podcast.url} alt="The Badminton Podcast — Episode 01, RKBA x EliteShuttler thumbnail" loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
              <div className="font-tech text-xs uppercase tracking-widest text-primary">Eliteshuttler Podcast · Episode 01</div>
              <h3 className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight">The RKBA × Elite Shuttle Podcast</h3>
              <p className="mt-3 sm:mt-4 font-tech text-xs text-primary">12 October 2026</p>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">Brian Gomez, co-founder of Eliteshuttler, sits down with Ranthushka Karunathilaka — a former Sri Lankan national champion and ranked international badminton player, now coaching the next generation.</p>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">From challenges on court to lessons beyond it, Ranthushka shares his journey, his perspective on the game, and why everyone should give badminton a try — and how it can change our lives.</p>
              <a href="https://youtu.be/9mA8gtlc2wo?si=otW1WHZ-sCDxgSdV" target="_blank" rel="noreferrer" className="hover-action clip-cut glow mt-6 sm:mt-8 inline-flex w-fit items-center gap-2 bg-primary px-5 sm:px-6 py-3 font-tech text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M8 5v14l11-7z" /></svg> Watch the episode
              </a>
            </div>
          </div>

          {/* Videos + photos */}
          <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="hover-card clip-cut group relative overflow-hidden border border-border bg-card">
              <video data-lazy data-src={collabVideo.url} poster={collabVideoPoster.url} muted loop playsInline preload="none" className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="fade-bottom pointer-events-none absolute inset-0" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="font-tech text-xs uppercase tracking-widest text-primary">Partnership day</div>
                <div className="font-tech text-xs sm:text-sm font-semibold uppercase">RKBA × Elite Shuttle</div>
              </div>
            </article>
            {[
              { img: collab2, title: "Friendly match highlights", video: true },
              { img: collab1, title: "Joint training session", video: true },
              { img: collab1, title: "Media day & team photos", video: false },
            ].map((c) => (
              <article key={c.title} className="hover-card clip-cut group relative overflow-hidden border border-border bg-card">
                <img src={c.img} alt={c.title} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${c.video ? "aspect-[3/4]" : "aspect-[3/4]"}`} />
                <div className="fade-bottom absolute inset-0" />
                {c.video && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="glow flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                      <svg viewBox="0 0 24 24" className="ml-1 h-4 w-4 sm:h-5 sm:w-5" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 font-tech text-xs sm:text-sm font-semibold uppercase">{c.title}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TikTok */}
      <section id="tiktok" className="border-t border-border py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
            <div>
              <Label n="07">On TikTok</Label>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase">Watch us <span className="text-primary">train</span></h2>
            </div>
            <a href={socials.tiktok} target="_blank" rel="noreferrer" className="hover-action clip-cut flex items-center gap-2 bg-primary px-5 sm:px-6 py-2.5 sm:py-3 font-tech text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground"><TikTokIcon /> Follow on TikTok</a>
          </div>
          <div className="mt-10 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {tiktoks.map((v) => (
              <div
                key={v.title}
                className="hover-card group relative block aspect-[9/16] overflow-hidden border border-border"
              >
                <video
                  data-lazy
                  data-src={v.src}
                  poster={v.poster}
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="fade-bottom pointer-events-none absolute inset-0" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <div className="font-tech text-xs sm:text-sm font-semibold uppercase transition-all duration-300 group-hover:translate-y-[-4px] group-hover:text-primary">{v.title}</div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
          <p className="mt-6 text-center font-tech text-xs uppercase tracking-widest text-muted-foreground">More on our TikTok</p>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="topo relative overflow-hidden border-t border-border bg-card py-16 sm:py-24 lg:py-28 text-center">
        <img src={logo.url} alt="" className="glow mx-auto h-20 w-20 sm:h-28 sm:w-28 rounded-full object-cover transition-transform duration-500 hover:scale-110" />
        <h2 className="mx-auto mt-6 sm:mt-8 max-w-3xl px-4 sm:px-6 font-display text-3xl sm:text-5xl md:text-7xl font-extrabold uppercase leading-tight sm:leading-none">Ready to step on <span className="text-primary">court?</span></h2>
        <p className="mx-auto mt-4 sm:mt-6 max-w-md px-4 sm:px-6 text-sm sm:text-base text-muted-foreground">Join group sessions or book individual coaching with RKBA today.</p>
        <div className="mt-8 sm:mt-10 flex justify-center"><Socials size="h-10 w-10 sm:h-12 sm:w-12" /></div>
        <a href="#top" className="hover-action clip-cut glow mt-6 sm:mt-8 inline-block bg-primary px-8 sm:px-10 py-3.5 sm:py-4 font-tech font-bold uppercase tracking-wider text-primary-foreground">Get in touch</a>
      </section>

      <footer className="topo relative border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-12 px-4 sm:px-6 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <img src={logo.url} alt="RKBA logo" className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover" />
              <div className="font-display text-xl sm:text-2xl font-extrabold uppercase leading-none text-primary">
                Ranthushka Karunathilaka<span className="block font-tech text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-foreground">Badminton Academy</span>
              </div>
            </div>
            <p className="mt-4 sm:mt-6 max-w-sm text-xs sm:text-sm text-muted-foreground">Developing skilled, disciplined and confident badminton players since 2022.</p>
            <div className="mt-5 sm:mt-6"><Socials /></div>
          </div>
          <div>
            <div className="font-tech text-xs uppercase tracking-widest text-primary">Explore</div>
            <ul className="mt-3.5 sm:mt-4 space-y-2 text-xs sm:text-sm">
              {nav.map(([l, h]) => <li key={h}><a href={h} className="hover-nav text-muted-foreground hover:text-primary">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="font-tech text-xs uppercase tracking-widest text-primary">Call the academy</div>
            <a href={`tel:${PHONE}`} className="hover-action clip-cut glow mt-3.5 sm:mt-4 flex items-center gap-3 bg-primary px-4 sm:px-5 py-3.5 sm:py-4 font-tech text-xs sm:font-bold uppercase tracking-wider text-primary-foreground">
              <PhoneIcon /> {PHONE_LABEL}
            </a>
            <p className="mt-2.5 sm:mt-3 text-xs text-muted-foreground">Tap to call for training & enrolment.</p>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:px-6 py-5 sm:py-6 font-tech text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground md:flex-row text-center md:text-left">
            <span>© {new Date().getFullYear()} RKBA. All rights reserved.</span>
            <span className="text-primary">Train · Compete · Excel</span>
          </div>
        </div>
      </footer>

      <a href={`tel:${PHONE}`} aria-label="Call the academy" className="glow fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-30" />
        <PhoneIcon />
      </a>

      {/* Fullscreen event gallery */}
      {gallery && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-background/95 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${gallery.title} gallery`}>
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <div className="font-tech text-xs uppercase tracking-widest text-primary">Event gallery</div>
              <div className="font-display text-xl font-extrabold uppercase">{gallery.title}</div>
            </div>
            <button onClick={() => setGallery(null)} aria-label="Close gallery" className="flex h-11 w-11 items-center justify-center border border-border bg-card transition-colors hover:border-primary hover:text-primary">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-6 pb-6">
            <button
              onClick={() => setGi((i) => Math.max(i - 1, 0))}
              disabled={gi === 0}
              aria-label="Previous photo"
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur transition-colors hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-inherit"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <img key={gallery.photos[gi]} src={gallery.photos[gi]} alt={`${gallery.title} — photo ${gi + 1}`} className="animate-rise max-h-full max-w-full object-contain" />
            <button
              onClick={() => setGi((i) => Math.min(i + 1, gallery.photos.length - 1))}
              disabled={gi === gallery.photos.length - 1}
              aria-label="Next photo"
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur transition-colors hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-inherit"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 overflow-x-auto px-6 py-4">
            {gallery.photos.map((p, i) => (
              <button key={p} onClick={() => setGi(i)} aria-label={`Photo ${i + 1}`} className={`h-14 w-20 shrink-0 overflow-hidden border transition-colors ${i === gi ? "border-primary" : "border-transparent opacity-50 hover:opacity-80"}`}>
                <img src={p} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
            <span className="ml-4 shrink-0 font-tech text-xs tracking-widest text-muted-foreground">{gi + 1} / {gallery.photos.length}</span>
          </div>
        </div>
      )}
    </div>
  );
}
