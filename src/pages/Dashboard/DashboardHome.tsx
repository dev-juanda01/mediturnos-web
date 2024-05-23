import { ContainerPage } from "@/components/Base/StyledComponents/ContainerPage";
import LogoPage from "@/components/Header/NormalComponents/LogoPage";
import { HeaderPage } from "@/components/Header/StyledComponents/HeaderPage";
import { MenuOption } from "@/components/Header/StyledComponents/MenuOption";
import { MenuOptions } from "@/components/Header/StyledComponents/MenuOptions";
import { ProfileContainer } from "@/components/Header/StyledComponents/ProfileContainer";
import { PagesApp } from "@/utils/pages";

const DashboardHome = () => {
    return (
        <ContainerPage>
            <HeaderPage>
                <LogoPage />
                <MenuOptions>
                    <MenuOption current={true}>{ PagesApp.dashboard }</MenuOption>
                    <MenuOption current={false}>{ PagesApp.patiens }</MenuOption>
                    <MenuOption current={false}>{ PagesApp.report }</MenuOption>
                    <MenuOption current={false}>{ PagesApp.settings }</MenuOption>
                </MenuOptions>
                <ProfileContainer>
                    
                </ProfileContainer>
            </HeaderPage>
        </ContainerPage>
    );
};

export default DashboardHome;
