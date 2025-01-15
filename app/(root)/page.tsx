import SearchForm from "@/components/SearchForm";


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query
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
    </>
  );
}
