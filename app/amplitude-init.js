"use client";

import { initAll } from "@amplitude/unified";

if (typeof window !== "undefined") {
  initAll("0699b257fe232caa3dc8871a817e975d", {
    analytics: { autocapture: true },
    sessionReplay: { sampleRate: 1 },
  });
}

export default function AmplitudeInit() {
  return null;
}
