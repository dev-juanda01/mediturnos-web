import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { PagesApp } from "@/utils/pages";

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState("");
    const [currentPage, setCurrentPage] = useState(PagesApp.dashboard);

    const handleCurrentPage = (page: string) => setCurrentPage(page);
    const handleUser = (user: string) => setUser(user);

    const state = {
        user,
        currentPage,
        handleCurrentPage,
        handleUser
    };

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    );
};
