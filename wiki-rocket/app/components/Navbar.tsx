import Search from "./Search";

const Navbar = () => {
  return (
    <nav className='bg-slate-600 p-3 flex flex-col gap-3 md:flex-row items-center justify-around'>
      <h2 className='font-bold text-3xl'>Wiki Rocket</h2>
      <Search />
    </nav>
  );
};
export default Navbar;
