"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  /** Where to render the indicator */
  placement?: "top" | "right";
};

export default function ScrollProgress({ placement = "top" }: Props) {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
      setP(scrollTop / max);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const style = useMemo(() => {
    const pct = Math.max(0, Math.min(1, p));
    if (placement === "right") {
      return { height: `${pct * 100}%` } as const;
    }
    return { width: `${pct * 100}%` } as const;
  }, [p, placement]);

  if (placement === "right") {
    return (
      <div className="wk-progress wk-progress--right" aria-hidden="true">
        <div className="wk-progress__bar" style={style} />
      </div>
    );
  }

  return (
    <div className="wk-progress" aria-hidden="true">
      <div className="wk-progress__bar" style={style} />
    </div>
  );
}
