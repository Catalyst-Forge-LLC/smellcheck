# smellcheck.dev

Marketing site for [Smell Check](https://www.npmjs.com/package/smellcheck), built with
[FilePress](https://getfilepress.com) ([`getfilepress`](https://www.npmjs.com/package/getfilepress)
on npm).

```bash
pnpm install
pnpm docs:build   # Markdown → docs/dist
pnpm dev          # local preview
pnpm build        # → build/
```

Docs source: `docs/*.md` + `_nav.json`. FilePress mounts `docs/dist` at `/docs`.

From the package root: `pnpm site:dev`, `pnpm site:build`, `pnpm ship`.

If [LocalSlip](https://www.npmjs.com/package/localslip) is installed, this site stays on **5181** as `smellcheck-site`.

## Deploy (Cloudflare Pages)

**Use one pipeline only.** Dual deploys overwrite each other when asset hashes
disagree.

```bash
pnpm ship
# = pnpm build && wrangler pages deploy build --project-name=smellcheck
```

Then attach **smellcheck.dev** in the Cloudflare dashboard. Keep **aibreze.com**
attached as a redirect source.

### Git-connected Pages

| Setting | Value |
| --- | --- |
| Root directory | `site` |
| Build command | `pnpm install && pnpm build` |
| Output directory | `build` |

Dependency is the public npm package:

```json
"getfilepress": "^0.1.3"
```

## Launch checklist

- [x] GitHub repo is public
- [x] Site live at `https://smellcheck.dev`
- [ ] `aibreze.com` 301s to `smellcheck.dev`
- [ ] Confirm `og:image` / Twitter card in a debugger
