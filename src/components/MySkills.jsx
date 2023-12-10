const MySkills = () => {
  const mySkills = [
    "HTML",
    "Css",
    "JavaScript",
    "TailwindCss",
    "ReactJs",
    "BootStrap",
    "MUI",
  ];
  return (
    <section className='text-center'>
      <h2 className='text-2xl font-semibold font-mono'>Skills</h2>
      <small>My technical skills</small>
      <div className='skills w-fit sm:w-4/5 m-auto grid  grid-cols-3 gap-4 px-12 py-6'>
        {mySkills.map((skill) => {
          return (
            <div
              className='bg-indigo-300 text-sm px-2 sm:text-base cursor-pointer duration-300 py-1 rounded hover:bg-indigo-400'
              key={crypto.randomUUID()}
            >
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MySkills;
