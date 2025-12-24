import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
	awsAmplify: {
		// catchAllStaticFallback: true,
		// imageOptimization: { path: "/_image", cacheControl: "public, max-age=3600, immutable" },
		// imageSettings: { ... },
		// runtime: "nodejs18.x", // default: "nodejs18.x" | "nodejs16.x" | "nodejs20.x"
	}
})
