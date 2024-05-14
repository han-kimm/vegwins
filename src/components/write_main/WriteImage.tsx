import { SetSubmitData } from '@/constants/default';
import imageCompression from 'browser-image-compression';
import Image from 'next/image';
import { ChangeEvent, memo, useState } from 'react';
import toast from 'react-hot-toast';

interface Props {
  image: Blob | string | undefined;
  setImage: SetSubmitData;
}

const WriteImage = memo(function WriteImage({ image, setImage }: Props) {
  const [thumbnail, setThumbnail] = useState(() => (typeof image === 'string' ? image : ''));
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files?.[0];
    if (!newFile) {
      return;
    }
    if (!['image/png', 'image/jpg', 'image/jpeg'].includes(newFile.type)) {
      toast.error('png, jpg, jpeg 확장자만 업로드 가능합니다.');
      return;
    }

    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    const compressedFile = await imageCompression(newFile, options);
    setImage((prev) => ({ ...prev, image: compressedFile }));

    const newthumbnail = URL.createObjectURL(newFile);
    setThumbnail((prev) => (URL.revokeObjectURL(prev), newthumbnail));
    e.target.value = '';
  };

  const resetThumbnail = () => {
    setImage((prev) => ({ ...prev, image: '' }));
    setThumbnail((prev) => (URL.revokeObjectURL(prev), ''));
  };

  return (
    <div className="mb-12 flex w-full flex-col gap-8">
      <div className="flex h-40 items-baseline gap-8">
        <h2 className="text-18 font-medium">이미지</h2>
        {image && (
          <button type="button" onClick={resetThumbnail} className=" p-4 font-bold text-sky">
            기본 이미지로 설정하기
          </button>
        )}
      </div>
      <label
        htmlFor="image"
        className="flex-center transform-active relative mx-auto block w-full max-w-300 rounded-md border border-black-40 pt-[min(100%,_30rem)] text-black-60 active:opacity-70"
        tabIndex={0}
      >
        {
          <Image
            fill
            priority
            sizes="300px"
            src={thumbnail || '/image/default.webp'}
            alt={thumbnail ? '추가한 이미지 썸네일' : '기본 이미지'}
            className="rounded-md object-cover"
          />
        }
      </label>
      <input onChange={handleChange} id="image" type="file" accept="image/png,.jpg,.jpeg" hidden />
    </div>
  );
});
export default WriteImage;
