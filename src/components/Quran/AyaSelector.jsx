import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AyaSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[280px] direction-reverse">
        <SelectValue placeholder="ســـورة الفـــاتـــحة" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="art">Argentina Time (ART)</SelectItem>
        <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
        <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
        <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
      </SelectContent>
    </Select>
  );
}
