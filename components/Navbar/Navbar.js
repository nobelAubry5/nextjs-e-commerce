import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#efefef]">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
    </nav>
  );
}
