import React, { useState, useMemo, useEffect, useCallback } from 'react';

// Lightweight, self-contained inline SVG icon helper (zero external libraries)
function Icon({ name, size = 16, filled = false, className = '' }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: filled ? 'currentColor' : 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': 'true'
  };

  switch (name) {
    case 'rocket':
      return (
        <svg {...props}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg {...props}>
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
          <path d="M5 3v4" />
          <path d="M3 5h4" />
          <path d="M19 17v4" />
          <path d="M17 19h4" />
        </svg>
      );
    case 'compass':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case 'telescope':
      return (
        <svg {...props}>
          <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
          <path d="m13.56 11.747 4.332-.924" />
          <path d="m16 21-3.105-6.21" />
          <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
          <path d="m6.158 8.633 1.114 4.456" />
          <path d="m8 21 3.105-6.21" />
        </svg>
      );
    case 'search':
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case 'x':
      return (
        <svg {...props}>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      );
    case 'info':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      );
    case 'maximize':
      return (
        <svg {...props}>
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      );
    case 'orbit':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" />
          <path d="M13.5 2.1a10 10 0 0 0-9.841 15.416" />
        </svg>
      );
    case 'star':
      return (
        <svg {...props}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case 'chevronRight':
      return (
        <svg {...props}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      );
    case 'chevronLeft':
      return (
        <svg {...props}>
          <path d="m15 18-6-6 6-6" />
        </svg>
      );
    case 'bookmark':
      return (
        <svg {...props}>
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
        </svg>
      );
    case 'check':
      return (
        <svg {...props}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case 'thermometer':
      return (
        <svg {...props}>
          <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
        </svg>
      );
    case 'ruler':
      return (
        <svg {...props}>
          <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
          <path d="m14.5 12.5 2-2" />
          <path d="m11.5 9.5 2-2" />
          <path d="m8.5 6.5 2-2" />
          <path d="m17.5 15.5 2-2" />
        </svg>
      );
    default:
      return null;
  }
}

