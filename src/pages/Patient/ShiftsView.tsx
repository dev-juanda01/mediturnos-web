import { useState } from "react";
import { ButtonTheme } from "@/components/Base/StyledComponents/ButtonTheme";
import CurrentShift from "@/components/Shifts/NormalComponents/CurrentShift";
import ShiftQueue from "@/components/Shifts/NormalComponents/ShiftQueue";
import ModalCreateShift from "@/components/Shifts/NormalComponents/ModalCreateShift";

const sectionShiftOneStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: "5rem",
};

const ShiftsView = () => {
    const [modalCreateShift, setModalCreateShift] = useState(false);

    return (
        <>
            <ButtonTheme onClick={ () => setModalCreateShift(true)}>+ Crear turno</ButtonTheme>
            <section>
                <div style={sectionShiftOneStyle}>
                    <CurrentShift />
                    <ShiftQueue />
                </div>
            </section>
            {modalCreateShift && <ModalCreateShift handleClickClose={() => setModalCreateShift(false)} />}
        </>
    );
};

export default ShiftsView;
