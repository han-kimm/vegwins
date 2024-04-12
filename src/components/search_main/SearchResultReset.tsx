import { SP_KEYWORD } from '@/constants/default';
import useChangeQuery from '@/hooks/useSavePath';

const SearchResultReset = () => {
  const { changeQuery } = useChangeQuery();
  return (
    <button onClick={() => changeQuery(SP_KEYWORD)} type="reset" className="ml-8 font-bold text-sky">
      검색어 초기화
    </button>
  );
};
export default SearchResultReset;
