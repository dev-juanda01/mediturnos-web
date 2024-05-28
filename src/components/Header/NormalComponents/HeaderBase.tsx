import { useContext } from "react";
import dayjs from "dayjs";
import LogoPage from "./LogoPage";
import { ProfileContainer } from "../StyledComponents/ProfileContainer";
import { PagesApp } from "@/utils/pages";
import { HeaderPage } from "../StyledComponents/HeaderPage";
import { MenuOption } from "../StyledComponents/MenuOption";
import { MenuOptions } from "../StyledComponents/MenuOptions";
import { ThemeApp } from "@/utils/theme";
import { WelcomeHead } from "@/components/WelcomeHead/StyledComponents/WelcomeHead";
import { DateCurrent } from "@/components/WelcomeHead/StyledComponents/DateCurrent";
import { DateCurrentOption } from "@/components/WelcomeHead/StyledComponents/DateCurrentOption";
import { GlobalContext } from "@/context/global/GlobalContext";

const HeaderBase = () => {
    const globalContext = useContext(GlobalContext);
    const todayDate = dayjs().format("DD/MM/YYYY");
    const tomorrowDate = dayjs().add(1, "day").format("DD/MM/YYYY");

    return (
        <>
            <HeaderPage>
                <LogoPage />
                <MenuOptions>
                    <MenuOption
                        current={ globalContext.currentPage === PagesApp.dashboard ? true : false}
                        onClick={() =>
                            globalContext.handleCurrentPage(PagesApp.dashboard)
                        }
                    >
                        {PagesApp.dashboard}
                    </MenuOption>
                    <MenuOption
                        current={ globalContext.currentPage === PagesApp.patiens ? true : false}
                        onClick={() =>
                            globalContext.handleCurrentPage(PagesApp.patiens)
                        }
                    >
                        {PagesApp.patiens}
                    </MenuOption>
                    <MenuOption
                        current={ globalContext.currentPage === PagesApp.report ? true : false}
                        onClick={() =>
                            globalContext.handleCurrentPage(PagesApp.report)
                        }
                    >
                        {PagesApp.report}
                    </MenuOption>
                    <MenuOption
                        current={ globalContext.currentPage === PagesApp.settings ? true : false}
                        onClick={() =>
                            globalContext.handleCurrentPage(PagesApp.settings)
                        }
                    >
                        {PagesApp.settings}
                    </MenuOption>
                </MenuOptions>
                <ProfileContainer>
                    <img
                        src={ThemeApp.icons.messageIcon.path}
                        alt={ThemeApp.icons.messageIcon.alt}
                    />
                    <img
                        src={ThemeApp.icons.notificationIcon.path}
                        alt={ThemeApp.icons.notificationIcon.alt}
                    />
                    <img
                        src={ThemeApp.icons.avatar.path}
                        alt={ThemeApp.icons.avatar.alt}
                    />
                </ProfileContainer>
            </HeaderPage>
            <WelcomeHead>
                <div>
                    <h2>Bienvenido Dr. Obregon</h2>
                    <p>Gestiona ahora los turnos diarios</p>
                </div>
                <DateCurrent>
                    <DateCurrentOption>
                        <img
                            src={ThemeApp.icons.calendar.path}
                            alt={ThemeApp.icons.calendar.alt}
                        />
                        <p>{todayDate}</p>
                    </DateCurrentOption>
                    <DateCurrentOption>
                        <span>{"-"}</span>
                    </DateCurrentOption>
                    <DateCurrentOption>
                        <img
                            src={ThemeApp.icons.calendar.path}
                            alt={ThemeApp.icons.calendar.alt}
                        />
                        <p>{tomorrowDate}</p>
                    </DateCurrentOption>
                </DateCurrent>
            </WelcomeHead>
        </>
    );
};

export default HeaderBase;
