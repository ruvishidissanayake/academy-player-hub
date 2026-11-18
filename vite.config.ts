process.env.LOVABLE_PREVIEW_HOST =
  process.env.LOVABLE_PREVIEW_HOST || "6a1d42d8-437e-4a23-9740-a5335e0ca4db.lovableproject.com";

// Base Vite configuration for TanStack Start and Tailwind CSS
// Additional config can be passed via defineConfig({ vite: { ... }, etc... }) if needed.
import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

function localAssetsCachePlugin() {
  const mimeTypes: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".mp4": "video/mp4",
  };

  return {
    name: "local-assets-cache",
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const rawUrl = (req.url || "").split("?")[0];
        if (rawUrl.startsWith("/__l5e/assets-v1/")) {
          const filePath = path.join(process.cwd(), "public", rawUrl);
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            res.statusCode = 200;
            res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
            res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
            return fs.createReadStream(filePath).pipe(res);
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  vite: {
    plugins: [localAssetsCachePlugin()],
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
