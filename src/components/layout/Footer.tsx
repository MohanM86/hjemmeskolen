import Link from 'next/link'
import { klasser } from '@/data/klasser'
import { fag } from '@/data/fag'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎓</span>
              <span className="font-display font-900 text-xl text-white">
                Hjemme<span className="text-brand-400">skolen</span>.no
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Gratis læringsplattform for norske barn fra 1. til 7. klasse. Basert på Kunnskapsløftet 2020.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="badge bg-green-900/50 text-green-400 text-xs">100% gratis</span>
              <span className="badge bg-blue-900/50 text-blue-400 text-xs">Uten reklame</span>
            </div>
          </div>

          {/* Klasser */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Klasser</h3>
            <ul className="space-y-2">
              {klasser.map((k) => (
                <li key={k.slug}>
                  <Link
                    href={`/klasse/${k.slug}`}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span>{k.ikon}</span>
                    <span>{k.navn}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fag */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Fag</h3>
            <ul className="space-y-2">
              {fag.map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/klasse/1-klasse/${f.slug}`}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span>{f.ikon}</span>
                    <span>{f.navn}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-bold text-white mt-8 mb-4 text-sm uppercase tracking-wider">Info</h3>
            <ul className="space-y-2">
              <li><Link href="/for-foreldre" className="text-sm text-gray-400 hover:text-white transition-colors">For foreldre</Link></li>
              <li><Link href="/om-oss" className="text-sm text-gray-400 hover:text-white transition-colors">Om Hjemmeskolen.no</Link></li>
              <li><Link href="/kontakt" className="text-sm text-gray-400 hover:text-white transition-colors">Kontakt oss</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">For hvem?</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2"><span className="text-base mt-0.5">✈️</span><span>Norske barn som bor i utlandet</span></li>
              <li className="flex items-start gap-2"><span className="text-base mt-0.5">🏠</span><span>Familier som ønsker ekstra læring hjemme</span></li>
              <li className="flex items-start gap-2"><span className="text-base mt-0.5">📚</span><span>Barn som trenger øving og repetisjon</span></li>
              <li className="flex items-start gap-2"><span className="text-base mt-0.5">👨‍👩‍👧</span><span>Foreldre som vil holde barna oppdatert</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2024 Hjemmeskolen.no — Gratis norsk læringsplattform for barn</p>
          <p className="text-xs text-gray-600">Originalt innhold basert på Kunnskapsløftet 2020.</p>
        </div>
      </div>
    </footer>
  )
}
