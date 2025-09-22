import AppBarChart from "@/components/AppBarChart";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    < div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-5">
      <div className="bg-gray-900 p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarChart></AppBarChart></div>
      <div className="bg-gray-900 p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">Test</div>
      <div className="bg-gray-900 p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">Test</div>
      <div className="bg-gray-900 p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">Test</div>
      <div className="bg-gray-900 p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">Test</div>
      <div className="bg-gray-900 p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">Test</div>
     
     
      
    </div>
  );
}
