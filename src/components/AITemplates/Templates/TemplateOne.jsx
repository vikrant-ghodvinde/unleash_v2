const TemplateOne = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center aspect-square"
      style={{
        background: "radial-gradient(#fff, #C7BDDF)",
      }}
    >
      <div className="w-64">
        <img
          src="/images/auto-generated/national-doctors-day.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-2 w-full">
        <div className="grid grid-cols-12">
          <div className="relative col-span-4">
            <div className="relative flex items-center gap-1.5 font-bold w-full h-12 px-2">
              <span className="block w-5 min-w-5 h-5 bg-white rounded-md"></span>
              <div className="text-xs">9426406156</div>
            </div>
          </div>
          <div className="relative col-span-8">
            <div className="relative flex items-center gap-1.5 font-bold w-full h-12 ms-auto ps-[54px] px-2 z-10">
              <div className="absolute left-0 top-0 flex bg-transparent w-full h-12 border-yellow-400 border-b-[50px] border-l-[50px] border-l-transparent -z-10">
                <div className="absolute -left-[20px] top-0 bg-transparent w-0 h- border-b-[20px] border-l-[20px] border-l-transparent -z-10"></div>
              </div>
              <span className="block w-5 min-w-5 h-5 bg-white rounded-md"></span>
              <div className="text-[10px] leading-tight uppercase">
                Shop No: 6 Jyoti kashi parekh apartment, vasant kunj cross road
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
