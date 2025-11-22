# Gauthier's Total Home Improvements - Website

A modern, responsive, and professional website for Gauthier's Total Home Improvements, a family-owned contracting business serving Seattle, Bellevue, Redmond, and Kirkland. Built to work perfectly on GitHub Pages.

## 🌟 Features

- **100% Static**: Pure HTML, CSS, and JavaScript - no build process or server required
- **Responsive**: Adaptive design for mobile, tablet, and desktop
- **Modern**: Clean and professional interface with smooth animations
- **Optimized**: Fast loading and optimized performance
- **Accessible**: Semantic HTML with focus on accessibility
- **SEO-Friendly**: Optimized meta tags and structure for search engines

## 📁 Project Structure

```
Totalhomeimprovement/
│
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── contact.html            # Contact page
├── README.md               # This file
│
└── assets/
    ├── css/
    │   └── style.css       # Main stylesheet
    ├── js/
    │   └── main.js         # JavaScript for interactivity
    └── img/
        └── (images)        # Image folder
```

## 🚀 How to Publish on GitHub Pages

### Method 1: Via GitHub Interface (Recommended)

1. **Access Repository Settings**
   - Go to the repository on GitHub
   - Click on "Settings"

2. **Configure GitHub Pages**
   - In the sidebar, click on "Pages"
   - Under "Source", select the main branch (usually `main` or `master`)
   - Select the root folder `/` 
   - Click "Save"

3. **Wait for Publication**
   - GitHub will take a few minutes to publish the site
   - You'll see a message with your site URL: `https://[your-username].github.io/Totalhomeimprovement/`

4. **Access Your Site**
   - Click the provided link or access directly
   - The site will be publicly available

### Method 2: Via Command Line

```bash
# Clone the repository (if you haven't already)
git clone https://github.com/[your-username]/Totalhomeimprovement.git
cd Totalhomeimprovement

# Make your changes
# ... edit files ...

# Add changes
git add .

# Commit changes
git commit -m "Update website"

# Push to GitHub
git push origin main
```

Then follow steps from Method 1 to activate GitHub Pages.

## 🔧 Maintenance and Customization

### Changing Colors

Edit the `assets/css/style.css` file and modify the CSS variables at the beginning:

```css
:root {
  --primary-color: #1e40af;      /* Primary color */
  --secondary-color: #f59e0b;    /* Secondary color */
  --accent-color: #10b981;       /* Accent color */
  /* ... other colors ... */
}
```

### Adding Images

1. Place your images in the `assets/img/` folder
2. Prefer WebP format for better performance
3. Optimize images before adding (use tools like TinyPNG)
4. Add images in HTML with alt text:

```html
<img src="assets/img/your-image.webp" alt="Image description" loading="lazy">
```

### Editing Content

1. **Text**: Edit directly in the HTML files
2. **Services**: Modify `services.html`
3. **Contact Information**: Update in `contact.html` and in the footer of all pages
4. **About**: Customize `about.html`

### Adding New Pages

1. Create a new HTML file in the root (e.g., `portfolio.html`)
2. Copy the header and footer structure from an existing page
3. Add the link in the navigation menu in ALL pages:

```html
<ul class="nav-menu">
  <li><a href="index.html">Home</a></li>
  <li><a href="about.html">About</a></li>
  <li><a href="services.html">Services</a></li>
  <li><a href="portfolio.html">Portfolio</a></li>  <!-- New page -->
  <li><a href="contact.html">Contact</a></li>
</ul>
```

## 📱 Responsiveness

The site is fully responsive and works perfectly on:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

Breakpoints are defined in the `assets/css/style.css` file.

## 🎨 Resources Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with CSS variables, Grid, and Flexbox
- **Vanilla JavaScript**: Interactivity without dependencies
- **Emojis**: Visual icons without needing external libraries

## ⚡ Performance

- No heavy external dependencies
- Optimized images
- Minifiable CSS and JS
- Lazy loading of images
- Performant CSS animations

## ♿ Accessibility

- Semantic HTML
- Form labels
- Alt text on images
- Adequate color contrast
- Keyboard navigation
- ARIA labels where necessary

## 🔍 SEO

- Descriptive meta tags
- Open Graph for social media
- Friendly URLs
- Heading hierarchy (H1, H2, H3)
- Sitemap (can be added)

## 📝 Pre-Deployment Checklist

Before publishing, verify:

- [ ] All images are optimized
- [ ] Internal links are working
- [ ] Contact information is correct
- [ ] Contact form is tested
- [ ] Site is responsive on different screen sizes
- [ ] No errors in browser console
- [ ] Meta tags are properly filled
- [ ] Favicon is present

## 🛠️ Troubleshooting

### Site not appearing on GitHub Pages

1. Verify GitHub Pages is activated in settings
2. Confirm the correct branch is selected
3. Wait a few minutes after making changes
4. Clear browser cache

### Mobile menu not working

1. Verify `assets/js/main.js` is loading
2. Open browser console (F12) and check for errors
3. Confirm HTML elements have the correct classes

### Form not submitting

1. The current form is demonstration only
2. For real functionality, integrate with services like:
   - Formspree (https://formspree.io/)
   - Netlify Forms
   - EmailJS (https://www.emailjs.com/)

### Images not loading

1. Verify image paths are correct
2. Use relative paths: `assets/img/image-name.jpg`
3. Confirm images exist in the correct folder
4. Check uppercase/lowercase in file names

## 🔄 Future Updates

Ideas for improvements:

- [ ] Project/portfolio gallery
- [ ] Real form integration (Formspree)
- [ ] Blog with articles about home improvements
- [ ] Client testimonials with photos
- [ ] Budget calculator
- [ ] Live chat
- [ ] Institutional videos

## 📞 Support

For questions about website maintenance:

1. Consult the [GitHub Pages](https://docs.github.com/en/pages) documentation
2. See tutorials on HTML, CSS, and JavaScript at [MDN Web Docs](https://developer.mozilla.org/)
3. Use the [W3C Validator](https://validator.w3.org/) to validate your HTML

## 📄 License

This project is a custom template for Gauthier's Total Home Improvements.

---

**Developed with ❤️ for Gauthier's Total Home Improvements**

*Last updated: November 2024*

## 📍 Contact Information

**Gauthier's Total Home Improvements**
- **Phone**: [206-600-0142](tel:2066000142)
- **Email**: 
  - [cs@gauthierstotalhomeimprovements.com](mailto:cs@gauthierstotalhomeimprovements.com)
  - [corey@gthomeimprovements.com](mailto:corey@gthomeimprovements.com)
- **Address**: 14118 73rd Pl NE Apt L207, Kirkland, WA 98034
- **Service Areas**: Seattle, Bellevue, Redmond, Kirkland, and surrounding areas
- **License**: GAUTHTH767JR
- **Insured**: Up to $1,000,000

---

**Modern Craftsmanship, Old Fashioned Values**
