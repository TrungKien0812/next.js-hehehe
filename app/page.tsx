import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{padding:"2rem",fontFamily:"sans-serif"}}>
      <h1>Xin chao Next.js!</h1>
      <p>day la project dau tien cua toi</p>
      <Link href="/about">Click vao day de di toi trang gioi thieu toi</Link>
    </main>
  );
}
