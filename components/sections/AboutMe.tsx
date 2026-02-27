import { aboutMe } from "@/data/content";

export default function AboutMe() {
  return (
    <section id="about-me" className="py-20">
      <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        About Me
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 text-xl font-medium mb-8">
        A little bit about who I am.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Bio */}
        <div>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
            {aboutMe.bio}
          </p>
        </div>

        {/* Facts */}
        <div className="flex flex-col gap-3">
          {aboutMe.facts.map((fact, index) => (
            <div
              key={index}
              className="px-4 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm"
            >
              {fact}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}