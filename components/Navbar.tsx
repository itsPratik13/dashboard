"use client"
import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import SideBar from "./SideBar";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const {theme,setTheme}=useTheme()
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* left side-collapse button to collapse side bar */}
     <SidebarTrigger/>
      {/*right side */}
      <div className="flex items-center gap-5">
      <Link href="/">Dashboard</Link>
      {/*theme menu */}
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      {/*User Menu  */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/134054107?s=400&u=1ebd89bf770078caf443004f005c43a2b12018de&v=4"
            ></AvatarImage>
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={10}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="h-[1.5rem] w-[1.5rem] mr-2"/>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="h-[1.5rem] w-[1.5rem] mr-2" />
            Setting
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            <LogOut  className="h-[1.5rem] w-[1.5rem] mr-2"/>
            LogOut
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
