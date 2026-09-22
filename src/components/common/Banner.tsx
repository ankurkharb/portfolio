import Image from "next/image";

import Embers from "./Embers";

/**
 * Header art: Guts resting under a blood sky, with embers rising over it.
 * The hero's avatar row overlaps its lower part (see the negative bottom
 * margin), so the art runs behind the brand mark and epithet before fading
 * into the page ahead of the text.
 */
export default function Banner() {
  return (
    // Negative insets cancel the Container padding so the art spans the
    // whole column.
    <div className="bg-background relative z-10 -mx-4 -mb-[104px] h-[40vh] max-h-[400px] min-h-[280px] overflow-hidden sm:-mx-6 sm:-mb-[112px] lg:-mx-8">
      <Image
        src="/assets/guts-banner.jpg"
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover object-[65%_30%]"
      />

      <Embers />

      {/* Darken the lower half so the brand mark and epithet read clearly,
          then dissolve into the page. */}
      <div className="from-background via-background/75 pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-3/5 bg-gradient-to-t to-transparent" />
      <div className="from-background/70 pointer-events-none absolute top-0 bottom-0 left-0 z-20 w-12 bg-gradient-to-r to-transparent" />
      <div className="from-background/70 pointer-events-none absolute top-0 right-0 bottom-0 z-20 w-12 bg-gradient-to-l to-transparent" />
    </div>
  );
}
