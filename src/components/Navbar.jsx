import { useState } from 'react';
import { Car } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-600/20 ring-1 ring-red-500/30">
              <Car className="h-5 w-5 text-red-400" />
            </span>
            <span className="font-semibold tracking-tight">VeloRed</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#specs" className="hover:text-white transition-colors">Specs</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="ml-2 inline-flex items-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-red-500 transition-colors">Preorder</a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center rounded-md border border-white/10 px-3 py-2 text-white/80 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 text-white/80 space-y-2">
            <a href="#features" className="block rounded-md px-3 py-2 hover:bg-white/5">Features</a>
            <a href="#specs" className="block rounded-md px-3 py-2 hover:bg-white/5">Specs</a>
            <a href="#contact" className="block rounded-md px-3 py-2 hover:bg-white/5">Contact</a>
            <a href="#" className="block rounded-md px-3 py-2 bg-red-600 text-white">Preorder</a>
          </div>
        )}
      </nav>
    </header>
  );
}
