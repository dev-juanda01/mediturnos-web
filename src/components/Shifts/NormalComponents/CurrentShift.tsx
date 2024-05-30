import { GraphicUnique } from "@/components/Graphics/StyledComponents/GraphicUnique";
import { DateCurrent } from "@/components/WelcomeHead/StyledComponents/DateCurrent";
import { DateCurrentOption } from "@/components/WelcomeHead/StyledComponents/DateCurrentOption";
import { getActiveShift } from "@/services/ShiftService";
import { ShiftInterface } from "@/types";
import { ThemeApp } from "@/utils/theme";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const CurrentShift = () => {
    const [activeShift, setActiveShift] = useState<ShiftInterface>();

    useEffect(() => {
        (async () => {
            // get active shift
            const activeShiftResponse = await getActiveShift();

            if (activeShiftResponse.ok) {
                setActiveShift(activeShiftResponse.activeShift);
            }
        })();
    }, []);

    return (
        <GraphicUnique width="40%" height="15rem">
            <p>Turno Actual</p>
            <div>
                <span style={{ display: "flex", gap: ".5rem" }}>
                    <img
                        src="/icons/pharmacy.svg"
                        alt="Icono de farmacia"
                        style={{ maxWidth: "1.5rem" }}
                    />
                    <p
                        style={{ margin: "0.5rem" }}
                    >{`Farmacia ${activeShift?.drogueria.nombre}`}</p>
                </span>
                <span style={{ display: "flex", gap: ".5rem" }}>
                    <img
                        src="/icons/state.svg"
                        alt="Icono de estado"
                        style={{ maxWidth: "1.5rem" }}
                    />
                    <p style={{ margin: "0.5rem" }}>{activeShift?.estado}</p>
                </span>
                <span style={{ display: "flex", gap: ".5rem" }}>
                    <img
                        src="/icons/type.svg"
                        alt="Icono de estado"
                        style={{ maxWidth: "1.5rem" }}
                    />
                    <p style={{ margin: "0.5rem" }}>{activeShift?.tipo}</p>
                </span>
                <span style={{ display: "flex", gap: ".5rem" }}>
                    <img
                        src="/icons/user.svg"
                        alt="Icono de estado"
                        style={{ maxWidth: "1.5rem" }}
                    />
                    <p style={{ margin: ".5rem" }}>
                        {activeShift?.usuario.nombre}
                    </p>
                </span>
                <DateCurrent style={{ position: "relative", bottom: "4rem", left: "12rem", width: "12rem", fontSize: ".6rem" }}>
                    <DateCurrentOption>
                        <img
                            src={ThemeApp.icons.calendar.path}
                            alt={ThemeApp.icons.calendar.alt}
                        />
                        <p>{`${dayjs(activeShift?.fecha_asignacion).format(
                            "DD/MM/YYYY"
                        )}`}</p>
                    </DateCurrentOption>
                    <DateCurrentOption>
                        <span>{"-"}</span>
                    </DateCurrentOption>
                    <DateCurrentOption>
                        <img
                            src={ThemeApp.icons.calendar.path}
                            alt={ThemeApp.icons.calendar.alt}
                        />
                        <p>{`${dayjs(activeShift?.fecha_finalizacion).format(
                            "DD/MM/YYYY"
                        )}`}</p>
                    </DateCurrentOption>
                </DateCurrent>
            </div>
        </GraphicUnique>
    );
};

export default CurrentShift;
