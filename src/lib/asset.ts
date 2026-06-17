// Préfixe les chemins d'assets publics avec le basePath (ex. "/Portfolio")
// lors du build de production pour GitHub Pages. En local, NEXT_PUBLIC_BASE_PATH
// n'est pas défini => chemins à la racine, dev inchangé.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path?: string): string | undefined {
  if (!path) return path;
  return path.startsWith("/") ? `${BASE}${path}` : path;
}
