import { cookies } from 'next/headers';
import crypto from 'crypto';
import { getEnvVars } from './env';

export async function checkMaintenanceAccess(
  providedEnvVars?: Awaited<ReturnType<typeof getEnvVars>>,
  providedCookies?: { get: (name: string) => { value: string } | undefined }
): Promise<boolean> {
  const envVars = providedEnvVars ?? await getEnvVars();

  if (envVars.MAINTENANCE_MODE === 'false') {
    return true; // Sitio público
  }

  const secretToken = envVars.PREVIEW_ACCESS_TOKEN;
  if (!secretToken || secretToken.trim() === '') {
    return false; // Token ausente, acceso denegado
  }

  const cookieStore = providedCookies ?? await cookies();
  const accessCookie = cookieStore.get('igc_preview_access');

  if (!accessCookie) {
    return false; // Sin cookie, acceso denegado
  }

  const expectedValue = crypto.createHash('sha256').update(secretToken).digest('hex');
  if (accessCookie.value === expectedValue) {
    return true; // Cookie válida
  }

  return false; // Cookie incorrecta
}
