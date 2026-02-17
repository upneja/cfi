import { Suspense } from "react";
import { ScorecardContent } from "./ScorecardContent";

export default function ScorecardPage() {
  return (
    <Suspense>
      <ScorecardContent />
    </Suspense>
  );
}
