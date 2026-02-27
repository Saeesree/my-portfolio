import { interests } from "@/data/content";

export default function Interests() {
  return (
    <section id="interests" className="py-20">
      <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Interests
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 text-xl font-medium mb-10">
        What I enjoy outside of work.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {interests.map((interest, index) => {
          const content = (
            <div className="flex items-center gap-3">
              <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">
                {interest.label}
              </span>
              {interest.link && (
                <span className="ml-auto text-zinc-400 text-xs">↗</span>
              )}
            </div>
          );

          return interest.link ? (
            <a
              key={index}
              href={interest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
            >
              {content}
            </a>
          ) : (
            <div
              key={index}
              className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
            >
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}