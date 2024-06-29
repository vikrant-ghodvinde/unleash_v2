import { setTemplateType } from "@/libs/redux/reducers/templateReducer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/shadcn/components/ui/select";
import { useDispatch, useSelector } from "react-redux";

const TemplateType = () => {
  const dispatch = useDispatch();
  const { templateType } = useSelector((state) => state.template);
  return (
    <Select
      value={templateType}
      onValueChange={(type) =>
        dispatch(
          setTemplateType({
            templateType: type,
          })
        )
      }
    >
      <SelectTrigger className="text-xs w-full">
        <SelectValue placeholder="Template size" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          value="linedIn(1:1)"
          className="text-xs"
        >
          LinkedIn (1:1) - Recommended
        </SelectItem>
        <SelectItem value="linedIn(4:5)" className="text-xs border-b border-b-zinc-900">
          LinkedIn (4:5)
        </SelectItem>
        <SelectItem
          value="instagram(1:1)"
          className="text-xs"
        >
          Instagram (1:1) - Recommended
        </SelectItem>
        <SelectItem value="instagram(4:5)" className="text-xs border-b border-b-zinc-900">
          Instagram (4:5)
        </SelectItem>
        <SelectItem value="instagram(9:16)" className="text-xs">
          Instagram Stories (9:16)
        </SelectItem>
        <SelectItem value="tik-too(9:16)" className="text-xs">
          Tik Tok (9:16)
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TemplateType;
