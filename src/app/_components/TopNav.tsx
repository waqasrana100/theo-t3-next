import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function TopNav() {
  return (
    <nav className="item-center flex w-full justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}

export default TopNav;
