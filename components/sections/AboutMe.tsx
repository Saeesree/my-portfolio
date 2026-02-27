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
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base max-w-2xl">
        {aboutMe.bio}
      </p>
    </section>
  );
}