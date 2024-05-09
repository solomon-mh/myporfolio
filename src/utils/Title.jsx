/* eslint-disable react/prop-types */
const Title = ({ title, subTitle }) => {
  return (
    <div className='text-center my-4'>
      <h1 className='text-4xl font-mono font-semibold py-2'>{title}</h1>
      <small className='inline-block font-serif text-orange-400 pb-8'>
        {subTitle}
      </small>
    </div>
  );
};

export default Title;
