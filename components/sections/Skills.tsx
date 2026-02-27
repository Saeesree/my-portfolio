"use client";

import { skills } from "@/data/content";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType | null;
  color: string;
};

function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 dark:border-zinc-700 bg-zinc-900 dark:bg-zinc-900 cursor-default"
    >
      {Icon ? (
        <Icon size={16} style={{ color: skill.color }} />
      ) : (
        <span
          className="text-xs font-bold w-4 h-4 flex items-center justify-center"
          style={{ color: skill.color }}
        >
          C#
        </span>
      )}
      <span className="text-sm text-zinc-200 font-medium">{skill.name}</span>
    </motion.div>
  );
}

function SkillGroup({ title, items }: { title: string; items: Skill[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <SkillBadge skill={skill} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Skills & Tools
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 text-xl font-medium mb-10">
        Technologies I work with.
      </p>

      <div className="flex flex-col gap-8">
          <SkillGroup title="Programming Languages" items={skills.languages} />
          <SkillGroup title="Frontend Frameworks" items={skills.frontend} />
          <SkillGroup title="Backend" items={skills.backend} />
          <SkillGroup title="Cloud" items={skills.cloud} />
          <SkillGroup title="Tools" items={skills.tools} />
      </div>
    </section>
  );
}