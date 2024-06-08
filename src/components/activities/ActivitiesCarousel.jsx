

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel"

export function ActivitiesCarousel() {
  return (
    <Carousel   opts={{
        align: "start",
        
        direction:"rtl",
      }}
     className="w-full max-w-xs">
      <CarouselContent>
       
          <CarouselItem >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">1</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">2</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">3</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
     
      </CarouselContent>

    </Carousel>
  )
}
