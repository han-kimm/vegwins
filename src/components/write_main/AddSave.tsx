import { WRITE_SAVE } from '@/constants/sessionStorage';
import { getSessionStorage } from '@/utils/sessionStorage';
import Image from 'next/image';
import { memo, useEffect, useState } from 'react';
import IconRecall from 'public/icon/recall.svg';
import IconSave from 'public/icon/save.svg';

interface Props {
  handleSave: () => void;
  handleRecall: () => void;
}

const AddSave = memo(function AddSave({ handleSave, handleRecall }: Props) {
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    const initial = !!getSessionStorage(WRITE_SAVE);
    setIsSave(initial);
  }, []);

  return (
    <div className="flex gap-20 text-18">
      <button
        onClick={() => (setIsSave(true), handleSave())}
        className="flex-center transform-active grow gap-12 rounded-sm border border-black-80 py-12 font-bold"
      >
        <IconSave />
        임시 저장
      </button>
      <button
        onClick={handleRecall}
        disabled={!isSave}
        className={`${isSave ? 'transform-active border-black-80' : 'border-black-40 text-black-40'} flex-center grow gap-12 rounded-sm border py-12 font-bold`}
      >
        <IconRecall />
        불러오기
      </button>
    </div>
  );
});
export default AddSave;