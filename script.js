// ─── SOCIAL LINKS ───────────────────────────────────────
const LHG_INSTAGRAM  = "https://www.instagram.com/latinhousegangmusic/";
const LHG_SPOTIFY    = "https://open.spotify.com/intl-es/artist/7L2xCq0Mc82JvdEYFydl9H";
const LHG_APPLE      = "https://music.apple.com/mx/artist/latin-house-gang/1773443298";
const LHG_YOUTUBE    = "https://www.youtube.com/channel/UCR5vibL8REsZgGjX4G1fMBQ";
const LHG_SOUNDCLOUD = "https://soundcloud.com/latinhousegangmusic";
const LHG_BEATPORT   = "https://www.beatport.com/es/label/latin-house-gang/125534";

// ─── ARTISTS ────────────────────────────────────────────
// Note: instagram null/# = no confirmed IG → icon is hidden
const artists = [
  { name: "MichaelBM",      aliases: ["Michael"],
    instagram: "https://www.instagram.com/michaelbmmusic/",
    spotify:   "https://open.spotify.com/intl-es/artist/6RY7vqzR938x0DE0Eh6srl",
    apple:     "https://music.apple.com/mx/artist/michaelbm/1016031177" },
  { name: "Bautista",       aliases: [],
    instagram: "https://www.instagram.com/bautista.wav/",
    spotify:   "https://open.spotify.com/intl-es/artist/5oryDmGJCySSpMFY9YUeb1",
    apple:     "https://music.apple.com/mx/artist/bautista/1533307995" },
  { name: "Cele Arrabal",   aliases: [],
    instagram: null,   // no IG confirmed — icon hidden
    spotify:   "https://open.spotify.com/intl-es/artist/36GC5ob1mWpu07UpvMAYnl",
    apple:     "https://music.apple.com/mx/artist/cele-arrabal/1515168401" },
  { name: "Paskman",        aliases: [],
    instagram: null,   // no IG confirmed — icon hidden
    spotify:   "https://open.spotify.com/intl-es/artist/53WBL9mWs6KRVyrWBB6Fen",
    apple:     "https://music.apple.com/mx/artist/paskman/1449989316" },
  { name: "Minow",          aliases: [],
    instagram: "https://www.instagram.com/minowmusic/",
    spotify:   "https://open.spotify.com/intl-es/artist/4z5hE5cqCfTsCZ60IVAgRC",
    apple:     "https://music.apple.com/mx/artist/minow/1041611713" },
  { name: "Boltron",        aliases: [],
    instagram: "https://www.instagram.com/boltronmusic/",
    spotify:   "https://open.spotify.com/intl-es/artist/4yiUOYE4qfKINbGjeePqiG",
    apple:     "https://music.apple.com/mx/artist/boltron/1535833423" },
  { name: "Gama",           aliases: [],
    instagram: "https://www.instagram.com/gamamusicmx/",
    spotify:   "https://open.spotify.com/intl-es/artist/3dz2bNMWfMiLkiHTIrQVmY",
    apple:     "https://music.apple.com/mx/artist/gama/193501778" },
  { name: "House Music Bro",aliases: [],
    instagram: "https://www.instagram.com/housemusicbro/",
    spotify:   "https://open.spotify.com/intl-es/artist/70s7RdFqr3UEBlooMGUQdO",
    apple:     "https://music.apple.com/mx/artist/house-music-bro/1527524092" }
];

// Build lookup map (name + aliases)
const artistMap = {};
artists.forEach(a => {
  artistMap[a.name] = a;
  a.aliases.forEach(alias => { artistMap[alias] = a; });
});

function getArtistLink(name, type) {
  const a = artistMap[name];
  if (!a) return null;
  const val = a[type];
  return (val && val !== '#') ? val : null;
}

