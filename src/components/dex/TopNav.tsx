import { ChevronDown, Globe, Settings, ArrowLeftRight, Boxes } from "lucide-react";

const navItems = [
  { label: "Trade", caret: true },
  { label: "Portfolio", caret: false },
  { label: "Referral", caret: false },
  { label: "Aster Chain", caret: true },
  { label: "Rewards", caret: true },
  { label: "More", caret: true },
];

export function TopNav() {
  return (
    <header className="flex h-[52px] items-center gap-6 bg-background px-4">
      <div className="flex shrink-0 items-center gap-2">
        <div className="grid h-7 w-7 place-items-center rounded-full bg-gold [background-image:var(--gradient-gold)] text-[13px] font-bold text-primary-foreground">
          ✦
        </div>
        <span className="text-[17px] font-semibold tracking-[0.14em]">ASTER</span>
      </div>

      <nav className="flex min-w-0 items-center gap-5">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-1 text-[14px] font-medium text-foreground/85 transition-colors hover:text-gold-strong"
          >
            {item.label}
            {item.caret && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
          </button>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-3">
        <button className="flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1.5">
          <Boxes className="h-4 w-4 text-gold-strong" />
          <ChevronDown className="h-3.5 w-3.5 opacity-60" />
        </button>
        <button className="rounded-full border border-gold px-5 py-1.5 text-[14px] font-medium text-gold-strong transition-colors hover:bg-panel">
          Connect Wallet
        </button>
        <Globe className="h-[18px] w-[18px] text-muted-foreground" />
        <Settings className="h-[18px] w-[18px] text-muted-foreground" />
        <button className="flex items-center gap-2 text-[14px] font-medium">
          To Old Version
          <ArrowLeftRight className="h-3.5 w-3.5 opacity-60" />
        </button>
      </div>
    </header>
  );
}