// Curated dataset of all 10 celestial entries with Wikimedia Commons imagery & SVG fallbacks
const SPACE_ITEMS = [
  {
    id: 'saturn-rings',
    title: 'Saturn & The Ring System',
    subtitle: 'Jewel of the Outer Solar System',
    category: 'Planets',
    distance: '1.2 Billion km (Avg)',
    sizeOrMass: '5.68 × 10²⁶ kg (95× Earth Mass)',
    tempOrConstellation: '-139 °C Cloud Top Temp',
    telescope: 'Cassini-Huygens Orbiter',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
    svgType: 'saturn',
    badgeClass: 'badge-amber',
    summary:
      'Adorned with a dazzling system of icy rings, Saturn is the sixth planet from the Sun and the second-largest gas giant in our Solar System.',
    details:
      'Saturn’s iconic rings extend up to 282,000 kilometers from the planet yet are remarkably thin—averaging only about 10 meters in vertical thickness. Composed of billions of particles of water ice and rocky debris ranging from microscopic grains to house-sized boulders, the rings are shepherd-guided by 146 known moons, including Titan and Enceladus.',
    discoveryNotes:
      'Galileo Galilei first observed Saturn’s rings in 1610; Christiaan Huygens correctly identified them as a detached ring disk in 1655.'
  },
  {
    id: 'jupiter-giant',
    title: 'Jupiter & The Great Red Spot',
    subtitle: 'Colossal King of the Planets',
    category: 'Planets',
    distance: '778 Million km (Avg)',
    sizeOrMass: '1.898 × 10²⁷ kg (318× Earth Mass)',
    tempOrConstellation: '-110 °C Cloud Top Temp',
    telescope: 'Juno Orbiter / Hubble',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg',
    svgType: 'jupiter',
    badgeClass: 'badge-orange',
    summary:
      'More than twice as massive as all other Solar System planets combined, Jupiter is wrapped in swirling ammonia cloud bands and a centuries-old anticyclonic storm.',
    details:
      'Jupiter’s rapid 9.9-hour rotation drives fierce jet streams reaching over 500 km/h, dividing its hydrogen-helium atmosphere into light zones and dark belts. Beneath the clouds lies a vast ocean of liquid metallic hydrogen that generates the strongest planetary magnetic field in our Solar System, anchoring 95 moons including volcanic Io and ice-crusted Europa.',
    discoveryNotes:
      'In 1610, Galileo Galilei discovered Jupiter’s four largest moons—Io, Europa, Ganymede, and Callisto—providing decisive evidence that not everything orbited Earth.'
  },
  {
    id: 'mars-jezero',
    title: 'Mars: Red Frontier & Jezero Crater',
    subtitle: 'Ancient River Delta & Astrobiology',
    category: 'Planets',
    distance: '225 Million km (Avg)',
    sizeOrMass: '6.42 × 10²³ kg (6,779 km Dia)',
    tempOrConstellation: '-65 °C Mean Surface Temp',
    telescope: 'Mars Reconnaissance Orbiter',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
    svgType: 'mars',
    badgeClass: 'badge-red',
    summary:
      'Home to Olympus Mons—the tallest volcano in the Solar System—and deep canyon networks carved by ancient liquid water billions of years ago.',
    details:
      'Iron oxide dust gives Mars its signature rusty hue, while its polar ice caps lock away vast reserves of frozen water and carbon dioxide. Robotic rovers traverse ancient lakebeds like Jezero Crater, drilling core samples to search for biosignatures of past microbial life.',
    discoveryNotes:
      'Mariner 4 returned the first close-up images of Mars in 1965; Perseverance landed in Jezero Crater in February 2021 to cache rock cores.'
  },
  {
    id: 'orion-nebula',
    title: 'The Great Orion Nebula (M42)',
    subtitle: 'Closest Massive Star-Forming Region',
    category: 'Nebulae',
    distance: '1,344 Light Years',
    sizeOrMass: '24 Light Years Across (~2,000 M☉)',
    tempOrConstellation: 'Orion (~10,000 K Ionized Gas)',
    telescope: 'Hubble & JWST',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg',
    svgType: 'nebula',
    badgeClass: 'badge-fuchsia',
    summary:
      'Located south of Orion’s Belt, M42 is a vibrant cosmic cauldron where hundreds of protoplanetary disks are actively forming young solar systems.',
    details:
      'At the heart of the Orion Nebula lies the Trapezium Cluster, a tight grouping of blistering hot O- and B-type stars whose ultraviolet light ionizes the surrounding hydrogen gas, causing the nebula to glow in brilliant shades of crimson, violet, and teal.',
    discoveryNotes:
      'Cataloged by Nicolas-Claude Fabri de Peiresc in 1610 and photographed by Henry Draper in 1880—becoming the first deep-sky nebula ever captured on film.'
  },
  {
    id: 'pillars-of-creation',
    title: 'Pillars of Creation (Eagle Nebula)',
    subtitle: 'Stellar Nursery in Serpens',
    category: 'Nebulae',
    distance: '6,500 Light Years',
    sizeOrMass: '~4–5 Light Years Span',
    tempOrConstellation: 'Serpens (~10–20 K Cold Dust)',
    telescope: 'James Webb Space Telescope (NIRCam)',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full_res_denoised.jpg',
    svgType: 'pillars',
    badgeClass: 'badge-amber',
    summary:
      'Towering tendrils of cosmic dust and molecular hydrogen sit at the heart of M16, the Eagle Nebula. These dense columns act as active incubators for newborn stars.',
    details:
      'Captured in near-infrared and visible light, the semi-opaque dust reveals thousands of newly formed protostars glowing bright red along the pillar edges. Over millennia, intense ultraviolet radiation and stellar winds from nearby massive young stars slowly erode these majestic structures.',
    discoveryNotes:
      'First discovered by Jean-Philippe Loys de Chéseaux in 1745–46 and famously imaged by Hubble in 1995 and JWST in 2022.'
  },
  {
    id: 'crab-nebula',
    title: 'Crab Nebula (M1)',
    subtitle: 'Supernova Remnant & Pulsar',
    category: 'Nebulae',
    distance: '6,500 Light Years',
    sizeOrMass: '11 Light Years Diameter',
    tempOrConstellation: 'Taurus Constellation',
    telescope: 'Hubble / Chandra / JWST',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/00/Crab_Nebula.jpg',
    svgType: 'crab',
    badgeClass: 'badge-cyan',
    summary:
      'The expanding gaseous wreckage of a massive star whose supernova explosion was witnessed by astronomers across Earth in 1054 CE.',
    details:
      'Expanding outward at roughly 1,500 kilometers per second, the Crab Nebula is powered at its core by the Crab Pulsar—a city-sized, ultra-dense neutron star spinning 30.2 times every second and sweeping beams of radiation across the cosmos like a lighthouse.',
    discoveryNotes:
      'Recorded as a bright "guest star" visible in daylight for 23 days in July 1054; became the very first entry in Charles Messier’s catalog in 1758.'
  },
  {
    id: 'andromeda-galaxy',
    title: 'Andromeda Galaxy (M31)',
    subtitle: 'Our Nearest Spiral Neighbor',
    category: 'Galaxies',
    distance: '2.537 Million Light Years',
    sizeOrMass: '~1.5 × 10¹² Solar Masses',
    tempOrConstellation: 'Andromeda Constellation',
    telescope: 'Hubble / GALEX Observatories',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg',
    svgType: 'galaxy',
    badgeClass: 'badge-cyan',
    summary:
      'A sweeping barred spiral galaxy containing roughly one trillion stars—more than double the stellar population of our Milky Way.',
    details:
      'Visible to the naked eye under dark skies, Andromeda spans roughly 220,000 light-years across. Its luminous galactic core houses a central supermassive black hole weighing over 100 million solar masses. Andromeda and the Milky Way are gravitationally bound and are projected to merge in approximately 4.5 billion years.',
    discoveryNotes:
      'Described by Persian astronomer Abd al-Rahman al-Sufi in 964 CE as a "nebulous smear"; proven by Edwin Hubble in 1924 to lie far beyond the Milky Way.'
  },
  {
    id: 'whirlpool-galaxy',
    title: 'Whirlpool Galaxy (M51a)',
    subtitle: 'Grand-Design Interacting Spiral',
    category: 'Galaxies',
    distance: '23.5 Million Light Years',
    sizeOrMass: '76,000 Light Years Diameter',
    tempOrConstellation: 'Canes Venatici Constellation',
    telescope: 'Hubble & Chandra Observatories',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/d/db/Messier51_sRGB.jpg',
    svgType: 'whirlpool',
    badgeClass: 'badge-violet',
    summary:
      'A textbook grand-design spiral galaxy locked in a gravitational tug-of-war with its smaller companion galaxy, NGC 5195.',
    details:
      'The gravitational pull of M51’s passing companion compresses hydrogen gas clouds along M51’s prominent spiral arms, triggering intense bursts of star formation visible as glowing pink H-II regions lined with dark lanes of cosmic dust.',
    discoveryNotes:
      'Discovered by Charles Messier in 1773; in 1845 Lord Rosse used his 72-inch Leviathan telescope to identify its spiral structure—the first ever recognized.'
  },
  {
    id: 'james-webb-deep-space',
    title: 'James Webb Space Telescope (JWST)',
    subtitle: 'Infrared Observatory at Sun–Earth L2',
    category: 'Deep Space Missions',
    distance: '1.5 Million km (Lagrange Point 2)',
    sizeOrMass: '6.5 m Gold-Coated Primary Mirror',
    tempOrConstellation: '-233 °C (40 K) Cryogenic Sunshield',
    telescope: 'NASA / ESA / CSA Flagship',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/4/45/James_Webb_Space_Telescope_2009_top.jpg',
    svgType: 'jwst',
    badgeClass: 'badge-emerald',
    summary:
      'Stationed 1.5 million kilometers beyond Earth’s orbit, JWST peers back over 13.5 billion years to witness the universe’s first galaxies and analyze exoplanet atmospheres.',
    details:
      'Protected by a five-layer tennis-court-sized Kapton sunshield that attenuates solar heat by more than a millionfold, Webb’s 18 hexagonal beryllium mirror segments unfold in deep space to collect faint infrared photons stretched by cosmic expansion.',
    discoveryNotes:
      'Launched on December 25, 2021 aboard an Ariane 5 rocket; unveiled its First Deep Field (SMACS 0723) in July 2022.'
  },
  {
    id: 'voyager-interstellar',
    title: 'Voyager 1 & Interstellar Horizon',
    subtitle: 'Humanity’s Farthest Spacecraft',
    category: 'Deep Space Missions',
    distance: '24.9 Billion km (~166 AU)',
    sizeOrMass: '722 kg Probe (3.7 m Dish)',
    tempOrConstellation: 'Ophiuchus Trajectory (~3 K Space)',
    telescope: 'NASA Deep Space Network (DSN)',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/d/d2/Voyager_spacecraft_model.png',
    svgType: 'voyager',
    badgeClass: 'badge-orange',
    summary:
      'Hurtling beyond the heliopause at 17 km/s, Voyager 1 carries the Golden Record and continues transmitting plasma and magnetic field data from interstellar space.',
    details:
      'Powered by three radioisotope thermoelectric generators (RTGs), Voyager 1 completed historic flybys of Jupiter and Saturn before turning its camera backward in 1990 to capture the iconic "Pale Blue Dot" portrait of Earth suspended in a sunbeam.',
    discoveryNotes:
      'Launched September 5, 1977; crossed the heliopause into interstellar space on August 25, 2012—the first human-made object to do so.'
  }
];

