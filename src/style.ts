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

export const services = {
  service:
    'bg-indigo-900 rounded-b-3xl border border-solid border-primary h-fit duration-300 hover:bg-transparent hover:border-indigo-900 h-auto',
  head: 'bg-primary p-8 rounded-b-3xl shadow-[0_2rem_1rem_rgba(0,0,0,0.1)]',
  title: 'text-bg text-base text-center',
  item: 'flex gap-4 mb-3',
  icon: 'text-primary mt-[2px]',
  paragraph: 'text-sm text-gray-200',
};

export const portfolio = {
  item: 'bg-indigo-900 p-5 rounded-[2rem] border border-solid border-transparent duration-300 hover:border-primaryVariant hover:bg-transparent flex flex-col items-center sm:items-start',
  img: 'rounded-3xl overflow',
  title: 'mt-5 mx-0 mb-8',
  links: 'flex gap-4 mb-4',
};

export const contacts = {
  option:
    'bg-indigo-900 p-5 rounded-3xl text-center border border-solid border-transparent duration-300 hover:border-primaryVariant hover:bg-transparent',
  icon: 'text-2xl mb-2',
  link: 'mb-3 inline-block text-sm',
  input:
    'w-full p-6 rounded-lg bg-transparent border-2 border-solid border-primaryVariant resize-none color-white',
};

export const footer = {
  link: 'text-bg',
  links:
    'flex flex-col gap-6 text-bg flex-wrap justify-center sm:flex-row sm:gap-8 mx-auto mt-0 mb-12',
};

export default styles;
