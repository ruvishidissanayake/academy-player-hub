<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Media
- Store uploaded academy media as Lovable Assets pointers and import their URLs; this preserves original media without adding binaries to the repository.
- Share the academy contact constants from a browser-safe module so all call links use one tested source.

## Motion
- Keep shared hover effects in global CSS with fine-pointer guards and reduced-motion overrides so cards and links animate consistently without disturbing touch layouts.
- Observe individual cards and headings for scroll reveals rather than tall grid wrappers; compose reveal and hover transitions in shared CSS so neither overrides the other.