const CATEGORIES = ['All', 'Planets', 'Nebulae', 'Galaxies', 'Deep Space Missions'];

/**
 * Custom procedural SVG space artwork used as an instant visual backdrop
 * and guaranteed fallback so cards never show broken images.
 */
function CelestialVectorArt({ type, title }) {
  switch (type) {
    case 'saturn':
      return (
        <svg viewBox="0 0 800 500" className="ce-svg-art" role="img" aria-label={title}>
          <defs>
            <radialGradient id="saturnBg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="60%" stopColor="#090d16" />
              <stop offset="100%" stopColor="#03050a" />
            </radialGradient>
            <linearGradient id="planetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="45%" stopColor="#d97706" />
              <stop offset="85%" stopColor="#78350f" />
              <stop offset="100%" stopColor="#1c1917" />
            </linearGradient>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.1" />
              <stop offset="25%" stopColor="#fcd34d" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#fde68a" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="800" height="500" fill="url(#saturnBg)" />
          <g transform="translate(400, 250) rotate(-18)">
            <ellipse cx="0" cy="0" rx="310" ry="72" fill="none" stroke="url(#ringGrad)" strokeWidth="28" />
            <ellipse cx="0" cy="0" rx="260" ry="58" fill="none" stroke="#fef3c7" strokeOpacity="0.35" strokeWidth="8" />
            <circle cx="0" cy="0" r="115" fill="url(#planetGrad)" />
            <path d="M -310 0 A 310 72 0 0 0 310 0" fill="none" stroke="url(#ringGrad)" strokeWidth="28" />
          </g>
        </svg>
      );
    case 'jupiter':
      return (
        <svg viewBox="0 0 800 500" className="ce-svg-art" role="img" aria-label={title}>
          <defs>
            <radialGradient id="jupGrad" cx="35%" cy="35%" r="68%">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="85%" stopColor="#7c2d12" />
              <stop offset="100%" stopColor="#1c0a00" />
            </radialGradient>
          </defs>
          <rect width="800" height="500" fill="#04060e" />
          <circle cx="400" cy="250" r="165" fill="url(#jupGrad)" />
          <ellipse cx="400" cy="215" rx="160" ry="14" fill="#fef3c7" opacity="0.35" />
          <ellipse cx="400" cy="250" rx="164" ry="18" fill="#9a3412" opacity="0.55" />
          <ellipse cx="455" cy="285" rx="34" ry="20" fill="#dc2626" opacity="0.8" />
          <ellipse cx="400" cy="312" rx="145" ry="12" fill="#fde68a" opacity="0.3" />
        </svg>
      );
    case 'mars':
      return (
        <svg viewBox="0 0 800 500" className="ce-svg-art" role="img" aria-label={title}>
          <defs>
            <radialGradient id="marsSphere" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="45%" stopColor="#c2410c" />
              <stop offset="85%" stopColor="#7c2d12" />
              <stop offset="100%" stopColor="#1c0a05" />
            </radialGradient>
          </defs>
          <rect width="800" height="500" fill="#05070f" />
          <circle cx="150" cy="95" r="2" fill="#fff" />
          <circle cx="670" cy="130" r="2.5" fill="#fed7aa" />
          <circle cx="620" cy="390" r="1.5" fill="#fff" />
          <circle cx="400" cy="250" r="155" fill="url(#marsSphere)" />
          <ellipse cx="360" cy="215" rx="45" ry="22" fill="#9a3412" opacity="0.45" />
          <ellipse cx="445" cy="285" rx="35" ry="18" fill="#431407" opacity="0.5" />
        </svg>
      );
    case 'nebula':
    case 'pillars':
    case 'crab':
      return (
        <svg viewBox="0 0 800 500" className="ce-svg-art" role="img" aria-label={title}>
          <defs>
            <radialGradient id="neb1" cx="35%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#9333ea" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#050814" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="neb2" cx="68%" cy="55%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
              <stop offset="55%" stopColor="#4f46e5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#050814" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="500" fill="#050814" />
          <rect width="800" height="500" fill="url(#neb1)" />
          <rect width="800" height="500" fill="url(#neb2)" />
          <circle cx="280" cy="210" r="3" fill="#fff" />
          <circle cx="520" cy="180" r="2.5" fill="#bae6fd" />
          <circle cx="430" cy="310" r="3.5" fill="#fde68a" />
          <circle cx="620" cy="140" r="2" fill="#fff" />
        </svg>
      );
    case 'galaxy':
    case 'whirlpool':
      return (
        <svg viewBox="0 0 800 500" className="ce-svg-art" role="img" aria-label={title}>
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="20%" stopColor="#fde047" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#38bdf8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#030712" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="500" fill="#030712" />
          <g transform="translate(400, 250) rotate(-25)">
            <ellipse cx="0" cy="0" rx="300" ry="110" fill="url(#coreGlow)" />
            <ellipse
              cx="0"
              cy="0"
              rx="250"
              ry="85"
              fill="none"
              stroke="#7dd3fc"
              strokeOpacity="0.35"
              strokeWidth="10"
              strokeDasharray="90 35"
            />
            <ellipse
              cx="0"
              cy="0"
              rx="180"
              ry="60"
              fill="none"
              stroke="#c084fc"
              strokeOpacity="0.45"
              strokeWidth="8"
              strokeDasharray="60 25"
            />
          </g>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 800 500" className="ce-svg-art" role="img" aria-label={title}>
          <defs>
            <radialGradient id="earthHorizon" cx="50%" cy="135%" r="95%">
              <stop offset="65%" stopColor="#020617" />
              <stop offset="82%" stopColor="#1d4ed8" />
              <stop offset="90%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>
          </defs>
          <rect width="800" height="500" fill="#020617" />
          <rect width="800" height="500" fill="url(#earthHorizon)" />
          <circle cx="180" cy="110" r="2" fill="#fff" />
          <circle cx="610" cy="95" r="2.5" fill="#e0f2fe" />
          <circle cx="440" cy="70" r="1.5" fill="#fff" />
          <polygon points="400,150 455,182 455,246 400,278 345,246 345,182" fill="none" stroke="#fbbf24" strokeWidth="4" />
        </svg>
      );
  }
}

