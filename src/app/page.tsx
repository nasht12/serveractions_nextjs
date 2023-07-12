import { addPostsToDatabase } from "../../actions/serveractions";
import { Post } from "../../typings";
import Link from "next/link";
import PostButton from "../../components/PostButton";


export default async function Home() {
  const res = await fetch("https://64adcecdb470006a5ec66ca9.mockapi.io/posts", {
    cache: "no-cache",
    next: {
      tags: ["posts"]
    }
  });

   

  const posts: Post[] = await res.json();

  return (
    <main className="flex flex-col items-center p-10">
      <h1 className="font-bold text-center">Add articles</h1>
      <Link href="/article" className="bg-green-400 rounded p-2 m-2">Article form</Link>
      <PostButton />
      <form
        action={addPostsToDatabase}
        className="flex flex-col gap-5 max-w-xl p-5"
      >
        <input
          name="title"
          placeholder="title"
          className="border border-black rounded p-2"
        />
        <input
          name="content"
          placeholder="content"
          className="border border-black rounded p-2"
        />
        <button className="border bg-blue-400 text-white rounded-md p-2">
          Submit
        </button>
      </form>
      <div className="border rounded-sm p-4">
        <h1 className="font-bold text-lg ">list posts</h1>
        <div className="flex flex-wrap gap-5">
          {posts.map((post) => (
            <div className="p-2 shadow">
              {post.title}
              {post.content}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
