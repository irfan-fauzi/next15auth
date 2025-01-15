import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pich Your Startup, <br /> Connect with Founders
        </h1>
        <p className='sub-heading'>
          Submit idea, Vote pitches, adnGet Noticed in Competition
        </p>
        <SearchForm />
      </section>
    </>
  );
}
