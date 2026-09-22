import BrandMark from "./BrandMark";
import Container from "./Container";

export default function Footer() {
  return (
    <Container className="py-16">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <BrandMark className="size-8 text-[#dc1d27]" />
        <p className="text-foreground text-sm">
          Built by <b>Ankur Kharb</b> &middot; &copy; {new Date().getFullYear()}
        </p>
        <p className="text-secondary max-w-md text-xs leading-relaxed">
          Fan-made theme inspired by Kentaro Miura&apos;s <em>Berserk</em>.
          Berserk and its characters belong to their respective owners.
        </p>
      </div>
    </Container>
  );
}
