// Shared scroll-timing constants for DockingWordHero (the giant-word,
// letters-dock-to-sidebar hero used on About and Our Process) and the
// per-page pin distance SiteBackground needs to freeze its parallax for.

// How far (in scroll px) the reflow-to-sidebar animation plays out over, and
// how quickly the handoff from the in-flow text to the fixed copy happens.
// Kept short deliberately: the letters stay full-size while transitioning,
// so a long reflow gives the page content below time to scroll up into the
// same screen area the letters are still sliding through, and the two
// visibly collide. A quick reflow clears that overlap window fast.
export const REFLOW_DISTANCE = 200;
export const HANDOFF_DISTANCE = 40;
// Movement doesn't start until the crossfade (real → fixed copy) finishes.
// Without this gap, the fixed copy starts sliding away the instant it
// begins fading in, while the real letters are still fading out in their
// original spot — for a few frames both are partially visible in different
// positions, which reads as a ghosting/double-vision glitch. Holding the
// fixed copy still (at the exact same spot as the real letters) until the
// crossfade completes makes the handoff invisible.
export const REFLOW_START = HANDOFF_DISTANCE;
// Each letter starts its own curve this many scroll-px after the next one
// (the last letter leads, earlier letters wait longer), so the word peels
// into motion right-to-left, hook end first, like a whip rather than every
// letter launching in lockstep.
export const LETTER_STAGGER = 18;
export const DOCKED_RIGHT_MARGIN = 110;

// Extra scroll distance to reserve, on top of one viewport, so a
// DockingWordHero section stays pinned until its slowest letter — index 0,
// the longest-delayed under the reversed stagger — finishes docking.
// Without this the next section's content scrolls up into view while the
// letters are still mid-flight. The +60 is a short hold after docking
// finishes so the settled stack registers before scroll resumes.
export function getPinDistance(word: string) {
  return REFLOW_START + (word.length - 1) * LETTER_STAGGER + REFLOW_DISTANCE + 60;
}

// Which pages use a pinned DockingWordHero, and which word they pin around
// — SiteBackground looks a page up here to know how long to freeze its
// scroll-linked parallax for, without needing to import each page's hero.
export const PINNED_HERO_WORDS: Record<string, string> = {
  "/about": "ABOUT",
  "/our-process": "PROCESS",
  "/services": "SERVICES",
  "/contact": "CONTACT",
  "/blog": "BLOG",
};
