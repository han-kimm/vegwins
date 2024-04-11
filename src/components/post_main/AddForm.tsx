'use client';

import { useState } from 'react';
import AddImage from '@/components/post_main/AddImage';

const AddForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const addImageProps = { image, setImage };

  return (
    <form>
      <AddImage {...addImageProps} />
    </form>
  );
};
export default AddForm;
