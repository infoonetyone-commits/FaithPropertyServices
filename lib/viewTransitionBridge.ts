/** Bridges Next.js App Router navigation with the View Transitions API.
 *
 * document.startViewTransition()'s callback must not resolve until the DOM
 * actually reflects the new page — but router.push() returns long before
 * Next finishes rendering the destination. So we hand the transition's
 * resolver to a signal mounted on the destination page, which calls it once
 * real content is on screen. A timeout guards against the signal never
 * firing (e.g. navigating somewhere that doesn't mount it). */
let pendingResolve: (() => void) | null = null;

export function armViewTransitionSignal(resolve: () => void) {
  pendingResolve = resolve;
}

export function fireViewTransitionSignal() {
  pendingResolve?.();
  pendingResolve = null;
}
