import { AcitivityComponent } from "./acitivity-component";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function ActivitiesCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",

        direction: "rtl",
      }}
      className="w-full max-w-xs pt-10"
    >
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card className="border-0">
              <CardContent className="flex aspect-square p-0 items-center justify-center ">
                <AcitivityComponent />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card className="border-0">
              <CardContent className="flex aspect-square  p-0 items-center justify-center ">
              <AcitivityComponent />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card className="border-0">
              <CardContent className="flex aspect-square  p-0 items-center justify-center ">
              <AcitivityComponent />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
