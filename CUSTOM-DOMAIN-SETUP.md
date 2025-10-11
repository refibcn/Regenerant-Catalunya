# Custom Domain Setup Guide
## regenerant.refibcn.cat with Cloudflare

**Domain:** regenerant.refibcn.cat  
**DNS Provider:** Cloudflare  
**Repository:** https://github.com/refibcn/Regenerant-Catalunya

---

## ✅ What I've Already Done

1. **Created CNAME file** - `quartz/static/CNAME` with domain
2. **Updated base URL** - `quartz.config.ts` now uses custom domain
3. **Ready to configure** - Just need DNS + GitHub settings

---

## 🚀 Setup Steps

### Step 1: Configure DNS in Cloudflare

1. **Log in to Cloudflare:** https://dash.cloudflare.com
2. **Select your domain:** `refibcn.cat`
3. **Go to DNS settings:** Click "DNS" in the left menu
4. **Add CNAME record:**

```
Type:    CNAME
Name:    regenerant
Target:  refibcn.github.io
Proxy:   ⚠️ DNS only (gray cloud, NOT proxied)
TTL:     Auto
```

**Important:** The cloud icon must be **GRAY** (DNS only), not orange. GitHub Pages doesn't work with Cloudflare proxy enabled initially.

**Screenshot of what to add:**
- Type: CNAME
- Name: regenerant
- Target: refibcn.github.io
- Proxy status: DNS only (click the cloud to toggle)

### Step 2: Push Changes to GitHub

```bash
cd "/Users/luizfernando/Desktop/git/Zettelkasten/03 Libraries/Regenerant-Catalunya"
npx quartz sync
```

This commits the CNAME file and updated config.

### Step 3: Configure Custom Domain in GitHub

1. **Go to repository settings:**  
   https://github.com/refibcn/Regenerant-Catalunya/settings/pages

2. **Under "Custom domain":**
   - Enter: `regenerant.refibcn.cat`
   - Click **Save**

3. **Wait for DNS check:**
   - GitHub will verify DNS (takes 1-5 minutes)
   - You'll see a green checkmark when ready

4. **Enable HTTPS:**
   - Check the box: **"Enforce HTTPS"**
   - This may take 10-20 minutes to provision the certificate
   - GitHub uses Let's Encrypt for free SSL

### Step 4: Wait for Deployment

1. **Go to Actions:** https://github.com/refibcn/Regenerant-Catalunya/actions
2. **Wait for workflow** to complete (2-3 minutes)
3. **DNS propagation** may take up to 24 hours (usually ~1 hour)

---

## 🌐 Your Site URLs

**After setup completes:**
- **Primary URL:** https://regenerant.refibcn.cat
- **Fallback URL:** https://refibcn.github.io/Regenerant-Catalunya/ (will redirect)

---

## 🔧 Troubleshooting

### Issue: DNS Check Fails in GitHub

**Symptoms:** GitHub says "DNS check unsuccessful"

**Solution:**
1. Verify CNAME record in Cloudflare:
   - Name: `regenerant`
   - Target: `refibcn.github.io`
   - Proxy: **OFF** (gray cloud)
2. Wait 5-10 minutes for DNS propagation
3. Try clicking "Save" in GitHub again

### Issue: Cloudflare Proxy Warning

**Symptoms:** Orange cloud icon in Cloudflare

**Solution:**
1. Click the orange cloud icon to toggle it to **gray**
2. GitHub Pages requires direct DNS (no proxy initially)
3. After HTTPS is working, you can optionally re-enable proxy

### Issue: "Site can't be reached"

**Symptoms:** Domain doesn't resolve

**Solution:**
1. Check DNS with: `dig regenerant.refibcn.cat`
2. Should show CNAME pointing to `refibcn.github.io`
3. If not, verify Cloudflare DNS record
4. Wait longer for DNS propagation

### Issue: HTTPS Certificate Pending

**Symptoms:** "Enforce HTTPS" checkbox disabled

