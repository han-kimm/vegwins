import { RATING_MSG } from '@/constants/default';
import { Paper, Rating } from '@/types/data';
import { getCookie } from '@/utils/cookie';
import ajax from '@/utils/fetching';
import { setLocalStorage } from '@/utils/localStorage';
import Image from 'next/image';

interface Props {
  paperRating?: Paper['rating'];
  paperId: string;
  rating: Rating;
  setRating: (rating: Rating) => void;
}
const MyRatingSelector = ({ paperRating, paperId, rating, setRating }: Props) => {
  const changeRating = async (status: Rating) => {
    const newValue = rating === status ? -1 : status;
    setRating(newValue);

    const session = await getCookie('v_s');
    if (!session) {
      setLocalStorage({ key: `r${paperId}`, value: newValue });
      return;
    }

    try {
      await ajax.post({ path: `/paper/${paperId}/user`, body: { rating: newValue } });
    } catch {
      setRating(rating);
    }
  };

  return (
    <>
      <div className="flex w-full justify-evenly" role="group" aria-label="평가 고르기">
        {RATINGS.map((status) => (
          <button
            type="button"
            onClick={() => changeRating(status)}
            key={status}
            className={`flex-center transform-active relative h-40 w-40 rounded-full ${rating === status ? 'bg-orange' : 'bg-black-20'}`}
          >
            {rating === status && <div className="absolute -top-12 left-1/2 mb-4 h-8 w-8 -translate-x-1/2 rounded-full bg-black-80" />}
            <Image width={24} height={24} src={`/icon/rate-${status}.svg`} alt={RATING_MSG[status]} />
          </button>
        ))}
      </div>
      {rating !== -1 && (
        <span className="absolute bottom-4">{paperRating ? `${paperRating[rating]}명과 같은 의견이에요!` : '첫 평가 감사합니다!'}</span>
      )}
    </>
  );
};
export default MyRatingSelector;

const RATINGS = [2, 1, 0] as const;