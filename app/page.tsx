"use client";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "@/components/CityPicker";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center max-w-3xl">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center  py-3">Powered by Lakshay</Subtitle>
        <Divider className="my-10" />

        <Card className=" bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
