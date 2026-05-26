"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
<DropdownMenu>
  <DropdownMenuTrigger
   >
   <div className="btn btn-circle border-0 scale-85">
     <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />
    <Moon className="h-[1.2rem] w-[1.2rem] transition-all hidden dark:block" />
    <span className="sr-only">Toggle theme</span>
   </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}
