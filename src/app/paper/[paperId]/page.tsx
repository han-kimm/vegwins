import { Paper } from '@/types/data';
import ajax from '@/utils/fetching';
import LiftingButton from '@/components/common/LiftingButton';
import LinkHome from '@/components/common/LinkHome';
import ReturnLink from '@/components/common/LinkReturn';
import Information from '@/components/paper_main/Information';
import MyRating from '@/components/paper_main/MyRating';
import Share from '@/components/paper_main/Share';
import Users from '@/components/paper_main/Users';

interface Props {
  params: { paperId: string };
}

const PaperPage = async ({ params }: Props) => {
  const { paperId } = params;
  const paperData: Paper = await ajax.get({ path: `/paper/${paperId}` });
  return (
    <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
      <header className="mb-12 flex justify-between">
        <ReturnLink href="/search" text="검색 결과로 돌아가기" icon="arrow-left" />
        <LinkHome isPaper />
      </header>
      <main className="flex flex-grow animate-fadeIn flex-col gap-24">
        <Information data={paperData} />
        <div className="flex gap-20">
          <MyRating paperRating={paperData.rating} paperId={paperId} />
          <Share />
        </div>
        <Users data={paperData} />
      </main>
      <LiftingButton />
    </div>
  );
};
export default PaperPage;
