import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function getEnvVars() {
  let cfEnv: Record<string, string | undefined> = {};
  
  try {
    // getCloudflareContext might be synchronous or asynchronous depending on the exact version,
    // but in opennextjs/cloudflare it's usually async and returns { env }
    const ctx = await Promise.resolve(getCloudflareContext());
    if (ctx && ctx.env) {
      cfEnv = ctx.env as Record<string, string | undefined>;
    }
  } catch (err) {
    // Fallback if context is not available
  }

  const result = {
    MAINTENANCE_MODE: cfEnv.MAINTENANCE_MODE ?? process.env.MAINTENANCE_MODE,
    PREVIEW_ACCESS_TOKEN: cfEnv.PREVIEW_ACCESS_TOKEN ?? process.env.PREVIEW_ACCESS_TOKEN,
    RESEND_API_KEY: cfEnv.RESEND_API_KEY ?? process.env.RESEND_API_KEY,
    CONTACT_TO_EMAIL: cfEnv.CONTACT_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL: cfEnv.CONTACT_FROM_EMAIL ?? process.env.CONTACT_FROM_EMAIL,
  };
  return result;
}
