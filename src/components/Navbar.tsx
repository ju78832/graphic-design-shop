"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";

import { useAuth } from "@/context/auth-context";

export default function Navbar({ className }: { className?: string }) {
  const auth = useAuth();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/graphics"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Graphics Items"
          ></MenuItem>
        </Link>

        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>

        {auth?.isLoggedIn ? (
          <Button
            onClick={auth?.logout}
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <MenuItem
              setActive={setActive}
              active={active}
              item="Logout"
            ></MenuItem>
          </Button>
        ) : (
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {" "}
            <Link href={"/login"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Login"
              ></MenuItem>
            </Link>
          </Button>
        )}
      </Menu>
    </div>
  );
}
