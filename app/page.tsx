

const Home = () => {
  return (
    <section className='flex flex-col items-start paddings mb-16 gap-5'>
        <h1>Categories</h1>
        <h1>Posts</h1>
        <h1>LoadMore</h1>
    </section>
    
  )
}

export default Home 

/*
import { prisma } from "./lib/prisma"

const Home = async () => {
  // fetch data from DB
  const posts = await prisma.post.findMany({
    include: {
      category: true,
    },
  })

  return (
    <section className="flex flex-col items-start paddings mb-16 gap-5">
      <h1 className="text-xl font-bold">Categories</h1>

      <div className="flex gap-4 flex-wrap">
        {[...new Set(posts.map(p => p.category?.name))].map(
          (cat, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-200 rounded text-sm"
            >
              {cat}
            </span>
          )
        )}
      </div>

      <h1 className="text-xl font-bold mt-6">Posts</h1>

      <div className="flex flex-col gap-4 w-full">
        {posts.map(post => (
          <div
            key={post.id}
            className="border rounded p-4 w-full"
          >
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.description}</p>

            <p className="text-sm text-gray-400 mt-2">
              Category: {post.category?.name}
            </p>
          </div>
        ))}
      </div>

      <h1 className="mt-6 text-blue-600 cursor-pointer">
        Load More
      </h1>
    </section>
  )
}

export default Home  */
