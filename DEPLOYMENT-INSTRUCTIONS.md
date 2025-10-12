# Deployment Instructions for Regenerant Catalunya

## Domain: regenerant.refibcn.cat

This guide covers deploying the Regenerant Catalunya site to GitHub Pages with automatic deployments and Cloudflare DNS configuration.

---

## Prerequisites

✅ Repository: `refibcn/Regenerant-Catalunya`  
✅ GitHub Actions workflow configured (`.github/workflows/deploy.yml`)  
✅ CNAME file updated to `regenerant.refibcn.cat`  
✅ Quartz config baseUrl updated

---

## Part 1: GitHub Repository Setup

### Step 1: Enable GitHub Pages

1. Go to: **https://github.com/refibcn/Regenerant-Catalunya**
2. Click **Settings** (top navigation)
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - **Branch**: `main` (or `v4` if that's your default)
   - **Folder**: `/ (root)`
5. Click **Save**

### Step 2: Configure GitHub Actions Permissions

1. Still in **Settings**, go to **Actions** → **General** (left sidebar)
2. Scroll to **Workflow permissions**
3. Select: **Read and write permissions**
4. ✅ Check: **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

### Step 3: Configure Custom Domain in GitHub

1. Go back to **Settings** → **Pages**
2. Under **Custom domain**, enter: `regenerant.refibcn.cat`
3. Click **Save**
4. GitHub will verify the domain (may take a few minutes)
5. Once verified, ✅ **Check** "Enforce HTTPS"

**Note**: GitHub will automatically detect the CNAME file in your `quartz/static/` directory.

---

## Part 2: Cloudflare DNS Configuration

### Step 1: Access Cloudflare DNS Settings

1. Log in to **Cloudflare Dashboard**: https://dash.cloudflare.com
2. Select the **`refibcn.cat`** domain
3. Go to **DNS** → **Records**

### Step 2: Add DNS Records

You need to create a **CNAME record** for the subdomain:

#### CNAME Record for `regenerant.refibcn.cat`

| Type  | Name          | Target                         | Proxy Status | TTL  |
|-------|---------------|--------------------------------|--------------|------|
| CNAME | `regenerant`  | `refibcn.github.io`            | Proxied (☁️) | Auto |

**Steps:**
1. Click **Add record**
2. **Type**: Select `CNAME`
3. **Name**: Enter `regenerant` (Cloudflare adds `.refibcn.cat` automatically)
4. **Target**: Enter `refibcn.github.io` (your GitHub Pages default domain)
5. **Proxy status**: Toggle **ON** (orange cloud ☁️) for Cloudflare features
6. **TTL**: Leave as `Auto`
7. Click **Save**

### Step 3: Configure SSL/TLS Settings

1. In Cloudflare dashboard, go to **SSL/TLS** → **Overview**
2. Set encryption mode to: **Full** (recommended) or **Full (strict)**
   - **Full**: Encrypts between Cloudflare and GitHub
   - **Full (strict)**: Requires valid certificate on GitHub (GitHub Pages provides this)
3. Go to **SSL/TLS** → **Edge Certificates**
4. ✅ Enable: **Always Use HTTPS**
5. ✅ Enable: **Automatic HTTPS Rewrites**

### Step 4: Configure Page Rules (Optional but Recommended)

1. Go to **Rules** → **Page Rules**
2. Click **Create Page Rule**
3. **URL pattern**: `http://*regenerant.refibcn.cat/*`
4. **Setting**: Select "Always Use HTTPS"
5. Click **Save and Deploy**

---

## Part 3: Verify Deployment

### DNS Verification

Check DNS propagation (usually takes 5-30 minutes, can be up to 24 hours):

```bash
# Check CNAME record
dig regenerant.refibcn.cat CNAME

# Expected output should show: refibcn.github.io
```

Or use online tools:
- https://dnschecker.org
- https://www.whatsmydns.net

### GitHub Pages Verification

1. Go to your repository **Settings** → **Pages**
2. You should see:
   ```
   ✅ Your site is live at https://regenerant.refibcn.cat
   ```

### Test the Site

1. Open: **https://regenerant.refibcn.cat**
2. Verify:
   - ✅ Site loads correctly
   - ✅ HTTPS is working (green padlock)
   - ✅ No certificate warnings
   - ✅ Styles and images load properly

---

## Part 4: Automatic Deployments

### How It Works

Every time you push to the `main` branch:

1. **GitHub Actions** triggers (`.github/workflows/deploy.yml`)
2. Workflow runs:
   - Checks out code
   - Installs Node.js dependencies
   - Builds Quartz site with `npx quartz build`
   - Uploads build artifacts to GitHub Pages
   - Deploys to production
3. Site updates automatically (usually within 2-5 minutes)

### Monitor Deployments

1. Go to your repository
2. Click **Actions** tab
3. See all workflow runs and their status
4. Click any run to see detailed logs

### Manual Deployment Trigger

If needed, you can manually trigger a deployment:

1. Go to **Actions** tab
2. Select **Deploy Quartz site to GitHub Pages**
3. Click **Run workflow**
4. Select branch and click **Run workflow**

---

## Part 5: Troubleshooting

### DNS Issues

**Problem**: Site not loading after DNS changes

**Solution**:
1. Wait 10-30 minutes for DNS propagation
2. Clear browser cache (Cmd/Ctrl + Shift + R)
3. Try incognito/private browsing mode
4. Check DNS with `dig regenerant.refibcn.cat`

### SSL Certificate Issues

**Problem**: Certificate errors or mixed content warnings

**Solution**:
1. In GitHub Pages settings, uncheck and re-check "Enforce HTTPS"
2. Wait 5-10 minutes for certificate provisioning
3. In Cloudflare, verify SSL/TLS mode is set to "Full"
4. Clear browser cache

### Build Failures

**Problem**: GitHub Actions workflow fails

**Solution**:
1. Go to **Actions** tab and click the failed workflow
2. Check error logs
3. Common issues:
   - Node version mismatch (workflow uses Node 22)
   - Missing dependencies (check `package.json`)
   - Build errors in content files
4. Fix issues and push again

### 404 Errors

**Problem**: Pages return 404

**Solution**:
1. Check `quartz.config.ts` baseUrl is correct: `regenerant.refibcn.cat`
2. Verify CNAME file contains: `regenerant.refibcn.cat`
3. Rebuild and redeploy
4. Check file paths are correct (case-sensitive)

---

## Part 6: Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads at `https://regenerant.refibcn.cat`
- [ ] HTTPS works (green padlock in browser)
- [ ] All pages load correctly
- [ ] Images and assets load
- [ ] Navigation works
- [ ] Search functionality works
- [ ] Forms work (if applicable)
- [ ] Mobile responsive design works
- [ ] Green theme colors display correctly
- [ ] Footer shows correct information

---

## Part 7: Updating the Site

### Content Updates

1. Edit content files in `content/` directory
2. Commit and push to `main` branch:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
3. GitHub Actions automatically builds and deploys
4. Wait 2-5 minutes for deployment

### Style Updates

1. Edit `quartz/styles/custom.scss`
2. Commit and push changes
3. Automatic deployment will apply new styles

### Configuration Updates

1. Edit `quartz.config.ts` or `quartz.layout.ts`
2. Test locally: `npx quartz build --serve`
3. Commit and push when satisfied
4. Automatic deployment

---

## Part 8: Cloudflare Optional Features

### Analytics

1. Go to **Analytics & Logs** → **Web Analytics**
2. Enable for `regenerant.refibcn.cat`
3. Get visitor insights, traffic patterns

### Caching

1. Go to **Caching** → **Configuration**
2. Set caching level to "Standard" or "Aggressive"
3. **Cache Rules**: Create rules for static assets

### Performance

1. Go to **Speed** → **Optimization**
2. ✅ Enable: **Auto Minify** (CSS, JavaScript, HTML)
3. ✅ Enable: **Brotli** compression
4. ✅ Enable: **Rocket Loader** (for JavaScript)

---

## Quick Reference Commands

### Local Development
```bash
cd "03 Libraries/Regenerant-Catalunya"
npx quartz build --serve
# Site available at http://localhost:8080
```

### Check DNS
```bash
dig regenerant.refibcn.cat CNAME
nslookup regenerant.refibcn.cat
```

### Deploy Manually (if needed)
```bash
git add .
git commit -m "Deploy changes"
git push origin main
```

---

## Support

- **Quartz Documentation**: https://quartz.jzhao.xyz
- **GitHub Pages**: https://docs.github.com/en/pages
- **Cloudflare DNS**: https://developers.cloudflare.com/dns

---

## Summary

1. ✅ **Quartz config updated** to `regenerant.refibcn.cat`
2. ✅ **CNAME file updated** in `quartz/static/CNAME`
3. ✅ **GitHub Pages enabled** with custom domain
4. ✅ **Cloudflare DNS configured** with CNAME record
5. ✅ **Automatic deployments** set up via GitHub Actions
6. ✅ **HTTPS enforced** on both GitHub and Cloudflare

Your site will be live at **https://regenerant.refibcn.cat** once DNS propagates!

