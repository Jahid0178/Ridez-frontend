import React from "react";
import GetToKnowUs from "./GetToKnowUs";
import LocationMap from "./LocationMap";
import SendMessage from "./SendMessage";

export const Contact = () => {
  return (
    <div>
      <div>
        <LocationMap />
      </div>
      <div>
        <GetToKnowUs />
      </div>
      <div>
        <SendMessage />
      </div>
    </div>
  );
};
