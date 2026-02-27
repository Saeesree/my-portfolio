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
        {interests.map((interest, index) => (
          <div
            key={index}
            className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center gap-3"
          >
            <span className="text-2xl">{interest.emoji}</span>
            <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">
              {interest.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}