// ─── DATA — RELEASES ────────────────────────────────────
const releases = [
  {
    catalog: "LHG #029", title: "Britney", artist: "Cele Arrabal", year: "2026",
    coverUrl: "/covers/BRITNEY_cover.jpg",
    appleUrl: "https://music.apple.com/mx/album/britney-single/1886458544",
    spotifyUrl: "https://open.spotify.com/intl-es/album/2waAf6LbGfTHBWgd5KChKE",
    beatportUrl: "https://www.beatport.com/es/release/britney/6490527"
  },
  {
    catalog: "LHG #028", title: "Barranquilla", artist: "Jayie · MichaelBM · Vika", year: "2026",
    coverUrl: "/covers/BARRANQUILLA_cover.jpg",
    appleUrl: "https://music.apple.com/mx/album/barranquilla-single/1889300875",
    spotifyUrl: "https://open.spotify.com/intl-es/album/1xGLKYqMuN7Cm37vL1XxBv",
    beatportUrl: "https://www.beatport.com/es/release/barranquilla-extended-mix/6755066"
  },
  {
    catalog: "LHG #027", title: "Latin House Gang Vol.4", artist: "Various Artists", year: "2026",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e9/4f/a5/e94fa523-1a34-89e4-95ef-2a78269ed494/cover.jpg/600x600bf-60.jpg",
    appleUrl: "https://music.apple.com/mx/album/latin-house-gang-vol-4/1889233062",
    spotifyUrl: "https://open.spotify.com/intl-es/album/4yBJXYf5bAcrxcrYYgJBq0",
    beatportUrl: "https://www.beatport.com/es/release/latin-house-gang-vol4/6725451"
  },
  {
    catalog: "LHG #026", title: "Ciempiés", artist: "Paskman", year: "2026",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d2/1f/ac/d21fac81-3c72-fc41-fffd-de8613386069/cover.jpg/600x600bf-60.jpg",
    appleUrl: "https://music.apple.com/mx/album/ciempi%C3%A9s/1884037374?i=1884037375",
    spotifyUrl: "https://open.spotify.com/intl-es/album/64lEVztoenFon4IPHRR4Pp",
    beatportUrl: "https://www.beatport.com/es/release/ciempies/6421561"
  },
  {
    catalog: "LHG #025", title: "Lover", artist: "Bautista", year: "2026",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/74/7a/32/747a3273-994d-0989-40bf-e2f7867668d1/cover.jpg/600x600bf-60.jpg",
    appleUrl: "https://music.apple.com/mx/album/lover/1874009473?i=1874009474",
    spotifyUrl: "https://open.spotify.com/intl-es/album/0cIk6DGPJ4rXRcZeIO7yUE",
    beatportUrl: "https://www.beatport.com/es/release/lover/5879574"
  },
  {
    catalog: "LHG #024", title: "Diabolica", artist: "Kofla · Rob Session · Marin", year: "2026",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/90/49/15/9049153d-a5d7-5f16-7c5c-60dcff61afaf/cover.jpg/600x600bf-60.jpg",
    appleUrl: "https://music.apple.com/mx/album/diabolica-single/1859209334",
    spotifyUrl: "https://open.spotify.com/intl-es/album/5FJdmzVzZDxrFWopCoyaaY",
    beatportUrl: "https://www.beatport.com/es/release/diabolica/5689482"
  },
  {
    catalog: "LHG #023", title: "Popper (Alta Gama)", artist: "MichaelBM · Freenzy · Barbara Doza", year: "2025",
    coverUrl: "/covers/POPPER_cover.jpg",
    appleUrl: "https://music.apple.com/mx/album/popper-alta-gama-single/1856919367",
    spotifyUrl: "https://open.spotify.com/intl-es/album/3wZmJlW1xeFZMBcz6IQWaF",
    beatportUrl: "https://www.beatport.com/es/release/popper-alta-gama/5660029"
  },
  {
    catalog: "LHG #022", title: "Latin House Gang Vol.3", artist: "Various Artists", year: "2025",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/33/34/48333404-8fe5-8acd-be8b-881129bef7c9/cover.jpg/600x600bf-60.jpg",
    appleUrl: "https://music.apple.com/mx/album/latin-house-gang-vol-3/1848993532",
    spotifyUrl: "https://open.spotify.com/intl-es/album/65WNZY2whziZrGu3KOSump",
    beatportUrl: "https://www.beatport.com/es/release/latin-house-gang-vol3/5540502"
  }
];

// Eventos anteriores eliminados hasta tener fechas reales confirmadas
const eventos = [
  {
    id: "evento-1",
    nombre: "UNDERGROUND SESSION VOL.3",
    fecha: "Saturday 26 July 2025", hora: "23:00 — 06:00",
    venue: "El Bunker", direccion: "Col. Doctores, CDMX, México",
    ciudad: "CDMX, México", precioDesde: 280, moneda: "MXN",
    status: "upcoming", lugaresLimitados: false, flyer: null,
    lineup: ["Minow", "Gama"],
    tickets: [
      { tipo: "EARLY BIRD", descripcion: "Limited presale",   precio: 180 },
      { tipo: "GENERAL",    descripcion: "General admission", precio: 280 }
    ]
  },
  {
    id: "evento-2",
    nombre: "LHG SHOWCASE",
    fecha: "Saturday 23 August 2025", hora: "22:00 — 05:00",
    venue: "Foro 45", direccion: "Av. Américas 1254, Guadalajara, Jalisco",
    ciudad: "Guadalajara, México", precioDesde: 320, moneda: "MXN",
    status: "upcoming", lugaresLimitados: true, flyer: null,
    lineup: ["MichaelBM", "Bautista", "Gama", "Minow"],
    tickets: [
      { tipo: "PRE-SALE", descripcion: "Pre-sale price", precio: 320 },
      { tipo: "DOOR",     descripcion: "Door price",     precio: 450 }
    ]
  }
];

