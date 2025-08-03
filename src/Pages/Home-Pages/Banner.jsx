
import { ButtonPrimary, ButtonOutline } from "/src/components/Button";
export default function Banner() {
  return (
    <section id="home" className="bg-hero-pattern lg:block w-full bg-cover h-[650px] ">
      <div className="flex  flex-col text-center">
        <div className="mt-[220px] flex justify-center items-center gap-2 text-zinc-400 text-lg tracking-wide">
          <span className=" relative w-2 h-2 rounded-full bg-emerald-400">
            <span className=" absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
          </span>
          جاهز للمشاريع الابداعية
        </div>
        <div className="flex justify-center  ">
          <p className="">
            <span className="headline-1 ">
              شريكك الاستراتيجي لتعزيز تواجدك الرقمي
            </span>{" "}
          </p>
        </div>
        <div className="flex justify-center my-2 ">
          <h1 className="text-xl font-extralight">أقدم لك حلولاً مبتكرة لبناء تواجدك الرقمي من خلال تصميمات رائعة وتطوير مواقع متخصصة، <br /> تلبي احتياجات الشركات الناشئة، المؤسسات والفريلانسرز</h1>
        </div>
        <div role="button" className="flex items-center justify-center mt-2 ">
        <ButtonPrimary
          href="#contact"
          label="ابدأ مشروعك"
          icon={"right_click"}
        />
        </div>
      </div>
    </section>
  );
}
