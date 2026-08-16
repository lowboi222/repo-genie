import { ChevronRight, Moon, Sun } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type Theme = "auto" | "light" | "dark";

export function SettingsPanel() {
  const [theme, setTheme] = useState<Theme>("auto");

  return (
    <div className="w-[320px] p-1">
      <h2 className="px-2 pb-3 pt-1 text-[17px] font-semibold">Global preferences</h2>

      <div className="flex items-center justify-between rounded-xl px-2 py-2.5">
        <span className="text-[14px] font-medium">Theme</span>
        <div className="flex items-center gap-1 rounded-full bg-panel-2 p-1">
          <button
            onClick={() => setTheme("auto")}
            className={cn(
              "rounded-full px-3 py-1 text-[13px] font-semibold transition-colors",
              theme === "auto" ? "bg-card shadow-[var(--shadow-panel)]" : "text-muted-foreground",
            )}
          >
            Auto
          </button>
          <button
            onClick={() => setTheme("light")}
            aria-label="Light theme"
            className={cn(
              "grid h-7 w-7 place-items-center rounded-full transition-colors",
              theme === "light" ? "bg-card shadow-[var(--shadow-panel)]" : "text-muted-foreground",
            )}
          >
            <Sun className="h-4 w-4" />
          </button>
          <button
            onClick={() => setTheme("dark")}
            aria-label="Dark theme"
            className={cn(
              "grid h-7 w-7 place-items-center rounded-full transition-colors",
              theme === "dark" ? "bg-card shadow-[var(--shadow-panel)]" : "text-muted-foreground",
            )}
          >
            <Moon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {[
        { label: "Language", value: "English" },
        { label: "Currency", value: "USD" },
      ].map((row) => (
        <button
          key={row.label}
          className="flex w-full items-center justify-between rounded-xl px-2 py-3 transition-colors hover:bg-panel-2"
        >
          <span className="text-[14px] font-medium">{row.label}</span>
          <span className="flex items-center gap-1 text-[14px] font-semibold text-muted-foreground">
            {row.value}
            <ChevronRight className="h-4 w-4" />
          </span>
        </button>
      ))}
    </div>
  );
}
