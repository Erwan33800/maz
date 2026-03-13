<!-- Context: project/maz-festival | Priority: high | Version: 1.0 | Updated: 2026-03-13 -->

# 🎵 MAZ Festival - Contexte Projet

Site web du festival de musique électronique MAZ Festival.

---

## 📋 Informations Générales

| Champ | Valeur |
|-------|--------|
| **Nom** | MAZ Festival |
| **Type** | Festival de musique électronique (techno/house) |
| **Localisation** | Arudy (64) - Nouvelle-Aquitaine, France |
| **Site web** | https://mazfestival.fr |
| **Édition 2026** | 6ème édition - 16-19 Juillet 2026 |
| **Édition 2025** | 5ème édition - 25-28 Septembre 2025 |
| **Thème 2025** | WINAMAZ – Paris Sportifs |
| **Capacité** | ~200 festivaliers |
| **Durée** | 4 jours (jeudi au dimanche) |

---

## 🛠 Stack Technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Next.js** | 15.3.8 | Framework React avec App Router |
| **React** | 19.0.0 | UI Library |
| **TypeScript** | 5.x | Typage statique |
| **Tailwind CSS** | 4.x | Styling utilitaire |
| **Framer Motion** | 12.16.0 | Animations et transitions |
| **Embla Carousel** | 8.6.0 | Carrousels d'images |
| **Lucide React** | 0.513.0 | Icônes SVG |
| **Lenis** | 1.3.4 | Smooth scrolling |
| **Vercel Analytics** | 1.5.0 | Analytics et tracking |
| **next-sitemap** | 4.2.3 | Génération sitemap.xml |

### Polices
- **Anton** (Google Fonts) - Titres principaux
- **Fascinate** - Titres secondaires/accueil

