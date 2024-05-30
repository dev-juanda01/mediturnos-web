import { HttpManager } from "./HttpManager";

export const getHistoricalShifts = async () => {
    const endpoint = "api/turnos";

    try {
        const response = await HttpManager.get(endpoint);

        return {
            ok: true,
            shifts: response.data,
        };
    } catch (error) {
        console.log(error);

        return {
            ok: false,
        };
    }
};

export const getActiveShift = async () => {
    const endpoint = "api/turnos/activo/1";

    try {
        const response = await HttpManager.get(endpoint);
        return {
            ok: true,
            activeShift: response.data,
        };
    } catch (error) {
        console.log(error);

        return {
            ok: false,
        };
    }
};
