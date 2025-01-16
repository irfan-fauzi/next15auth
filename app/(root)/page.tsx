import SearchForm from "@/components/SearchForm";
import StartupCards from "@/components/StartupCards";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "irfan" },
      _id: 1,
      description: "ini adalah deskripsi",
      image:
        "https://images.unsplash.com/photo-1735542214686-a745d3684c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "we Robots",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "irfan" },
      _id: 2,
      description: "ini adalah deskripsi",
      image:
        "https://images.unsplash.com/photo-1735542214686-a745d3684c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "we Robots",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "irfan" },
      _id: 3,
      description: "ini adalah deskripsi",
      image:
        "https://images.unsplash.com/photo-1735542214686-a745d3684c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "we Robots",
    },
  ];
  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pich Your Startup, <br /> Connect with Founders
        </h1>
        <p className='sub-heading'>
          Submit idea, Vote pitches, adnGet Noticed in Competition
        </p>
        <SearchForm query={query} />
      </section>

      <section className='section_container border'>
        <p className='text-30-semibold'>
          {query ? `Search result for "${query}"` : "All startup"}
        </p>
        <ul className='grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCards,) => <StartupCards post={post} key={post._id} />)
          ) : (
            <p className='no-results'>No startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}
