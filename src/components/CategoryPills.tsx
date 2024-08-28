import { Button } from "./Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useScroll } from "../hooks/useScroll";

type CategoryPillsProps = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export default function CategoryPills({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryPillsProps) {
  const {
    scrollLeft,
    scrollRight,
    translate,
    containerRef,
    isLeftVisible,
    isRightVisible,
  } = useScroll(categories);

  return (
    <div ref={containerRef} className="overflow-x-hidden relative  ">
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((item) => (
          <Button
            variant={selectedCategory === item ? "dark" : "default"}
            onClick={() => setSelectedCategory(item)}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
            key={item}
          >
            {item}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full w-auto p-1.5 aspect-square"
            onClick={scrollLeft}
          >
            <IoIosArrowBack />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-full w-auto p-1.5 aspect-square"
            onClick={scrollRight}
          >
            <IoIosArrowForward />
          </Button>
        </div>
      )}
    </div>
  );
}
