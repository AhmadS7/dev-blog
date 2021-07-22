import { auth, googleAuthProvider } from '../lib/fIrebase';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Enter(props) {
  const { user, username } = useContext(UserContext);

  // userSignedOut -- <SIgnInButton />
  // userSignedIn but missing username -- <UsernameForm />
  // userSignedIn, has username -- <SignOutButton />

  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

// signIn == gAuthButton
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google.png'} /> Sign in with Google
    </button>
  );
}

// signOut == gAuthButton
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

// usernameForm
function UsernameForm() {
  return <div>User</div>;
}
