import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-2 text-white">
      <Globe className="h-5 w-5" />
      <span className="text-sm">NL</span>
    </div>
  );
}
