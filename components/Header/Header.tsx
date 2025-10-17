
"use client";
import Image from "next/image";

import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";


const Header = () => {

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/" },
        { name: "Services", href: "/" },
        { name: "Contact", href: "/" }
    ]

    return (
        <section className="flex justify-center items-center py-4 header-animation px-4 lg:px-32">
            <div className="w-full">
                <nav className="flex items-center justify-between relative">
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <Image
                            src="/logo.svg"
                            height={35}
                            width={35}
                            alt="logo"
                        />
                        <span className="text-lg font-semibold">
                            <span>Jal </span>
                            <span className="text-primary">Setu</span>
                        </span>
                    </Link>
                    <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 max-w-max space-x-2">
                        {links.map((link, index) => (
                            <Button key={index} variant={"ghost"}>
                                <Link href={link.href}>
                                    {link.name}
                                </Link>
                            </Button>
                        ))}
                    </div>
                    <div className="hidden items-center gap-4 xl:flex">
                        <ThemeSwitch />
                    </div>
                    <Sheet>
                        <SheetTrigger asChild className="xl:hidden">
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="max-h-screen overflow-auto">
                            <SheetHeader>
                                <SheetTitle>
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2"
                                    >
                                        <Image
                                            src="/logo.svg"
                                            height={35}
                                            width={35}
                                            alt="logo"
                                        />
                                        <span className="text-lg font-semibold">
                                            <span>Swasthya</span>
                                            <span className="text-primary">Setu</span>
                                        </span>
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col p-4">
                                <div className="flex flex-col gap-6">
                                    {links.map((link, index) => (
                                        <Link key={index} href={link.href}>
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-6 flex flex-col gap-4">
                                    <ThemeSwitch />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </section>
    );
};

export default Header;
