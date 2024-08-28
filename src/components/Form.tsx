import { Button } from "./Button";
import { BiSolidMicrophone } from "react-icons/bi";
import { GoArrowLeft, GoSearch } from "react-icons/go";

type PropsType = {
  showFullWidth: boolean;
  setShowFullWidth: (a: boolean) => void;
};
export default function Form({ showFullWidth, setShowFullWidth }: PropsType) {
  return (
    <form
      className={`gap-4 justify-center flex-grow ${
        showFullWidth ? "flex" : "hidden md:flex"
      }`}
    >
      {showFullWidth && (
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setShowFullWidth(false)}
        >
          <GoArrowLeft />
        </Button>
      )}
      <div className="flex flex-grow max-w-[600px]">
        <input
          type="search"
          placeholder="Search"
          className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary px-4 w-full text-base lg:text-lg focus:border-blue-500 outline-0"
        />

        <Button className="flex-shrink-0 rounded-r-full border border-secondary-border border-l-0">
          <GoSearch className="mx-2" />
        </Button>
      </div>
      <Button type="button" size="icon" className="flex-shrink-0">
        <BiSolidMicrophone />
      </Button>
    </form>
  );
}