/**
 * Image wrapper that layers a guaranteed fallback SVG illustration behind
 * the Wikimedia Commons photograph and fades in smoothly once loaded.
 */
function SpaceImage({ item, className = '' }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgError(false);
    setImgLoaded(false);
  }, [item.id]);

  return (
    <div className={`ce-media-box ${className}`}>
      <div className="ce-media-fallback">
        <CelestialVectorArt type={item.svgType} title={item.title} />
      </div>

      {!imgError && (
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`ce-media-img ${imgLoaded ? 'is-loaded' : ''}`}
        />
      )}
    </div>
  );
}

const COMPONENT_STYLES = `
  .ce-root {
    --bg-void: #040711;
    --bg-card: rgba(15, 23, 42, 0.72);
    --bg-panel: rgba(15, 23, 42, 0.82);
    --bg-modal: #0b1020;
    --border-subtle: rgba(51, 65, 85, 0.65);
    --border-glow: rgba(34, 211, 238, 0.5);
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --text-body: #cbd5e1;
    --accent-cyan: #22d3ee;
    --accent-indigo: #6366f1;
    --accent-amber: #fbbf24;

    min-height: 100vh;
    background-color: var(--bg-void);
    background-image:
      radial-gradient(1.5px 1.5px at 12% 18%, rgba(255, 255, 255, 0.75) 50%, transparent 100%),
      radial-gradient(1px 1px at 28% 42%, rgba(186, 230, 253, 0.7) 50%, transparent 100%),
      radial-gradient(2px 2px at 45% 12%, rgba(255, 255, 255, 0.6) 50%, transparent 100%),
      radial-gradient(1px 1px at 67% 28%, rgba(254, 240, 138, 0.7) 50%, transparent 100%),
      radial-gradient(1.5px 1.5px at 84% 16%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
      radial-gradient(1px 1px at 91% 54%, rgba(199, 210, 254, 0.65) 50%, transparent 100%),
      radial-gradient(1.5px 1.5px at 19% 76%, rgba(255, 255, 255, 0.65) 50%, transparent 100%),
      radial-gradient(1px 1px at 56% 81%, rgba(186, 230, 253, 0.6) 50%, transparent 100%),
      radial-gradient(circle at 12% 8%, rgba(79, 70, 229, 0.16), transparent 42%),
      radial-gradient(circle at 88% 35%, rgba(6, 182, 212, 0.12), transparent 45%);
    background-size: 520px 520px, 640px 640px, 480px 480px, 700px 700px, 560px 560px, 610px 610px, 540px 540px, 680px 680px, 100% 100%, 100% 100%;
    color: var(--text-main);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    position: relative;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .ce-root *, .ce-root *::before, .ce-root *::after {
    box-sizing: border-box;
  }

  .ce-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2.5rem 1.25rem 4rem;
    position: relative;
    z-index: 2;
  }

  /* Header */
  .ce-header {
    margin-bottom: 2.5rem;
  }

  .ce-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.9rem;
    border-radius: 9999px;
    background: rgba(99, 102, 241, 0.14);
    border: 1px solid rgba(129, 140, 248, 0.3);
    color: #c7d2fe;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 1.25rem;
  }

  .ce-eyebrow-icon {
    color: var(--accent-cyan);
  }

  .ce-header-row {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (min-width: 960px) {
    .ce-header-row {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }
  }

  .ce-title-block {
    max-width: 42rem;
  }

  .ce-title {
    margin: 0;
    font-size: clamp(2rem, 4vw, 3.1rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: #ffffff;
  }

  .ce-title-gradient {
    background: linear-gradient(90deg, #67e8f9, #818cf8, #c084fc);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .ce-subtitle {
    margin: 1rem 0 0;
    color: var(--text-body);
    font-size: 1.05rem;
    line-height: 1.65;
  }

  /* Stats Bar */
  .ce-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    background: rgba(15, 23, 42, 0.78);
    backdrop-filter: blur(12px);
    border: 1px solid var(--border-subtle);
    border-radius: 1rem;
    padding: 1rem 1.1rem;
    flex-shrink: 0;
  }

  .ce-stat-item {
    padding: 0 0.5rem;
  }

  .ce-stat-item--bordered {
    border-left: 1px solid rgba(51, 65, 85, 0.8);
    border-right: 1px solid rgba(51, 65, 85, 0.8);
    padding: 0 0.85rem;
  }

  .ce-stat-label {
    margin: 0;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-muted);
  }

  .ce-stat-val {
    margin: 0.25rem 0 0;
    font-size: 1.35rem;
    font-weight: 700;
    color: #ffffff;
  }

  .ce-stat-unit {
    font-size: 0.75rem;
    font-weight: 500;
    margin-left: 0.2rem;
  }

  .ce-unit-cyan { color: #22d3ee; }
  .ce-unit-indigo { color: #818cf8; }
  .ce-unit-amber { color: #fbbf24; }

  /* Controls Toolbar */
  .ce-controls {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    margin-bottom: 2rem;
    padding: 0.85rem;
    border-radius: 1.1rem;
    background: var(--bg-panel);
    backdrop-filter: blur(16px);
    border: 1px solid var(--border-subtle);
    box-shadow: 0 20px 35px -15px rgba(0, 0, 0, 0.6);
  }

  @media (min-width: 1024px) {
    .ce-controls {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  .ce-tabs {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    overflow-x: auto;
    padding-bottom: 0.2rem;
  }

  @media (min-width: 1024px) {
    .ce-tabs {
      padding-bottom: 0;
    }
  }

  .ce-tab-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    border-radius: 0.75rem;
    border: 1px solid transparent;
    background: transparent;
    color: var(--text-body);
    font-size: 0.875rem;
    font-weight: 500;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .ce-tab-btn:hover {
    color: #ffffff;
    background: rgba(30, 41, 59, 0.85);
  }

  .ce-tab-btn.is-active {
    background: linear-gradient(135deg, #4f46e5, #0891b2);
    color: #ffffff;
    box-shadow: 0 8px 20px -6px rgba(79, 70, 229, 0.6);
  }

  .ce-search-group {
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }

  .ce-search-wrap {
    position: relative;
    flex: 1;
    min-width: 220px;
  }

  .ce-search-icon {
    position: absolute;
    left: 0.85rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    pointer-events: none;
    display: flex;
  }

  .ce-search-input {
    width: 100%;
    background: rgba(2, 6, 23, 0.85);
    border: 1px solid rgba(51, 65, 85, 0.9);
    border-radius: 0.75rem;
    padding: 0.58rem 2.1rem 0.58rem 2.4rem;
    color: #f8fafc;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .ce-search-input::placeholder {
    color: #64748b;
  }

  .ce-search-input:focus {
    border-color: var(--accent-cyan);
    box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.18);
  }

  .ce-clear-btn {
    position: absolute;
    right: 0.6rem;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0.2rem;
    display: flex;
    align-items: center;
  }

  .ce-clear-btn:hover {
    color: #ffffff;
  }

  .ce-saved-filter-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.58rem 0.95rem;
    border-radius: 0.75rem;
    background: rgba(2, 6, 23, 0.85);
    border: 1px solid rgba(51, 65, 85, 0.9);
    color: var(--text-body);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    flex-shrink: 0;
    transition: all 0.2s ease;
  }

  .ce-saved-filter-btn:hover {
    color: #ffffff;
    border-color: #64748b;
  }

  .ce-saved-filter-btn.is-active {
    background: rgba(245, 158, 11, 0.18);
    border-color: rgba(251, 191, 36, 0.5);
    color: #fcd34d;
  }

  /* Empty State */
  .ce-empty {
    text-align: center;
    padding: 4.5rem 1.5rem;
    background: rgba(15, 23, 42, 0.5);
    border: 1px solid var(--border-subtle);
    border-radius: 1.5rem;
  }

  .ce-empty-icon {
    color: #64748b;
    margin-bottom: 1rem;
  }

  .ce-empty-title {
    margin: 0;
    font-size: 1.25rem;
    color: #ffffff;
  }

  .ce-empty-desc {
    margin: 0.5rem auto 0;
    max-width: 28rem;
    color: var(--text-muted);
    font-size: 0.95rem;
  }

  .ce-reset-btn {
    margin-top: 1.4rem;
    padding: 0.65rem 1.3rem;
    border-radius: 0.75rem;
    border: none;
    background: #4f46e5;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .ce-reset-btn:hover {
    background: #6366f1;
  }

  /* Cards Grid */
  .ce-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.65rem;
  }

  @media (min-width: 720px) {
    .ce-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1080px) {
    .ce-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .ce-card {
    display: flex;
    flex-direction: column;
    background: var(--bg-card);
    backdrop-filter: blur(12px);
    border: 1px solid var(--border-subtle);
    border-radius: 1.4rem;
    overflow: hidden;
    box-shadow: 0 12px 28px -10px rgba(0, 0, 0, 0.65);
    transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
    cursor: pointer;
  }

  .ce-card:hover {
    transform: translateY(-5px);
    border-color: var(--border-glow);
    box-shadow: 0 22px 40px -12px rgba(8, 145, 178, 0.28);
  }

  .ce-card-media {
    position: relative;
    height: 230px;
    width: 100%;
    overflow: hidden;
  }

  .ce-media-box {
    position: relative;
    width: 100%;
    height: 100%;
    background: #020617;
    overflow: hidden;
  }

  .ce-media-fallback,
  .ce-svg-art {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .ce-media-img {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transform: scale(1.04);
    transition: opacity 0.6s ease, transform 0.7s ease;
  }

  .ce-media-img.is-loaded {
    opacity: 1;
    transform: scale(1);
  }

  .ce-card:hover .ce-media-img.is-loaded {
    transform: scale(1.06);
  }

  .ce-card-gradient {
    position: absolute;
    inset: 0;
    z-index: 3;
    background: linear-gradient(to top, rgba(4, 7, 17, 0.96) 5%, rgba(4, 7, 17, 0.2) 55%, transparent 100%);
    pointer-events: none;
  }

  .ce-card-top-bar {
    position: absolute;
    top: 0.95rem;
    left: 0.95rem;
    right: 0.95rem;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .ce-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.32rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    backdrop-filter: blur(10px);
    border: 1px solid transparent;
  }

  .badge-amber { background: rgba(245, 158, 11, 0.22); color: #fcd34d; border-color: rgba(245, 158, 11, 0.38); }
  .badge-orange { background: rgba(249, 115, 22, 0.22); color: #fdba74; border-color: rgba(249, 115, 22, 0.38); }
  .badge-red { background: rgba(239, 68, 68, 0.22); color: #fca5a5; border-color: rgba(239, 68, 68, 0.38); }
  .badge-fuchsia { background: rgba(217, 70, 239, 0.22); color: #f0abfc; border-color: rgba(217, 70, 239, 0.38); }
  .badge-cyan { background: rgba(6, 182, 212, 0.22); color: #67e8f9; border-color: rgba(6, 182, 212, 0.38); }
  .badge-violet { background: rgba(139, 92, 246, 0.22); color: #c4b5fd; border-color: rgba(139, 92, 246, 0.38); }
  .badge-emerald { background: rgba(16, 185, 129, 0.22); color: #6ee7b7; border-color: rgba(16, 185, 129, 0.38); }

  .ce-bookmark-btn {
    width: 2.15rem;
    height: 2.15rem;
    border-radius: 9999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(2, 6, 23, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: var(--text-body);
    backdrop-filter: blur(8px);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .ce-bookmark-btn:hover {
    color: #ffffff;
    background: rgba(15, 23, 42, 0.95);
  }

  .ce-bookmark-btn.is-saved {
    background: rgba(245, 158, 11, 0.25);
    border-color: rgba(251, 191, 36, 0.55);
    color: #fcd34d;
  }

  .ce-card-bottom-bar {
    position: absolute;
    bottom: 0.8rem;
    left: 0.95rem;
    right: 0.95rem;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
  }

  .ce-distance-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.28rem 0.65rem;
    border-radius: 0.55rem;
    background: rgba(2, 6, 23, 0.78);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #e2e8f0;
    backdrop-filter: blur(8px);
  }

  .ce-inspect-hint {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    color: #67e8f9;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .ce-card:hover .ce-inspect-hint {
    opacity: 1;
  }

  .ce-card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.4rem;
  }

  .ce-card-kicker {
    margin: 0 0 0.3rem;
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #818cf8;
  }

  .ce-card-title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.35;
    color: #ffffff;
    transition: color 0.2s ease;
  }

  .ce-card:hover .ce-card-title {
    color: #67e8f9;
  }

  .ce-card-summary {
    margin: 0.75rem 0 0;
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--text-body);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .ce-card-footer {
    margin-top: 1.35rem;
    padding-top: 0.9rem;
    border-top: 1px solid rgba(51, 65, 85, 0.65);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: 0.76rem;
    color: var(--text-muted);
  }

  .ce-telescope-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 65%;
  }

  .ce-telemetry-link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: #e2e8f0;
    font-weight: 600;
  }

  /* Modal Overlay & Dialog */
  .ce-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: rgba(2, 6, 23, 0.84);
    backdrop-filter: blur(10px);
  }

  .ce-modal {
    position: relative;
    width: 100%;
    max-width: 880px;
    max-height: 90vh;
    overflow-y: auto;
    background: var(--bg-modal);
    border: 1px solid rgba(71, 85, 105, 0.8);
    border-radius: 1.5rem;
    box-shadow: 0 28px 60px -12px rgba(0, 0, 0, 0.85);
  }

  .ce-modal-topbar {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.9rem 1.25rem;
    background: rgba(11, 16, 32, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(51, 65, 85, 0.75);
  }

  .ce-modal-left-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .ce-kbd-hint {
    display: none;
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  @media (min-width: 640px) {
    .ce-kbd-hint {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
    }
  }

  .ce-kbd {
    padding: 0.12rem 0.4rem;
    border-radius: 0.3rem;
    background: #1e293b;
    color: #e2e8f0;
    font-family: monospace;
    font-size: 0.72rem;
  }

  .ce-modal-actions {
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }

  .ce-icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.48rem;
    border-radius: 0.65rem;
    background: rgba(30, 41, 59, 0.85);
    border: 1px solid rgba(71, 85, 105, 0.6);
    color: #e2e8f0;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .ce-icon-btn:hover {
    background: #334155;
    color: #ffffff;
  }

  .ce-icon-btn--close:hover {
    background: rgba(244, 63, 94, 0.22);
    border-color: rgba(244, 63, 94, 0.45);
    color: #fda4af;
  }

  .ce-modal-save-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.48rem 0.8rem;
    border-radius: 0.65rem;
    background: rgba(30, 41, 59, 0.85);
    border: 1px solid rgba(71, 85, 105, 0.65);
    color: #e2e8f0;
    font-size: 0.78rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .ce-modal-save-btn.is-saved {
    background: rgba(245, 158, 11, 0.2);
    border-color: rgba(251, 191, 36, 0.5);
    color: #fcd34d;
  }

  .ce-modal-hero {
    position: relative;
    height: 310px;
    width: 100%;
    background: #020617;
  }

  @media (min-width: 640px) {
    .ce-modal-hero {
      height: 370px;
    }
  }

  .ce-modal-hero-fade {
    position: absolute;
    inset: 0;
    z-index: 3;
    background: linear-gradient(to top, var(--bg-modal) 4%, transparent 65%);
    pointer-events: none;
  }

  .ce-modal-hero-title-wrap {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    right: 1.5rem;
    z-index: 4;
  }

  .ce-modal-kicker {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent-cyan);
  }

  .ce-modal-title {
    margin: 0.3rem 0 0;
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 800;
    color: #ffffff;
  }

  .ce-modal-content {
    padding: 1.5rem 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .ce-telemetry-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.85rem;
  }

  @media (min-width: 640px) {
    .ce-telemetry-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .ce-telemetry-card {
    padding: 1rem;
    border-radius: 1rem;
    background: rgba(15, 23, 42, 0.92);
    border: 1px solid rgba(51, 65, 85, 0.85);
  }

  .ce-telemetry-label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .ce-telemetry-value {
    margin: 0.45rem 0 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #ffffff;
  }

  .ce-modal-summary {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1.65;
    color: #f1f5f9;
  }

  .ce-modal-details {
    margin: 0.75rem 0 0;
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-body);
  }

  .ce-discovery-box {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
    padding: 1.1rem 1.25rem;
    border-radius: 1rem;
    background: rgba(30, 27, 75, 0.42);
    border: 1px solid rgba(99, 102, 241, 0.32);
  }

  .ce-discovery-icon {
    color: var(--accent-cyan);
    flex-shrink: 0;
    margin-top: 0.15rem;
  }

  .ce-discovery-heading {
    margin: 0;
    font-size: 0.74rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #67e8f9;
  }

  .ce-discovery-text {
    margin: 0.35rem 0 0;
    font-size: 0.88rem;
    line-height: 1.6;
    color: #e2e8f0;
  }

  .ce-modal-footer {
    padding-top: 1rem;
    border-top: 1px solid rgba(51, 65, 85, 0.8);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    font-size: 0.78rem;
    color: var(--text-muted);
  }

  .ce-modal-footer strong {
    color: #f8fafc;
  }
`;

