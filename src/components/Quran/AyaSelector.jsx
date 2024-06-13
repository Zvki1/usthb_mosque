/* eslint-disable react/prop-types */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AyaSelector({ suwarList, setSuraUrl, setSuraName }) {
  console.log("suwarlist from ayaselector",suwarList);
  const apiUrl = "https://server7.mp3quran.net/shur/128/";
  return (
    <Select
    
      onValueChange={(value) => {
        const selectedSuwar = suwarList.find((suwar) => suwar.id === value);
        // value.padStart(3,"0")
        console.log(apiUrl + value.toString().padStart(3, "0") + ".mp3");
        setSuraUrl(apiUrl + value.toString().padStart(3, "0") + ".mp3");
        setSuraName("ســـورة"+selectedSuwar.name);
      }}
    >
      <SelectTrigger className="w-[280px] direction-reverse text-[#35506F] font-Tajawal text-xl font-[500]">
        <SelectValue
          placeholder="ســـورة الفـــاتـــحة"
          className="text-[#35506F] font-Tajawal text-xl"
        />
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
