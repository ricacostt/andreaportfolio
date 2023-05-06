import Link from 'next/link'
export default function Custom404() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <button>
      <Link href="/">
   
        Go back home
     
    </Link>
    </button>
    </>
  );
}
