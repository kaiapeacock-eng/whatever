"use client";

import { initAll } from "@amplitude/unified";

if (typeof window !== "undefined") {
  initAll("2cd0a3405168ae1455f7e9dfaa7d9022", {
    analytics: { autocapture: true },
    sessionReplay: { sampleRate: 1 },
  });
}

export default function AmplitudeInit() {
  return null;
}
