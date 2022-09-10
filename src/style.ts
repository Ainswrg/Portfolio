const styles = {
  container: 'm-auto my-0 sm: w-12/12 md: w-11/12 lg: w-9/12',
  button:
    'w-max inline-block text-primary py-3 px-5 rounded-md cursor-pointer transition-all border border-sky-500 duration-400 ease-in hover:bg-white hover:text-bg hover:border-transparent',
  buttonPrimary: 'bg-primary text-bg',
};

export const header = {
  root: 'h-screen pt-28 overflow-hidden lg:h-screen sm:h-[68vh]',
  social:
    'items-center mt-8 gap-3 flex-col absolute left-0 bottom-12 after:w-px after:h-8 after:bg-primary hidden sm:flex',
};

export const navbar = {
  root: 'bg-[rgba(0,0,0,0.3)] flex w-max px-7 py-3 fixed z-10 left-1/2 -translate-x-1/2 bottom-8 gap-3 rounded-[3rem] backdrop-blur-lg',
  link: 'bg-transparent p-[0.9rem] rounded-full flex text-light text-lg hover:bg-[rgba(0,0,0,0.3)]',
  active: 'bg-bg text-white',
};
export default styles;
