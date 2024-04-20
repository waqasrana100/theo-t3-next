import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  console.log("posts =====>", { images });
  return (
    <main className="">
      <SignedIn>
        <div className="flex flex-wrap gap-4">
          {images.map((image, index) => (
            <div key={image.id + "-" + index}>
              {image?.url.includes(".mp4") ? (
                <video src={image?.url} autoPlay muted loop />
              ) : (
                <>
                  <Image src={image?.url} width={300} height={300} alt="" />
                  <p>{image?.name}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </SignedIn>
      <SignedOut>
        <p className="text-center text-3xl">Sign in to see images</p>
      </SignedOut>
    </main>
  );
}