export function CosmosExplorer() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState(null);
  const [bookmarkedIds, setBookmarkedIds] = useState(['pillars-of-creation', 'saturn-rings']);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Filter cosmic entries by category, search query, and saved bookmarks toggle
  const filteredItems = useMemo(() => {
    return SPACE_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSaved = !showFavoritesOnly || bookmarkedIds.includes(item.id);
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.tempOrConstellation.toLowerCase().includes(q) ||
        item.telescope.toLowerCase().includes(q);

      return matchesCategory && matchesSaved && matchesSearch;
    });
  }, [selectedCategory, searchQuery, showFavoritesOnly, bookmarkedIds]);

  const navigateModal = useCallback(
    (direction) => {
      if (!activeItem || filteredItems.length <= 1) return;
      const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
      if (currentIndex === -1) return;
      const nextIndex =
        (currentIndex + direction + filteredItems.length) % filteredItems.length;
      setActiveItem(filteredItems[nextIndex]);
    },
    [activeItem, filteredItems]
  );

  // Keyboard navigation for detail modal (Escape to close, Left/Right arrows to browse)
  useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveItem(null);
      } else if (e.key === 'ArrowRight') {
        navigateModal(1);
      } else if (e.key === 'ArrowLeft') {
        navigateModal(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, navigateModal]);

  const toggleBookmark = (e, id) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getCategoryIconName = (category) => {
    switch (category) {
      case 'Planets':
        return 'globe';
      case 'Nebulae':
        return 'sparkles';
      case 'Galaxies':
        return 'orbit';
      case 'Deep Space Missions':
        return 'rocket';
      default:
        return 'telescope';
    }
  };

  return (
    <div className="ce-root">
      <style>{COMPONENT_STYLES}</style>

      <div className="ce-container">
        {/* Hero Header */}
        <header className="ce-header">
          <div className="ce-eyebrow">
            <span className="ce-eyebrow-icon">
              <Icon name="sparkles" size={14} />
            </span>
            <span>Deep Space Observatory &amp; Archive</span>
          </div>

          <div className="ce-header-row">
            <div className="ce-title-block">
              <h1 className="ce-title">
                Wonders of the{' '}
                <span className="ce-title-gradient">Observable Cosmos</span>
              </h1>
              <p className="ce-subtitle">
                Explore stellar nurseries, neighboring spiral galaxies, ringed gas giants, and deep-space probes through high-resolution imagery and scientific field notes.
              </p>
            </div>

            {/* Observatory Telemetry Summary */}
            <div className="ce-stats">
              <div className="ce-stat-item">
                <p className="ce-stat-label">Catalog</p>
                <p className="ce-stat-val">
                  {SPACE_ITEMS.length}
                  <span className="ce-stat-unit ce-unit-cyan">Objects</span>
                </p>
              </div>
              <div className="ce-stat-item ce-stat-item--bordered">
                <p className="ce-stat-label">Max Span</p>
                <p className="ce-stat-val">
                  23.5M
                  <span className="ce-stat-unit ce-unit-indigo">LY</span>
                </p>
              </div>
              <div className="ce-stat-item">
                <p className="ce-stat-label">Favorites</p>
                <p className="ce-stat-val">
                  {bookmarkedIds.length}
                  <span className="ce-stat-unit ce-unit-amber">Saved</span>
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Controls Toolbar: Category Tabs + Search + Saved Toggle */}
        <section aria-label="Gallery Controls" className="ce-controls">
          <div className="ce-tabs">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`ce-tab-btn ${isActive ? 'is-active' : ''}`}
                >
                  <Icon name={getCategoryIconName(category)} size={16} />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>

          <div className="ce-search-group">
            <div className="ce-search-wrap">
              <span className="ce-search-icon">
                <Icon name="search" size={16} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cosmos, missions..."
                aria-label="Search space entries"
                className="ce-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="ce-clear-btn"
                >
                  <Icon name="x" size={14} />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setShowFavoritesOnly((prev) => !prev)}
              title="Toggle saved bookmarks"
              className={`ce-saved-filter-btn ${showFavoritesOnly ? 'is-active' : ''}`}
            >
              <Icon name="bookmark" size={16} filled={showFavoritesOnly} />
              <span>Saved ({bookmarkedIds.length})</span>
            </button>
          </div>
        </section>

        {/* Celestial Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="ce-empty">
            <div className="ce-empty-icon">
              <Icon name="compass" size={44} />
            </div>
            <h2 className="ce-empty-title">No Celestial Objects Found</h2>
            <p className="ce-empty-desc">
              No entries match your active filters. Try clearing your search query or switching back to all categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setShowFavoritesOnly(false);
              }}
              className="ce-reset-btn"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="ce-grid">
            {filteredItems.map((item) => {
              const isBookmarked = bookmarkedIds.includes(item.id);
              return (
                <article
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="ce-card"
                >
                  <div className="ce-card-media">
                    <SpaceImage item={item} />
                    <div className="ce-card-gradient" />

                    <div className="ce-card-top-bar">
                      <span className={`ce-badge ${item.badgeClass}`}>
                        <Icon name={getCategoryIconName(item.category)} size={14} />
                        {item.category}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => toggleBookmark(e, item.id)}
                        aria-label={isBookmarked ? 'Remove from saved' : 'Save entry'}
                        className={`ce-bookmark-btn ${isBookmarked ? 'is-saved' : ''}`}
                      >
                        <Icon name="bookmark" size={15} filled={isBookmarked} />
                      </button>
                    </div>

                    <div className="ce-card-bottom-bar">
                      <span className="ce-distance-pill">
                        <span className="ce-unit-cyan">
                          <Icon name="star" size={13} />
                        </span>
                        {item.distance}
                      </span>
                      <span className="ce-inspect-hint">
                        Inspect <Icon name="maximize" size={13} />
                      </span>
                    </div>
                  </div>

                  <div className="ce-card-body">
                    <div>
                      <p className="ce-card-kicker">{item.subtitle}</p>
                      <h2 className="ce-card-title">{item.title}</h2>
                      <p className="ce-card-summary">{item.summary}</p>
                    </div>

                    <div className="ce-card-footer">
                      <span className="ce-telescope-label" title={item.telescope}>
                        {item.telescope}
                      </span>
                      <span className="ce-telemetry-link">
                        Telemetry{' '}
                        <span className="ce-unit-cyan">
                          <Icon name="chevronRight" size={15} />
                        </span>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Interactive Telemetry Detail Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setActiveItem(null)}
          className="ce-modal-backdrop"
        >
          <div onClick={(e) => e.stopPropagation()} className="ce-modal">
            <div className="ce-modal-topbar">
              <div className="ce-modal-left-meta">
                <span className={`ce-badge ${activeItem.badgeClass}`}>
                  <Icon name={getCategoryIconName(activeItem.category)} size={14} />
                  {activeItem.category}
                </span>
                <span className="ce-kbd-hint">
                  Use <kbd className="ce-kbd">←</kbd> <kbd className="ce-kbd">→</kbd> to navigate
                </span>
              </div>

              <div className="ce-modal-actions">
                {filteredItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => navigateModal(-1)}
                      aria-label="Previous entry"
                      className="ce-icon-btn"
                    >
                      <Icon name="chevronLeft" size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => navigateModal(1)}
                      aria-label="Next entry"
                      className="ce-icon-btn"
                    >
                      <Icon name="chevronRight" size={16} />
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={(e) => toggleBookmark(e, activeItem.id)}
                  className={`ce-modal-save-btn ${
                    bookmarkedIds.includes(activeItem.id) ? 'is-saved' : ''
                  }`}
                >
                  {bookmarkedIds.includes(activeItem.id) ? (
                    <>
                      <Icon name="check" size={14} /> Saved
                    </>
                  ) : (
                    <>
                      <Icon name="bookmark" size={14} /> Save
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  aria-label="Close modal"
                  className="ce-icon-btn ce-icon-btn--close"
                >
                  <Icon name="x" size={18} />
                </button>
              </div>
            </div>

            <div className="ce-modal-hero">
              <SpaceImage item={activeItem} />
              <div className="ce-modal-hero-fade" />
              <div className="ce-modal-hero-title-wrap">
                <p className="ce-modal-kicker">{activeItem.subtitle}</p>
                <h2 id="modal-title" className="ce-modal-title">
                  {activeItem.title}
                </h2>
              </div>
            </div>

            <div className="ce-modal-content">
              <div className="ce-telemetry-grid">
                <div className="ce-telemetry-card">
                  <div className="ce-telemetry-label ce-unit-cyan">
                    <Icon name="compass" size={14} />
                    <span>Distance</span>
                  </div>
                  <p className="ce-telemetry-value">{activeItem.distance}</p>
                </div>

                <div className="ce-telemetry-card">
                  <div className="ce-telemetry-label ce-unit-indigo">
                    <Icon name="ruler" size={14} />
                    <span>Size / Mass</span>
                  </div>
                  <p className="ce-telemetry-value">{activeItem.sizeOrMass}</p>
                </div>

                <div className="ce-telemetry-card">
                  <div className="ce-telemetry-label ce-unit-amber">
                    <Icon name="thermometer" size={14} />
                    <span>Temp / Constellation</span>
                  </div>
                  <p className="ce-telemetry-value">{activeItem.tempOrConstellation}</p>
                </div>
              </div>

              <div>
                <p className="ce-modal-summary">{activeItem.summary}</p>
                <p className="ce-modal-details">{activeItem.details}</p>
              </div>

              <div className="ce-discovery-box">
                <span className="ce-discovery-icon">
                  <Icon name="info" size={20} />
                </span>
                <div>
                  <h3 className="ce-discovery-heading">
                    Discovery &amp; Observation Notes
                  </h3>
                  <p className="ce-discovery-text">{activeItem.discoveryNotes}</p>
                </div>
              </div>

              <div className="ce-modal-footer">
                <span>
                  Primary Instrument: <strong>{activeItem.telescope}</strong>
                </span>
                <span>
                  Classification: <strong className="ce-unit-cyan">{activeItem.category}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return <CosmosExplorer />;
}