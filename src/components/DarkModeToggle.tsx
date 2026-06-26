'use client';

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const isDark = stored ? stored === "dark" : true; // default to dark
        setDark(isDark);
        document.documentElement.classList.toggle("dark", isDark);
        if (!stored) localStorage.setItem("theme", "dark");
    }, []);

    const toggle = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    return (
        <button
            onClick={toggle}
            className="p-2 rounded-full text-sm font-medium transition-colors bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
        >
            {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
}
