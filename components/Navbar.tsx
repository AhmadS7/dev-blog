import Link from 'next/link';

// Navbar
export default function Navbar() {
  const user = true;
  const username = true;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button>FEED</button>
          </Link>
        </li>

        {/* userSignedIn=true hasUsername=true */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* userSignedIn=false hasUsername=null */}
        {!username && (
          <>
            <li>
              <Link href="/enter">
                <button className="btn-blue">Log in</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
