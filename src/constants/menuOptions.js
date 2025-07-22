import { RiHome5Fill } from "react-icons/ri";
import { TbPlaneTilt } from "react-icons/tb";
import { CiVolumeHigh } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const menuOptions = [
  {
    id: 1,
    href: "/",
    title: "صفحه اصلی",
    icon: <RiHome5Fill color="#282828" />,
    iconSelected: <RiHome5Fill color="#28A745" />,
  },
  {
    id: 2,
    href: "/#",
    title: "خدمات گردشگری",
    icon: <TbPlaneTilt color="#282828" />,
    iconSelected: <TbPlaneTilt color="#28A745" />,
  },
  {
    id: 3,
    href: "/#",
    title: "درباره ما",
    icon: <CiVolumeHigh color="#282828" strokeWidth="1px" />,
    iconSelected: <CiVolumeHigh color="#28A745" />,
  },
  {
    id: 4,
    href: "/#",
    title: "تماس با ما",
    icon: <IoCallOutline color="#282828" strokeWidth="1px" />,
    iconSelected: <IoCallOutline color="#28A745" />,
  },
];

export default menuOptions;
