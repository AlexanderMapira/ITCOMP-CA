"use client";

import Navbar from "./components/Navbar";
import ImageTrailHero from "./components/ImageTrailHero";

export default function Page() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      {/* Hero */}
      <ImageTrailHero
        frontWords={["Next-Gen", "Innovative", "Technology"]}
        frontWordSize="clamp(32px, 5vw, 64px)"
        frontSubtext={[
          "Building your future with cutting-edge and scalable technology solutions",
          "",
        ]}
        sentences={[
          "KULTURESET IS CULTURE",
          "CREATIVITY IN MOTION",
          "AFRICA BUILDS FUTURES",
          "DESIGN MOVES PEOPLE",
        ]}
      />
    </main>
  );
}
