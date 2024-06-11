/* eslint-disable react/prop-types */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AyaSelector({ suwarList }) {
  return (
    <Select
      onValueChange={(value) => {
        console.log(value);
      }}
    >
      <SelectTrigger className="w-[280px] direction-reverse">
        <SelectValue placeholder="ســـورة الفـــاتـــحة" />
      </SelectTrigger>
      <SelectContent>
        {suwarList.map((suwar) => (
          <SelectItem key={suwar.id} value={suwar.id}>
            {suwar.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
