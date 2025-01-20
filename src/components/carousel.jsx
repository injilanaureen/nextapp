import * as React from "react";

import { Card, CardContent } from "@src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@src/components/ui/carousel";

export function CarouselDemo() {
  return (
    <div className="w-screen h-[100vh] overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="p-1 h-full">
                <Card className="h-full">
                  <CardContent className="flex h-full items-center justify-center p-80">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
