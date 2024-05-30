import { useContext, useEffect, useState } from "react";
import HeaderBase from "./components/Header/NormalComponents/HeaderBase";
import DashboardHome from "@/pages/Dashboard/DashboardHome";
import ShiftsView from "./pages/Patient/ShiftsView";
import ReportView from "./pages/Report/ReportView";
import { PagesApp } from "./utils/pages";
import { ContainerPage } from "./components/Base/StyledComponents/ContainerPage";
import { GlobalContext } from "./context/global/GlobalContext";
import { getHistoricalShifts } from "./services/ShiftService";

function App() {
    const globalContext = useContext(GlobalContext);
    const [historicalShifts, setHistoricalShifts] = useState([]);

    useEffect(() => {
        (async () => {
            const shiftsResponse = await getHistoricalShifts();

            if (shiftsResponse.ok) {
                setHistoricalShifts(shiftsResponse.shifts);
            }
        })();
    }, []);

    return (
        <>
            <ContainerPage>
                <HeaderBase />
                {globalContext.currentPage === PagesApp.dashboard && (
                    <DashboardHome historicalShifts={historicalShifts} />
                )}
                {globalContext.currentPage === PagesApp.patiens && (
                    <ShiftsView />
                )}
                {globalContext.currentPage === PagesApp.report && (
                    <ReportView historicalShifts={historicalShifts} />
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
