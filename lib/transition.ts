/** Shared name so the service-card image on /services and the destination
 *  page's hero image are matched by the View Transitions API and morph
 *  into each other instead of a hard cut. */
export function svcTransitionName(slug: string) {
  return `svc-hero-${slug.replace(/\//g, "-")}`;
}
