"use server";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";

function TopNav() {

  return (
    <nav className="item-center flex w-full justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex flex-row items-center gap-4">
            <UploadButton endpoint="imageUploader" />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}

export default TopNav;
