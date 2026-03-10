import type { MetadataRoute } from 'next'
import { KLASSE_SLUGS } from '@/lib/config'
import { klasser } from '@/data/klasser'
import { fag } from '@/data/fag'
import { matematikkPensum } from '@/data/matematikk/pensum'
import { norskPensum } from '@/data/norsk/pensum'
import { engelskPensum } from '@/data/engelsk/pensum'

const BASE_URL = 'https://hjemmeskolen.no'
const NOW = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = []

  // ── STATISKE SIDER ─────────────────────────────────────
  urls.push(
    { url: BASE_URL,                    lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/for-foreldre`,  lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/om-oss`,        lastModified: NOW, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/kontakt`,       lastModified: NOW, changeFrequency: 'yearly',  priority: 0.3 },
  )

  // ── KLASSESIDER — 7 URL-er ─────────────────────────────
  // /klasse/1-klasse … /klasse/7-klasse
  for (const k of klasser) {
    urls.push({
      url: `${BASE_URL}/klasse/${k.slug}`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  }

  // ── FAGSIDER — 21 URL-er (7 klasser × 3 fag) ──────────
  // /klasse/1-klasse/matematikk … /klasse/7-klasse/engelsk
  for (const k of klasser) {
    for (const f of fag) {
      urls.push({
        url: `${BASE_URL}/klasse/${k.slug}/${f.slug}`,
        lastModified: NOW,
        changeFrequency: 'weekly',
        priority: 0.85,
      })
    }
  }

  // ── TEMASIDER — 224+ URL-er ────────────────────────────
  // /klasse/1-klasse/matematikk/tall-til-10 osv.
  const alleKilder = [...matematikkPensum, ...norskPensum, ...engelskPensum]

  for (const entry of alleKilder) {
    const klasseSlug = `${entry.klasse}-klasse`
    const fagSlug = entry.fag

    for (const tema of entry.temaer) {
      urls.push({
        url: `${BASE_URL}/klasse/${klasseSlug}/${fagSlug}/${tema.slug}`,
        lastModified: NOW,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  return urls
}

/*
  TOTAL URL-OVERSIKT:
  ─────────────────────────────────────────
  Statiske sider:            4
  Klassesider (7):           7
  Fagsider (7 × 3):         21
  Temasider:
    Matematikk (84):         84
    Norsk (70):              70
    Engelsk (70):            70
  ─────────────────────────────────────────
  TOTALT:                  256 URL-er
*/

