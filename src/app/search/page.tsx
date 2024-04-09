import { SearchParamsType } from '@/constants/searchCookie';
import HomeLink from '@/components/common/HomeLink';
import LiftingButton from '@/components/common/LiftingButton';
import CategorySelector from '@/components/search_header/CategorySelector';
import SearchBar from '@/components/search_header/SearchBar';
import SearchResult from '@/components/search_main/SearchResult';

interface Props {
  searchParams: { [key in SearchParamsType]: string | undefined };
}

const Search = ({ searchParams }: Props) => {
  const { c, k } = searchParams;
  return (
    <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
      <header className="mb-20 flex flex-col gap-8">
        <div className="flex gap-8">
          <SearchBar k={k} />
          <HomeLink />
        </div>
        <CategorySelector selected={c} />
      </header>
      <main className="flex flex-grow flex-col gap-24">
        <SearchResult k={k} />
      </main>
      <LiftingButton />
    </div>
  );
};
export default Search;