**Solution:**
1. This is normal - certificate provisioning takes 10-20 minutes
2. GitHub uses Let's Encrypt (automatic and free)
3. Check back in 15-20 minutes
4. Once ready, the checkbox will become enabled

### Issue: 404 Page Shows

**Symptoms:** Site loads but shows 404

**Solution:**
1. Verify CNAME file exists in repository
2. Check `quartz.config.ts` has correct `baseUrl`
3. Wait for next deployment to complete
4. Force rebuild by pushing a small change

---

## 🎯 DNS Configuration Details

### What the CNAME Record Does

```
regenerant.refibcn.cat → refibcn.github.io → GitHub Pages → Your Site
```

The CNAME record tells DNS servers that `regenerant.refibcn.cat` should resolve to GitHub's servers.

### Why "DNS Only" (Gray Cloud)?

- GitHub Pages needs to see the actual DNS queries
- Cloudflare proxy (orange cloud) can interfere with GitHub's SSL provisioning
- After HTTPS is working, you can optionally enable proxy for additional features

### Optional: Re-enable Cloudflare Proxy (Advanced)

**After HTTPS is working:**
1. Go to Cloudflare DNS settings
2. Click the gray cloud to make it orange
3. This enables:
   - Cloudflare CDN (faster global delivery)
   - DDoS protection
   - Additional caching
   - Firewall rules

**Note:** Some GitHub Pages features may not work with proxy enabled.

---

## 📊 Verification Steps

### Check DNS Propagation

```bash
# Check CNAME record
dig regenerant.refibcn.cat CNAME

# Should show:
# regenerant.refibcn.cat. 300 IN CNAME refibcn.github.io.
```

### Check SSL Certificate

```bash
# Check HTTPS
curl -I https://regenerant.refibcn.cat

# Should show:
# HTTP/2 200
# server: GitHub.com
```

### Online Tools

- **DNS Checker:** https://dnschecker.org/#CNAME/regenerant.refibcn.cat
- **SSL Checker:** https://www.ssllabs.com/ssltest/analyze.html?d=regenerant.refibcn.cat

---

## 🔄 Future Updates

Every time you push changes:
```bash
npx quartz sync
```

Your custom domain will automatically update within 2-3 minutes!

---

## 🌍 Alternative: Using Subdirectory Path

**Note:** You mentioned `refibcn.cat/regenerant-catalunya` but GitHub Pages doesn't support custom paths with custom domains.

**Options:**
1. ✅ **Subdomain** (current setup): `regenerant.refibcn.cat`
2. ⚠️ **Apex domain**: `refibcn.cat` (entire domain points to this site)
3. ❌ **Path**: `refibcn.cat/regenerant-catalunya` (not supported with custom domain)

If you want a path-based URL, you must use the GitHub Pages default:
- https://refibcn.github.io/Regenerant-Catalunya/

---

## ⚙️ Files Changed

1. **`quartz/static/CNAME`** - Contains domain name
2. **`quartz.config.ts`** - Updated `baseUrl` to custom domain

---

## 📝 Summary Checklist

- [ ] Add CNAME record in Cloudflare (gray cloud)
- [ ] Push changes to GitHub (`npx quartz sync`)
- [ ] Configure custom domain in GitHub Pages settings
- [ ] Wait for DNS check to pass
- [ ] Enable "Enforce HTTPS" after certificate provisions
- [ ] Test site at https://regenerant.refibcn.cat

---

## 🆘 Need Help?

- **Cloudflare Docs:** https://developers.cloudflare.com/dns/
- **GitHub Pages Custom Domain:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **DNS Issues:** Contact Cloudflare support or check their community

---

**Expected Timeline:**
- DNS configuration: 5 minutes
- DNS propagation: 5 minutes - 1 hour
- SSL certificate: 10-20 minutes
- Total: ~30-60 minutes for everything to work

**Last Updated:** October 11, 2025  
**Domain:** regenerant.refibcn.cat

