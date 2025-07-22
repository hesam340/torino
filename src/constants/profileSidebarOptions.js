import { HiUser } from "react-icons/hi2";
import { RiSunFoggyFill } from "react-icons/ri";
import { BsCreditCardFill } from "react-icons/bs";

const profileSidebarOptions = [
  { id: 1, icon: <HiUser className="size-4 lg:size-5" />, title: "پروفایل", href: "/profile" },
  {
    id: 2,
    icon: <RiSunFoggyFill className="size-4 lg:size-5" />,
    title: "تورهای من",
    href: "/profile/my-tours",
  },
  {
    id: 3,
    icon: <BsCreditCardFill className="size-4 lg:size-5" />,
    title: "تراکنش ها",
    href: "/profile/transactions",
  },
];

export default profileSidebarOptions;
