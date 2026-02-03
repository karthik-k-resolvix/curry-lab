# Quick Deployment Fix (Without Local pnpm install)

Since `pnpm install` is failing locally, here are ways to fix deployment:

## Option 1: Remove Frozen Lockfile Requirement (Easiest)

Modify your deployment configuration to NOT use `--frozen-lockfile`:

### For GitHub Actions:
```yaml
# In .github/workflows/deploy.yml
- name: Install dependencies
  run: pnpm install  # Remove --frozen-lockfile flag
```

### For Netlify:
In `netlify.toml` or Netlify dashboard, ensure build command doesn't use `--frozen-lockfile`:
```toml
[build]
  command = "pnpm install && pnpm run build:client"
```

### For Vercel:
In `vercel.json` or dashboard settings, remove `--frozen-lockfile` from install command.

### For Other Platforms:
Remove `--frozen-lockfile` or `--frozen-lockfile=true` from your install command.

## Option 2: Delete Lockfile and Let Deployment Regenerate

1. **Delete the lockfile:**
   ```bash
   git rm pnpm-lock.yaml
   git commit -m "Remove outdated lockfile for regeneration"
   git push
   ```

2. **Update deployment config** to NOT use `--frozen-lockfile` (see Option 1)

3. **Deploy** - The lockfile will be regenerated during deployment

## Option 3: Use npm Instead (If Platform Supports)

1. **Update package.json** to remove pnpm-specific config (optional)
2. **Delete pnpm-lock.yaml:**
   ```bash
   git rm pnpm-lock.yaml
   ```
3. **Update deployment** to use npm:
   ```yaml
   - run: npm install
   - run: npm run build
   ```
4. **Commit and push**

## Option 4: Manual Lockfile Update (Advanced)

If you want to keep frozen-lockfile, you can manually add googleapis to the lockfile, but this is complex and error-prone. It's better to use Options 1-3.

## Recommended: Option 1

The easiest solution is to temporarily remove `--frozen-lockfile` from your deployment config, let it install normally, then commit the generated lockfile back. This way:
- Deployment will work immediately
- Lockfile will be updated correctly
- You can re-enable frozen-lockfile later if needed

## What's Your Deployment Platform?

Let me know which platform you're using (Netlify, Vercel, GitHub Actions, etc.) and I can provide specific instructions.
