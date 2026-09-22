import Image from "next/image";

interface SideArtProps {
  side: "left" | "right";
  src: string;
}

/**
 * Guts artwork filling an empty band beside the content column: the right
 * band sits behind the page index, the left behind the sword gauge. Desktop
 * only, since below lg there are no side bands. Each fades into the page
 * toward the column, so the index and gauge stay legible.
 */
export default function SideArt({ side, src }: SideArtProps) {
  const isLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 bottom-0 z-[1] hidden overflow-hidden lg:block ${
        isLeft ? "right-[calc(50%+384px)] left-0" : "right-0 left-[calc(50%+384px)]"
      }`}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="(min-width: 1024px) 40vw, 0px"
        className="object-cover object-[center_top] opacity-80"
      />
      {/* Fade into the page at the column edge. */}
      <div
        className={`from-background via-background/70 absolute inset-y-0 w-3/5 to-transparent ${
          isLeft ? "right-0 bg-gradient-to-l" : "left-0 bg-gradient-to-r"
        }`}
      />
      <div className="from-background/80 absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent" />
    </div>
  );
}
