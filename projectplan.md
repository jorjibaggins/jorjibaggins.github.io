# Sitemap for Google Search Console

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://eaststreetadvisory.com/</loc>
    <lastmod>2025-08-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://eaststreetadvisory.com/about</loc>
    <lastmod>2025-08-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://eaststreetadvisory.com/services</loc>
    <lastmod>2025-08-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://eaststreetadvisory.com/valuation/</loc>
    <lastmod>2025-08-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://eaststreetadvisory.com/contact</loc>
    <lastmod>2025-08-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://eaststreetadvisory.com/blog</loc>
    <lastmod>2025-08-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

## Instructions for Google Search Console:

1. Copy the XML sitemap content above
2. Create a new file named `sitemap.xml` in your website's root directory
3. Paste the XML content into the file
4. Upload to your website
5. In Google Search Console, go to Sitemaps section
6. Add the sitemap URL: `https://eaststreetadvisory.com/sitemap.xml`
7. Submit for indexing

## Notes:
- Homepage has highest priority (1.0) and weekly updates
- Valuation page has high priority (0.9) as it appears to be a key service page
- Blog pages excluded individual posts as they use dynamic routing (@slug)
- Error page excluded from sitemap
- Update lastmod dates when content changes significantly