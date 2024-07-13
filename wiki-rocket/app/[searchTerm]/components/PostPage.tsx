import Link from "next/link";

type Props = { data: Result };
const PostPage = ({ data }: Props) => {
  const textCol = (
    <div className='flex flex-col justify-between p-4 leading-normal'>
      <Link
        href={`https://en.wikipedia.org/?curid=${data.pageid}`}
        className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {data.title}
      </Link>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        {data.extract}
      </p>
    </div>
  );
  return data?.thumbnail?.source ? (
    <article className='flex flex-col m-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-5'>
      <img
        className='object-cover rounded-t-lg md:rounded-none md:rounded-s-lg'
        src={data.thumbnail?.source}
        width={data.thumbnail?.width}
        height={data.thumbnail?.height}
        alt={data.pageid}
      />
      {textCol}
    </article>
  ) : (
    <article className='flex flex-col m-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-5'>
      {textCol}
    </article>
  );
};
export default PostPage;
