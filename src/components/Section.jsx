import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}
      <div className="absolute top-20 left-5 w-[1px] h-full bg-slate-600 pointer-events-none md:block lg:left-[30px] xl:left-[40px]" />
      <div className="absolute top-20 right-5 w-[1px] h-full bg-slate-600 pointer-events-none md:block lg:right-[30px] xl:right-[40px]" />
      {crosses && (
        <>
          <div
            className={`absolute top-0 left-[30px] right-[30px] h-[1px] bg-slate-600 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-[40px] xl:right-[40px]`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
