import Container from "./Container";

interface QuoteProps {
  quote: string;
  author?: string;
}

export const Quote = ({ quote, author }: QuoteProps) => {
  return (
    <Container className="py-16">
      <figure className="relative overflow-hidden rounded-xl border border-[var(--rule)] bg-[var(--char)] px-6 py-10">
        {/* A single blood-red slash in place of quotation marks. */}
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 h-full w-1 bg-[var(--blood)]"
        />
        <blockquote className="font-display text-foreground relative z-10 text-xl leading-snug text-pretty sm:text-2xl">
          &ldquo;{quote}&rdquo;
        </blockquote>
        {author && (
          <figcaption className="text-secondary mt-4 text-right text-sm italic">
            — {author}
          </figcaption>
        )}
      </figure>
    </Container>
  );
};
