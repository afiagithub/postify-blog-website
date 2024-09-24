export const dynamic = "force-dynamic"
import Blogs from "@/components/Blogs";
import Sponsored from "@/components/Sponsored";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto flex flex-row justify-between">
      <div className="w-[30%]">
        <Sponsored />
      </div>
      <div className="w-[70%]">
        <Blogs />
      </div>
    </div>
  );
}
