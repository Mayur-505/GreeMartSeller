import SaidbarDropdwon from "./SaidbarDropdwon";

interface Iprops {
  mapdata: string[];
  name: string;
  icon?: any;
  cssclss?: any;
}

const ComanDropdwon = ({ mapdata, name, icon, cssclss }: Iprops) => {
  return (
    <>
      <SaidbarDropdwon
        header={
          <div className="flex items-center gap-[15px] font-Inter text-[18px] font-normal leading-[normal] tracking-[0.288px]">
            {icon}
            {name}
          </div>
        }
        cssclss={cssclss}
        items={mapdata?.map((item) => ({
          title: item,
          content: <div> {item}</div>,
        }))}
        showSeeAll={false}
      />
      {/* <Link to='#' className='text-primary font-Poppins text-[22px] cursor-pointer'> See all </Link> */}
    </>
  );
};

export default ComanDropdwon;