// ─── HELPERS ────────────────────────────────────────────
function parseFecha(fechaStr) {
  const months = {
    'january':0,'february':1,'march':2,'april':3,'may':4,'june':5,
    'july':6,'august':7,'september':8,'october':9,'november':10,'december':11
  };
  const parts = fechaStr.toLowerCase().split(' ');
  const day = parseInt(parts[1]);
  const month = months[parts[2]];
  const year = parseInt(parts[3]);
  return { day, month, monthName: parts[2].charAt(0).toUpperCase() + parts[2].slice(1), weekday: parts[0].charAt(0).toUpperCase() + parts[0].slice(1), year };
}

// ─── SOCIAL SVGs ────────────────────────────────────────
const SPOTIFY_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`;
const APPLE_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`;
const YOUTUBE_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.376-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
const SOUNDCLOUD_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M1.175 12.225c-.016 0-.024.01-.024.025l.435 2.716-.435 2.7c0 .014.008.024.024.024s.024-.01.024-.025l.484-2.7-.484-2.716c0-.014-.008-.024-.024-.024zm.966-.69c-.02 0-.03.012-.03.03l-.395 3.405.395 3.36c0 .018.01.03.03.03s.03-.012.03-.03l.446-3.36-.446-3.404c0-.018-.012-.03-.03-.03zm1.003-.395c-.022 0-.04.017-.04.038L2.72 15l.384 3.338c0 .022.018.038.04.038s.04-.016.04-.038L3.578 15l-.434-3.822c0-.022-.018-.038-.04-.038zm1.066-.23c-.024 0-.044.02-.044.044L3.83 15l.336 3.142c0 .024.02.044.044.044s.044-.02.044-.044L4.59 15l-.38-3.146c0-.024-.02-.044-.044-.044zm1.033-.184c-.026 0-.048.022-.048.048L4.86 15l.335 3.08c0 .026.022.048.048.048s.048-.022.048-.048L5.627 15l-.384-3.226c0-.026-.022-.048-.048-.048zM8.5 9c-.55 0-1.077.1-1.563.28C6.56 7.97 5.2 7 3.6 7 1.612 7 0 8.612 0 10.6v.05C0 12.478 1.343 14 3 14h.5v.01H16c1.657 0 3-1.343 3-3a3 3 0 00-3-3c-.16 0-.317.013-.471.038A4.5 4.5 0 008.5 9z"/></svg>`;

function initSocialIcons() {
  const spotifyLink   = `<a href="${LHG_SPOTIFY}"    target="_blank" rel="noopener" aria-label="Spotify">${SPOTIFY_SVG}</a>`;
  const appleLink     = `<a href="${LHG_APPLE}"      target="_blank" rel="noopener" aria-label="Apple Music">${APPLE_SVG}</a>`;
  const youtubeLink   = `<a href="${LHG_YOUTUBE}"    target="_blank" rel="noopener" aria-label="YouTube">${YOUTUBE_SVG}</a>`;
  const scLink        = `<a href="${LHG_SOUNDCLOUD}" target="_blank" rel="noopener" aria-label="SoundCloud"><img src="/icons/soundcloud.png" alt="SoundCloud" class="social-logo" style="height:20px;width:auto;display:block;"></a>`;
  const bpLink        = `<a href="${LHG_BEATPORT}"   target="_blank" rel="noopener" aria-label="Beatport"><img src="/icons/beatport.png" alt="Beatport" class="social-logo" style="height:20px;width:auto;display:block;"></a>`;

  const allIcons = spotifyLink + appleLink + youtubeLink + scLink + bpLink;

  document.querySelectorAll('.nav-icons, .nav-mobile-icons').forEach(el => {
    el.insertAdjacentHTML('beforeend', allIcons);
  });

  document.querySelectorAll('.footer-social').forEach(el => {
    el.insertAdjacentHTML('beforeend', allIcons);
  });
}

// ─── NAVBAR ─────────────────────────────────────────────
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      const spans = hamburger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }

  // Mark active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ─── RELEASES GRID ──────────────────────────────────────
