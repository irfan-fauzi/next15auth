import Link from "next/link";

const AuthNavbar = ({ session, signIn, signOut }, { session: object; signIn  }) => {
  return (
    <div className='flex items-center gap-5'>
      {session && session?.user ? (
        <>
          <Link href={"/startup/create"}>
            <span>Create</span>
          </Link>
          <button onClick={signOut}>
            <span>Logout</span>
          </button>
          <Link href={`/user/${session?.id}`}>
            <span>{session?.user?.name}</span>
          </Link>
        </>
      ) : (
        <button onClick={signIn}>
          <span>Log in</span>
        </button>
      )}
    </div>
  );
};

export default AuthNavbar;
