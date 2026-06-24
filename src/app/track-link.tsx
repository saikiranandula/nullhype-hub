"use client";

import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

interface TrackedLinkProps {
  href: string;
  event: string;
  eventData?: Record<string, string>;
  className?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}

/** An anchor that fires a Vercel Analytics event on click. */
export function TrackedLink({ href, event, eventData, className, target, rel, children }: TrackedLinkProps) {
  return (
    <a href={href} className={className} target={target} rel={rel} onClick={() => track(event, eventData)}>
      {children}
    </a>
  );
}