function renderReleases(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = limit ? releases.slice(0, limit) : releases;
  container.innerHTML = list.map(r => {
    const coverHtml = r.coverUrl
      ? `<img src="${r.coverUrl}" alt="${r.title}" loading="lazy" class="release-cover-img">`
      : `<div class="release-cover-placeholder" style="background-color:${r.color || '#333'}">
           <span class="cover-letter">${r.title.charAt(0)}</span>
         </div>`;

    const spBtn = (r.spotifyUrl && r.spotifyUrl !== '#')
      ? `<a href="${r.spotifyUrl}" target="_blank" rel="noopener" class="overlay-btn overlay-btn-spotify" onclick="event.stopPropagation()">
           <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
           SPOTIFY
         </a>` : '';
    const bpBtn = r.beatportUrl
      ? `<a href="${r.beatportUrl}" target="_blank" rel="noopener" class="overlay-btn overlay-btn-beatport" onclick="event.stopPropagation()">
           BEATPORT
         </a>` : '';

    return `
      <div class="release-card" onclick="window.open('${r.appleUrl}','_blank')" role="button" tabindex="0">
        <div class="release-cover-wrap">
          ${coverHtml}
          <div class="release-cover-overlay" onclick="event.stopPropagation()">
            <a href="${r.appleUrl}" target="_blank" rel="noopener" class="overlay-btn overlay-btn-apple">
              <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              APPLE MUSIC
            </a>
            ${spBtn}
            ${bpBtn}
          </div>
        </div>
        <div class="release-info">
          <div class="release-catalog">${r.catalog}</div>
          <div class="release-title">${r.title}</div>
          <div class="release-artist">${r.artist}</div>
        </div>
      </div>`;
  }).join('');
}

// ─── SETS ───────────────────────────────────────────────
const sets = [
  { title: "Latin House Gang · CDMX Live", views: "147K views", youtubeId: "ngEGJ63LBlA" },
  { title: "Latin House Gang · Live Set", views: "120K views", youtubeId: "CZbHFXEM7a8" },
  { title: "MichaelBM · R.I.O. Shine On Remix", views: "Top play", youtubeId: "FjzbdD8FqTQ" },
  { title: "Latin House Gang · Latest Set", views: "14K views", youtubeId: "4yEQl4cv2Oo" }
];

function renderSets(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = sets.map(s => `
    <div class="set-card">
      <div class="set-embed">
        <iframe
          src="https://www.youtube.com/embed/${s.youtubeId}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
      <div class="set-info">
        <p class="set-title">${s.title}</p>
        <p class="set-views">${s.views}</p>
      </div>
    </div>
  `).join('');
}

// ─── BLOG GRID ──────────────────────────────────────────
const blogPosts = [
  { category: "RELEASE", date: "June 2025", title: "PASKMAN DROPS 'CIEMPIÉS' — LHG #027", excerpt: "Paskman makes his label debut with a track that captures the raw energy of the Latin underground.", color: "#E8650A" },
  { category: "RELEASE", date: "May 2025", title: "BAUTISTA — 'LOVER' OUT NOW — LHG #025", excerpt: "Melodic deep house with its own identity. Bautista's second release on the label confirms his sound.", color: "#7AB3D4" },
  { category: "EVENT", date: "April 2025", title: "RECAP: LHG SHOWCASE TOLUCA", excerpt: "400+ people. One night that defined the label's sound. Photos, video, and what's next.", color: "#CC2020" },
  { category: "MIX", date: "March 2025", title: "LHG PODCAST 001 · GAMA", excerpt: "One hour, no compromises. Gama opens the label's exclusive mix series.", color: "#1A6B6B" },
  { category: "NEWS", date: "February 2025", title: "LATIN HOUSE GANG VOL.4 — OUT NOW", excerpt: "The fourth installment of the label's flagship compilation. 10 tracks, 8 artists, one sound.", color: "#CC2020" },
  { category: "EVENT", date: "January 2025", title: "FIRST CDMX DATE — JULY 26 · EL BUNKER", excerpt: "Latin House Gang hits Mexico City. Minow and Gama perform new material at El Bunker.", color: "#5C2D8A" }
];

function renderBlog(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = blogPosts.map(p => `
    <div class="blog-card">
      <div class="blog-cover" style="background-color:${p.color}">
        <span class="blog-cover-letter">${p.title.charAt(0)}</span>
      </div>
      <div class="blog-meta">
        <span class="blog-tag">${p.category}</span>
        <span class="blog-date">${p.date}</span>
      </div>
      <div class="blog-title">${p.title}</div>
      <div class="blog-excerpt">${p.excerpt}</div>
      <span class="blog-read-more">LEER MÁS →</span>
    </div>
  `).join('');
}

