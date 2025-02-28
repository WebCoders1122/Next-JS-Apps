import Link from "next/link";
import getFormattedDate from "../../../lib/getFormattedDate";

type Props = {
  post: blogPost;
};
const PostListing = ({ post }: Props) => {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <div className='mt-4 text-2xl dark:text-white/90'>
      <Link
        className='underline hover:text-black/70 dark:hover:text-white'
        href={`/posts/${id}`}>
        {title}
      </Link>
      <br />
      <p className='text-sm mt-1'>{formattedDate}</p>
    </div>
  );
};
export default PostListing;
