/* eslint-disable react/prop-types */
import { AcitivityComponent } from "./acitivity-component";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ActivitiesCarousel({ data }) {
  return (
    <Carousel
      opts={{
        align: "start",

        direction: "rtl",
      }}
      className="  max-w-xs md:max-w-full w-11/12 pt-10 "
    >
      <CarouselContent className="p-2">
        {data?.map((activity) => (
          <CarouselItem key={activity.id} className=" md:w-full md:basis-1/3">
            <div className="p-1 h-full">
              <Card className="border-0 h-full">
                <CardContent className="flex  bg-red-500 rounded-lg h-full p-0 items-center ">
                  <AcitivityComponent data={activity} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
