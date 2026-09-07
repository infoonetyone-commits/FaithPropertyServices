"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import { armViewTransitionSignal } from "@/lib/viewTransitionBridge";

type DocumentWithViewTransitions = Document & {
  startViewTransition?: (callback: () => Promise<void> | void) => void;
};

export default function ViewTransitionLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // let cmd/ctrl-click open in new tab normally
    e.preventDefault();
    const doc = document as DocumentWithViewTransitions;
    if (!doc.startViewTransition) {
      router.push(href);
      return;
    }
    doc.startViewTransition(() => {
      return new Promise<void>((resolve) => {
        // Resolved by the destination page once it actually mounts, so the
        // "after" snapshot reflects real content instead of the old page.
        armViewTransitionSignal(resolve);
        router.push(href);
        setTimeout(resolve, 1200); // safety net if the signal never fires
      });
    });
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
