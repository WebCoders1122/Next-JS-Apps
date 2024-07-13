"use client";

type Props = {
  error: Error;
  reset: () => void;
};

const error = ({ error, reset }: Props) => {
  return (
    <main className='flex flex-col gap-6 items-center justify-center text-center min-h-screen'>
      <h2 className='text-4xl font-bold'>Some Error Occured</h2>
      <button
        className='bg-slate-600 rounded-lg shadow shadow-slate-50 px-5 py-2 font-semibold hover:bg-slate-500'
        onClick={reset}>
        Reset Error
      </button>
    </main>
  );
};
export default error;
