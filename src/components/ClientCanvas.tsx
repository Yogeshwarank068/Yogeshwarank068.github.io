import { lazy, Suspense, useEffect, useState } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

export function ClientCanvas() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <Suspense fallback={null}>
      <HeroScene />
    </Suspense>
  );
}
