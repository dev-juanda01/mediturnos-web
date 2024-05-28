import { createContext } from "react";
import { GlobalContextInterface } from "@/types";

const initialContext: GlobalContextInterface = {
    user: null,
    currentPage: "",
    handleCurrentPage(page) {
        return page;
    },
};

export const GlobalContext = createContext(initialContext);
