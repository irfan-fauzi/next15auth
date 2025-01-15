import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

const SearchForm = () => {
  const query = "hh";
  return (
    <Form action='/' scroll={false} className='search-form'>
      <input
        type='text'
        name='query'
        defaultValue={query}
        className='search-input'
        placeholder='Search startup'
      />
      <div className='flex gap-2'>
        
        {query && <SearchFormReset /> /* reset search form */} 
        <button type='submit' className='search-btn text-white'>
          S
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
