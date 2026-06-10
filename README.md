# KPSTI PWA – Borang Meninggalkan Pejabat

## Fail dalam folder ini:
```
kpsti-pwa/
├── index.html      ← Borang untuk STAFF
├── admin.html      ← Dashboard ADMIN (ada login)
├── manifest.json   ← PWA manifest
├── sw.js           ← Service Worker (offline support)
├── icons/          ← Icon app
└── README.md       ← Panduan ini
```

## Cara Host di GitHub Pages (PERCUMA):

1. Pergi ke github.com → Log masuk / Daftar
2. Klik "New repository"
   - Nama: `kpsti-borang`
   - Pilih: Public
   - Klik "Create repository"
3. Upload semua fail dalam folder ini
4. Pergi ke Settings → Pages
   - Source: Deploy from branch → main → / (root)
   - Klik Save
5. URL anda: `https://[username].github.io/kpsti-borang/`

## URL selepas deploy:
- Staff  : `https://[username].github.io/kpsti-borang/`
- Admin  : `https://[username].github.io/kpsti-borang/admin.html`

## Cara Install PWA di Handphone:

### Android (Chrome):
- Buka URL staff → Klik banner "Install" yang muncul
- ATAU ketik ⋮ (menu) → "Add to Home screen"

### iPhone (Safari):
- Buka URL staff dalam Safari
- Ketik ⬆️ (Share button)
- Pilih "Add to Home Screen"

## Tukar Password Admin:
Buka `admin.html`, cari baris:
```javascript
const ADMIN_PW = 'Admin@KPSTI2026';
```
Tukar kepada password pilihan anda.
