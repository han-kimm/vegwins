'use client';

import { DEFAULT_SUBMIT, SubmitData, WRITE_SAVE } from '@/constants/default';
import { getLocalStorage } from '@/utils/browserStorage';
import ajax from '@/utils/fetching';
import { canRecall, canSave, required, saveSubmitData } from '@/utils/writeUtils';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import WriteCategory from '@/components/write_main/WriteCategory';
import WriteDescription from '@/components/write_main/WriteDescription';
import WriteHashtag from '@/components/write_main/WriteHashtag';
import WriteImage from '@/components/write_main/WriteImage';
import WriteSave from '@/components/write_main/WriteSave';
import WriteSubmit from '@/components/write_main/WriteSubmit';
import WriteTitle from '@/components/write_main/WriteTitle';

const toastPosition = {
  position: 'bottom-center',
} as const;

const WriteForm = () => {
  const [submitData, setSubmitData] = useState<SubmitData>(DEFAULT_SUBMIT);
  const [reload, setReload] = useState(0);

  const handleSave = () => {
    try {
      saveSubmitData(submitData);
      setReload(reload + 1);
      toast.success('임시 저장 완료!', toastPosition);
    } catch {
      toast.error('다시 시도해 주세요.', toastPosition);
    }
  };
  const handleRecall = () => {
    const prev = getLocalStorage(WRITE_SAVE);
    if (prev) {
      setSubmitData({ ...prev, hashtag: new Set(prev.hashtag) });
      toast.success('불러 오기 성공!', toastPosition);
      return;
    }
    toast.error('다시 시도해 주세요.', toastPosition);
  };

  const router = useRouter();
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (pending) {
      return;
    }

    try {
      setPending(true);
      const noImageData = { ...submitData, image: '', hashtag: [...submitData.hashtag] };
      const formData = new FormData();
      formData.append('image', submitData.image ?? '');
      formData.append('data', JSON.stringify(noImageData));

      const post = await ajax.post({ path: '/paper', body: formData });
      if (!post.error) {
        router.push(`/paper/${post.paperId}`);
      }
    } catch (e) {
      toast.error('다시 시도해주십시오.');
      console.error(e);
    } finally {
      setPending(false);
    }
  };

  return (
    <form className="flex w-full flex-col [&>div:not(:first-child)]:mt-40">
      <WriteImage image={submitData.image} setImage={setSubmitData} />
      <WriteTitle title={submitData.title} setTitle={setSubmitData} />
      <WriteCategory category={submitData.category} setCategory={setSubmitData} />
      <WriteHashtag hashtag={submitData.hashtag} setHashtag={setSubmitData} />
      <WriteDescription description={submitData.description} setDescription={setSubmitData} />
      <WriteSave canSave={canSave(submitData)} canRecall={canRecall(submitData)} handleSave={handleSave} handleRecall={handleRecall} />
      <WriteSubmit required={required(submitData)} handleSubmit={handleSubmit} />
    </form>
  );
};
export default WriteForm;
