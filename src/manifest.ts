import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "../package.json";

const { version } = packageJson;

export const manifest = defineManifest({
  manifest_version: 3,
  name: "Chrome Extension Template",
  description: "A template for building Chrome extensions with Vite and React",
  version,
  action: {
    default_popup: "src/popup/index.html",
  },
  background: {
    service_worker: "src/background/index.ts",
    type: "module",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/content/index.ts"],
      run_at: "document_end",
    },
  ],
  permissions: ["activeTab", "scripting", "storage"],
  options_ui: {
    page: "src/settings/index.html",
    open_in_tab: true,
  },
});
