import IconAlch from 'public/icon/place-alch.svg';
import IconBake from 'public/icon/place-bake.svg';
import IconCafe from 'public/icon/place-cafe.svg';
import IconConv from 'public/icon/place-conv.svg';
import IconCosm from 'public/icon/place-cosm.svg';
import IconExer from 'public/icon/place-exer.svg';
import IconHot from 'public/icon/place-hot.svg';
import IconInst from 'public/icon/place-inst.svg';
import IconMart from 'public/icon/place-mart.svg';

export const CATEGORY = {
  편의점: IconConv,
  마트: IconMart,
  드럭스토어: IconCosm,
  빵집: IconBake,
  카페: IconCafe,
  패스트푸드: IconInst,
  술집: IconAlch,
  '운동 후': IconExer,
  '인기 상품': IconHot,
};

export const CATEGORY_KEY = Object.keys(CATEGORY) as Array<keyof typeof CATEGORY>;