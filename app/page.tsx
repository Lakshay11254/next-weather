"use client";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center max-w-3xl">
      <Card>
      <Text className="text-xl font-bold text-center mb-10">Weather AI</Text>
      <Subtitle className="text-xl text-center">
        Powered by Lakshay
      </Subtitle>
      <Divider className="my-10"/>
      
      <Card className=""> 
        {/* <CityPicker/> */}
      </Card>
      
      </Card>
    </div>
  );
}
