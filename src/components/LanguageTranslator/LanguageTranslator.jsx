import { DropDownIcon } from "@/icons";
import { setSelectedLanguage } from "@/libs/redux/reducers/translationReducer";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/ui/shadcn/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const LanguageTranslator = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { selectedLanguage } = useSelector((state) => state.translation);
  const languages = [
    {
      name: "English",
      flag: "english",
      code: "en",
    },
    {
      name: "French",
      flag: "french",
      code: "fr",
    },
    {
      name: "Spanish",
      flag: "spanish",
      code: "es",
    },
    {
      name: "German",
      flag: "german",
      code: "de",
    },
    {
      name: "Italian",
      flag: "italy",
      code: "it",
    },
    {
      name: "Chinese",
      flag: "chinese",
      code: "zh",
    },
    {
      name: "Japanese",
      flag: "japanese",
      code: "ja",
    },
    {
      name: "Korean",
      flag: "korean",
      code: "ko",
    },
    {
      name: "Indonesian",
      flag: "indonesian",
      code: "id",
    },
    {
      name: "Turkish",
      flag: "turkish",
      code: "tr",
    },
  ];

  const languageHandler = (language) => {
    console.log(language?.name);
    i18n.changeLanguage(language?.code);
    dispatch(setSelectedLanguage({ selectedLanguage: language }));
    localStorage.setItem("currentLanguage", language.code);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="px-4 py-3 outline-none text-sm inline-flex items-center justify-between gap-x-1"
        >
          <span className="flex items-center capitalize">
            <img
              src={`/images/flags/${selectedLanguage?.flag}.png`}
              alt=""
              className="w-3.5 h-3.5 me-1"
            />
            {selectedLanguage?.code}
          </span>
          <DropDownIcon width={14} strokeWidth={2} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-28">
        {languages?.map((language) => (
          <DropdownMenuCheckboxItem
            key={language.name}
            checked={selectedLanguage?.name === language.name}
            onCheckedChange={() => languageHandler(language)}
          >
            <img
              src={`/images/flags/${language?.flag}.png`}
              alt=""
              className="w-3 h-3 me-2"
            />
            {language?.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageTranslator;
