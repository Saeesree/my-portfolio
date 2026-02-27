"use client";

const sections: string[] = [
  "Introduction",
  "About Me",
  "Projects",
  "Skills",
  "Experience",
  "Education",
  "Interests",
  "Contact",
];

type SidebarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  return (
    <aside className="fixed top-14 left-0 w-64 h-[calc(100vh-3.5rem)] border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
        Sections
      </p>
      <ul className="space-y-1">
        {sections.map((section) => {
          const isActive = activeSection === section;
          return (
            <li key={section}>
              <button
                onClick={() =>  setActiveSection(section)}
                className={`w-full text-left block px-3 py-2 rounded-md text-sm transition ${
                  isActive
                    ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {section}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}