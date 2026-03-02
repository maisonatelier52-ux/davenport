import React from "react";
import DiscoveryMainCard from "@/components/DiscoveryMainCard";
import DiscoveryMiddleItem from "@/components/DiscoveryMiddleItem";
import DiscoveryRightItem from "@/components/DiscoveryRightItem";

const DiscoverySection = ({ discoveryMain, discoveryMiddle, discoveryRight }) => {
  return (
    <section aria-labelledby="discovery-heading" className="mt-7 mb-20">
      <div className="border-b-2 border-black mb-8 pb-1">
        <h2 id="discovery-heading" className="text-[28px] font-bold text-black leading-tight">
          Discovery
        </h2>
        <p className="text-gray-400 text-[14px] font-medium uppercase tracking-tight">
          Never miss what people read
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        <div className="md:col-span-2 lg:col-span-1">
          <DiscoveryMainCard item={discoveryMain} />
        </div>

        <div className="flex flex-col lg:border-r border-gray-200 lg:pr-8">
          {discoveryMiddle.map((item) => (
            <DiscoveryMiddleItem key={item.id} item={item} />
          ))}
        </div>

        <div className="flex flex-col h-full pt-4 lg:pt-0">
          {discoveryRight.map((item) => (
            <DiscoveryRightItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
