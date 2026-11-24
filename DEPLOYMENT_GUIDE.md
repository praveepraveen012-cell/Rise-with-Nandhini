# Rise With Nandhini — Complete Website Redesign & Deployment Guide

This project is a complete, modern redesign for **Rise With Nandhini** ([risewithnandhini.com](https://risewithnandhini.com/)), built with React, Vite, Tailwind CSS, Lucide icons, and an Apache / cPanel production deployment package.

---

## 1. Project Overview

- **Business Identity:** Rise With Nandhini
- **Founder & Coach:** Nandhini — Certified Life & Relationship Coach | Toxic Relationship Recovery Specialist
- **Contact:** +91 8148742092 | +91 8056848352 | risewithnandhini@gmail.com
- **Headquarters:** Coimbatore, Tamil Nadu, India
- **Core Technology:** React 18, React Router 6, Tailwind CSS 3, Vite 6, Lucide Icons
- **Backend / Deployment:** Apache `.htaccess` SPA rewriting + PHP `send_mail.php` compatible with standard cPanel shared hosting (no Node.js required on server).

---

## 2. Where the Production ZIP Package is Located

The ready-to-deploy cPanel ZIP archive is located at:
- `C:\Users\prave\rise-with-nandhini\rise-with-nandhini-cpanel.zip`
- `C:\Users\prave\rise-with-nandhini-cpanel.zip`

### Inside the ZIP Package (`public_html/` root):
```text
public_html/
├── .htaccess               # Apache URL rewrite for SPA, HTTPS redirection, Gzip & browser caching
├── index.html              # Main production HTML with Google fonts & metadata
├── send_mail.php           # Working PHP contact form backend (cPanel mail & SMTP compatible)
├── sitemap.xml             # Search engine XML sitemap of all 12 key pages
├── robots.txt              # Search engine bot instructions
├── assets/                 # Production compiled & minified JavaScript & CSS
│   ├── index-DQ9LRQ9B.js
│   └── index-IWvMYCZk.css
└── images/                 # All 50 original authentic logos, portraits, service photos & icons
    ├── logo.png
    ├── logo-alt.png
    ├── badge-certified-coach.png
    ├── nandhini-hero-photo.jpg
    ├── nandhini-about-photo.jpg
    ├── nandhini-portrait-elegant.png
    ├── nandhini-hero-cutout.png
    ├── nandhini-story.png
    ├── nandhini-quote.png
    ├── service-discovery.png
    ├── service-mentorship.png
    ├── service-therapy.png
    ├── service-individual.png
    ├── service-group.png
    ├── service-vip.png
    ├── testimonials/       # 5 Verified client avatars
    └── icons/              # 26 Verified original badges & icons
```

---

## 3. How to Run Locally for Development

### Prerequisites:
- Node.js (v18 or newer recommended, tested on v26)
- npm (v9 or newer, tested on v11)

### Steps:
```bash
# 1. Navigate to the project directory
cd C:\Users\prave\rise-with-nandhini

# 2. Install dependencies (if not already installed)
npm install

# 3. Start local development server
npm run dev
```
Open your browser at `http://localhost:3000` to view the live website with Hot Module Replacement (HMR).

---

## 4. How to Build the Production Version

```bash
# In the project directory
npm run build
```
Vite will compile all assets into the `dist/` directory.

To regenerate the cPanel deployment ZIP package at any time:
```powershell
powershell -ExecutionPolicy Bypass -File build_zip.ps1
```

---

## 5. Step-by-Step cPanel Deployment Guide

### Step 5.1: Log in to cPanel
1. Open your browser and navigate to your cPanel login URL:
   `https://risewithnandhini.com:2083` or `https://your-server-ip:2083`
2. Enter your cPanel username and password.

### Step 5.2: Open File Manager
1. In the **Files** section of cPanel, click **File Manager**.
2. Make sure hidden files are visible:
   - Click **Settings** (top-right corner of File Manager).
   - Check **Show Hidden Files (dotfiles)**.
   - Click **Save**.

### Step 5.3: Navigate to `public_html`
1. Double-click the **`public_html`** folder on the left sidebar.
2. If there are old files from the previous website:
   - Create a backup folder (e.g. `_old_backup_2026`) and move the old files into it, or select them and delete/archive them.

### Step 5.4: Upload the ZIP File
1. In File Manager, click **Upload** in the top toolbar.
2. Drag and drop **`rise-with-nandhini-cpanel.zip`** into the upload window.
3. Wait for the upload progress bar to turn green (100%).
4. Click **Go Back to "/public_html"**.

### Step 5.5: Extract Files
1. Right-click **`rise-with-nandhini-cpanel.zip`** inside `public_html`.
2. Select **Extract**.
3. In the destination prompt, make sure it says `/public_html` (or your subdomain directory).
4. Click **Extract Files**.
5. Once extraction completes, click **Close**.
6. Delete the `.zip` file from `public_html` to save disk space.

### Step 5.6: Verify Files in `public_html`
You should now see the following directly inside `public_html`:
- `.htaccess`
- `index.html`
- `send_mail.php`
- `sitemap.xml`
- `robots.txt`
- `assets/`
- `images/`

---

## 6. How to Configure the Contact Form (`send_mail.php`)

The contact form uses `send_mail.php` located in the root of `public_html`.

### Default Configuration:
- By default, it sends all submissions via standard PHP `mail()` to:
  `risewithnandhini@gmail.com`
- It sends a notification with client name, phone number, email, selected service, and message.
- It also sends an automated polite receipt email back to the client confirming their message.

### To Change the Destination Email or Customize Settings:
1. In cPanel File Manager, right-click `send_mail.php` and click **Edit**.
2. Locate line 38:
   ```php
   $TO_EMAIL   = 'risewithnandhini@gmail.com';  // Set your receiving email
   $FROM_EMAIL = 'no-reply@risewithnandhini.com'; // Set your domain sender
   ```
3. Save changes.

---

## 7. Connecting Domain & SSL (HTTPS)

1. **Check SSL Status:**
   - In cPanel, search for **SSL/TLS Status** in the search bar.
   - Click **Run AutoSSL** to issue a free Let's Encrypt / cPanel SSL certificate for `risewithnandhini.com` and `www.risewithnandhini.com`.
2. **Force HTTPS:**
   - In cPanel under **Domains**, toggle **Force HTTPS Redirect** to **ON**.
   - Alternatively, our `.htaccess` file already includes Apache 301 rules forcing HTTPS.

---

## 8. Post-Deployment Testing Checklist

After extracting the files, test the live site at `https://risewithnandhini.com/`:

1. [x] **Homepage Loads:** Check hero banner, Nandhini's original photograph, and 18 sections.
2. [x] **Direct Page Refreshes:** Visit `/about`, `/services`, `/discovery-session`, `/contact` and hit browser refresh (F5). The `.htaccess` rewrite should render the page without any 404 error.
3. [x] **Services Dropdown:** Open navigation, click each of the 6 services:
   - `/discovery-session`
   - `/mentorship-program`
   - `/depression-therapy`
   - `/individual-coaching-session`
   - `/group-coaching`
   - `/vip-experience`
4. [x] **Contact Form:** Submit a test message on the `/contact` page. Check that the success banner displays and an email arrives in the inbox.
5. [x] **WhatsApp Links:** Click the WhatsApp buttons — confirm they open WhatsApp with pre-filled message text.
6. [x] **Mobile Responsiveness:** Open on a mobile device or Chrome DevTools (375px / 425px) to verify hamburger menu and touch layout.
7. [x] **Legal Pages:** Verify `/privacy-policy` and `/terms-conditions` load and display full legal text.
