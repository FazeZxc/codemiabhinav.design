import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import typerr from "/src/assets/typerr.co.png";
import { TyperrIcon } from "./icons";
export const Projects = () => {
  return (
    <div>
      <div className="text-white heading w-screen">
        <p className="px-20">Projects</p>
      </div>
      <VerticalTimeline lineColor="transparent">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "black",
            color: "#fff",
            borderRadius: "1rem/* 16px */",
          }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="typerr.co"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            borderColor: "",
          }}
          icon={<TyperrIcon />}
          dateClassName="hover:cursor-pointer"
        >
          <div className="w-full h-full">
            <img
              src={typerr}
              className="rounded-2xl hover:scale-110 transform transition duration-500"
            ></img>
            <div className="flex justify-between gap-2 text-white text-lg px-4 pt-6 font-semibold">
              <a
                className="bg-contact  hover:text-black border-2 p-2 rounded-lg"
                href="https://typerr.co"
                target="_blank"
              >
                VIEW LIVE
              </a>
              <a
                className=" hover:text-contact border-2 p-2 rounded-lg"
                href="https://github.com/fazeZxc/typerr"
                target="_blank"
              >
                VIEW SOURCE CODE
              </a>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
