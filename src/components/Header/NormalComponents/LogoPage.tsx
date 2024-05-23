import { ThemeApp } from "@/utils/theme";

const LogoPage = () => {
    return (
        <>
            <img src={ ThemeApp.icons.logo.path } alt={ ThemeApp.icons.logo.alt } />
        </>
    );
};

export default LogoPage;
