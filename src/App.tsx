import { useContext } from "react";
import HeaderBase from "./components/Header/NormalComponents/HeaderBase";
import DashboardHome from "@/pages/Dashboard/DashboardHome";
import ShiftsView from "./pages/Patient/ShiftsView";
import ReportView from "./pages/Report/ReportView";
import { PagesApp } from "./utils/pages";
import { ContainerPage } from "./components/Base/StyledComponents/ContainerPage";
import { GlobalContext } from "./context/global/GlobalContext";

function App() {
    const globalContext = useContext(GlobalContext);

    return (
        <>
            <ContainerPage>
                <HeaderBase />
                {globalContext.currentPage === PagesApp.dashboard && (
                    <DashboardHome />
                )}
                {globalContext.currentPage === PagesApp.patiens && (
                    <ShiftsView />
                )}
                {globalContext.currentPage === PagesApp.report && (
                    <ReportView />
                )}
            </ContainerPage>
            {/* {globalContext.user ? (
            ) : (
                <LoginView />
            )} */}
        </>
    );
}

export default App;
