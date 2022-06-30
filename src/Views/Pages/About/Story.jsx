import React from "react";
import StoryImage from "../../../Assets/Images/About/about_03.jpg";

const Story = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="py-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <img src={StoryImage} alt="Story Images" />
          </div>
          <div>
            <h6 className="text-orange-500 text-lg font-medium mb-4 tracking-widest">
              Our Story
            </h6>
            <h2 className="text-5xl font-medium">A Humble Beginning</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
