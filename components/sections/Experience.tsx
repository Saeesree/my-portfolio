import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Experience
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 text-xl font-medium mb-10">
        Where I have worked.
      </p>

      <div className="flex flex-col gap-8">
        {experience.map((job, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {job.role}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  {job.company} — {job.location}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-xs text-zinc-400">{job.period}</span>
                {job.current && (
                  <span className="px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium">
                    Current
                  </span>
                )}
              </div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-3">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}