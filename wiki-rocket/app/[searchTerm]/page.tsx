import getWikiResults from "@/lib/getWikiResults";
import PostPage from "./components/PostPage";

type Props = {
  params: { searchTerm: string };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  return {
    title: searchTerm,
    description: `this is meta description of ${searchTerm}`,
  };
}
const SearchPage = async ({ params: { searchTerm } }: Props) => {
  const searchPromise: Promise<SearchResult> = getWikiResults(searchTerm);
  const searchData = await searchPromise;
  const results: Result[] | undefined = searchData.query?.pages;
  //   const results: Result[] | undefined = searchData?.query?.pages

  return (
    <div className='max-w-4xl mx-auto'>
      {results &&
        Object.values(results).map((page) => (
          <PostPage
            key={page.pageid}
            data={page}
          />
        ))}
    </div>
  );
};
export default SearchPage;
