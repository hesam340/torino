import ProfileSidebar from "@/components/layout/ProfileSidebar";
import ProfileAuthGuard from "@/components/modules/ProfileAuthGuard";

export const metadata = {
  title: "پروژه تورینو | پنل کاربری",
  description: "سایت خرید تورهای گردشگری",
};

function ProfileLayout({ children }) {
  return (
    <>
      <ProfileAuthGuard />
      <ProfileSidebar>{children}</ProfileSidebar>
    </>
  );
}

export default ProfileLayout;
