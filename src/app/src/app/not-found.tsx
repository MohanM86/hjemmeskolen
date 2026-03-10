import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="text-center">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="font-display font-900 text-4xl text-gray-900 mb-4">Siden ble ikke funnet</h1>
        <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
          Vi fant ikke siden du lette etter. Prøv å gå tilbake til forsiden og velg klasse.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Gå til forsiden
          </Link>
          <Link href="/klasse/1-klasse" className="btn-secondary">
            Start med 1. klasse
          </Link>
        </div>
      </div>
    </div>
  )
}