### Couleurs
- **Fond** : Noir (#000000)
- **Texte** : Blanc (#FFFFFF)
- **Accents** : Vert (succès), Jaune (mise en avant)

---

## 📁 Structure du Projet

```
maz-festival/
├── src/
│   ├── app/                    # Routes Next.js (App Router)
│   │   ├── page.tsx           # Accueil (ThanksLayout - teaser 2026)
│   │   ├── layout.tsx         # Layout racine + SEO
│   │   ├── globals.css        # Styles globaux Tailwind
│   │   ├── embla.css          # Styles carousel
│   │   ├── programmation/     # Liste des 24 DJs + filtres
│   │   ├── billetterie/       # Pass Kiffeur (135€) & Équipe (500€)
│   │   ├── infos-pratiques/   # Camping, accès, navettes, déguisements
│   │   ├── merch/             # Boutique HelloAsso iframe
│   │   ├── sitemap.ts         # Sitemap dynamique
│   │   └── robots.ts          # Configuration robots.txt
│   ├── components/
│   │   ├── layout/
│   │   │   ├── ThanksLayout.tsx      # Page d'accueil post-festival
│   │   │   ├── MobileMenu.tsx        # Navigation mobile full-screen
│   │   │   ├── Footer.tsx            # Footer minimal
│   │   │   └── ...
│   │   └── ui/
│   │       ├── AnimatedPassCard.tsx  # Cartes de prix animées
│   │       └── Portal.tsx            # Portal pour modales
│   └── data/
│       └── djInfos.json       # Données des 24 DJs
├── public/
│   └── assets/
│       ├── dj/                # 24 photos de DJs (~300KB chacune)
│       ├── slides/            # 12 photos du festival
│       ├── logo_maz.png       # Logo principal
│       ├── info.png           # Bannière infos/billetterie
│       ├── prog.JPG           # Bannière programmation (13MB!)
│       └── maz_merci.jpeg     # Photo accueil teaser 2026
├── tailwind.config.ts         # Config Tailwind + font Anton
├── next.config.ts              # Config Next.js
├── next-sitemap.config.js     # Config sitemap
└── package.json               # Dépendances
```

---

## 🎯 Pages et Fonctionnalités

### `/` - Accueil (ThanksLayout)
- Affiche photo "merci 2025" avec teaser 2026
- Dates : 16-19 Juillet 2026
- Localisation : Arudy (64)
- Mention "Thème et infos TBA"

### `/programmation`
- **Grid des 24 DJs** avec photos
- **Filtre par jour** : Tous / Jeudi / Vendredi / Samedi
- **Tri alphabétique** automatique
- **Liens Instagram** sur chaque carte
- **Hover effects** : zoom + overlay avec nom/jour

### `/billetterie`
- **Pass Kiffeur** : 135€ (jeudi-dimanche)
- **Pass Kiffeur en Équipe** : 500€ (4 personnes, économie 40€)
- **Liste des inclusions** : concerts, camping, sanitaires, foodtrucks, bières, adhésion
- **CTA** : lien HelloAsso externe
- **Cartes animées** avec Framer Motion

### `/infos-pratiques`
- **Camping** : tente obligatoire, sanitaires sur place
- **Accès & Navettes** : depuis gare Bordeaux (formulaire Google Forms)
- **Stands** : formulaire inscription pour exposants
- **Déguisements** : thème Paris Sportifs (WINAMAZ)
- **Instagram** : liens réseaux sociaux

### `/merch`
- **Intégration HelloAsso** via iframe
- Resize automatique de l'iframe
- **T-shirts oversize** : mention taille grand

---

## 🎧 Programmation (24 DJs)

### Jeudi (9 DJs)
JANKEN, CHRONOLOGY, TUT, CHAL, COFFIZ, ROCHECHOUART, SOKETTE, RADICAL 3D

### Vendredi (8 DJs)
BODO DOS MIL, TAPAGE, LES BANDITS, BAD ID, DUFFY, EL LOMAS, WANDA WILD, MYTOSIL GANG

### Samedi (7 DJs)
Paul Gdt, DJ CUISTOT, NALAMAZON, SMIB, CARTON PLEIN, CORTEX 91, T2KL, GOUIZ

**Format données** (`src/data/djInfos.json`) :
```json
{
  "name": "DJ Name",
  "image": "dj-name.png",
  "instagram": "https://instagram.com/...",
  "jourMix": "jeudi|vendredi|samedi"
}
```

---

## 🔍 SEO & Méta-données

### Titre & Description
```
Title: MAZ Festival 2026 - Musique Électronique & Ambiance Unique
Description: Découvrez la programmation du MAZ Festival 2026 à côté de Nouvelle-Aquitaine
```

### OpenGraph / Twitter
- Image : `/assets/prog.JPG` (1200x630)
- Type : website
- Locale : fr_FR
- Twitter Card : summary_large_image

### Sitemap
5 URLs priorisées :
1. `/` - priority 1.0 (weekly)
2. `/programmation` - priority 0.8 (weekly)
3. `/merch` - priority 0.7 (monthly)
4. `/billetterie` - priority 0.6 (monthly)
5. `/infos-pratiques` - priority 0.5 (monthly)

### Google Search Console
- Verification ID : `Htf2anjFAQRes4oja6UNMh8BUVdeySwYkvhKhazYNHQ`

---

## 🚀 Déploiement

- **Plateforme** : Vercel
- **URL de prod** : https://mazfestival.fr
- **URL Vercel** : https://mazfestival.vercel.app
- **Analytics** : Vercel Analytics activé

---

## ⚠️ Points d'Attention

### Optimisations nécessaires
1. **Image prog.JPG** : 13MB à compresser (utiliser WebP/AVIF)
2. **Canonical URL** : pointer vers mazfestival.fr pas .vercel.app
3. **Schema.org** : ajouter markup Event pour le festival
4. **H1** : ajouter sur la page d'accueil actuelle

### Dépendances externes
- **HelloAsso** : billetterie et boutique (iframe)
- **Google Forms** : navettes et stands
- **Instagram** : présence sociale principale

---

## 📝 Notes de Développement

### Patterns utilisés
- **App Router** Next.js 15 (pas de pages/)
- **Server Components** par défaut
- **Client Components** avec "use client" pour interactivité
- **Tailwind 4** avec @import "tailwindcss"
- **CSS Modules** pour styles spécifiques (embla.css)

### Conventions de nommage
- Composants : PascalCase (MobileMenu.tsx)
- Pages : page.tsx dans dossiers minuscules
- Assets : minuscules avec tirets (dj-paul.PNG)
- Données : camelCase (djInfos.json)

---

*Dernière mise à jour : 13 Mars 2026*
