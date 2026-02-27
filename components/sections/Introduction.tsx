import { siteConfig, introduction } from "@/data/content";

export default function Introduction() {
  return (
    <section id="introduction" className="py-20">
      <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-2">
        {introduction.greeting}
      </p>
      <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        {siteConfig.name}
      </h1>
      <h2 className="text-3xl font-semibold text-zinc-500 dark:text-zinc-400 mb-6">
        {siteConfig.role}
      </h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-8">
        {introduction.description}
      </p>

      <div className="flex gap-4">
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:opacity-80 transition"
        >
          GitHub
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          LinkedIn
        </a>
        <a
          href={siteConfig.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
