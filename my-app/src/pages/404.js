import Link from 'next/link'
export default function Custom404() {
  return (
  
    <div className='notFound'>
      <h1>404 - Page Not Found</h1>
      <button>
      <Link className='linkHome' href="/">

        Go back home
     
    </Link>
    </button>
    </div>
    
  );
}
