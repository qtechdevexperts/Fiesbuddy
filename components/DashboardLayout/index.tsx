import { PropsWithChildren, useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import NotificationList from "./NotificationList/NotificationList";
import LogOutModal from "./LogOutModal/LogOutModal";

export default function DashboardLayout({ children }: PropsWithChildren) {


  const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1200);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

   

  return (
    <>
   
      <section id="dashboard_layout" className={`${isTablet ? 'sidebar-collapse' : ''}`}>
        <Sidebar isShow={true} />
        <main id="dashboard_main">
          <Header userName={"Travis"} hasNotifications={true} />
          <section className="dash_content">{children}</section>
        </main>
        <NotificationList/>
        <LogOutModal/>
      </section>
    </>
  );
}
