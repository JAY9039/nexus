import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