// ─── EVENTOS LIST ───────────────────────────────────────
function renderEventos(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const now = new Date();
  const upcoming = eventos.filter(e => {
    const f = parseFecha(e.fecha);
    return new Date(f.year, f.month, f.day) >= new Date(now.getFullYear(), now.getMonth(), now.getDate());
  });
  if (upcoming.length === 0) {
    container.innerHTML = '<p class="no-events-msg">No upcoming shows — follow us to stay updated.</p>';
    return;
  }
  const list = limit ? upcoming.slice(0, limit) : upcoming;
  container.innerHTML = list.map(e => {
    const f = parseFecha(e.fecha);
    const soldOut = e.status === 'sold-out';
    return `
      <div class="evento-card" data-evento="${e.id}">
        <div class="evento-date-col">
          <span class="evento-day-num">${f.day}</span>
          <span class="evento-month">${f.monthName}</span>
          <span class="evento-weekday">${f.weekday}</span>
        </div>
        <div class="evento-divider"></div>
        <div class="evento-info-col">
          <div class="evento-nombre">${e.nombre}</div>
          <div class="evento-venue">${e.venue} · ${e.ciudad}</div>
          <div class="evento-hora">${e.hora}</div>
          <div class="evento-lineup">
            ${e.lineup.map(a => `<span class="evento-chip">${a}</span>`).join('')}
          </div>
        </div>
        <div class="evento-ticket-col">
          <div class="evento-precio">From $${e.precioDesde} ${e.moneda}</div>
          <button class="btn-tickets${soldOut ? '' : ''}"
            ${soldOut ? 'disabled' : ''}
            onclick="openModal('${e.id}'); event.stopPropagation()">
            ${soldOut ? 'AGOTADO' : 'TICKETS'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.evento-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.evento;
      window.location.href = `evento-detalle.html?id=${id}`;
    });
  });
}

// ─── MODAL DE TICKETS ───────────────────────────────────
let currentEvento = null;

function openModal(eventoId) {
  currentEvento = eventos.find(e => e.id === eventoId);
  if (!currentEvento) return;

  const overlay = document.getElementById('ticketModal');
  if (!overlay) return;

  overlay.querySelector('.modal-title').textContent = currentEvento.nombre;
  overlay.querySelector('.modal-date').textContent = `${currentEvento.fecha} · ${currentEvento.hora}`;

  const tiersContainer = overlay.querySelector('.modal-tiers');
  tiersContainer.innerHTML = currentEvento.tickets.map((t, i) => `
    <div class="ticket-tier" data-idx="${i}" data-precio="${t.precio}">
      <div>
        <div class="ticket-tier-name">${t.tipo}</div>
        <div class="ticket-tier-desc">${t.descripcion}</div>
      </div>
      <div style="text-align:right">
        <div class="ticket-tier-precio">$${t.precio} MXN</div>
        <div class="qty-selector">
          <button class="qty-btn qty-minus" data-idx="${i}">−</button>
          <span class="qty-value" data-val="0" data-idx="${i}">0</span>
          <button class="qty-btn qty-plus" data-idx="${i}">+</button>
        </div>
      </div>
    </div>
  `).join('');

  tiersContainer.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => updateQty(btn));
  });

  updateTotal();
  overlay.querySelector('.modal-content').style.display = 'block';
  overlay.querySelector('.modal-confirm').style.display = 'none';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateQty(btn) {
  const idx = btn.dataset.idx;
  const valEl = document.querySelector(`.qty-value[data-idx="${idx}"]`);
  let val = parseInt(valEl.dataset.val);
  if (btn.classList.contains('qty-plus')) val = Math.min(10, val + 1);
  else val = Math.max(0, val - 1);
  valEl.dataset.val = val;
  valEl.textContent = val;
  updateTotal();
}

function updateTotal() {
  let total = 0;
  document.querySelectorAll('.qty-value').forEach(el => {
    const idx = parseInt(el.dataset.idx);
    const tier = document.querySelector(`.ticket-tier[data-idx="${idx}"]`);
    const precio = parseInt(tier.dataset.precio);
    total += parseInt(el.dataset.val) * precio;
  });
  const totalEl = document.getElementById('modalTotal');
  if (totalEl) totalEl.textContent = `TOTAL: $${total} MXN`;
  const btnProceder = document.getElementById('btnProceder');
  if (btnProceder) btnProceder.disabled = total === 0;
}

function closeModal() {
  const overlay = document.getElementById('ticketModal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  const overlay = document.getElementById('ticketModal');
  if (!overlay) return;

  const closeBtn = document.getElementById('btnModalClose') || overlay.querySelector('.modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  const btnProceder = document.getElementById('btnProceder');
  if (btnProceder) {
    btnProceder.addEventListener('click', () => {
      const s1 = document.getElementById('modalStep1') || overlay.querySelector('.modal-content');
      const s2 = document.getElementById('modalStep2') || overlay.querySelector('.modal-confirm');
      if (s1) s1.style.display = 'none';
      if (s2) s2.style.display = 'block';
    });
  }

  const btnCerrar = overlay.querySelector('.btn-cerrar-modal');
  if (btnCerrar) btnCerrar.addEventListener('click', closeModal);
}

// ─── GUARDAR EVENTO ─────────────────────────────────────
function initGuardarEvento() {
  const btn = document.querySelector('.btn-guardar');
  if (!btn) return;
  btn.addEventListener('click', () => {
    btn.textContent = '✓ GUARDADO';
    btn.classList.add('guardado');
  });
}

// ─── BOTONES SEGUIR / FOLLOW ────────────────────────────
function initFollowBtns() {
  const btnSeguir = document.getElementById('btnSeguir');
  if (btnSeguir) {
    btnSeguir.addEventListener('click', () => {
      const following = btnSeguir.classList.toggle('siguiendo');
      btnSeguir.textContent = following ? '✓ SIGUIENDO' : 'SEGUIR';
    });
  }
  const btnFollow = document.getElementById('btnFollowOrg');
  if (btnFollow) {
    btnFollow.addEventListener('click', () => {
      const following = btnFollow.classList.toggle('following');
      btnFollow.textContent = following ? '✓ SIGUIENDO' : 'SEGUIR';
    });
  }
}

// ─── CALENDARIO DROPDOWN ────────────────────────────────
function initCalendario() {
  const link = document.querySelector('.link-calendario');
  const dropdown = document.querySelector('.calendario-dropdown');
  if (!link || !dropdown) return;

  link.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
  document.addEventListener('click', () => dropdown.classList.remove('open'));
  dropdown.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const platform = btn.textContent.trim();
      alert(`En el sitio final esto generará un archivo .ics para ${platform} Calendar`);
      dropdown.classList.remove('open');
    });
  });
}

// ─── SUBMIT FORM ────────────────────────────────────────
function initSubmitForm() {
  const form = document.getElementById('submitForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      }
    });
    if (!valid) return;

    form.style.display = 'none';
    const msg = document.getElementById('formSuccess');
    if (msg) { msg.classList.add('show'); }
  });

  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('error'));
  });
}

// ─── EVENTO DETALLE PAGE ────────────────────────────────
function initEventoDetalle() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'evento-1';
  const evento = eventos.find(e => e.id === id) || eventos[0];

  document.title = `${evento.nombre} — Latin House Gang`;

  // Flyer
  const setEl = (sel, val) => { const el = document.getElementById(sel); if (el) el.textContent = val; };
  setEl('edNombre', evento.nombre);
  const f = parseFecha(evento.fecha);
  const monthNums = {'january':'01','february':'02','march':'03','april':'04','may':'05','june':'06','july':'07','august':'08','september':'09','october':'10','november':'11','december':'12'};
  const partsF = evento.fecha.toLowerCase().split(' ');
  const mmStr = monthNums[partsF[2]] || '??';
  setEl('edFechaFlyer', `${String(f.day).padStart(2,'0')}.${mmStr}.${String(f.year).slice(2)} · ${evento.ciudad.toUpperCase()}`);

  // Marquee
  const marquee = document.getElementById('edMarquee');
  if (marquee) {
    const txt = `${evento.nombre} &nbsp;·&nbsp; ${evento.fecha} &nbsp;·&nbsp; ${evento.venue} &nbsp;·&nbsp; ${evento.ciudad} &nbsp;·&nbsp;&nbsp;`;
    marquee.innerHTML = `<span>${txt}</span><span>${txt}</span>`;
  }

  // Badge
  const badge = document.getElementById('edBadge');
  if (badge) badge.style.display = evento.lugaresLimitados ? 'inline-block' : 'none';

  // Title
  setEl('edTitulo', evento.nombre);

  // Org stats
  setEl('edOrgStats', `· ${evento.ciudad} · desde 2019`);

  // Sticky box
  setEl('edPrecio', `From $${evento.precioDesde} ${evento.moneda}`);
  setEl('edFechaSticky', `${f.monthName.slice(0,3)} ${f.day} · ${evento.hora}`);

  // Venue & address
  const addressParts = evento.direccion.split(',');
  setEl('edVenue', evento.venue);
  setEl('edDir1', addressParts[0]?.trim() || evento.direccion);
  setEl('edDir2', addressParts.slice(1).join(',').trim() || evento.ciudad);

  // Fecha/hora section
  setEl('edFechaPrincipal', evento.fecha);
  setEl('edHora', `${evento.hora} hrs`);

  // Lineup
  const lineupGrid = document.getElementById('lineupGrid');
  if (lineupGrid) {
    lineupGrid.innerHTML = evento.lineup.map(a => {
      const igUrl = getArtistLink(a, 'instagram');
      const spUrl = getArtistLink(a, 'spotify');
      const apUrl = getArtistLink(a, 'apple');
      const mainUrl = igUrl || spUrl || apUrl || '#';
      const socialIcons = [
        igUrl ? `<a href="${igUrl}" target="_blank" rel="noopener" aria-label="Instagram" class="artista-social-link" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg></a>` : '',
        spUrl ? `<a href="${spUrl}" target="_blank" rel="noopener" aria-label="Spotify" class="artista-social-link" onclick="event.stopPropagation()">${SPOTIFY_SVG}</a>` : ''
      ].join('');
      return `
        <div class="artista-card" onclick="window.open('${mainUrl}','_blank')" role="link" tabindex="0">
          <div class="artista-avatar"><span class="artista-inicial">${a.charAt(0)}</span></div>
          <span class="artista-nombre">${a}</span>
          <div class="artista-socials">${socialIcons}<span class="artista-arrow">›</span></div>
        </div>`;
    }).join('');
  }

  // Comprar tickets
  const btnComprar = document.getElementById('btnComprar');
  if (btnComprar) btnComprar.addEventListener('click', () => openModal(evento.id));
}

// ─── SCROLL REVEAL ──────────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

// ─── HERO CANVAS ANIMATION ──────────────────────────────
function initHeroCanvas() {
  const canvas = document.getElementById('heroBg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0;
  const particles = [];

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeParticle() {
    return {
      x: Math.random() * W,
      y: H + 10,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -(Math.random() * 0.5 + 0.15),
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.35 + 0.05,
      green: Math.random() < 0.22
    };
  }

  resize();
  window.addEventListener('resize', resize);

  for (var i = 0; i < 100; i++) {
    var p = makeParticle();
    p.y = Math.random() * H;
    particles.push(p);
  }

  (function draw() {
    ctx.fillStyle = 'rgba(5,5,5,0.13)';
    ctx.fillRect(0, 0, W, H);
    t += 0.007;

    // Pulsing gradient orbs
    [
      { fx: 0.18 + Math.sin(t * 0.6) * 0.07, fy: 0.45 + Math.cos(t * 0.5) * 0.1,  rMul: 0.6,  rgb: '29,185,84',  a: 0.055 },
      { fx: 0.82 + Math.cos(t * 0.55) * 0.06, fy: 0.28 + Math.sin(t * 0.7) * 0.1, rMul: 0.5,  rgb: '200,40,40',  a: 0.04  },
      { fx: 0.55 + Math.sin(t * 0.35) * 0.09, fy: 0.82 + Math.cos(t * 0.8) * 0.07, rMul: 0.45, rgb: '50,70,200', a: 0.03  }
    ].forEach(function(o) {
      var ox = W * o.fx, oy = H * o.fy, or = Math.max(W, H) * o.rMul;
      var g = ctx.createRadialGradient(ox, oy, 0, ox, oy, or);
      g.addColorStop(0, 'rgba(' + o.rgb + ',' + (o.a + Math.sin(t) * 0.015) + ')');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    });

    // Floating particles
    for (var i = particles.length - 1; i >= 0; i--) {
      var p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.y < -4) { particles.splice(i, 1); particles.push(makeParticle()); }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.green
        ? 'rgba(29,185,84,' + p.alpha + ')'
        : 'rgba(255,255,255,' + p.alpha + ')';
      ctx.fill();
    }

    // Subtle waveform
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(29,185,84,0.1)';
    ctx.lineWidth = 1;
    for (var x = 0; x <= W; x += 2) {
      var y = H * 0.88 + Math.sin(x * 0.015 + t * 2.5) * 10 + Math.sin(x * 0.04 + t * 4) * 5;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();

    requestAnimationFrame(draw);
  })();
}

let openKonamiGame = null;

function initKonamiEasterEgg() {
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let seq = [];

  const overlay = document.createElement('div');
  overlay.className = 'konami-overlay';
  overlay.id = 'konamiOverlay';
  overlay.innerHTML = `
    <div class="konami-bar">
      <span class="konami-bar__label">🕹 MichaelBM · Secret Level</span>
      <button class="konami-close" id="konamiClose" aria-label="Close">✕</button>
    </div>
    <iframe class="konami-iframe" src="about:blank" data-src="michael_bm_game.html" id="konamiFrame" allow="autoplay"></iframe>
  `;
  document.body.appendChild(overlay);

  function openKonami() {
    const frame = document.getElementById('konamiFrame');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (!frame.dataset.loaded) {
      frame.dataset.loaded = '1';
      fetch('michael_bm_game.html')
        .then(function(r) { return r.text(); })
        .then(function(html) {
          const blob = new Blob([html], { type: 'text/html' });
          frame.src = URL.createObjectURL(blob);
        });
    }
  }
  function closeKonami() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  openKonamiGame = openKonami;

  document.getElementById('konamiClose').addEventListener('click', closeKonami);
  document.addEventListener('keydown', function(e) {
    if (overlay.classList.contains('open') && e.key === 'Escape') { closeKonami(); return; }
    seq.push(e.key);
    if (seq.length > KONAMI.length) seq.shift();
    if (seq.join(',') === KONAMI.join(',')) { seq = []; openKonami(); }
  });
}

function initVinylTrigger() {
  const el = document.createElement('div');
  el.className = 'vinyl-trigger';
  el.id = 'vinylTrigger';
  el.setAttribute('aria-label', 'Secret game');
  el.innerHTML = `
    <div class="vinyl-disc" id="vinylDisc">
      <div class="vinyl-grooves"></div>
      <div class="vinyl-label-center">
        <span class="vinyl-mb">MB</span>
        <span class="vinyl-hole"></span>
      </div>
    </div>
    <div class="vinyl-tooltip">CLICK</div>
  `;
  document.body.appendChild(el);

  const disc = document.getElementById('vinylDisc');
  let rotation = 0;
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(scrollY / maxScroll, 1);

    // Roll down: from 12% to 88% of viewport height
    const minTop = window.innerHeight * 0.12;
    const maxTop = window.innerHeight * 0.88;
    const topPx = minTop + (maxTop - minTop) * progress;
    el.style.top = topPx + 'px';

    // Spin proportional to scroll delta
    const delta = scrollY - lastScrollY;
    rotation += delta * 0.8;
    disc.style.transform = 'rotate(' + rotation + 'deg)';
    lastScrollY = scrollY;
  });

  el.addEventListener('click', function() {
    if (openKonamiGame) openKonamiGame();
  });
}

// ─── BOTTOM PLAYER ──────────────────────────────────────
function initBottomPlayer() {
  const r = releases[0];
  if (!r) return;
  const spBtn = r.spotifyUrl ? `<a href="${r.spotifyUrl}" target="_blank" rel="noopener" class="bp-btn bp-btn-spotify">${SPOTIFY_SVG}<span class="bp-btn-text">Spotify</span></a>` : '';
  const apBtn = r.appleUrl   ? `<a href="${r.appleUrl}"  target="_blank" rel="noopener" class="bp-btn bp-btn-apple">${APPLE_SVG}<span class="bp-btn-text">Apple</span></a>` : '';
  const bpBtn = r.beatportUrl ? `<a href="${r.beatportUrl}" target="_blank" rel="noopener" class="bp-btn bp-btn-beatport"><span class="bp-btn-text">Beatport</span></a>` : '';
  const coverHtml = r.coverUrl
    ? `<img src="${r.coverUrl}" alt="${r.title}" loading="lazy">`
    : `<div style="width:100%;height:100%;background:#333;display:flex;align-items:center;justify-content:center;font-size:16px;color:#666">♪</div>`;

  const el = document.createElement('div');
  el.className = 'bottom-player';
  el.id = 'bottomPlayer';
  el.innerHTML = `
    <div class="bp-cover">${coverHtml}</div>
    <div class="bp-track">
      <div class="bp-label">${r.catalog} · LATEST RELEASE</div>
      <div class="bp-title">${r.title}</div>
      <div class="bp-artist">${r.artist}</div>
    </div>
    <div class="bp-actions">${spBtn}${apBtn}${bpBtn}</div>
    <button class="bp-dismiss" id="bpDismiss" aria-label="Dismiss">×</button>`;
  document.body.appendChild(el);

  document.getElementById('bpDismiss').addEventListener('click', () => {
    el.style.transition = 'transform 0.35s ease';
    el.style.transform = 'translateY(100%)';
    const mbn = document.getElementById('mobileBottomNav');
    if (mbn) { mbn.classList.remove('player-active'); }
    document.body.classList.remove('player-on');
  });

  setTimeout(() => {
    el.classList.add('bp-visible');
    document.body.classList.add('player-on');
    const mbn = document.getElementById('mobileBottomNav');
    if (mbn) mbn.classList.add('player-active');
  }, 1600);
}

// ─── MOBILE BOTTOM NAV ──────────────────────────────────
function initMobileBottomNav() {
  const pages = [
    { href: 'index.html',   label: 'Music',  svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 8l8 4-8 4V8z" fill="currentColor" stroke="none"/></svg>' },
    { href: 'eventos.html', label: 'Events', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>' },
    { href: 'blog.html',    label: 'Journal',svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>' },
    { href: 'merch.html',   label: 'Shop',   svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>' },
    { href: 'submit.html',  label: 'Demo',   svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>' }
  ];
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const nav = document.createElement('nav');
  nav.className = 'mobile-bottom-nav';
  nav.id = 'mobileBottomNav';
  nav.setAttribute('aria-label', 'Main navigation');
  nav.innerHTML = pages.map(p => `
    <a href="${p.href}" class="mbn-item${(current === p.href || (current === '' && p.href === 'index.html')) ? ' active' : ''}">
      ${p.svg}<span>${p.label}</span>
    </a>`).join('');
  document.body.appendChild(nav);
}

function init() {
  initNavbar();
  renderReleases('releasesGridHome', 9);
  renderSets('setsGrid');
  renderBlog('blogGrid');
  renderEventos('eventosListHome', 3);
  renderEventos('eventosListPage', null);
  initSocialIcons();
  initModal();
  initGuardarEvento();
  initFollowBtns();
  initCalendario();
  initSubmitForm();
  initScrollReveal();
  initHeroCanvas();
  initKonamiEasterEgg();
  initVinylTrigger();
  initMobileBottomNav();
  initBottomPlayer();

  if (document.getElementById('edFlyer')) initEventoDetalle();
}

// Funciona tanto si el script carga antes como después del DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
