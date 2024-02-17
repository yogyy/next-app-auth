import { auth, signIn, signOut } from "@/auth";

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}>
      <p>You are not logged in</p>
      <button type="submit">Sign in with GitHub</button>
    </form>
  );
}

function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}>
      <p>{children}</p>
      <button type="submit">Sign out</button>
    </form>
  );
}

export default async function Page() {
  let session = await auth();
  let user = session?.user;

  return (
    <section className="w-full flex flex-col">
      <h1>Home</h1>
      <div>
        {user ? (
          <SignOut>
            {`Welcome ${user.name}`}
            <img
              src={user.image!}
              alt={`${user.name} pic's`}
              width={60}
              height={60}
            />
          </SignOut>
        ) : (
          <SignIn />
        )}
      </div>
    </section>
  );
}
