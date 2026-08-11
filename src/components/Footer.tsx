import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
        <span>
          &copy; {year} {siteConfig.name}
        </span>
        <span>{siteConfig.footerNote}</span>
      </div>
    </footer>
  );
}
