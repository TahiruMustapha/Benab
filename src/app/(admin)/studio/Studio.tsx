"use client";
import React from "react";
import {NextStudio} from "next-sanity/studio";
import sanityConfig from "../../../../sanity.config";
const Studio = () => {
  return (
    <NextStudio config={sanityConfig}/>
  )
}

export default Studio
