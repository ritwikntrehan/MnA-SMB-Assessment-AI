import Link from 'next/link';

const links = [
  { href: '/assess', label: 'Assess' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/request-analysis', label: 'Request Analysis' },
  { href: '/about', label: 'About' }
];

export function Navbar() {
  return (
    <header className="border-b border-borderline">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide text-slate-100">
          M&A / SMB Assessment AI
        </Link>
        <nav className="flex gap-5 text-sm text-slate-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
