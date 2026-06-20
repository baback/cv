// Soft, client-side access gate for in-progress case studies.
// Unlock state is kept per browser tab (sessionStorage).
const KEY = (id: string) => `unlocked:${id}`

export function isUnlocked(id: string): boolean {
  try {
    return sessionStorage.getItem(KEY(id)) === '1'
  } catch {
    return false
  }
}

export function unlock(id: string): void {
  try {
    sessionStorage.setItem(KEY(id), '1')
  } catch {
    /* ignore */
  }
}
