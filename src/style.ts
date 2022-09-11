const styles = {
  container: 'm-auto my-0 w-11/12 md:w-12/12 lg:w-9/12',
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

export const about = {
  card: 'bg-indigo-900 border border-solid border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-indigo-900 duration-300',
  icon: 'text-primary text-[1.4rem] m-auto mb-4',
  title: 'text-[0.95rem]',
  small: 'text-[0.7rem] text-light',
};

export const experience = {
  skills:
    'bg-indigo-900 rounded-3xl border border-solid border-transparent hover:bg-transparent hover:border-indigo-900 duration-300 w-5/6 p-8 m-auto my-0 sm:w-full sm:py-8 sm:px-4 lg:w-full lg:py-10 lg:px-20',
  title: 'text-center mb-8 text-primary',
  content: 'grid grid-cols-[repeat(2,1fr)] gap-y-8 p-4 lg:p-0',
  icon: 'mt-[6px] text-primary',
  skill: 'flex gap-4',
};
export default styles;
