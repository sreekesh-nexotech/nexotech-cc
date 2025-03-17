import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Nexotech">
      <Image
        src="/images/logo-blue-favicon.png" // Replace with your logo's path
        alt="Nexotech Logo"
        width={50} // Adjust width as needed
        height={50} // Adjust height as neede
      />
    </Link>
  );
}
