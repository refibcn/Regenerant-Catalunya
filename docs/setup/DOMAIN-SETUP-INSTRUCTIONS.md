# Domain Setup Instructions

## Overview

This guide will help you configure `refibcn.cat` to point to your GitHub Pages site, which now has:
- **Root (`refibcn.cat/`)** → ReFi BCN landing page
- **`refibcn.cat/regenerant-catalunya/`** → Regenerant Catalunya section

---

## Part 1: GitHub Pages Configuration

### Step 1: Enable GitHub Pages

1. Go to your repository: **https://github.com/refibcn/Regenerant-Catalunya**
2. Click **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### Step 2: Configure Custom Domain

1. Still in **Pages** settings, scroll to **Custom domain**
2. In the text box, enter: `refibcn.cat`
3. Click **Save**
4. ✅ **Check** "Enforce HTTPS" (wait a few minutes for the SSL certificate to provision)

**Important Notes:**
- GitHub will automatically create a `CNAME` file in your repo (already done via code)
- The site will be available at `refibcn.cat` once DNS is configured
- Initial deployment takes 1-5 minutes
- DNS propagation can take up to 24 hours (usually much faster)

### Step 3: Wait for Deployment

After saving, you'll see a message like:
> "Your site is ready to be published at https://refibcn.cat"

Once deployed, it will change to:
> "Your site is live at https://refibcn.cat"

**Automatic Rebuilds:**
Every time you push to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site.

---

## Part 2: Cloudflare DNS Configuration

### Step 1: Log into Cloudflare

1. Go to **https://dash.cloudflare.com/**
2. Select your account
3. Click on **refibcn.cat** domain

### Step 2: Configure DNS Records

Go to **DNS** → **Records** and set up the following:

#### Option A: Using A Records (Recommended)

**Delete any existing records for the root domain (@) first**, then add these 4 A records:

| Type | Name | Content | Proxy Status | TTL |
|------|------|---------|--------------|-----|
| A | @ | `185.199.108.153` | DNS only (gray cloud) | Auto |
| A | @ | `185.199.109.153` | DNS only (gray cloud) | Auto |
| A | @ | `185.199.110.153` | DNS only (gray cloud) | Auto |
| A | @ | `185.199.111.153` | DNS only (gray cloud) | Auto |

**Important:** These are GitHub Pages' official IP addresses.

#### Option B: Using CNAME Record (Alternative)

If you prefer CNAME (though A records are more reliable):

| Type | Name | Content | Proxy Status | TTL |
|------|------|---------|--------------|-----|
| CNAME | @ | `refibcn.github.io` | DNS only (gray cloud) | Auto |

**Note:** Some DNS providers don't support CNAME at the root. Use Option A if this doesn't work.

### Step 3: Add WWW Record (Optional but Recommended)

Add a CNAME record for `www` subdomain:

| Type | Name | Content | Proxy Status | TTL |
|------|------|---------|--------------|-----|
| CNAME | www | `refibcn.cat` | DNS only (gray cloud) | Auto |

This ensures `www.refibcn.cat` redirects to `refibcn.cat`.

### Step 4: Cloudflare Settings

#### SSL/TLS Configuration

1. Go to **SSL/TLS** in Cloudflare dashboard
2. Set encryption mode to: **Full (strict)** ✅
   - This ensures end-to-end encryption between Cloudflare and GitHub Pages
   - **Do not use** "Flexible" as it will cause SSL errors

#### Automatic HTTPS Rewrites

1. Go to **SSL/TLS** → **Edge Certificates**
2. Enable **Always Use HTTPS** ✅
3. Enable **Automatic HTTPS Rewrites** ✅

#### Proxy Status

**Important:** Keep the proxy status as **DNS only (gray cloud)** for GitHub Pages.

- ☁️ Orange cloud (Proxied) = Cloudflare proxy (can cause issues with GitHub Pages SSL)
- ☁️ Gray cloud (DNS only) = Direct connection to GitHub (recommended)

If you want to use Cloudflare's proxy features:
1. Wait until your site is fully working with gray cloud
2. Then switch to orange cloud if needed
3. You may need to configure Page Rules for proper SSL

---

## Part 3: Verification & Testing

### Step 1: Wait for DNS Propagation

DNS changes can take 5 minutes to 24 hours. Usually it's fast (5-30 minutes).

Check DNS propagation:
- **https://dnschecker.org/** - Enter `refibcn.cat` and check A records globally

### Step 2: Test Your Site

Once DNS is propagated, visit:
- ✅ **https://refibcn.cat/** - Should show ReFi BCN landing page
- ✅ **https://refibcn.cat/regenerant-catalunya/** - Should show Regenerant Catalunya
- ✅ **https://refibcn.cat/refibcn/about** - Should show ReFi BCN About page
- ✅ **https://www.refibcn.cat/** - Should redirect to non-www (if you added the CNAME)

