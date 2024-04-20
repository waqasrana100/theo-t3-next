import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockData = [
  "https://utfs.io/f/b4a326a5-225c-4dd4-a940-8e1aeb021193-b3ddft.png",
  "https://utfs.io/f/3d8ca6d7-7cb8-4f33-983b-0200673250ac-f4x1et.gif",
  "https://utfs.io/f/8aab98c4-ec2a-4d73-ae91-f331142c88e1-eef6z4.gif",
  "https://utfs.io/f/d030383b-be26-4b14-b48f-729a8f7bb731-7wylrr.jpeg",
  "https://utfs.io/f/6cd60164-5a68-4dba-b984-b9a077e0c27d-195w4z.jpeg",
  "https://utfs.io/f/80a4f4e0-5706-467e-beb0-666df6bec33e-5t5kl1.PORTRAIT.jpg",
  "https://utfs.io/f/8e83ef36-36cc-46ec-a213-a599af5ed540-3ga3pi.jpg",
  "https://utfs.io/f/ed75ad8e-64b0-4b05-b255-8e7bc7545924-uvqnpj.jpeg",
  "https://utfs.io/f/88d105c2-6847-4b13-82a7-b661b06217e8-t5az7x.mp4",
];

const mockImages = mockData.map((url, index) => ({
  id: index,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();


  console.log("posts =====>", { posts });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4"> 
      {posts.map((post)=>(
        <div key={post.id}>{post.name}</div>
      ))}
        {[...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index}>
            {image?.url.includes(".mp4") ? (
              <video src={image?.url} autoPlay muted loop />
            ) : image?.url.includes(".gif") ? (
              <Image src={image?.url} width={300} height={300} alt="" />
            ) : (
              <Image src={image?.url} width={300} height={300} alt="" />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
