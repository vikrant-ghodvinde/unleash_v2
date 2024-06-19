import { ScrollArea } from "@/ui/shadcn/components/ui/scroll-area";
import phoneCode from "@/libs/json/phoneCode.json";
import { useState } from "react";

const PhoneAuth = () => {
  const [selectedCode, setSelectedCode] = useState("+91");
  const [searchQuery, setSearchQuery] = useState("");
  const [phone, setPhone] = useState("");

  // SEARCH PHONE CODE
  const filteredPhoneCodes = phoneCode.filter(
    (item) =>
      item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone_code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = selectedCode + phone;
    console.log(phoneNumber);
  };

  return (
    <form className="grid grid-cols-12 gap-y-4" onSubmit={handlePhoneSubmit}>
      <div className="col-span-12">
        <div className="flex items-center gap-2">
          <div className="relative group">
            <button
              type="button"
              className="w-14 h-10 text-sm border border-zinc-200 rounded-lg outline-none"
            >
              {selectedCode}
            </button>
            <div className="absolute top-full mt-1 bg-white border border-zinc-200 shadow-md shadow-black/10 w-48 rounded-lg opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-100">
              <div className="w-[90%] h-8 mx-auto my-2">
                <input
                  type="text"
                  className="w-full h-full p-2 text-xs border border-zinc-200 rounded-md outline-none"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <ScrollArea className="h-[200px] w-full">
                <ul className="flex flex-col gap-y-1">
                  {filteredPhoneCodes?.map((item) => (
                    <li
                      key={item.country}
                      role="button"
                      className={`text-xs py-1.5 px-2 hover:bg-zinc-100 ${
                        item.phone_code === selectedCode ? "bg-zinc-100" : ""
                      }`}
                      onClick={() => setSelectedCode(item.phone_code)}
                    >
                      {item.country} ({item.phone_code})
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </div>
          <input
            type="number"
            className="w-full h-10 p-4 text-sm border border-zinc-200 rounded-lg outline-none"
            placeholder="123"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="col-span-12">
        <button
          type="submit"
          className="w-full h-10 py-2 px-6 text-sm bg-dark hover:bg-black text-white rounded-lg transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default PhoneAuth;