### Step 3: Enable HTTPS in GitHub Pages

After DNS is working:
1. Go back to **GitHub** → **Settings** → **Pages**
2. ✅ Check **Enforce HTTPS**
3. Wait 5-10 minutes for SSL certificate to provision

GitHub will automatically obtain a Let's Encrypt SSL certificate for your domain.

---

## Part 4: Troubleshooting

### Issue: "There isn't a GitHub Pages site here"

**Causes:**
- DNS not propagated yet (wait longer)
- Wrong DNS records
- Custom domain not saved in GitHub Pages settings

**Solutions:**
1. Check DNS with `dig refibcn.cat` (should show GitHub IPs)
2. Verify custom domain is set in GitHub Pages settings
3. Check CNAME file exists in repo: `quartz/static/CNAME`

### Issue: SSL Certificate Error

**Causes:**
- HTTPS enforced before DNS propagated
- Cloudflare SSL mode wrong
- Certificate not provisioned yet

**Solutions:**
1. Uncheck "Enforce HTTPS" in GitHub Pages temporarily
2. Ensure Cloudflare SSL mode is **Full (strict)**
3. Wait 10-15 minutes for certificate provisioning
4. Re-enable "Enforce HTTPS"

### Issue: 404 on Subpages

**Causes:**
- GitHub Pages not rebuilding after changes
- Navigation links wrong

**Solutions:**
1. Check GitHub Actions: **Actions** tab in repo
2. Ensure workflow completed successfully
3. Clear browser cache (Cmd+Shift+R)

### Issue: Old Content Showing

**Causes:**
- Browser cache
- Cloudflare cache (if using orange cloud)

**Solutions:**
1. Hard refresh: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows)
2. Clear Cloudflare cache: **Caching** → **Purge Everything**
3. Try incognito/private browsing mode

### Issue: Mixed Content Warnings

**Causes:**
- HTTP resources loaded on HTTPS page

**Solutions:**
1. Ensure all image/asset URLs use HTTPS or relative paths
2. Check browser console for specific resources
3. Enable "Automatic HTTPS Rewrites" in Cloudflare

---

## Part 5: Current Site Structure

After setup, your site will be accessible as:

```
refibcn.cat/
├── (root)                        → ReFi BCN landing page
├── refibcn/
│   ├── about/                   → About ReFi BCN
│   ├── events/                  → Events
│   ├── ecosystem/               → Ecosystem Map
│   └── blog/                    → Blog
└── regenerant-catalunya/
    ├── (index)                   → Regenerant landing
    ├── about/                    → About the program
    ├── program/                  → Program details
    ├── projects/                 → Participating projects
    ├── partners/                 → Partners & stakeholders
    └── updates/                  → Updates
```

**Navigation:**
- ReFi BCN pages show **blue** accent and ReFi BCN nav
- Regenerant Catalunya pages show **green** accent and Regenerant nav
- Links automatically work across sections

---

## Part 6: Future Maintenance

### Updating Content

1. Edit markdown files in `content/` folder
2. Commit and push to `main` branch
3. GitHub Actions automatically rebuilds site (1-2 minutes)
4. Changes live at `refibcn.cat`

### Monitoring Deployments

Check deployment status:
- **GitHub repo** → **Actions** tab
- **GitHub repo** → **Settings** → **Pages**

### DNS Changes

If you ever need to change domain:
1. Update `quartz/static/CNAME` file
2. Update `quartz.config.ts` → `baseUrl`
3. Update custom domain in GitHub Pages settings
4. Update Cloudflare DNS records

---

## Quick Reference

### GitHub Pages IPs (for A records)
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### Key Files
- `quartz/static/CNAME` - Contains domain name
- `quartz.config.ts` - Contains baseUrl configuration
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow

### Support Links
- GitHub Pages: https://docs.github.com/en/pages
- Cloudflare DNS: https://developers.cloudflare.com/dns/
- DNS Checker: https://dnschecker.org/

---

## Summary Checklist

### GitHub Pages
- [ ] Repository Settings → Pages → Source: main branch
- [ ] Custom domain set to: `refibcn.cat`
- [ ] Enforce HTTPS enabled (after DNS works)
- [ ] Deployment successful (check Actions tab)

### Cloudflare
- [ ] 4 A records pointing to GitHub Pages IPs
- [ ] DNS only (gray cloud) enabled
- [ ] SSL/TLS mode: Full (strict)
- [ ] Always Use HTTPS: enabled
- [ ] WWW CNAME record added (optional)

### Testing
- [ ] `refibcn.cat` loads ReFi BCN landing
- [ ] `refibcn.cat/regenerant-catalunya` loads Regenerant
- [ ] HTTPS works without warnings
- [ ] Navigation between sections works
- [ ] Mobile navigation works

---

**Need help?** Check GitHub Actions logs for build errors, or verify DNS with `dig refibcn.cat` command.

