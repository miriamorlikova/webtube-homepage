import CategoryPills from "./components/CategoryPills";
import PageHeader from "./layouts/PageHeader";
import { categories, videos } from "./data/home";
import { useState } from "react";
import VideoGridItem from "./components/VideoGridItem";
import Sidebar from "./layouts/Sidebar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
        <Sidebar />
        <div className="overflow-x-hidden  px-8 pb-4">
          <div className="sticky z-30 top-0  lg:top-0 bg-white pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos.map((video) => (
              <VideoGridItem key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
