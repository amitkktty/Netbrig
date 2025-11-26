import { useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number; // milliseconds
  suffix?: string;
  className?: string;
}

export default function CountUp({ end, duration = 1200, suffix = "", className = "" }: CountUpProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * (end - 0) + 0);
      setValue(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  return (
    <div className={className}>
      {value}
      {suffix}
    </div>
  );
}
