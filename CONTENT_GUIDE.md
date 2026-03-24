# Content Guide — What to Add to Complete the Website

This guide lists everything you need to add to finish the website. Start with the most impactful items first.

---

## 1. Text Content — `src/data/content.ts`

Open this file and update the following placeholder values:


| Field          | Location                        | What to Replace                                                     |
| -------------- | ------------------------------- | ------------------------------------------------------------------- |
| Phone          | `siteConfig.phone`              | Real phone number                                                   |
| WhatsApp       | `siteConfig.whatsapp`           | Real WhatsApp link (format: `https://wa.me/55XXXXXXXXXXX?text=...`) |
| Email          | `siteConfig.email`              | Real email address                                                  |
| Address        | `siteConfig.address`            | Full address (neighborhood, city, state)                            |
| Prices         | `pricingTiers[].price`          | Real prices in R$                                                   |
| Bio            | `aboutContent.bio[]`            | Julle's actual bio (3 paragraphs, already has good draft)           |
| Certifications | `aboutContent.certifications[]` | Real certifications                                                 |
| Stats          | `aboutContent.stats[]`          | Real numbers (years, clients, etc.)                                 |
| Testimonials   | `testimonials[]`                | Real client testimonials with real names                            |
| Business hours | `businessHours[]`               | Actual opening hours                                                |


---

## 2. Hero Video (HIGHEST PRIORITY — already has a video!)

**Current:** `public/videos/hero/20240415_201327.mp4` ✅

The hero section will automatically play this video as background. If you want to replace it:

- Place new file at: `public/videos/hero/hero.mp4`
- Update `Hero.tsx` line with the video src path
- **Recommended:** 1920×1080 or 1280×720, landscape, 15–30 seconds loop, compressed to under 15MB

---

## 3. Images

### Hero Background Image (fallback when video isn't loaded)

- **File:** `public/images/hero/IMG_5054.PNG` ✅ (already set)
- **Or replace with:** `public/images/hero/hero.jpg`
- **Recommended size:** 1920×1080px, high quality JPG

### Therapist Portrait (About section)

- **File:** `public/images/about/therapist.jpg`
- **Status:** Currently using hero image as placeholder
- **Recommended:** Professional portrait photo, 800×1000px, warm lighting
- **Note:** Update `About.tsx` img src once you add this photo

### Gallery Photos (6 slots)

Currently using 4 real photos from your collection:

- `public/images/gallery/IMG_5117.PNG` ✅
- `public/images/gallery/IMG_5749.PNG` ✅
- `public/images/gallery/IMG_5752.PNG` ✅
- `public/images/gallery/IMG_5755.PNG` ✅
- Slots 5 & 6 repeat photos 1 & 2

**To add more photos:**

1. Drop them into `public/images/gallery/`
2. Update the `galleryItems` array in `src/data/content.ts`

- **Recommended:** At least 8–12 photos, mix of: treatment room, massages in action, products, ambience
- **Recommended size:** At least 800×600px

### Service Card Images (optional — currently uses gradient colors)

If you want real photos on service cards:

- `public/images/services/relaxation.jpg`
- `public/images/services/deep-tissue.jpg`
- `public/images/services/hot-stone.jpg`
- `public/images/services/lymphatic.jpg`
- `public/images/services/sports.jpg`
- `public/images/services/facial.jpg`
- Then update `Services.tsx` to show these images

---

## 4. Contact Form (to receive real messages)

Currently the form shows a success message locally but doesn't send emails. To connect it:

**Option A — Formspree (easiest, free tier available)**

1. Go to [https://formspree.io](https://formspree.io) and create an account
2. Create a new form, get your form endpoint (looks like `https://formspree.io/f/XXXXXXXX`)
3. In `src/components/sections/Contact.tsx`, replace the form's `onSubmit` handler with a `fetch` POST to your Formspree endpoint

**Option B — EmailJS (free tier)**

1. Go to [https://emailjs.com](https://emailjs.com) and create an account
2. Set up an email service and template
3. Run `npm install @emailjs/browser`
4. Import and use `emailjs.sendForm()` in the Contact component's submit handler

---

## 5. Google Maps Embed (Location)

To show a real map in the Contact section:

1. Go to [https://maps.google.com](https://maps.google.com)
2. Search for your address
3. Click Share → Embed a map → Copy HTML
4. In `src/components/sections/Contact.tsx`, find the map placeholder div and replace it with the `<iframe>` embed code from Google
5. Add `allow="fullscreen"` attribute and set dimensions to `width="100%" height="100%"`

---

## 6. Favicon

Add a favicon file:

- `public/favicon.svg` — SVG format preferred (can be a simple "JH" monogram in gold)
- Or `public/favicon.ico` — update `index.html` link accordingly

---

## 7. Instagram Feed (optional)

If you want to embed a live Instagram feed:

- Consider using a service like **EmbedSocial**, **Elfsight**, or **Curator.io**
- These provide a JavaScript widget you can embed in any section

---

## Priority Checklist

- Update phone, WhatsApp, email, address in `content.ts`
- Update prices in `content.ts`
- Add real testimonials in `content.ts`
- Add therapist portrait to `public/images/about/therapist.jpg`
- Add more gallery photos (aim for 8–12)
- Connect contact form (Formspree or EmailJS)
- Add Google Maps embed
- Add favicon
- Review and personalize the bio text

