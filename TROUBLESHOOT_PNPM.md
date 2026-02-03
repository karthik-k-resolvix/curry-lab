# Troubleshooting pnpm install Failure

## Common Issues & Solutions

### 1. Wrong pnpm Version
The project requires `pnpm@10.14.0`. Check your version:
```bash
pnpm --version
```

If it's different, install the correct version:
```bash
npm install -g pnpm@10.14.0
# or
corepack enable
corepack prepare pnpm@10.14.0 --activate
```

### 2. Corrupted Lockfile
Try deleting and regenerating:
```bash
rm pnpm-lock.yaml
pnpm install
```

### 3. Network/Registry Issues
Try clearing cache and using a different registry:
```bash
pnpm store prune
pnpm install --no-frozen-lockfile
```

### 4. Node Version Issues
Check your Node version (should be compatible with Node 22):
```bash
node --version
```

### 5. Alternative: Use npm Instead
If pnpm continues to fail, you can temporarily use npm:

```bash
# Delete pnpm lockfile
rm pnpm-lock.yaml

# Use npm instead
npm install

# This will create package-lock.json instead
# Note: You'll need to update your deployment config to use npm instead of pnpm
```

### 6. Force Update Lockfile
If you just need to update the lockfile without installing:
```bash
pnpm install --no-frozen-lockfile --force
```

## Quick Fix for Deployment

If you just need to fix the deployment quickly, you can:

1. **Delete the lockfile and let deployment regenerate it:**
   ```bash
   git rm pnpm-lock.yaml
   git commit -m "Remove outdated lockfile"
   git push
   ```
   
   Then modify your deployment config to NOT use `--frozen-lockfile`:
   ```yaml
   # Change from:
   - run: pnpm install --frozen-lockfile
   # To:
   - run: pnpm install
   ```

2. **Or use npm in deployment** (if your platform supports it):
   ```yaml
   - run: npm install
   ```

## What Error Are You Seeing?

Please share the exact error message so I can provide a more specific solution. Common errors:
- `ERR_PNPM_OUTDATED_LOCKFILE` - Lockfile mismatch
- `ERR_PNPM_NO_MATCHING_VERSION` - Package version not found
- Network timeout errors
- Permission errors
