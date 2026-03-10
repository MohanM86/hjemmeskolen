'use client'

import Link from 'next/link'
import { useState } from 'react'
import { klasser } from '@/data/klasser'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🎓</span>
            <span className="font-display font-900 text-xl text-gray-900 group-hover:text-brand-600 transition-colors">
              Hjemme<span className="text-brand-600">skolen</span>.no
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="relative group">
              <button className="px-4 py-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 font-semibold transition-all text-sm">
                Velg klasse ▾
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {klasser.map((k) => (
                  <Link
                    key={k.slug}
                    href={`/klasse/${k.slug}`}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    <span className="text-lg">{k.ikon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{k.navn}</div>
                      <div className="text-xs text-gray-500">{k.alder}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/for-foreldre" className="px-4 py-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 font-semibold transition-all text-sm">
              For foreldre
            </Link>
            <Link href="/om-oss" className="px-4 py-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 font-semibold transition-all text-sm">
              Om oss
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/klasse/1-klasse" className="btn-primary text-sm py-2 px-4">
              Start å lære 🚀
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Åpne meny"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 pb-1">Velg klasse</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {klasser.map((k) => (
              <Link
                key={k.slug}
                href={`/klasse/${k.slug}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span>{k.ikon}</span>
                <span className="font-semibold text-sm text-gray-700">{k.navn}</span>
              </Link>
            ))}
          </div>
          <Link href="/for-foreldre" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-xl hover:bg-gray-50 font-semibold text-gray-700">
            For foreldre
          </Link>
          <Link href="/om-oss" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-xl hover:bg-gray-50 font-semibold text-gray-700">
            Om oss
          </Link>
          <div className="pt-2">
            <Link href="/klasse/1-klasse" onClick={() => setMenuOpen(false)} className="btn-primary w-full justify-center">
              Start å lære 🚀
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
