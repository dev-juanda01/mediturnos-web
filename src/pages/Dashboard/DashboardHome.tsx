import { Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { OverviewGraphics } from "@/components/Graphics/StyledComponents/OverviewGraphics";
import { OverviewGraphicsContainer } from "@/components/Graphics/StyledComponents/OverviewGraphicsContainer";
import { GraphicUnique } from "@/components/Graphics/StyledComponents/GraphicUnique";
import { ContainerGraphic } from "@/components/Graphics/StyledComponents/ContainerGraphic";
import { SectionGraphic } from "@/components/Graphics/StyledComponents/SectionGraphic";
import { ShiftsHistorial } from "@/components/Shifts/StyledComponents/ShiftsHistorial";
import {
    ShiftItem,
    ShiftList,
} from "@/components/Shifts/StyledComponents/ShiftList";
import { ShiftInterface } from "@/types";

Chart.register(...registerables);

const DashboardHome = ({ historicalShifts }: { historicalShifts: Array<ShiftInterface> }) => {

    return (
        <ContainerGraphic>
            <SectionGraphic>
                <OverviewGraphics>
                    <h3>Descripcion</h3>
                    <OverviewGraphicsContainer>
                        <GraphicUnique width="15rem" height="12rem">
                            <Doughnut
                                data={{
                                    labels: [
                                        "Prioritarios",
                                        "Farmacia general",
                                        "Genericos",
                                        "Por demanda",
                                        "Urgencia",
                                        "Agendados",
                                    ],
                                    datasets: [
                                        {
                                            label: "# of Votes",
                                            data: [12, 19, 3, 5, 2, 3],
                                            borderWidth: 1,
                                        },
                                    ],
                                }}
                            />
                        </GraphicUnique>
                        <GraphicUnique width="15rem" height="12rem">
                            <Doughnut
                                data={{
                                    labels: [
                                        "Cancelados",
                                        "Completados",
                                        "Pendientes",
                                        "En espera",
                                        "En cola",
                                        "Eliminados",
                                    ],
                                    datasets: [
                                        {
                                            label: "# of Votes",
                                            data: [12, 19, 3, 5, 2, 3],
                                            borderWidth: 1,
                                        },
                                    ],
                                }}
                            />
                        </GraphicUnique>
                        <GraphicUnique width="15rem" height="12rem">
                            <Doughnut
                                data={{
                                    labels: [
                                        "Mensuales",
                                        "Anuales",
                                        "Diarios",
                                        "Semanales",
                                        "Por hora",
                                        "Por minuto",
                                    ],
                                    datasets: [
                                        {
                                            label: "# of Votes",
                                            data: [12, 19, 3, 5, 2, 3],
                                            borderWidth: 1,
                                        },
                                    ],
                                }}
                            />
                        </GraphicUnique>
                    </OverviewGraphicsContainer>
                </OverviewGraphics>
                <OverviewGraphics>
                    <h3>Metricas generales</h3>
                    <OverviewGraphicsContainer>
                        <GraphicUnique width="100%" height="20rem">
                            <Line
                                data={{
                                    labels: [
                                        "Cancelados",
                                        "Completados",
                                        "Pendientes",
                                        "En espera",
                                        "En cola",
                                        "Eliminados",
                                    ],
                                    datasets: [
                                        {
                                            label: "Turnos en gestion",
                                            data: [65, 59, 80, 81, 56, 55, 40],
                                            fill: false,
                                            borderColor: "rgb(75, 192, 192)",
                                            tension: 0.1,
                                        },
                                    ],
                                }}
                            />
                        </GraphicUnique>
                    </OverviewGraphicsContainer>
                </OverviewGraphics>
            </SectionGraphic>
            <SectionGraphic>
                <ShiftsHistorial>
                    <p>Historial de turnos</p>
                    <ShiftList>
                        {historicalShifts.map((shift: ShiftInterface) => (
                            <ShiftItem>{shift.usuario.nombre} - {shift.tipo} - {shift.estado}</ShiftItem>
                        ))}
                    </ShiftList>
                </ShiftsHistorial>
            </SectionGraphic>
        </ContainerGraphic>
    );
};

export default DashboardHome;
