import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Education
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 text-xl font-medium mb-10">
        My academic background.
      </p>

      <div className="flex flex-col gap-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {edu.degree}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  {edu.institution} — {edu.location}
                </p>
              </div>
              <span className="text-xs text-zinc-400">{edu.period}</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-3">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}