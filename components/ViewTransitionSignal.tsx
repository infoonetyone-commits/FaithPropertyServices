"use client";

import { useEffect } from "react";
import { fireViewTransitionSignal } from "@/lib/viewTransitionBridge";

/** Mounted on pages that can be a view-transition destination; tells any
 * pending transition that real content is now on screen. Renders nothing. */
export default function ViewTransitionSignal() {
  useEffect(() => {
    fireViewTransitionSignal();
  }, []);
  return null;
}
