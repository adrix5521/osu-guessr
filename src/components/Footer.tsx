"use client";

import { useTranslationsContext } from "@/context/translations-provider";
import Link from "next/link";
import React from "react";

export default function Footer() {
    const { t } = useTranslationsContext();

    const AuthorLink = () => (
        <a className="text-primary hover:text-primary/80 transition-colors duration-200" href="https://osu.ppy.sh/u/yorunoken" target="_blank" rel="noopener noreferrer">
            yorunoken
        </a>
    );

    return (
        <footer className="bg-secondary py-4 sm:py-6">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm sm:text-lg text-foreground/80">
                    {t.components.footer.madeWith.split("{author}").map((part, index, array) => (
                        <React.Fragment key={index}>
                            {part}
                            {index < array.length - 1 && <AuthorLink />}
                        </React.Fragment>
                    ))}
                </p>
                <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground/50 flex justify-center gap-4">
                    <Link href="/about" className="hover:text-foreground transition-colors duration-200">
                        About
                    </Link>
                    <Link href="/privacy" className="hover:text-foreground transition-colors duration-200">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
