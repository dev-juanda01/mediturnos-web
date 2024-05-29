import { HttpManager } from "./HttpManager";

export const getHistoricalShifts = async () => {
    const endpoint = "api/turnos";

    try {
        const response = await HttpManager.get(endpoint);

        return {
            ok: true,
            shifts: response.data
        }
    } catch (error) {
        console.log(error);
        
    }
}
