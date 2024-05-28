import CurrentShift from "@/components/Shifts/NormalComponents/CurrentShift";
import ShiftQueue from "@/components/Shifts/NormalComponents/ShiftQueue";

const sectionShiftOneStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: "5rem"
}

const ShiftsView = () => {
    return (
        <section>
            <div style={sectionShiftOneStyle}>
                <CurrentShift />
                <ShiftQueue />
            </div>
        </section>
    );
};

export default ShiftsView;
