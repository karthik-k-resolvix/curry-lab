# Fixing Deployment Lockfile Issue

## Problem
The deployment is failing with:
```
ERR_PNPM_OUTDATED_LOCKFILE  Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with package.json
```

This happens because `googleapis` was added to `package.json` but the lockfile wasn't updated.

## Solution

### Option 1: Update Lockfile Locally (Recommended)

1. **Run pnpm install locally:**
   ```bash
   pnpm install
   ```
   This will update `pnpm-lock.yaml` to match your `package.json`.

2. **Commit the updated lockfile:**
   ```bash
   git add pnpm-lock.yaml
   git commit -m "Update pnpm-lock.yaml for googleapis dependency"
   git push
   ```

3. **Redeploy** - The deployment should now work.

### Option 2: Modify Deployment Config (If you control it)

If you're using a CI/CD pipeline (GitHub Actions, GitLab CI, etc.), you can temporarily remove the `--frozen-lockfile` flag:

**Before:**
```yaml
- run: pnpm install --frozen-lockfile
```

**After:**
```yaml
- run: pnpm install
```

**Note:** This is less secure as it allows the lockfile to change during deployment. Use Option 1 for production.

### Option 3: Use pnpm install --no-frozen-lockfile (Not Recommended)

Some deployment platforms allow you to override the frozen-lockfile setting, but this is not recommended for production as it can lead to inconsistent builds.

## Verification

After updating the lockfile, verify it includes `googleapis`:

```bash
grep -A 5 "googleapis" pnpm-lock.yaml
```

You should see entries for `googleapis` and its dependencies.

## Prevention

Always run `pnpm install` locally after modifying `package.json` and commit the updated `pnpm-lock.yaml` before pushing changes.
