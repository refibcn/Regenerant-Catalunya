# GitHub Pages Setup Guide
## Regenerant Catalunya Website

**Repository:** https://github.com/refibcn/Regenerant-Catalunya  
**Future URL:** https://refibcn.github.io/Regenerant-Catalunya/

---

## ✅ What's Already Done

1. **GitHub Actions Workflow Created** - `.github/workflows/deploy.yml`
2. **Base URL Configured** - `quartz.config.ts` updated with correct URL
3. **Ready to Deploy** - All files prepared

---

## 🚀 Setup Steps (Do These Now)

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/refibcn/Regenerant-Catalunya
2. Click on **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - Source: `GitHub Actions` (NOT "Deploy from a branch")
5. Click **Save**

**Screenshot location:** Settings → Pages → Source → GitHub Actions

### Step 2: Commit and Push Changes

The deployment workflow is already created. Now commit and push:

```bash
cd "/Users/luizfernando/Desktop/git/Zettelkasten/03 Libraries/Regenerant-Catalunya"
npx quartz sync
```

This will:
- Commit the new deployment workflow
- Push to the `v4` branch
- Automatically trigger the GitHub Actions workflow
- Build and deploy your site

### Step 3: Monitor Deployment

1. Go to: https://github.com/refibcn/Regenerant-Catalunya/actions
2. You should see a workflow run called "Deploy Quartz site to GitHub Pages"
3. Click on it to watch the progress
4. Wait for both jobs (build + deploy) to complete (usually 2-3 minutes)

### Step 4: Access Your Site

Once deployment completes, your site will be live at:

**https://refibcn.github.io/Regenerant-Catalunya/**

---

## 🔧 Troubleshooting

### Issue: "environment protection rules" Error

**Problem:** GitHub Pages environment has restrictions

**Solution:**
1. Go to Settings → Environments
2. Delete the `github-pages` environment if it exists
3. Re-run the workflow
4. GitHub will recreate it correctly

### Issue: 404 Not Found

**Problem:** Base URL might be incorrect

**Solution:**
Check `quartz.config.ts` has:
```typescript
baseUrl: "refibcn.github.io/Regenerant-Catalunya"
```

### Issue: Workflow Not Running

**Problem:** GitHub Actions might need permissions

**Solution:**
1. Go to Settings → Actions → General
2. Under "Workflow permissions"
3. Select "Read and write permissions"
4. Click Save

---

## 🔄 Future Deployments

Every time you push to the `v4` branch, the site will automatically rebuild and redeploy.

**Quick Deploy Command:**
```bash
cd "/Users/luizfernando/Desktop/git/Zettelkasten/03 Libraries/Regenerant-Catalunya"
npx quartz sync
```

This handles everything:
1. Commits your changes
2. Pushes to GitHub
3. Triggers automatic deployment
4. Updates live site

---

## 📊 Deployment Status

You can always check deployment status at:
- **Actions:** https://github.com/refibcn/Regenerant-Catalunya/actions
- **Deployments:** https://github.com/refibcn/Regenerant-Catalunya/deployments

---

## ⚙️ What the Workflow Does

The `.github/workflows/deploy.yml` file:

1. **Triggers** on every push to `v4` branch
2. **Builds** the Quartz site (`npx quartz build`)
3. **Uploads** the `public/` folder as artifact
4. **Deploys** to GitHub Pages
5. **Makes available** at the live URL

---

## 🌐 Custom Domain (Optional)

If you want to use a custom domain like `regenerant.refibcn.cat`:

### Setup Steps:

1. **Add CNAME file:**
```bash
echo "regenerant.refibcn.cat" > quartz/static/CNAME
```

2. **Configure DNS** (at your domain registrar):
   - Add CNAME record: `regenerant` → `refibcn.github.io`
   - OR for apex domain, add A records:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. **Update GitHub Settings:**
   - Go to Settings → Pages
   - Enter custom domain
   - Enable "Enforce HTTPS"

4. **Update quartz.config.ts:**
```typescript
baseUrl: "regenerant.refibcn.cat"
```

---

## 📝 Configuration Files

### `.github/workflows/deploy.yml`
- Automated deployment workflow
- Runs on push to `v4` branch
- Node 22, fetches full history for git timestamps

### `quartz.config.ts`
- `baseUrl`: Set to GitHub Pages URL
- Update this if using custom domain

---

## ✨ Benefits of GitHub Pages

1. **Free Hosting** - No cost
2. **Automatic Deploys** - Push and forget
3. **Fast CDN** - Global distribution
4. **HTTPS** - Secure by default
5. **Version Control** - Every change tracked

---

## 🎯 Next Steps After Setup

1. **Test the live site** - Visit the URL
2. **Share with team** - Send URL to collaborators
3. **Set up analytics** - Already configured (Plausible)
4. **Consider custom domain** - For professional URL
5. **Monitor deployments** - Check Actions tab regularly

---

## 📞 Need Help?

- **GitHub Pages Docs:** https://docs.github.com/pages
- **Quartz Docs:** https://quartz.jzhao.xyz/hosting
- **Repository Issues:** https://github.com/refibcn/Regenerant-Catalunya/issues

---

**Last Updated:** October 11, 2025  
**Status:** Ready to deploy! Just follow Step 1-4 above.

