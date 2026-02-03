# Deployment Guide

This project uses Vite, which makes deployment to static hosting providers very simple.

## Prerequisites

- Node.js installed
- npm or yarn installed

## Building for Production

To create a production build, run:

```bash
npm run build
```

This will generate a `dist/` directory containing the optimized static assets.

## Deploying to GitHub Pages

1. **Update `vite.config.ts`**:
   Ensure the `base` option is set correctly. If deploying to `https://<USERNAME>.github.io/<REPO>/`, set base to `/<REPO>/`.

   ```typescript
   // vite.config.ts
   export default defineConfig({
     base: '/Project-Orthographic-Projection-Web-Demo/', // Update this to your repo name
     // ...
   })
   ```

2. **Push to GitHub**:
   Commit your changes and push to GitHub.

3. **Setup GitHub Actions (Recommended)**:
   Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       needs: build
       runs-on: ubuntu-latest
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

4. **Manual Deployment**:
   You can also manually deploy the `dist` folder using `gh-pages` package:
   ```bash
   npm install -D gh-pages
   npm run build
   npx gh-pages -d dist
   ```

## Deploying to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root.
3. Follow the prompts. Vercel automatically detects Vite.

## Deploying to Netlify

1. Drag and drop the `dist` folder to Netlify Drop.
2. Or connect your GitHub repository and set build command to `npm run build` and publish directory to `dist`.
