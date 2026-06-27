'use client'; // to act as client component for using "useHook" and "useState"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link
                    href="/"
                    className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
                >
                    Home
                </Link>

                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Our Courses"
                >
                    <div className="flex flex-col space-y-2">
                        <HoveredLink href="/music">All Courses</HoveredLink>
                        <HoveredLink href="/music">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/music">Advanced Composition</HoveredLink>
                        <HoveredLink href="/music">Songwriting</HoveredLink>
                        <HoveredLink href="/music">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <Link
                    href="/contact"
                    className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
                >
                    Contact Us
                </Link>
            </Menu>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <DarkModeToggle />
            </div>
        </div>
    )
}
