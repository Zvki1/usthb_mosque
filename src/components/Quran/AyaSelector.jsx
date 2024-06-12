/* eslint-disable react/prop-types */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AyaSelector({ suwarList,setSuraUrl }) {
  const apiUrl="https://server7.mp3quran.net/shur/128/"
  return (
    <Select
      onValueChange={(value) => {
        // value.padStart(3,"0")
        console.log(apiUrl+value.toString().padStart(3, "0")+".mp3");
        setSuraUrl(apiUrl+value.toString().padStart(3, "0")+".mp3");
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
